const datos= [
  {
    name: "Javascript",
    img: "./db/img/JavaScript-logo.png"
  },
  {
    name: "Python",
    img: "./db/img/Python-logo.png"
  },
  {
    name: "NodeJS",
    img: "./db/img/nodejs.png"
  },
  {
    name: "C Sharp",
    img: "./db/img/csharp.png"
  },
  {
    name: "Express JS",
    img: "./db/img/Expressjs.png"
  },
  {
    name: "React",
    img: "./db/img/react.png"
  }

];

const myProjects=[
{
  name:"jueguito",
  img:"./db/img/thumbnail.jpg",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno",
  stack:["Javascript","Express","React"]
},
{
  name:"otro jueguito",
  img:"https://rockcontent.com/es/wp-content/uploads/sites/3/2017/06/thumbnail-1024x538.png",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno",
  stack:["Javascript","Express","React"]
},
{
  name:"otro jueguito mas",
  img:"https://w7.pngwing.com/pngs/413/892/png-transparent-black-line-and-leaf-line-vertical-bar-bertikal-the-vertical-line-light-fixture-angle-monochrome-thumbnail.png",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno y aca quiero ver que sucede si alargo el texto de la descripcion",
  stack:["Javascript","Express","React"]
},
{
  name:"otro jueguito",
  img:"https://rockcontent.com/es/wp-content/uploads/sites/3/2017/06/thumbnail-1024x538.png",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno",
  stack:["Javascript","Express","React"]
},
{
  name:"otro jueguito mas",
  img:"https://w7.pngwing.com/pngs/413/892/png-transparent-black-line-and-leaf-line-vertical-bar-bertikal-the-vertical-line-light-fixture-angle-monochrome-thumbnail.png",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno",
  stack:["Javascript","Express","React"]
},
{
  name:"jueguito",
  img:"./db/img/thumbnail.jpg",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno",
  stack:["Javascript","Express","React"]
},
{
  name:"jueguito",
  img:"./db/img/thumbnail.jpg",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno",
  stack:["Javascript","Express","React"]
},
{
  name:"otro jueguito",
  img:"https://rockcontent.com/es/wp-content/uploads/sites/3/2017/06/thumbnail-1024x538.png",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno",
  stack:["Javascript","Express","React"]
},
{
  name:"otro jueguito mas",
  img:"https://w7.pngwing.com/pngs/413/892/png-transparent-black-line-and-leaf-line-vertical-bar-bertikal-the-vertical-line-light-fixture-angle-monochrome-thumbnail.png",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno y aca quiero ver que sucede si alargo el texto de la descripcion",
  stack:["Javascript","Express","React"]
},
{
  name:"otro jueguito",
  img:"https://rockcontent.com/es/wp-content/uploads/sites/3/2017/06/thumbnail-1024x538.png",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno",
  stack:["Javascript","Express","React"]
},
{
  name:"jueguito",
  img:"./db/img/thumbnail.jpg",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno",
  stack:["Javascript","Express","React"]
},
{
  name:"otro jueguito",
  img:"https://rockcontent.com/es/wp-content/uploads/sites/3/2017/06/thumbnail-1024x538.png",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno",
  stack:["Javascript","Express","React"]
},
{
  name:"otro jueguito mas",
  img:"https://w7.pngwing.com/pngs/413/892/png-transparent-black-line-and-leaf-line-vertical-bar-bertikal-the-vertical-line-light-fixture-angle-monochrome-thumbnail.png",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno y aca quiero ver que sucede si alargo el texto de la descripcion",
  stack:["Javascript","Express","React"]
},
{
  name:"otro jueguito",
  img:"https://rockcontent.com/es/wp-content/uploads/sites/3/2017/06/thumbnail-1024x538.png",
  url:"#about-me",
  desc:"texto de relleno para rellenar un espacio sin relleno",
  stack:["Javascript","Express","React"]
}
];

let showMore = document.getElementById("more");
let nav = document.getElementById("nav-bar");
nav.classList.add("invisible");
const showNavMenu=()=>{
if (window.innerWidth <= 480) {
  nav.classList.add("invisible");
  showMore.innerText = "Show More";
} else {
  nav.classList.remove("invisible");
}
}
window.addEventListener("resize", () => {
showNavMenu()
});

window.addEventListener("load", () => {
showNavMenu()
});

showMore.addEventListener("click", () => {
if (showMore.innerText === "Show More") {
  showMore.innerText = "Show Less";
  nav.classList.remove("invisible");
} else {
  showMore.innerText = "Show More";
  nav.classList.add("invisible");
}
});

/*===========================ORGANIZAR EL CODIGO DE ACA PARA ARRIBA=============================*/


/*====================UTILS====================*/ 

const createImageNode=(item)=>{
const image =document.createElement("img")
image.src=item.img;
image.alt=item.name;
image.classList.add("image-item");
const imgContainer =document.createElement("div");
imgContainer.classList.add("image-container");
insertNodes(image,imgContainer);
return image;
}

const insertNodes=(parentNode,...nodes)=>{
for(const node of nodes){
  parentNode.appendChild(node) 
};
return;
}


const createCardNode = (project)=>{
const card=document.createElement("div")
card.classList.add("card");
const image = createImageNode(project);
const title= document.createElement('a');
title.innerHTML=project.name;
title.src=project.url;
const desc=document.createElement('h5');
desc.innerHTML=project.desc;
insertNodes(card,image,title,desc);
return card;
}

const fillWith = (data,action,node)=>{
data.map(i=> {
  let imgNode = action(i);
  insertNodes(node,imgNode)
});
}
/*====================STACK LIST====================*/ 

const stackList = document.getElementById("stack").childNodes[1].childNodes[3]

fillWith(datos,createImageNode,stackList);

   
/*====================PROJECTS====================*/
const projectsList = document.getElementById("projects").childNodes[1].childNodes[3]
console.log(projectsList)
// const projectAreaHeight=
fillWith(myProjects,createCardNode,projectsList);


  


