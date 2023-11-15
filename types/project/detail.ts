export interface IDetail {
  id: string
  project_id: string
  title: string
  desc: string
  technology_stack: string[]
  imgs: URL[]
  project_link: {
    type: '0' | '1' | '2'
    link: URL
  }
}
