export interface ICustomCardProps {
  link: string
  label: string
  text: string
  icon: string
}

export interface ICustomCardV2Props {
  id: string
  img: string
  title: string
  desc: string
  tag: string
}

export interface ICustomLink {
  text: string
  link?: string
  icon?: string
}
