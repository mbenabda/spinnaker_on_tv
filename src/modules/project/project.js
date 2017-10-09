import React from 'react'
import Application from './application'

export default (props) => (
  <div style={styles.applications}>
    {props.applications.map(application => (
      <div style={styles.application}>
        <Application {...application} key={application.id} />
      </div>
    ))}
  </div>
)

const styles = {
  applications: {
    display: 'flex',
    flexDirection: 'column',
  },
  application: {
    margin: '0 0 1rem 0',
  },
}