import React, { Component } from 'react'
import { connect } from 'react-redux'
import Page from './page'
import actions from '../../redux/modules/spinnaker/actions'

export default connect(
  (state) => ({
    projects: state.spinnaker.projects
  }),
  (dispatch) => ({
    fetchProjects: () => dispatch(actions.fetchProjects())
  })
)(Page)
