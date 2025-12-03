import { TbBeach, TbMountain } from 'react-icons/tb'
import {
  GiBarn,
  GiBoatFishing,
  GiForestCamp,

} from 'react-icons/gi'
import { IoDiamond } from 'react-icons/io5'
import { MdOutlineVilla } from 'react-icons/md'

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern!',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in the countryside!',
  },


  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is near a lake!',
  },


  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property offers camping activities!',
  },


  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in a barn!',
  },

  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is brand new and luxurious!',
  },
]
