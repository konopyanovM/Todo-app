export const getMobileItemsAmount = (height: number) => {
  if (height <= 515) return 5
  if (height <= 575) return 6
  if (height <= 630) return 7
  if (height <= 667) return 8
  if (height <= 740) return 9
  if (height <= 844) return 11
  if (height <= 896) return 12
  if (height <= 915) return 12
  return 5
}
