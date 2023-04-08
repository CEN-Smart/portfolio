import { IconType } from "react-icons"
import { BsDatabase, BsMinecartLoaded } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { MdModelTraining } from "react-icons/md";
type Services={
service:string,
detail:string,
list:{icon:IconType, type:string, description:string}[]
}
export const services:Services={
service:'SERVICES',
detail:'Smart can help you bring your dream webpages to live, just make a request of your work in your mind and he makes it a reality.',
list:[{icon:CgWebsite,type:'School Websites', description:'Helping you create and manage your school website'},{icon: BsMinecartLoaded, type:'E-Commerce', description:'Take your business to the next level by reaching out to me.'}, {icon: BsDatabase, type:'Data-base Management',description:'Looking to host your school students records online, your search is over'},{icon:MdModelTraining, type:'Training', description:'Do you want to learn how to build what you see? reach out by contacting Smart'}]
}