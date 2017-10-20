import React, { Component } from 'react'
import Pipeline from './pipeline'
import ApplicationInstances from './applicationInstances'

class List extends Component {
  componentWillMount() {
    this.props.fetchApplicationPipelines(this.props.application)
  }

  render() {
    return (
      <section style={styles.pipelines}>
      {
        this.props.pipelines && this.props.pipelines.map(pipeline => (
          <div style={styles.pipeline} key={pipeline.id}>
            <Pipeline {...pipeline} />
          </div>
        ))
      }
      </section>
    )
  }
}

export default List

const styles = {
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