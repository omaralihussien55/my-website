
let canvas = document.getElementById("canvas1");
let serviceContent = []

let right_fish = Array.from(document.querySelectorAll(".right-fish img"));
let left_fish = Array.from(document.querySelectorAll(".left-fish img"));
let sea = document.querySelector(".sea");
let bubbles = document.querySelector(".bubble");
let c = canvas.getContext('2d');
let navbar = document.getElementById("navbar");
let header = document.querySelector("header");

header.style.height = window.innerHeight 
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;
// header.style.paddingTop = navbar.clientHeight

window.onresize = BackGround
function BackGround(){
 let move = 30;
 header.style.height = window.innerHeight 
 canvas.width = window.innerWidth ;
 canvas.height = window.innerHeight ;
//  header.style.paddingTop = navbar.clientHeight

c.beginPath();
c.fillStyle = 'black';
c.fillRect(0,0,canvas.width,canvas.height)
c.fill();

class Sea{
    constructor(){
this.x = 0;
this.y = 0
    }

    draw(){
        c.drawImage(sea,this.x,this.y,canvas.width,canvas.height)
    }
}
class Fish{
    constructor(img,y,xx){
this.w = 70
this.h = 50
this.x = 0
this.y = y
this.velocity = {x:xx,y:2}
this.img = img

}

draw(){
    c.drawImage(this.img,this.x,this.y,this.w,this.h)
    }

 update(){
     this.draw()
     if(this.velocity.x <=0 ){
        this.x += 1
     }else{
        this.x += this.velocity.x
     }
        
 }
}

class FishLeft extends Fish {
    constructor(img,y,xx){
      super(img,y,xx)
this.x = canvas.width
}

draw(){
    c.drawImage(this.img,this.x-this.w,this.y,this.w,this.h)
    }

 update(){
     this.draw()
     if(this.velocity.x <= 0){
        this.x -= 1
     }else{
        this.x -= this.velocity.x
     }
      
 }
}

class Bubble {
    constructor(x,y){
this.x = x
this.y = y
this.w = 30
this.h = 30
this.velocity = 1
    }

    draw(){
        c.drawImage(bubbles,this.x,this.y,this.w,this.h)
    }

    update(){
        this.draw()
     this.y -= this.velocity 
    }
}


let seas = new Sea()
let bubbleArray = [new Bubble()]
let fishArray = [];
let fishArray2 = [];
let random1 ;
let random2;
let timer = 2950
setInterval(()=>{
  random1   = Math.floor(Math.random() * right_fish.length);
  let y = Math.random() * (canvas.height - 50)
  let xx = Math.floor(5*Math.random())
  if(fishArray.length >= 10){

  }else{
    fishArray.push(new Fish(right_fish[random1],y,xx))
  }
  let random = Math.floor(Math.random()* fishArray.length);

  if(fishArray.length > 0){
if(bubbleArray.length >= 8){

}else{
    bubbleArray.push(
        new Bubble(fishArray[random].x+(fishArray[random].w + 10),
        fishArray[random].y)
        
        )
}
  
  }
  
},timer)

setInterval(()=>{
    random2  = Math.floor(Math.random() * left_fish.length);
    let y = Math.random() * (canvas.height - 50)
    let xx =Math.floor(5*Math.random())

if(fishArray2.length >=10){

}else{
    fishArray2.push(new FishLeft(left_fish[random2],y,xx))
}

let random = Math.floor(Math.random()* fishArray2.length);

if(fishArray2.length > 0){
   if(bubbleArray.length >=8){

   }else{
    bubbleArray.push(
        new Bubble(fishArray2[random].x-(fishArray2[random].w + 10),
        fishArray2[random].y)
        
        )

   }
}
  },3200)

function init(){
  
c.clearRect(0,0,canvas.width,canvas.height);
seas.draw()
// .....................
fishArray.forEach((fish,indexFish)=>{
fish.update()
if(fish.x - fish.w >= canvas.width || fish.x < 0   ){
  setTimeout(()=>{
    fishArray.splice(indexFish,1);
  },0)  
}
})
// ..................
fishArray2.forEach((fish,index)=>{
    fish.update()
    if( fish.x + fish.w  <= 0   ){
      setTimeout(()=>{
        fishArray2.splice(index,1);
      },0)
        
    }
})
// ..........................
bubbleArray.forEach((bubble,index)=>{
bubble.update()

if(bubble.y + bubble.w <= 0 ){
    setTimeout(()=>{
        bubbleArray.splice(index,1)
    })
}
})

if(move >= 360 || move <=0 ){
    move = 1
   }else{
       move += 0.77
   }

serviceContent.forEach((i)=>{
 i.style.background = `linear-gradient(${move}deg,rgb( ${move}, 12, 194) 40% ,rgb( ${move}, 223, 187) 40%)`
})

requestAnimationFrame(init); 

}
init()

}
BackGround()
// ..............................start function  socialbtn  in background in header 

function socialBtn(){
    
let socialBtn = document.querySelector(".social-btn");
let socialContent = document.querySelector(".social-content");
let socialUL = document.querySelector(".social-content-ul");
let sociaBtnContent = document.querySelector(".social-btn-content")

socialBtn.addEventListener("click",function(){

  
if(socialContent.classList.contains("show")&& socialUL.classList.contains("show")){
    sociaBtnContent.classList.remove("show");
    sociaBtnContent.classList.add("unshow");
    socialUL.classList.toggle("show") ;
    setTimeout(function(){
   
        socialContent.classList.toggle("show")
    },300)
 
}else{
    sociaBtnContent.classList.remove("unshow");
    sociaBtnContent.classList.add("show");
    socialContent.classList.toggle("show");
setTimeout(function(){
    socialUL.classList.toggle("show");
},300)
};

})

}

