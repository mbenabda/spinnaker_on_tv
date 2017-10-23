import React, {Component} from 'react'
import Application from '../applicaton/'
import _ from 'lodash'

class Project extends Component {
  componentWillMount() {
    this.props.fetchProject(this.props.id)
  }

  render() {
    const applications = (this.props.project && this.props.project.config && this.props.project.config.applications) || []
    const chunks = _.chunk(applications, 4)
  
    return (
      <div style={styles.applications}>
        {chunks.map(applications => (
          <div style={styles.chunk}>
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
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
    
  application: {
    margin: '0 0 1rem 0',
    width: '24%'
  },

  chunk: {
    display: 'flex',
    flexDirection: 'row',
  },
}

