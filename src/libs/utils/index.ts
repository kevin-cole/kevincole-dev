import { HeaderTabs } from "@libs/enums"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const paramToTab = (param: string): HeaderTabs => {
  switch(param) {
    case 'home':
      return HeaderTabs.HOME
    case 'details':
      return HeaderTabs.DETAILS
    default:
      return HeaderTabs.HOME
  }
}
