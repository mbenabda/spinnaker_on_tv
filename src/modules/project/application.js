import React, { Component } from 'react'
import Pipeline from './pipeline'
import ApplicationInstances from './applicationInstances'

class Application extends Component {
  componentWillMount() {
    this.props.fetchApplication(this.props.id)
    this.props.fetchApplicationPipelines(this.props.id)
  }

  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
            <h2 style={styles.name}>{this.props.application && this.props.application.name}</h2>
            {/* <ApplicationInstances instances={props.liveInstances}/> */}
        </header>

        <section style={styles.pipelines}>
          {this.props.pipelines && this.props.pipelines.map(pipeline => (
            <div style={styles.pipeline}>
              <Pipeline {...pipeline} key={pipeline.id} />
            </div>
          ))}
        </section>
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

  pipelines: {
    padding: '0 1rem',
  },

  pipeline: {
    margin: '0 0 .5rem 0',
  },
}