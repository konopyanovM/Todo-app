import { ListItem } from '../../List/types'

export interface ListItemProps {
  item: ListItem
  checkboxHandler?: React.ChangeEventHandler<HTMLInputElement>
}
