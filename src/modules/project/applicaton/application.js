import React, { Component } from 'react'
import PipelineConfigs from '../pipelineConfigsList'

class Application extends Component {
  componentWillMount() {
    this.props.fetchApplication(this.props.id)
    this.props.fetchApplicationPipelineConfigs(this.props.id)
  }

  render() {
    return !this.props.application 
    ? null
    : (
      <div style={styles.container}>
        <header style={styles.header}>
            <h2 style={styles.name}>{this.props.application.name}</h2>
            {/* <ApplicationInstances instances={props.liveInstances}/> */}
        </header>

        <PipelineConfigs pipelineConfigs={this.props.pipelineConfigs || []}/>
      </div>
    )
  }
}

export default Application

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #EFEFEF',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    backgroundColor: '#3A5469',
    color: 'white',
  },

  name: {
    fontSize: '1rem',
    fontWeight: 'normal',
  },
}