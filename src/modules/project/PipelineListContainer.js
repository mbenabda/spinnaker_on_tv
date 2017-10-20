import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from './pipelineList'
import actions from '../../redux/modules/spinnaker/actions'

export default connect(
    (state, ownProps) => ({
        pipelines: state.spinnaker.pipelinesByApplicationName[ownProps.application]
    }),
    (dispatch) => ({
        fetchApplicationPipelines: (id) => dispatch(actions.fetchApplicationPipelines(id)),
    })
)(List)
