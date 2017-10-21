import { connect } from 'react-redux'
import Page from './page'
import actions from '../../redux/modules/spinnaker/actions'

const { fetchProjects } = actions

export default connect(
  (state) => ({
    projects: Object.values(state.spinnaker.projectsById)
  }),
  ({
    fetchProjects
  })
)(Page)
