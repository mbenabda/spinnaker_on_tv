import React, { Component } from 'react'
import { connect } from 'react-redux'
import Project from './project'
import actions from '../../redux/modules/spinnaker/actions'

export default connect(
  (state) => ({
    applications: Object.values(state.spinnaker.applicationsByName)
  }),
  (dispatch) => ({
    fetchProjectApplications: (id) => dispatch(actions.fetchProjectApplications(id))
  })
)(Project)
