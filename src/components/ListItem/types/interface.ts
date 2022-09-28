import { ListItem } from '../../List/types'

export interface ListItemProps {
  item: ListItem
  isImportant?: boolean
  checkboxHandler?: React.ChangeEventHandler<HTMLInputElement>
}
