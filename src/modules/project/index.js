import React from 'react'
import Project from './project'

const pipeline = {
  id: "8132-1654-8132-1654",
  name: "Deploy to DEV",
  executions:  [
    {
      id: "8132-1654-8132-1654",
      status: "RUNNING",
      stages: [
        {
          id: "8132-1654-8132-1654",
          name: 'Stage 1',
          status: 'SUCCEEDED'
        },
        {
          id: "8132-1654-8132-1654",
          name: 'Stage 2',
          status: 'SUCCEEDED'
        },
        {
          id: "8132-1654-8132-1654",
          name: 'Stage 3',
          status: 'RUNNING'
        },
        {
          id: "8132-1654-8132-1654",
          name: 'Stage 4',
          status: 'NOT_STARTED'
        }

      ]
    }
  ],
}

const application = {
  id: "8132-1654-8132-1654",
  name: "App 1",
  liveInstances: [],
  pipelines: Array(3).fill().map(i => pipeline)
}

const applications = Array(3).fill().map(i => application)

const project = {
  id: "8132-1654-8132-1654",
  name: "Project 1",
  applications
}

/*
export default (props) => props.selectedProjectId
  ? (<Project {...project}/>)
  : (<div>select a project</div>)
*/

export default (props) => <Project {...project}/>