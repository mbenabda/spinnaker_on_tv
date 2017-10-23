import { connect } from 'react-redux'
import Page from './page'
import actions from '../../redux/modules/spinnaker/actions'
import _ from 'lodash'

const { fetchProjects } = actions

export default connect(
  (state) => ({
    projects: _.values(state.spinnaker.projectsById)
  }),
  ({
    fetchProjects
  })
)(Page)
