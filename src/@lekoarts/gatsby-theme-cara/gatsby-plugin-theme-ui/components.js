import React from "react"
import ProjectCard from "../components/project-card"
import Mainbuttons from "../components/mainbuttons"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  Mainbuttons: ({link, title, children}) => (
    <Mainbuttons link={link} title={title}>
      {children}
    </Mainbuttons>
  ),
}

export default components
