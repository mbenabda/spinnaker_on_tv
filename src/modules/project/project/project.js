import React, {Component} from 'react'
import Application from '../applicaton/'

class Project extends Component {
  componentWillMount() {
    this.props.fetchProject(this.props.id)
  }

  render() {
    return (
      <div style={styles.applications}>
        {this.props.project && this.props.project.config && this.props.project.config.applications && this.props.project.config.applications.map(application => (
          <div style={styles.application} key={application}>
            <Application id={application} key={application} />
          </div>
        ))}
      </div>
    )
  }
}

export default Project

const styles = {
  applications: {
    display: 'flex',
    flexDirection: 'column',
  },
  application: {
    margin: '0 0 1rem 0',
  },
}

