// Core
import { ElementType } from 'react'

// Icons
import * as Icons from '@/common/icons'

type AmentityCategory =
  | 'BASICS'
  | 'COMODITIES'
  | 'INSTALATIONS'
  | 'SECURITY'
  | 'SPORTS'
  | 'ADDITIONALS'
  | 'ACCESSIBILITY'
  | 'PERMISSIONS'

export type AmentityType = {
  name: string
  value: string
  icon: ElementType
  category: AmentityCategory
}

export const BASICS_AMENITITES: AmentityType[] = [
  {
    category: 'BASICS',
    name: 'Estacionamento',
    value: '',
    icon: Icons.Parking,
  },
  {
    category: 'BASICS',
    name: 'Recreação infantil - Playground',
    value: '',
    icon: Icons.Playground,
  },
  {
    category: 'BASICS',
    name: 'Wifi',
    value: '',
    icon: Icons.Wifi,
  },
]

export const COMODITIES_AMENITITES: AmentityType[] = [
  {
    category: 'COMODITIES',
    name: 'Apartamento anti-alérgico',
    value: '',
    icon: Icons.AntiAlergicApartment,
  },
  {
    category: 'COMODITIES',
    name: 'Ar-Condicinado',
    value: '',
    icon: Icons.AirConditioning,
  },
  {
    category: 'COMODITIES',
    name: 'Banheira de hidromassagem',
    value: '',
    icon: Icons.WirlPool,
  },
  {
    category: 'COMODITIES',
    name: 'Bar/Lounge',
    value: '',
    icon: Icons.Lounge,
  },
  {
    category: 'COMODITIES',
    name: 'Café da manhã',
    value: '',
    icon: Icons.Breakfeast,
  },
  {
    category: 'COMODITIES',
    name: 'Cafeteria',
    value: '',
    icon: Icons.CoffeeShop,
  },
  // {
  //   category: 'COMODITIES',
  //   name: 'Concierge',
  //   value: '',
  //   icon: Icons.Concierge,
  // },
  {
    category: 'COMODITIES',
    name: 'Express Check-in',
    value: '',
    icon: Icons.ExpressCheckIn,
  },
  {
    category: 'COMODITIES',
    name: 'Express Check-out',
    value: '',
    icon: Icons.ExpressCheckout,
  },
  {
    category: 'COMODITIES',
    name: 'Guarda bagagem',
    value: '',
    icon: Icons.LuggageStorage,
  },
  {
    category: 'COMODITIES',
    name: 'Locadora de veículos',
    value: '',
    icon: Icons.RentalAgency,
  },
  {
    category: 'COMODITIES',
    name: 'Loja de conveniência',
    value: '',
    icon: Icons.ConvinienceStore,
  },
  {
    category: 'COMODITIES',
    name: 'Manobrista',
    value: '',
    icon: Icons.ValetParking,
  },
  {
    category: 'COMODITIES',
    name: 'Sauna a vapor',
    value: '',
    icon: Icons.SteamRoom,
  },
  {
    category: 'COMODITIES',
    name: 'Sauna seca',
    value: '',
    icon: Icons.DrySteamRoom,
  },
  {
    category: 'COMODITIES',
    name: 'Secador de cabelo',
    value: '',
    icon: Icons.HairDryer,
  },
  {
    category: 'COMODITIES',
    name: 'Serviço de babá',
    value: '',
    icon: Icons.Nanny,
  },
  {
    category: 'COMODITIES',
    name: 'Serviço de lavanderia',
    value: '',
    icon: Icons.Laundry,
  },
  {
    category: 'COMODITIES',
    name: 'Serviço de lavanderia - a seco',
    value: '',
    icon: Icons.DryLaundry,
  },
  {
    category: 'COMODITIES',
    name: 'Serviço de passar roupas',
    value: '',
    icon: Icons.FlatIron,
  },
  {
    category: 'COMODITIES',
    name: 'Serviço de quarto',
    value: '',
    icon: Icons.RoomService,
  },
  {
    category: 'COMODITIES',
    name: 'Serviço de quarto 24h',
    value: '',
    icon: Icons.RoomService24Hours,
  },
]

