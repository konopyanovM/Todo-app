import { ListTypeEnum } from './../constants/enums'
import { listType } from './../components/List/types/interface'
import { RouterPathsEnum } from '../constants'

export const getCurrentList = (
  pathName: RouterPathsEnum | string,
): listType => {
  switch (pathName) {
    case RouterPathsEnum.MY_TASKS:
      return ListTypeEnum.CURRENT
    case RouterPathsEnum.IMPORTANT:
      return ListTypeEnum.IMPORTANT
    case RouterPathsEnum.COMPLETED:
      return ListTypeEnum.COMPLETED
    case RouterPathsEnum.DELETED:
      return ListTypeEnum.DELETED
  }
  return ListTypeEnum.CURRENT
}
