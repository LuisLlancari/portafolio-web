export interface Portfolio {
  developer: Developer
  projects: Project[]
  experience: Experience[]
  course: CourseSection
}

export interface Developer {
  name: string,
  photo: string,
  description: string,
  location: string,
  technologies: [string],
  soft_skil: [string],
  social_media: {
    linkedin: string,
    github: string,
    gmail: string
  }
}

export interface Project{
  title: string,
  image: string,
  description: string,
  technologies: [string],
  repository: string
}

export interface Experience {
  company_name: string,
  role: string,
  time_worked: string,
  description: string,
  location: string
}

export interface CourseSection {
  studies: Studies[];
  course: Course[];
}

export interface Studies {
  institute: string,
  study_date: string,
  profession: string,
  diploma_link: string
}

export interface Course {
  institute: string,
  study_date: string,
  course_name: string,
  diploma_link: string
}