export const INSTALATIONS_AMENITITES: AmentityType[] = [
  {
    category: 'INSTALATIONS',
    name: '110/120 V AC',
    value: '',
    icon: Icons.Energy110,
  },
  {
    category: 'INSTALATIONS',
    name: '220/240 V AC',
    value: '',
    icon: Icons.Energy220,
  },
  {
    category: 'INSTALATIONS',
    name: 'Apartamento com sacada',
    value: '',
    icon: Icons.Balcony,
  },
  {
    category: 'INSTALATIONS',
    name: 'Apartamento para família',
    value: '',
    icon: Icons.FamilyApartament,
  },
  {
    category: 'INSTALATIONS',
    name: 'Bancada para notebook',
    value: '',
    icon: Icons.LaptopStand,
  },
  {
    category: 'INSTALATIONS',
    name: 'Biblioteca',
    value: '',
    icon: Icons.Library,
  },
  {
    category: 'INSTALATIONS',
    name: 'Bicicletário',
    value: '',
    icon: Icons.BicycleRack,
  },
  {
    category: 'INSTALATIONS',
    name: 'Business center c/ wifi',
    value: '',
    icon: Icons.BusinessCenter,
  },
  {
    category: 'INSTALATIONS',
    name: 'Cozinha',
    value: '',
    icon: Icons.Kitchen,
  },
  {
    category: 'INSTALATIONS',
    name: 'Elevador',
    value: '',
    icon: Icons.Elevator,
  },
  {
    category: 'INSTALATIONS',
    name: 'Heliponto',
    value: '',
    icon: Icons.Heliport,
  },
  {
    category: 'INSTALATIONS',
    name: 'Instalações para conferências',
    value: '',
    icon: Icons.ConfeerenceRoom,
  },
  {
    category: 'INSTALATIONS',
    name: 'Pier para embarcação',
    value: '',
    icon: Icons.Pier,
  },
  {
    category: 'INSTALATIONS',
    name: 'Restaurante',
    value: '',
    icon: Icons.Restaurant,
  },
  {
    category: 'INSTALATIONS',
    name: 'Sala de estar com lareira',
    value: '',
    icon: Icons.FiresideRoom,
  },
  {
    category: 'INSTALATIONS',
    name: 'Sala de jogos',
    value: '',
    icon: Icons.GameRoom,
  },
  {
    category: 'INSTALATIONS',
    name: 'Sala de massagens',
    value: '',
    icon: Icons.MassageRoom,
  },
  {
    category: 'INSTALATIONS',
    name: 'Salão de Banquetes',
    value: '',
    icon: Icons.BanquetHall,
  },
  {
    category: 'INSTALATIONS',
    name: 'Salas de convenção',
    value: '',
    icon: Icons.ConvetionCenter,
  },
  {
    category: 'INSTALATIONS',
    name: 'Salas de reunião',
    value: '',
    icon: Icons.MeetingRoom,
  },
  {
    category: 'INSTALATIONS',
    name: 'Solarium',
    value: '',
    icon: Icons.Solarium,
  },
]

export const SPORTS_AMENTITIES: AmentityType[] = [
  {
    category: 'SPORTS',
    name: 'Campo de futebol',
    value: '',
    icon: Icons.Soccer,
  },
  {
    category: 'SPORTS',
    name: 'Campo de golfe',
    value: '',
    icon: Icons.GolfField,
  },
  // {
  //   category: 'SPORTS',
  //   name: 'Equipe de lazer e reacreação',
  //   value: '',
  //   icon: Icons.
  // },
  {
    category: 'SPORTS',
    name: 'Esportes náuticos',
    value: '',
    icon: Icons.NauticalSports,
  },
  {
    category: 'SPORTS',
    name: 'Fitness center',
    value: '',
    icon: Icons.Gym,
  },
  {
    category: 'SPORTS',
    name: 'Piscina',
    value: '',
    icon: Icons.Pool,
  },
  {
    category: 'SPORTS',
    name: 'Piscina coberta',
    value: '',
    icon: Icons.IndoorPool,
  },
  {
    category: 'SPORTS',
    name: 'Piscina externa',
    value: '',
    icon: Icons.Pool,
  },
  {
    category: 'SPORTS',
    name: 'Piscina infantil',
    value: '',
    icon: Icons.ChildPool,
  },
  {
    category: 'SPORTS',
    name: 'Piscina interna',
    value: '',
    icon: Icons.IndoorPool,
  },
  {
    category: 'SPORTS',
    name: 'Piscina para adultos',
    value: '',
    icon: Icons.Pool,
  },
  {
    category: 'SPORTS',
    name: 'Pista cooper',
    value: '',
    icon: Icons.Cooper,
  },
  {
    category: 'SPORTS',
    name: 'Playground',
    value: '',
    icon: Icons.Playground,
  },
  {
    category: 'SPORTS',
    name: 'Quadra de peteca',
    value: '',
    icon: Icons.ShuttleCock,
  },
  {
    category: 'SPORTS',
    name: 'Quadra de squash',
    value: '',
    icon: Icons.Squash,
  },
  {
    category: 'SPORTS',
    name: 'Quadra de tênis',
    value: '',
    icon: Icons.Tennis,
  },
  {
    category: 'SPORTS',
    name: 'Quadra poliesportiva',
    value: '',
    icon: Icons.MultiSport,
  },
]

