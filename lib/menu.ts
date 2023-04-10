
import {BiBookContent, BiHome, BiUser, BiFileBlank, BiServer, BiEnvelope} from 'react-icons/bi';
import { IconType} from 'react-icons';
type Menu = { name: string, link: string, icon:IconType }[];
export const menu:Menu=[
    { name: 'Home', link: '',icon:BiHome },
    { name: 'About', link: '',icon:BiUser },
    { name: 'Resume', link: '',icon:BiFileBlank },
    { name: 'Portfolio', link: '' ,icon:BiBookContent},
    { name: 'Services', link: '',icon:BiServer },
    { name: 'Contact', link: '',icon:BiEnvelope },
]