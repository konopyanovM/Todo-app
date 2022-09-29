import { ListItem, listType } from '../../List/types'

export interface ListItemProps {
  item: ListItem
  listType?: listType
  isImportant?: boolean
  isDeleted?: boolean
  checkboxHandler?: React.ChangeEventHandler<HTMLInputElement>
}
