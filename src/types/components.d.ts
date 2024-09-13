import { ReactNode } from "react"
import { IconType } from "react-icons"

export interface ILogo {
  isDark: boolean
}

export interface ISidebarItem {
  active?: boolean,
  icon: IconType,
  title: string
}