import React, {Component} from 'react'
import Application from './application'


class Project extends Component {

  componentWillMount() {
    this.props.fetchProjectApplications(this.props.project.id) 
  }
//             <Application {...application} key={application.id} />

  render() {
    return (
      <div style={styles.applications}>
        {this.props.applications.map(application => (
          <div style={styles.application} key={application.name}>
          {application.name}
          </div>
        ))}
      </div>
    )
  }
}

const styles = {
  applications: {
    display: 'flex',
    flexDirection: 'column',
  },
  application: {
    margin: '0 0 1rem 0',
  },
}

export default Project