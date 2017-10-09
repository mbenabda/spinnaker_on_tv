import { createAction } from 'redux-actions'
import _ from 'lodash'

const fetchProjects = () => {
    return async (dispatch) => {
        dispatch(createAction("FETCH_PROJECTS_REQUEST")())

        try {
            const response = await fetch("http://localhost:8084/projects")
            const projects = await response.json()

            dispatch(createAction("FETCH_PROJECTS_SUCCESS")(projects))
        } catch(error) {
            dispatch(createAction("FETCH_PROJECTS_FAILURE")(error))
        }
    }
}

const fetchProjectApplications = (id) => {
    return (dispatch, getState) => {
        dispatch(createAction("FETCH_PROJECT_APPLICATIONS")(id))
        
        const appNames = getState().spinnaker.projects.find(project => project.id === id).config.applications
        dispatch(fetchApplications(appNames))
    }
}

const fetchApplications = (appNames) => {
    return async (dispatch) => {
        dispatch(createAction("FETCH_APPLICATIONS_REQUEST")(appNames))
        try {
            const apps = await Promise.all(appNames.map(name => dispatch(fetchApplication(name))))
            dispatch(createAction("FETCH_APPLICATIONS_SUCCESS")(apps))
        } catch(error) {
            dispatch(createAction("FETCH_APPLICATIONS_FAILURE")(error))
        }
    }
}

const fetchApplication = (name) => {
    return async (dispatch) => {
        dispatch(createAction("FETCH_APPLICATION_REQUEST")(name))

        try {
            const response = await fetch("http://localhost:8084/applications/" + name)
            const app = await response.json()

            dispatch(createAction("FETCH_APPLICATION_SUCCESS")(app))
        } catch(error) {
            dispatch(createAction("FETCH_APPLICATION_FAILURE")(error))
        }
    }
}

export default {
    fetchProjects,
    fetchProjectApplications,
    fetchApplications,
    fetchApplication
}