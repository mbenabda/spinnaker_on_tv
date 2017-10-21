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

  selectProject(id) {
    this.setState({selectedProject: id}) 
  }

  componentWillMount() {
    this.props.fetchProjects()
  }

  render() {        
    const selectedProject = this.props.projects.length === 1
        ? this.props.projects[0] .id
        : this.props.selectedProject
    return (
      <div>
        {
            <ProjectSelector projects={this.props.projects} 
                             selectedProject={selectedProject} 
                             onProjectSelected={this.selectProject}/>
        }
        {
            selectedProject && <Project id={selectedProject}/>
        }
      </div>
    )
  }
}


export default Page