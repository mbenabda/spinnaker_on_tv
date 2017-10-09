import React, { Component } from 'react'
import { connect } from 'react-redux'
import Application from './application'
import actions from '../../redux/modules/spinnaker/actions'

export default connect(
    (state, ownProps) => ({
        application: state.spinnaker.applicationsByName[ownProps.id],
        pipelines: state.spinnaker.pipelinesByApplicationName[ownProps.id]
    }),
    (dispatch) => ({
        fetchApplication: (id) => dispatch(actions.fetchApplication(id)),
        fetchApplicationPipelines: (id) => dispatch(actions.fetchApplicationPipelines(id)),
    })
)(Application)
