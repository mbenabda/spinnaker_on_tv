import React from 'react'
import Pipeline from './pipeline'
import ApplicationInstances from './applicationInstances'

export default (props) => (
  <div style={styles.container}>
    <header style={styles.header}>
        <h2 style={styles.name}>{props.name}</h2>
        <ApplicationInstances instances={props.liveInstances}/>
    </header>

    <section style={styles.pipelines}>
        {props.pipelines.map(pipeline => (
          <div style={styles.pipeline}>
            <Pipeline {...pipeline} key={pipeline.id} />
          </div>
        ))}
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