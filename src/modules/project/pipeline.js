import React from 'react'
import PipelineExecution from './pipelineExecution'

export default (props) => (
    <div style={styles.container}>
        <header style={styles.header}>
            <h3 style={styles.name}>{props.pipeline.name}</h3>
        </header>

        <section style={styles.executions}>
          <pre>
            {JSON.stringify(props, null, 2)}
          </pre>
            {/*  props.executions.map(execution => <PipelineExecution {...execution} key={execution.id}/>) */}
        </section>
    </div>
)


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