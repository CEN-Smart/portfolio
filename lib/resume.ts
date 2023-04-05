type Resume={
    name:string,
    detail:string
    prof:string,
    duty:string,
    duration:string,
    company:string,
    role:string,
    background:string,
    school:{type:string, year:string, schoolName:string}[]



}
export const resume:Resume={
    name:"RESUME",
    detail:"Highly effective at developing and standardizing designs according to company brand and objective. Ready to bring years of related experiences to a growth oriented team. Experienced working with teams to produce impactful, leading edge websites engage customers and deliver business results. Well-versed in design standards and user preferences",
    prof:'Professional Experience',
    duty:'FRONT END DEVELOPER',
    duration:'06/2021 - Present',
    company:'J. Aladum Technology',
    role:'Designing of various front-end templates for clients and schools',
    background: 'Education',
    school:[{type:'B.ENG PETROLEUM AND GAS ENGINEERING', year:'2011 - 2018', schoolName:'University of Port Harcourt, Rivers State Nigeria'},{type:'SENIOR SECONDARY SCHOOL', year:'2006 - 2009', schoolName:'Christ the King College Onitsha, Anambra state Nigeria'}, {type:'JUNIOR SECONDARY SCHOOL', year:'2003 - 2006', schoolName:'Christ the King College Onitsha, Anambra state Nigeria'}],
}

const lang=['TypeScript', 'NextJs', 'ChakraUI','Tailwindcss', 'ReactJs',];
export const skills=lang.join(', ');