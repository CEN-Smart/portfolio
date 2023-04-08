type Portfolio = {
  portfolio: string;
  description: string;
  projects: { name: string; link: string; path: string }[];
};
export const portfolio:Portfolio={
  portfolio:'PORTFOLIO',
  description:'The Lists show some landing pages and components created for fun. And it will interest me if you have a look and feel of them.',
  projects:[{name:'Website 1',link:'https://portfolio-git-master-cen-smart.vercel.app/',path:'/public/site--1.png'},
  {name:'Component 1',link:'https://portfolio-git-master-cen-smart.vercel.app/',path:'/public/comp--1.png'},
  {name:'Component 2',link:'https://portfolio-git-master-cen-smart.vercel.app/',path:'/public/comp--2.png'},
  {name:'Component 3',link:'https://portfolio-git-master-cen-smart.vercel.app/',path:'/public/comp--3.png'},
  {name:'Component 4',link:'https://portfolio-git-master-cen-smart.vercel.app/',path:'/public/comp--4.png'},
  {name:'LandingPage 1',link:'https://portfolio-git-master-cen-smart.vercel.app/',path:'/public/land--1.png'},
  {name:'LandingPage 2',link:'https://portfolio-git-master-cen-smart.vercel.app/',path:'/public/land--2.png'},]
}
