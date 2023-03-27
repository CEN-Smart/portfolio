import {TfiFaceSmile} from 'react-icons/tfi'
import { BiSupport, BiFolder } from 'react-icons/bi'
import {IoIosPeople} from 'react-icons/io'
import { type } from 'os'
import { IconType } from 'react-icons'
type Facts={
  fact:string,
  work:string,
  detail:{icon:IconType, value:number, target:string}[]
}
export const facts:Facts={
  fact:'FACTS',
  work:'I have worked with many teams on various projects, contributed to bigger projects on open source.',
  detail:[{icon:TfiFaceSmile, value:20,target:'Happy Clients'},
  {icon:BiFolder, value:4, target:'Projects Completed'},
  {icon:BiSupport, value:100,target:'Hours of Support'},
  {icon:IoIosPeople, value:3,target:'Team Members'}
]
}