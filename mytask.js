 // home section css
  let slide = document.querySelectorAll(".slide");
  var current = 0;

   function cls(){
     console.log("cls")
    for(let i=0;i<slide.length;i++){
      slide[i].style.display="none";
    }
  }

let right = document.getElementById("right");
right.addEventListener("click",()=>{
  cls();
  if(current===slide.length-1)
  current=-1;
current++;
console.log("next")
slide[current].style.display="block";
})

let left = document.getElementById("left");
left.addEventListener("click",()=>{
  cls();
  if(current===0)
  current=slide.length;
current--;
console.log("left")
slide[current].style.display="block";
})

  function start(){
    cls();
    slide[current].style.display="block";
    console.log('start')
  }
  start();

  // smallnavbar animation drop down&up
  let menubtn = document.getElementById("menubtn");
  var updown=1;
  menubtn.addEventListener("click",()=>{
    let smallnavbar=document.querySelector(".smallnavbar")
    if(updown%2!=0){
      smallnavbar.style.animation=" scrollmenubar 0.7s ease forwards"
      updown++;
    }
    else{
      smallnavbar.style.animation=" scrollmenubar2 0.7s ease forwards"
      updown++;
    }
  })

  