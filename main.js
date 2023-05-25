import './style.css'
import anime from 'animejs'
import { Controller, Scene } from 'scrollmagic'


const sec1 = document.getElementById('sec1')
const leftbtnback = document.querySelector('#leftbtnback')

const leftbtn = document.querySelector('#left')


const AllAfficheCompoent = document.querySelectorAll('.affiche')
const controller = new Controller()
let compteurTop = 0
let compteurBot = AllAfficheCompoent.length - 1

const happyComponent = document.querySelector('#happy')
const galleryComponent = document.querySelector('#gallery')

const happy = anime.timeline({
  autoplay : false
}).add({
  targets : '#happy',
  opacity : [0.5, 1], 
  duration : 100,
  delay : 0,
  easing : 'easeInOutSine'
}).add({
  targets : '#happy',
  opacity : [1, 0], 
  scale : [1, .7], 
  duration : 1000,
  delay : 0,
  visibility : 'hidden',
  easing : 'easeInOutSine'
})

const SceneHappy = new Scene({
  triggerElement: "#indicate",
  duration: 1000,
  triggerHook: 0,
})

SceneHappy.on("progress", function (event) {
  happy.seek(happy.duration * event.progress);
  if(happy.currentTime===1100){
    happyComponent.style.display = 'none'
    galleryComponent.style.visibility = 'visible'
  }
})

SceneHappy.setPin('#indicate')
.addTo(controller)


const controlleTopPosition = () => {
  compteurTop += 1
  
  for(let i = 0; i < AllAfficheCompoent.length ; i++ ){
    const component = AllAfficheCompoent[i]
    if(compteurTop >= AllAfficheCompoent.length) {
      compteurTop = 0
    }
    if(component.className.includes('top')){
        AllAfficheCompoent[i].classList.add('trans')
      setTimeout(() => {
        AllAfficheCompoent[compteurTop - 1 < 0 ? AllAfficheCompoent.length - 1 : compteurTop - 1].classList.remove('top')
        AllAfficheCompoent[compteurTop].classList.add('top')
        AllAfficheCompoent[compteurTop - 1 < 0 ? AllAfficheCompoent.length - 1 : compteurTop - 1].classList.remove('trans')
      }, 1000)
      break
    }
    
  }
}
const controlleBotPosition = () => {
  const AllAfficheCompoent = document.querySelectorAll('.affiche')
  compteurBot += 1
  
  for(let i = 0; i < AllAfficheCompoent.length ; i++ ){
    const component = AllAfficheCompoent[i]
    if(compteurBot >= AllAfficheCompoent.length) {
      compteurBot = 0
    }
    if(component.className.includes('bot')){
      AllAfficheCompoent[i].classList.add('trans')
      setTimeout(() => {
        AllAfficheCompoent[compteurBot - 1 < 0 ? AllAfficheCompoent.length - 1 : compteurBot - 1].classList.remove('bot')
        AllAfficheCompoent[compteurBot].classList.add('bot')
        AllAfficheCompoent[compteurBot - 1 < 0 ? AllAfficheCompoent.length - 1 : compteurBot - 1].classList.remove('trans')
      }, 1000)
          
      break
    }

  }
}
const controlleMilPosition = () => {
  const AllAfficheCompoent = document.querySelectorAll('.affiche')
  
  
  for(let i = 0; i < AllAfficheCompoent.length ; i++ ){
    const component = AllAfficheCompoent[i]
    
    if(!component.className.includes('bot') && !component.className.includes('top')){

      AllAfficheCompoent[i].classList.add('trans')
      setTimeout(() => {
        AllAfficheCompoent[i].classList.remove('trans')
      }, 1000)
          
      break
    }

  }
}

// background

const s2a1 = anime.timeline({ autoplay : true})
.add({
    targets : '#img2',
    opacity : 1,
    translateY : {
      value : [-200, 0],
      duration : 3000
    }
})
const s2a2 = anime.timeline({ autoplay : true})
.add({
    targets : '#img4',
    opacity : 1,
    translateY : {
      value : [200, 0],
      duration : 3000
    }
})


const s1ba = anime.timeline({autoplay : false })
  .add({
    targets : '#img1',
    opacity : 1,
    translateY : {
      value : [0, -50],
      duration : 1500
    }
  })


const enter = new Scene({
  triggerElement : '#img1',
  triggerHook : 0,
  duration: 7000
}).addIndicators({
  colorTrigger:'green'
})

enter.on('enter', event => {
  s2a2.play()
  s2a1.play()
})


const scene0 = new Scene({
  triggerElement : '#img1',
  triggerHook : 0,
  duration: 7000
}).addIndicators({
  colorTrigger:'green'
})
  
  scene0.on("progress", (event) => {
    s1ba.seek(s1ba.duration * event.progress)
  })
  .setPin("#img1")
  .addTo(controller)


// image 1
const s1a1 = anime.timeline({autoplay : false })
  .add({
    targets : '#img2',
    opacity : 1,
    translateY : {
      value : [0, -150],
      duration : 1500
    }
  })


const scene1 = new Scene({
  triggerElement : '#img2',
  triggerHook : 0,
  duration: 7000
}).addIndicators({
  colorTrigger:'green'
})
  
  scene1.on("progress", (event) => {
    s1a1.seek(s1a1.duration * event.progress)
  })
  .setPin("#img2")
  .addTo(controller)


// image 2

const s1a2 = anime.timeline({autoplay : false })
  .add({
    targets : '#img3',
    opacity : 1,
    translateY : {
      value : [0, -70],
      duration : 1500
    }
  })


const scene2 = new Scene({
  triggerElement : '#img3',
  triggerHook : 0,
  duration: 7000
})
  
  scene2.on("progress", (event) => {
    s1a2.seek(s1a2.duration * event.progress)
  })
  .setPin("#img3")
  .addTo(controller)

  // image 4
  const s1a3 = anime.timeline({autoplay : false })
  .add({
    targets : '#img4',
    opacity : 1,
    translateY : {
      value : [0, -250],
      duration : 1500
    }
  })


const scene3 = new Scene({
  triggerElement : '#img4',
  triggerHook : 0,
  duration: 7000
})
  
  scene3.on("progress", (event) => {
    s1a3.seek(s1a3.duration * event.progress)
  })
  .setPin("#img4")
  .addTo(controller)


  leftbtn.addEventListener('click', async (e) => {
    await controlleTopPosition()
    await controlleBotPosition()
    await controlleMilPosition()
    leftbtn.disable = true
    setTimeout(() => {
      leftbtn.disabled = false
    }, 2500)
    leftbtnback.style.visibility = 'visible'
    leftbtnback.style.transform = 'scale(7)'
    leftbtnback.style.opacity = '0'

    setTimeout(() => {
      leftbtnback.style.visibility = 'hidden'

    }, 100)
    setTimeout(() => {
      leftbtnback.style.visibility = 'hidden'
      leftbtnback.style.transform = 'scale(1)'
    leftbtnback.style.opacity = '1'
    }, 300)
  })

function Affiche(){
  const AllAffiche = document.querySelectorAll('.affiche')
  const cl = document.querySelector('#cl')
  const op = document.querySelector('#op')

  for(let i = 0; i < AllAffiche.length; i++) {
    const el = AllAffiche[i]
    el.addEventListener('click', () => {
      if(el.className.includes('top')){
        el.classList.add('open')
        cl.style.display = 'flex'
        op.style.display = 'none'
        console.log('je functionne')

        cl.addEventListener('click', () => {
          el.classList.remove('open')
          cl.style.display = 'none'
          op.style.display = 'flex'
        });
        
        
      }
      })

  }
}

Affiche()