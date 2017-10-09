import React, { Component } from 'react'
import ProjectSelector from './projectSelector'
import Project from './ProjectContainer'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedProject: undefined
    }
    this.selectProject = this.selectProject.bind(this)
  }

  selectProject(project) {
    this.setState({selectedProject: project}) 
  }

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {        
    const selectedProject = this.props.projects.length === 1
        ? this.props.projects[0] 
        : this.props.selectedProject
    return (
      <div>
      {
        <ProjectSelector projects={this.props.projects} 
                         selectedProject={selectedProject} 
                         onProjectSelected={this.selectProject}/>
      }
      <ul>
        {
          selectedProject && <Project project={selectedProject}/>
        }
      </ul>
      </div>
    )
  }
}


export default Page