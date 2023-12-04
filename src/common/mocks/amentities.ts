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
  value: number
  icon: ElementType
  category: AmentityCategory
}

export const BASICS_AMENITITES: AmentityType[] = [
  {
    category: 'BASICS',
    name: 'Estacionamento',
    value: 2,
    icon: Icons.Parking,
  },
  {
    category: 'BASICS',
    name: 'Recreação infantil - Playground',
    value: 4,
    icon: Icons.Playground,
  },
  {
    category: 'BASICS',
    name: 'Wifi',
    value: 6,
    icon: Icons.Wifi,
  },
]

export const COMODITIES_AMENITITES: AmentityType[] = [
  {
    category: 'COMODITIES',
    name: 'Apartamento anti-alérgico',
    value: 50,
    icon: Icons.AntiAlergicApartment,
  },
  // {
  //   category: 'COMODITIES',
  //   name: 'Ar-Condicinado',
  //   value: '',
  //   icon: Icons.AirConditioning,
  // },
  // {
  //   category: 'COMODITIES',
  //   name: 'Banheira de hidromassagem',
  //   value: '',
  //   icon: Icons.WirlPool,
  // },
  {
    category: 'COMODITIES',
    name: 'Bar/Lounge',
    value: 56,
    icon: Icons.Lounge,
  },
  // {
  //   category: 'COMODITIES',
  //   name: 'Café da manhã',
  //   value: '',
  //   icon: Icons.Breakfeast,
  // },
  {
    category: 'COMODITIES',
    name: 'Cafeteria',
    value: 60,
    icon: Icons.CoffeeShop,
  },
  // {
  //   category: 'COMODITIES',
  //   name: 'Concierge',
  //   value: '',
  //   icon: Icons.Concierge,
  // },
  // {
  //   category: 'COMODITIES',
  //   name: 'Express Check-in',
  //   value: '',
  //   icon: Icons.ExpressCheckIn,
  // },
  {
    category: 'COMODITIES',
    name: 'Express Check-out',
    value: 66,
    icon: Icons.ExpressCheckout,
  },
  {
    category: 'COMODITIES',
    name: 'Guarda bagagem',
    value: 68,
    icon: Icons.LuggageStorage,
  },
  {
    category: 'COMODITIES',
    name: 'Locadora de veículos',
    value: 70,
    icon: Icons.RentalAgency,
  },
  {
    category: 'COMODITIES',
    name: 'Loja de conveniência',
    value: 72,
    icon: Icons.ConvinienceStore,
  },
  {
    category: 'COMODITIES',
    name: 'Manobrista',
    value: 74,
    icon: Icons.ValetParking,
  },
  {
    category: 'COMODITIES',
    name: 'Sauna a vapor',
    value: 78,
    icon: Icons.SteamRoom,
  },
  {
    category: 'COMODITIES',
    name: 'Sauna seca',
    value: 76,
    icon: Icons.DrySteamRoom,
  },
  // {
  //   category: 'COMODITIES',
  //   name: 'Secador de cabelo',
  //   value: '',
  //   icon: Icons.HairDryer,
  // },
  // {
  //   category: 'COMODITIES',
  //   name: 'Serviço de babá',
  //   value: '',
  //   icon: Icons.Nanny,
  // },
  {
    category: 'COMODITIES',
    name: 'Serviço de lavanderia',
    value: 84,
    icon: Icons.Laundry,
  },
  {
    category: 'COMODITIES',
    name: 'Serviço de lavanderia - a seco',
    value: 86,
    icon: Icons.DryLaundry,
  },
  {
    category: 'COMODITIES',
    name: 'Serviço de passar roupas',
    value: 88,
    icon: Icons.FlatIron,
  },
  {
    category: 'COMODITIES',
    name: 'Serviço de quarto',
    value: 90,
    icon: Icons.RoomService,
  },
  {
    category: 'COMODITIES',
    name: 'Serviço de quarto 24h',
    value: 92,
    icon: Icons.RoomService24Hours,
  },
]

