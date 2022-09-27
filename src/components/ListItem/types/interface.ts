import { listItem } from '../../List/types'

export interface ListItemProps {
  item: listItem
  checkboxHandler?: React.ChangeEventHandler<HTMLInputElement>
}
