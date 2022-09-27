import { setItem } from './localStorageAPI'

export const loadLocaleStorage = (key: string, value: any) => {
  if (!localStorage.getItem(key)) {
    setItem(key, value)
  }
}