export const INSTALATIONS_AMENITITES: AmentityType[] = [
  {
    category: 'INSTALATIONS',
    name: '110/120 V AC',
    value: 8,
    icon: Icons.Energy110,
  },
  {
    category: 'INSTALATIONS',
    name: '220/240 V AC',
    value: 10,
    icon: Icons.Energy220,
  },
  {
    category: 'INSTALATIONS',
    name: 'Apartamento com sacada',
    value: 12,
    icon: Icons.Balcony,
  },
  // {
  //   category: 'INSTALATIONS',
  //   name: 'Apartamento para família',
  //   value: '',
  //   icon: Icons.FamilyApartament,
  // },
  // {
  //   category: 'INSTALATIONS',
  //   name: 'Bancada para notebook',
  //   value: 18,
  //   icon: Icons.LaptopStand,
  // },
  {
    category: 'INSTALATIONS',
    name: 'Biblioteca',
    value: 18,
    icon: Icons.Library,
  },
  {
    category: 'INSTALATIONS',
    name: 'Bicicletário',
    value: 20,
    icon: Icons.BicycleRack,
  },
  {
    category: 'INSTALATIONS',
    name: 'Business center c/ wifi',
    value: 22,
    icon: Icons.BusinessCenter,
  },
  // {
  //   category: 'INSTALATIONS',
  //   name: 'Cozinha',
  //   value: '',
  //   icon: Icons.Kitchen,
  // // },
  // {
  //   category: 'INSTALATIONS',
  //   name: 'Elevador',
  //   value: '',
  //   icon: Icons.Elevator,
  // },
  {
    category: 'INSTALATIONS',
    name: 'Heliponto',
    value: 28,
    icon: Icons.Heliport,
  },
  // {
  //   category: 'INSTALATIONS',
  //   name: 'Instalações para conferências',
  //   value: '',
  //   icon: Icons.ConfeerenceRoom,
  // },
  {
    category: 'INSTALATIONS',
    name: 'Pier para embarcação',
    value: 32,
    icon: Icons.Pier,
  },
  {
    category: 'INSTALATIONS',
    name: 'Restaurante',
    value: 34,
    icon: Icons.Restaurant,
  },
  {
    category: 'INSTALATIONS',
    name: 'Sala de estar com lareira',
    value: 36,
    icon: Icons.FiresideRoom,
  },
  {
    category: 'INSTALATIONS',
    name: 'Sala de jogos',
    value: 38,
    icon: Icons.GameRoom,
  },
  {
    category: 'INSTALATIONS',
    name: 'Sala de massagens',
    value: 40,
    icon: Icons.MassageRoom,
  },
  // {
  //   category: 'INSTALATIONS',
  //   name: 'Salão de Banquetes',
  //   value: '',
  //   icon: Icons.BanquetHall,
  // },
  {
    category: 'INSTALATIONS',
    name: 'Salas de convenção',
    value: 44,
    icon: Icons.ConvetionCenter,
  },
  {
    category: 'INSTALATIONS',
    name: 'Salas de reunião',
    value: 46,
    icon: Icons.MeetingRoom,
  },
  {
    category: 'INSTALATIONS',
    name: 'Solarium',
    value: 48,
    icon: Icons.Solarium,
  },
]

export const SPORTS_AMENTITIES: AmentityType[] = [
  {
    category: 'SPORTS',
    name: 'Campo de futebol',
    value: 94,
    icon: Icons.Soccer,
  },
  {
    category: 'SPORTS',
    name: 'Campo de golfe',
    value: 96,
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
    value: 100,
    icon: Icons.NauticalSports,
  },
  {
    category: 'SPORTS',
    name: 'Fitness center',
    value: 102,
    icon: Icons.Gym,
  },
  {
    category: 'SPORTS',
    name: 'Piscina',
    value: 104,
    icon: Icons.Pool,
  },
  {
    category: 'SPORTS',
    name: 'Piscina coberta',
    value: 112,
    icon: Icons.IndoorPool,
  },
  {
    category: 'SPORTS',
    name: 'Piscina externa',
    value: 106,
    icon: Icons.Pool,
  },
  {
    category: 'SPORTS',
    name: 'Piscina infantil',
    value: 114,
    icon: Icons.ChildPool,
  },
  {
    category: 'SPORTS',
    name: 'Piscina interna',
    value: 116,
    icon: Icons.IndoorPool,
  },
  {
    category: 'SPORTS',
    name: 'Piscina para adultos',
    value: 108,
    icon: Icons.Pool,
  },
  {
    category: 'SPORTS',
    name: 'Pista cooper',
    value: 118,
    icon: Icons.Cooper,
  },
  {
    category: 'SPORTS',
    name: 'Playground',
    value: 120,
    icon: Icons.Playground,
  },
  {
    category: 'SPORTS',
    name: 'Quadra de peteca',
    value: 122,
    icon: Icons.ShuttleCock,
  },
  {
    category: 'SPORTS',
    name: 'Quadra de squash',
    value: 124,
    icon: Icons.Squash,
  },
  {
    category: 'SPORTS',
    name: 'Quadra de tênis',
    value: 126,
    icon: Icons.Tennis,
  },
  {
    category: 'SPORTS',
    name: 'Quadra poliesportiva',
    value: 128,
    icon: Icons.MultiSport,
  },
]

