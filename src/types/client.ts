import { Moment } from "moment";

export interface Client {
  firstName?: string,
  lastName?: string,
  initials?: string,
  birthDate?: Moment,
  sex?: string,
  nationality?: string,
  socialSecurityNumber?: string,
}

export type RegisterStatus = "personalInformation" | "addressInformation" | "confirmation" | "registered";

export interface ClientAddress {
  line1?: string,
  line2?: string,
  postalCode?: string,
  city?: string,
  country?: string,
  phoneNumber?: string,
  email?: string,
}