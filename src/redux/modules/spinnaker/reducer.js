import typeToReducer from 'type-to-reducer'
//import _ from 'lodash'

const initialState = {
    projects: [],
    applicationsByName: {},
}

export default typeToReducer({
    FETCH_PROJECTS_SUCCESS: (state, {payload: projects}) => ({ 
        ...state,
        projects
    }),

    FETCH_APPLICATION_SUCCESS:  (state, {payload: application}) => ({ 
        ...state,
        applicationsByName: {
            ...state.applicationsByName,
            [application.name]: application
        }
    }),

}, initialState)