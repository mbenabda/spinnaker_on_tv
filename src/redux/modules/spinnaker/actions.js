import { createAction } from 'redux-actions'
//import _ from 'lodash'
import withQuery from 'with-query'

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
        
        const appNames = getState().spinnaker.projectsById[id].config.applications
        dispatch(fetchApplications(appNames))
    }
}

const fetchApplications = (appNames) => {
    return async (dispatch) => {
        dispatch(createAction("FETCH_APPLICATIONS_REQUEST")(appNames))
        try {
            if(appNames && appNames.length > 0) {
                await Promise.all(appNames.map(name => dispatch(fetchApplication(name))))
            } else {
                const response = await fetch("http://localhost:8084/applications")
                const apps = await response.json()
                apps.map(app => dispatch(createAction("FETCH_APPLICATION_SUCCESS")(app)))
            }
            dispatch(createAction("FETCH_APPLICATIONS_SUCCESS")())
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

const fetchProject = (id) => {
    return async (dispatch, getState) => {
        dispatch(createAction("FETCH_PROJECT_REQUEST")(id))
        const cached = getState().spinnaker.projectsById[id]
        if(cached) {
            dispatch(createAction("FETCH_PROJECT_SUCCESS")(cached))
        } else {
            try {
                const response = await fetch("http://localhost:8084/projects/" + id)
                const project = await response.json()
                dispatch(createAction("FETCH_PROJECT_SUCCESS")(project))
            } catch(error) {
                dispatch(createAction("FETCH_PROJECT_FAILURE")(error))
            }
        }
    }
}

const fetchApplicationPipelines = (application, filters) => {
    return async (dispatch) => {
        const {limit, statuses} = filters || {}
        dispatch(createAction("FETCH_APPLICATION_PIPELINES_REQUEST")({
            application,
            limit,
            statuses
        }))


        try {
            const response = await fetch(withQuery("http://localhost:8084/applications/" + application + '/pipelines', {
                limit,
                statuses: statuses ? statuses.join(',') : undefined
            }))
            const pipelines = await response.json()
            dispatch(createAction("FETCH_APPLICATION_PIPELINES_SUCCESS")({
                application,
                pipelines
            }))
        } catch(error) {
            dispatch(createAction("FETCH_APPLICATION_PIPELINES_FAILURE")(error))
        }

    }
}
const fetchApplicationPipelineConfigs = (application) => {
    return async (dispatch) => {
        dispatch(createAction("FETCH_APPLICATION_PIPELINE_CONFIGS_REQUEST"))
        try {
            const response = await fetch("http://localhost:8084/applications/" + application + '/pipelineConfigs')
            const pipelineConfigs = await response.json()
            dispatch(createAction("FETCH_APPLICATION_PIPELINE_CONFIGS_SUCCESS")({application, pipelineConfigs}))            
        } catch(error) {
            dispatch(createAction("FETCH_APPLICATION_PIPELINE_CONFIGS_FAILURE")({application, error}))
        }
    }
}

export default {
    fetchProjects,
    fetchProject,
    fetchProjectApplications,
    fetchApplications,
    fetchApplication,
    fetchApplicationPipelines,
    fetchApplicationPipelineConfigs
}