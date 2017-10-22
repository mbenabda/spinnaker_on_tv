import React, { Component } from 'react'
import PipelineExecution from '../pipelineExecution'

class Pipeline extends Component {
  componentWillMount() {
    this.props.fetchPipelineExecutions(this.props.pipeline.id)
  }

  render() {
    return (
      <div style={styles.container}>
          <header style={styles.header}>
              <h3 style={styles.name}>{this.props.pipeline.name}</h3>
          </header>

          <section style={styles.executions}>
              {
                this.props.executions.map(execution => (
                  <PipelineExecution execution={execution} key={execution.id}/>
                ))
              }
          </section>
      </div>
    )
  }
}

export default Pipeline

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #EFEFEF',
  },

  header: {
    backgroundColor: '#D7E8ED',
    padding: '0 .5rem',
  },

  name: {
    fontSize: '1rem',
    fontWeight: 'normal',
  },

  executions: {
    padding: '.5rem',
  },
}

