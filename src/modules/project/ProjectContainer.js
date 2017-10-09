import React, { Component } from 'react'
import { connect } from 'react-redux'
import Project from './project'
import actions from '../../redux/modules/spinnaker/actions'

export default connect(
    (state, ownProps) => ({
        project: state.spinnaker.projectsById[ownProps.id] || {}
    }),
    (dispatch) => ({
        fetchProject: (id) => dispatch(actions.fetchProject(id))
    })
)(Project)
