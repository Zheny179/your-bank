export interface SocialLink {
  name: string
  url: string
  title: string
}

export interface Contact {
  icon: string
  type: 'email' | 'phone' | 'address'
  value: string
  label: string
}

export interface NavigationItem {
  href: string
  label: string
}
