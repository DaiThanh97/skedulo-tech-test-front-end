export interface Property {
  key: string;
  title: string;
}

export type Properties = Property[]

export interface ExtendedGenericType {
  id: string | number
  [key: string]: any
}