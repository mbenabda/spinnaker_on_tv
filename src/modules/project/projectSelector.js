import React, { Component } from 'react'

class ProjectSelector extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onProjectSelected(event.target.value)
  }

  render() {
    return (
      <select value={this.props.selectedProject} onChange={this.handleChange}>
        {
          this.props.projects.map(project => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))
        }
      </select>
    )
  }
}

export default ProjectSelector