export interface IAmenities {
  id?: number
  name?: string
  description?: string
  status?: number
  visualResource?: string
}

export interface IAmenitieCategory {
  id?: number
  name?: string
  description?: string
  amenities?: IAmenities[]
}

export interface IImage {
  category: string
  file?: string
  name?: string
  isPrincipal?: boolean
  uploaded?: boolean
}

export interface IBookingNotify {
  alphaId?: string
  bookingAlphaId?: string
  amountAfterTax?: number
  agencyChainName?: string
  agencyName?: string
  agencyPosName?: string
  client?: string
  guest?: string
  confirmation?: string
  created?: string
  observation?: string
  reservationNumber?: string
  roomTypeName?: string
  status?: string
  statusText?: string
  type?: string
  typeText?: string
  userCreated?: string
  checkin?: string
  checkinDate?: string
  observationModified?: string
  observationModifiedBy?: string
  observationModifiedAt?: string
  checkIn?: string
  checkOut?: string
  clientName?: string
  startDate?: string
  endDate?: string
  agencyNotes?: string
  clientId?: string
  name?: string
  qty?: string
  roomTypeAlphaId?: string
}

export interface IBookingPolicy {
  alphaId: string
  bookingAlphaId: string
  amountAfterTax: number
  agencyChainName: string
  agencyName: string
  client: string
  guest: string
  confirmation: string
  created: string
  observation: string
  reservationNumber: string
  roomTypeName: string
  status: string
  statusText: string
  type: string
  typeText: string
  userCreated: string
  checkin?: string
  checkinDate: string
  observationModified?: string
  observationModifiedBy?: string
  observationModifiedAt?: string
  checkIn?: string
  checkOut?: string
}

export interface IAllotmentNotify {
  clientName: string
  alphaId: string
  startDate: string
  endDate: string
  agencyNotes: string
  roomTypeName: string
  status: string
  type: string
  typeText: string
  clientId: string
  name: string
  qty: string
  roomTypeAlphaId: string
}

export const HOTEL = {
  ADD_AMENITY: 'ADD_AMENITY',
  ADD_CONTACTS: 'ADD_CONTACTS',
  ADD_HOTEL: 'ADD_HOTEL',
  ADD_HOTELS: 'ADD_HOTELS',
  ADD_IMAGE: 'ADD_IMAGE',
  CLEAR_AMENITIES: 'CLEAR_AMENITIES',
  DELETE_IMAGE: 'DELETE_IMAGE',
  DEL_HOTELS: 'DEL_HOTELS',
  DEL_IMAGES: 'DEL_IMAGES',
  EDIT_IMAGE: 'EDIT_IMAGE',
  LOAD_IMAGE: 'LOAD_IMAGE',
  UPLOAD_IMAGE: 'UPLOAD_IMAGE',
  UPLOAD_IMAGE_REGISTRATION: 'UPLOAD_IMAGE_REGISTRATION',
  UPLOAD_IMAGE_ROOM_TYPE: 'UPLOAD_IMAGE_ROOM_TYPE',
  LOAD_BOOKING_POLICIES: 'LOAD_BOOKING_POLICIES',
}