export const ADDITIONALS_AMENITITES: AmentityType[] = [
  {
    category: 'ADDITIONALS',
    name: 'Academia de ginástica',
    value: '',
    icon: Icons.Gym2,
  },
  {
    category: 'ADDITIONALS',
    name: 'Aluguel de lancha/veleiro',
    value: '',
    icon: Icons.MotorBoat,
  },
  {
    category: 'ADDITIONALS',
    name: 'Cabelereiro',
    value: '',
    icon: Icons.Hairdresser,
  },
  {
    category: 'ADDITIONALS',
    name: 'Equipe multilíngue',
    value: '',
    icon: Icons.MultiLangualStaff,
  },
  {
    category: 'ADDITIONALS',
    name: 'Serviço de transfer',
    value: '',
    icon: Icons.Trasnfer,
  },
  {
    category: 'ADDITIONALS',
    name: 'SPA',
    value: '',
    icon: Icons.Spa,
  },
  {
    category: 'ADDITIONALS',
    name: 'Translado do/para aeroporto',
    value: '',
    icon: Icons.Trasnfer,
  },
]

export const ACCESSIBILITY_AMENITITES: AmentityType[] = [
  {
    category: 'ACCESSIBILITY',
    name: 'Acesso para deficiente físico',
    value: '',
    icon: Icons.WheelChairAccess,
  },
  {
    category: 'ACCESSIBILITY',
    name: 'Cadeira de rodas disponível',
    value: '',
    icon: Icons.WheelChair,
  },
]

export const PERMISSIONS_AMENITITES: AmentityType[] = [
  {
    category: 'PERMISSIONS',
    name: 'Andar exclusivo para não fumantes',
    value: '',
    icon: Icons.NoSmoking,
  },
  {
    category: 'PERMISSIONS',
    name: 'Apartamento para fumantes',
    value: '',
    icon: Icons.SmokeAllowed,
  },
  {
    category: 'PERMISSIONS',
    name: 'Apartamento para não fumantes',
    value: '',
    icon: Icons.NoSmoking,
  },
  {
    category: 'PERMISSIONS',
    name: 'Hotel para fumantes',
    value: '',
    icon: Icons.SmokeAllowed,
  },
  {
    category: 'PERMISSIONS',
    name: 'Permite pets (anmais domésticos)',
    value: '',
    icon: Icons.PetAccess,
  },
]

export const SECURITY_AMENITITES: AmentityType[] = [
  {
    category: 'SECURITY',
    name: 'Assistência médica no hotel',
    value: '',
    icon: Icons.MedicAssistence,
  },
  {
    category: 'SECURITY',
    name: 'Cofre',
    value: '',
    icon: Icons.Vault,
  },
  {
    category: 'SECURITY',
    name: 'Detector de fumaça',
    value: '',
    icon: Icons.SmokeDetector,
  },
  {
    category: 'SECURITY',
    name: 'Kit de primeiros socorros',
    value: '',
    icon: Icons.FirstAid,
  },
  {
    category: 'SECURITY',
    name: 'Recepção 24 horas',
    value: '',
    icon: Icons.Soiree24Hours,
  },
  {
    category: 'SECURITY',
    name: 'Serviço médico',
    value: '',
    icon: Icons.MedicalService,
  },
]

export const AMENTITIES: AmentityType[] = [
  ...BASICS_AMENITITES,
  ...COMODITIES_AMENITITES,
  ...INSTALATIONS_AMENITITES,
  ...SPORTS_AMENTITIES,
  ...ADDITIONALS_AMENITITES,
  ...ACCESSIBILITY_AMENITITES,
  ...PERMISSIONS_AMENITITES,
  ...SECURITY_AMENITITES,
]
