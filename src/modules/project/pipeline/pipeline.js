import React, { Component } from 'react'
import PipelineExecution from '../pipelineExecution'

class Pipeline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalId: undefined
    }
  }

  componentWillMount() {
    this.props.fetchPipelineExecutions(this.props.pipeline.id)

    const intervalId = setInterval(
      () => {
        this.props.fetchPipelineExecutions(this.props.pipeline.id)
      },
      2000
    )
    
    this.setState({ intervalId })
  }

  componentWillUnount() {
    clearInterval(this.state.intervalId)
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