export const ADDITIONALS_AMENITITES: AmentityType[] = [
  {
    category: 'ADDITIONALS',
    name: 'Academia de ginástica',
    value: 146,
    icon: Icons.Gym2,
  },
  {
    category: 'ADDITIONALS',
    name: 'Aluguel de lancha/veleiro',
    value: 148,
    icon: Icons.MotorBoat,
  },
  {
    category: 'ADDITIONALS',
    name: 'Cabelereiro',
    value: 150,
    icon: Icons.Hairdresser,
  },
  {
    category: 'ADDITIONALS',
    name: 'Equipe multilíngue',
    value: 152,
    icon: Icons.MultiLangualStaff,
  },
  {
    category: 'ADDITIONALS',
    name: 'Serviço de transfer',
    value: 154,
    icon: Icons.Trasnfer,
  },
  {
    category: 'ADDITIONALS',
    name: 'SPA',
    value: 158,
    icon: Icons.Spa,
  },
  {
    category: 'ADDITIONALS',
    name: 'Translado do/para aeroporto',
    value: 156,
    icon: Icons.Trasnfer,
  },
]

export const ACCESSIBILITY_AMENITITES: AmentityType[] = [
  {
    category: 'ACCESSIBILITY',
    name: 'Acesso para deficiente físico',
    value: 142,
    icon: Icons.WheelChairAccess,
  },
  {
    category: 'ACCESSIBILITY',
    name: 'Cadeira de rodas disponível',
    value: 144,
    icon: Icons.WheelChair,
  },
]

export const PERMISSIONS_AMENITITES: AmentityType[] = [
  {
    category: 'PERMISSIONS',
    name: 'Andar exclusivo para não fumantes',
    value: 160,
    icon: Icons.NoSmoking,
  },
  // {
  //   category: 'PERMISSIONS',
  //   name: 'Apartamento para fumantes',
  //   value: '',
  //   icon: Icons.SmokeAllowed,
  // },
  {
    category: 'PERMISSIONS',
    name: 'Apartamento para não fumantes',
    value: 162,
    icon: Icons.NoSmoking,
  },
  // {
  //   category: 'PERMISSIONS',
  //   name: 'Hotel para fumantes',
  //   value: '',
  //   icon: Icons.SmokeAllowed,
  // },
  {
    category: 'PERMISSIONS',
    name: 'Permite pets (anmais domésticos)',
    value: 168,
    icon: Icons.PetAccess,
  },
]

export const SECURITY_AMENITITES: AmentityType[] = [
  {
    category: 'SECURITY',
    name: 'Assistência médica no hotel',
    value: 130,
    icon: Icons.MedicAssistence,
  },
  // {
  //   category: 'SECURITY',
  //   name: 'Cofre',
  //   value: '',
  //   icon: Icons.Vault,
  // },
  // {
  //   category: 'SECURITY',
  //   name: 'Detector de fumaça',
  //   value: '',
  //   icon: Icons.SmokeDetector,
  // },
  // {
  //   category: 'SECURITY',
  //   name: 'Kit de primeiros socorros',
  //   value: '',
  //   icon: Icons.FirstAid,
  // },
  {
    category: 'SECURITY',
    name: 'Recepção 24 horas',
    value: 138,
    icon: Icons.Soiree24Hours,
  },
  {
    category: 'SECURITY',
    name: 'Serviço médico',
    value: 140,
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
