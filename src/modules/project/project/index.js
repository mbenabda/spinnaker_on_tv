import { connect } from 'react-redux'
import Project from './project'
import actions from '../../../redux/modules/spinnaker/actions'

const { fetchProject } = actions

export default connect(
    (state, ownProps) => ({
        project: state.spinnaker.projectsById[ownProps.id] || {}
    }),
    ({
        fetchProject
    })
)(Project)
