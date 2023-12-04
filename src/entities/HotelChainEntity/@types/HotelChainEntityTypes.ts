export interface Location {
  id: number
  cityName: string
  cityCode: string
  stateName: string
  countryName: string
  stateSymbol: string
  latitude: string
  longitude: string
}
export interface Address {
  addressLine: string
  zipCode: string
  location: Location
  type: string
  district: string
  number: number
}

export interface Contact {
  alphaId: string
  name: string
  mail: string
  phone: string
  type: string
}

export interface ContractAttachment {
  name: string
}

export interface LogoImage {}

export interface Responsible {
  fullName: string
  role: string
  taxPayerCode: string
}

export interface HotelChain {
  alphaId: string
  name: string
  corporateName: string
  socialName: string
  taxpayerId: string
  stateCompanyRegNumber: string
  exemptedStateCompanyRegNumber: boolean
  socialContractAttachment: ContractAttachment
  contractAttachment: ContractAttachment
  status: string
  mail: string
  phone: string
  address: Address
  contacts: Contact[]
  logoImage: LogoImage
  responsible: Responsible
}
