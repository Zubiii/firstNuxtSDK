import{_ as x}from"./C0wnnYkL.js";import{_ as h}from"./efG34ogJ.js";import{e as _,r as v,o as c,c as l,b as t,w as p,f as u,n as y,a as e,d as g,t as f,g as $}from"./CqE9dp1M.js";import{_ as r}from"./DlAUqK2U.js";const b={class:"w-[100px] flex justify-evenly mt-5"},w=_({__name:"share-links",setup(a){const s=v({linkedin:"https://www.linkedin.com/in/muhammad-zubair-j/",gmail:"zubair.javed.ch@gmail.com",git:"https://github.com/Zubiii"});return(n,o)=>{const i=x,d=h;return c(),l("div",b,[t(d,{to:u(s).git,target:"_blank"},{default:p(()=>[t(i,{class:"invert",src:"/svg/git.svg",height:"16",width:"16",placeholder:[16,16],loading:"lazy"})]),_:1},8,["to"]),t(d,{to:"mailto:"+u(s).gmail,target:"_blank"},{default:p(()=>[t(i,{class:"invert",src:"/svg/google.svg",height:"16",width:"16",placeholder:[16,16],loading:"lazy"})]),_:1},8,["to"]),t(d,{to:u(s).linkedin,target:"_blank"},{default:p(()=>[t(i,{class:"invert",src:"/svg/linkedin.svg",height:"16",width:"16",placeholder:[16,16],loading:"lazy"})]),_:1},8,["to"])])}}}),m=_({__name:"Eclipse",props:{color:{type:String,default:"#5E55DB"}},setup(a){return(s,n)=>(c(),l("div",{class:"w-full h-[100px] blur-[100px] rounded-[100%] rotate-12",style:y({background:a.color})},null,4))}}),k={},S={class:"relative h-full"},C={class:"max-w-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 flex flex-col items-center"};function D(a,s){const n=x,o=w,i=m;return c(),l("div",S,[e("div",C,[t(n,{class:"rounded-full",src:"/images/profile-square.jpg",height:"150",width:"150",placeholder:[150,150],loading:"lazy"}),s[0]||(s[0]=e("h1",{class:"text-[40px] kalam-regular mt-2"},[g(" I'm "),e("span",{class:"text-[#E01351]"},"Zubair Javed")],-1)),s[1]||(s[1]=e("p",{class:"text-center"}," I have been coding professionally for over 4+ years. I am always eager to learn new technologies and techniques. My primary focus has been on front-end development and I am also working with back-end technologies. Through the development of various projects, I have found new ways to improve efficiency and sustainability. ",-1)),t(o)]),t(i,{class:"absolute top-1/2 left-1/2 -translate-x-1/2 -z-10",color:"#5E55DB"})])}const E=r(k,[["render",D]]),j={class:"hex-alt"},I={class:"max-w-[135px] text-[16px] mt-3 text-center"},J=_({__name:"Hexagon",props:{link:{type:String,required:!0},text:{type:String,required:!0}},setup(a){return(s,n)=>{const o=x;return c(),l("div",j,[t(o,{src:a.link,width:"66px"},null,8,["src"]),e("span",I,f(a.text),1)])}}}),N=r(J,[["__scopeId","data-v-418105d2"]]),z={class:"hex-wrapper"},B={class:"hex-alt cursor-pointer"},M={class:"max-w-[135px] text-[40px] mt-3 text-center"},H=_({__name:"outline-hexagon",props:{text:{type:String,required:!0}},setup(a){return(s,n)=>(c(),l("div",z,[e("div",B,[e("span",M,f(a.text),1)])]))}}),T=r(H,[["__scopeId","data-v-5ec5d6f4"]]),q={},L={class:"h-[700px] relative"},A={class:"absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"},P={class:"flex gap-10 justify-center"},V={class:"flex gap-10 -mt-6"},Z={class:"flex gap-10 -mt-6 justify-center"};function W(a,s){const n=N,o=T,i=m;return c(),l("div",L,[e("div",A,[e("div",P,[t(n,{link:"/images/analytics.png",text:"Frontend Development"}),t(n,{link:"/images/web-developer.png",text:"Backend Development"})]),e("div",V,[t(n,{link:"/images/smartphone.png",text:"Mobile App Development"}),t(o,{class:"kalam-regular",text:"Skills"}),t(n,{link:"/images/responsive.png",text:"Responsive Design"})]),e("div",Z,[t(n,{link:"/images/data-system.png",text:"Database Management"}),t(n,{link:"/images/system.png",text:"Unit Testing & Error Fixing"})])]),t(i,{color:"#7a0a2c6e"})])}const F=r(q,[["render",W]]),R={class:"w-[411px] bg-[#1c1c1c8b] p-[24px] rounded-[8px]"},U=_({__name:"Card",props:{text:{type:String,required:!0}},setup(a){return(s,n)=>(c(),l("div",R,[e("h3",null,f(a.text),1),n[0]||(n[0]=e("div",{class:"w-full relative mt-4"},[e("div",{class:"w-full absolute bg-[#D9D9D9] h-2 rounded-full"}),e("div",{class:"w-3/4 absolute bg-[#7A0A2C] h-2 rounded-full"})],-1))]))}}),O={},Q={class:"relative h-[60vh] pt-[100px]"},G={class:"absolute min-w-[900px] left-1/2 -translate-x-1/2"},K={class:"w-full flex justify-around"},X={class:"w-full flex justify-around mt-8"},Y={class:"w-full flex justify-around mt-8"};function tt(a,s){const n=m,o=U;return c(),l("div",Q,[t(n,{class:"absolute -mt-[100px]",color:"#75342E"}),e("div",G,[e("div",K,[t(o,{text:"HTML & CSS"}),s[0]||(s[0]=g()),t(o,{text:"JS/TS"})]),e("div",X,[t(o,{text:"VueJS, NuxtJS, ReactJS, NextJS"}),t(o,{text:"NodeJS, ExpressJS, NestJS"})]),e("div",Y,[t(o,{text:"MongoDB & MySQL"}),t(o,{text:"UML, Agile, Scrum"})])])])}const et=r(O,[["render",tt]]),nt={},st={class:"w-full z-0"},ot={class:"relative"};function at(a,s){const n=F,o=et;return c(),l("div",st,[t(n),e("div",ot,[t(o)])])}const ct=r(nt,[["render",at]]),lt={},it={class:"flex justify-center"},rt={class:"max-w-[900px] relative h-[100px]"};function _t(a,s){const n=m;return c(),l("div",it,[e("div",rt,[s[0]||(s[0]=e("div",{class:"absolute left-1/2 -translate-x-1/2"},[e("h1",{class:"text-[40px] text-center"},"Some Things I've Built/Worked on"),e("div",{class:"h-[2px] line-grad w-[900px]"})],-1)),t(n,{class:"absolute",color:"#75742E"})])])}const dt=r(lt,[["render",_t],["__scopeId","data-v-3c92feb5"]]),mt={class:"w-full h-[100vh]"},gt=_({__name:"index",setup(a){return $({title:"Zubair Javed",ogTitle:"Zubair Javed",description:"Hey, Welcome to my Portfolio.",ogDescription:"Hey, Welcome to my Portfolio."}),(s,n)=>{const o=E,i=ct,d=dt;return c(),l("div",null,[e("div",mt,[t(o)]),t(i),t(d)])}}});export{gt as default};
