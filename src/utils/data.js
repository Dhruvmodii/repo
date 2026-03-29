import siteData from '../../content/site.json'
import projectsData from '../../content/projects.json'
import skillsData from '../../content/skills.json'
import experienceData from '../../content/experience.json'

export const getSiteInfo = () => siteData
export const getProjects = () => projectsData.projects ?? projectsData
export const getSkills = () => skillsData.skills ?? skillsData
export const getExperience = () => experienceData.experience ?? experienceData
