import React from 'react'
import Pipeline from './pipeline'

export default (props) => (
  <section style={styles.pipelines}>
  {
    props.pipelineConfigs && props.pipelineConfigs.map(config => (
      <div style={styles.pipeline} key={config.id}>
        <Pipeline pipeline={config} />
      </div>
    ))
  }
  </section>
)

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