socialBtn()
// .................... end function btn social
// start servic 
let ArrayServic = [
{id:1,data:'fade-right',i:'fas fa-palette fa-5x text-danger mx-auto',title:'UI/UX Design',
info:' Designers use them to build interfaces in computerized software or hardware, with an emphasis on form or style.',
color1:"rgb(142, 12, 194)",
color2:"rgb(10, 183, 196)",
deg :110
},
{id:2.,data:'fade-up',i:'fal fa-phone-laptop fa-5x m-auto text-success',title:'Responsive Site',
info:' A site that supports all screen sizes from mobile phones to computers,',
color1:"rgb(207, 15, 143)",
color2:"rgb(8, 223, 187)",
deg :70
},
{id:3,data:'fade-left',i:'fab fa-buromobelexperte fa-5x m-auto text-info',title:'Flexible Site',
info:' Flexible and streamlined website design with ease for the user ',
color1:"rgb(241, 94, 9)",
color2:"rgb(16, 218, 133)",
deg :150
},

]

let serviceItem = document.querySelector(".servic-item");

function  Services(){
let item = ArrayServic.map((item)=>{
   const {i,info,title,data,color1,color2,deg} = item
 return `
   <div class="col-10 col-md-4 mx-auto mb-3 " data-aos="${data}">
   <div class="servic-content move" style="background: linear-gradient(${deg}deg,${color1} 40% ,${color2} 40%)">
      <div class="d-flex mb-3">
        <i class="${i}"></i>
      </div>
      <h4 class="p-1 mb-2 text-center text-white font-title">${title}</h4>
      <p class="p-1 mb-2 text-white">${info}</p>
  </div>
</div>
   `
}).join("");

serviceItem.innerHTML = item

}
Services()


let heightArrayServic = []
serviceContent = document.querySelectorAll(".servic-item .servic-content");
serviceContent.forEach((i)=>{

    heightArrayServic.push(i.clientHeight)
  let heightMax = Math.max(...heightArrayServic)
  
  i.style.height = heightMax
})
// end services

// start projects
let ArrayProject = [
{
  photo:'./img/Calculator-amico.png',title:'Calculator',
  info:'Adjust your calculations with ease',link:'https://omaralihussien55.github.io/calculator/',
},
{
  photo:'./img/Customer Survey-bro.png',title:'Survey',
  info:'Say your opinion and win prizes',link:'https://omaralihussien55.github.io/surveys/',
},
{
  photo:'./img/hamburger.png',title:'Healthy Food',
  info:'Say your opinion and win prizes',link:'https://omaralihussien55.github.io/healthy-food/',
},
{
  photo:'./img/download (4).png',title:'Football Animation',
  info:'It looks like a football match',link:'https://omaralihussien55.github.io/animation-playerfootball/',
},
{
  photo:'./img/downloadclock.png',title:'Clock',
  info:'Very beautiful wall clock',link:'https://omaralihussien55.github.io/clock/',
},
{
  photo:'./img/date-of-birth.png',title:'birth day',
  info:'Calculate your date of birth',link:'https://omaralihussien55.github.io/brithday/',
},
{
  photo:'./img/downloadbubble.png',title:'Bubble animation',
  info:'Enjoy the moving balls',link:'https://omaralihussien55.github.io/animation-bubble/',
},
{
  photo:'./img/whatsapp.png',title:'Whatsapp Clone',
  info:'Simulation for WhatsApp',link:'https://omaralihussien55.github.io/whatsapp/',
},

]
function project(){
let items = ArrayProject.map((item)=>{
const {photo,title,info,link,data} = item
return `

<div class="col-10 col-md-4 mx-md-0 mx-auto mb-2 project-item" data-aos='fade-up'>
<div class="project-content">
   <div class="project-img h-50 mb-2 d-flex">
     <img src="${photo}" class="w-75 h-100 m-auto">
   </div>

    <h5 class="mb-1 p-1 text-info font-title">${title}</h5>
    <p class="mb-1 p-1 text-muted">${info}</p>
    <a href="${link}" target="_blank" class="mb-2 btn btn-view">view site</a>
</div>
</div>
`
}).join("")
document.querySelector(".project-items").innerHTML = items
}
project()


// end projects

//  start about 
let aboutBlock = document.querySelectorAll(".about-block");
let heightArrayAbout = []
aboutBlock.forEach((i)=>{

    heightArrayAbout.push(i.clientHeight)
  let heightMax = Math.max(...heightArrayAbout)
  
  i.style.height = heightMax
})
// end about


let a_Scroll = document.querySelectorAll(".a-scroll");
a_Scroll.forEach((i)=>{
  i.addEventListener("click",(e)=>{
let id = e.target.dataset.id;
a_Scroll.forEach((item)=> item.classList.remove("active"));
i.classList.add("active");

document.getElementById(`${id}`).scrollIntoView({behavior:"smooth",block:"start"})
  })
})

document.onscroll = function(){
  
document.querySelectorAll(".block").forEach((i)=>{
  if(window.scrollY >= i.offsetTop - 3 ){
      
    let id = i.id
   a_Scroll.forEach(i=> {
        i.classList.remove("active");
       document.querySelector(`[data-id=${id}]`).classList.add("active")
       });
    
}
  })
}


AOS.init();


