
import {BiBookContent, BiHome, BiUser, BiFileBlank, BiServer, BiEnvelope} from 'react-icons/bi';
import { IconType} from 'react-icons';
type Menu = { name: string, link: string, icon:IconType }[];
export const menu:Menu=[
    { name: 'Home', link: '/',icon:BiHome },
    { name: 'About', link: '#about',icon:BiUser },
    { name: 'Resume', link: '#resume',icon:BiFileBlank },
    { name: 'Portfolio', link: '#portfolio' ,icon:BiBookContent},
    { name: 'Services', link: '#services',icon:BiServer },
    { name: 'Contact', link: '#contact',icon:BiEnvelope },
]