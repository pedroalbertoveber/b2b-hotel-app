type EntityConstructorProps = {
  baseUrl: string
  cachePath: string
}

type SetLocalStorageProps = {
  key?: string
  data: unknown
  revalidate: number
}

type LocalStorageItemType<DataType> = {
  expiresIn: Date
  data: DataType
}
