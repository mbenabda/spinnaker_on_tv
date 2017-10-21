import typeToReducer from 'type-to-reducer'
import _ from 'lodash'

const initialState = {
    projectsById: {},
    applicationsByName: {},
    pipelineConfigs: {},
    pipelinesByApplicationName:{},
}

export default typeToReducer({
    FETCH_PROJECTS_SUCCESS: (state, {payload: projects}) => { 
        return {
            ...state,
            projectsById: Object.assign({}, state.projectsById, _.keyBy(projects, p => p.id))
        }
    },

    FETCH_PROJECT_SUCCESS: (state, {payload: project}) => ({ 
        ...state,
        projectsById: {
            ...state.projectsById,
            [project.id]: project
        }
    }),

    FETCH_APPLICATION_SUCCESS:  (state, {payload: application}) => ({ 
        ...state,
        applicationsByName: {
            ...state.applicationsByName,
            [application.name]: application
        }
    }),

    FETCH_APPLICATIONS_SUCCESS: (state, {payload: apps}) => { 
        return {
            ...state,
            applicationsByName: Object.assign({}, state.applicationsByName, _.keyBy(apps, p => p.name))
        }
    },

    FETCH_APPLICATION_PIPELINES_SUCCESS: (state, {payload: {application, pipelines}}) => { 
        return {
            ...state,
            pipelinesByApplicationName: {
                ...state.pipelinesByApplicationName,
                [application]: (state.pipelinesByApplicationName[application] || []).concat(pipelines)
            }
        }
    },
    FETCH_APPLICATION_PIPELINE_CONFIGS: {
        REQUEST: (state, action) => ({...state}),
        SUCCESS: (state, { payload: { application, pipelineConfigs } }) => ({
            ...state,
            pipelineConfigs: {
                ...state.pipelineConfigs,
                [application]: (state.pipelineConfigs[application] || []).concat(pipelineConfigs)
            }

        }),
        FAILURE: (state, action) => ({...state}),
    }
}, initialState)