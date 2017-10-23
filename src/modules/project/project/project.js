import React, {Component} from 'react'
import Application from '../applicaton/'
import _ from 'lodash'

class Project extends Component {
  componentWillMount() {
    this.props.fetchProject(this.props.id)
  }

  render() {
    const applications = (this.props.project && this.props.project.config && this.props.project.config.applications) || []
    const third = Math.floor(applications.length / 3)
    const columns = [
      applications.slice(2*third),
      applications.slice(third, 2*third),
      applications.slice(0, third),
    ]
  
    return (
      <div style={styles.applications}>
        {columns.map(applications => (
          <div style={styles.column}>
            {applications.map(application => (
              <div style={styles.application} key={application}>
                <Application id={application} key={application} />
              </div>
            ))}
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
    
  application: {
    margin: '0 0 1rem 0',
  },

  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '32%'
  },
}

