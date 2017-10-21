import { connect } from 'react-redux'
import Application from './application'
import actions from '../../../redux/modules/spinnaker/actions'

const { fetchApplication, fetchApplicationPipelineConfigs } = actions

export default connect(
    (state, ownProps) => ({
        application: state.spinnaker.applicationsByName[ownProps.id],
        pipelineConfigs: state.spinnaker.pipelineConfigs[ownProps.id]
    }),
    ({
        fetchApplication,
        fetchApplicationPipelineConfigs,
    })
)(Application)
