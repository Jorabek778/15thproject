window.addEventListener('DOMContentLoaded' , loader)
const images_container = document.querySelector('.images-container')
const h2 = document.querySelector('.bloc-txt h2')

function loader(){
    const TL = gsap.timeline()

    TL.to(images_container , {
        height:400,
        duration:1.2

    },"-=.2")
    .to('.bloc-txt', {
        height:'auto',
        duration:.5
    })
    .to(h2,{
        y:0,
        duration:.5
    })
    .to('.flip' , {
        y:0,
        duration:1
    },"-=.2")
    .to('.flip-img1' , {
        display:'none'
    })
    .to('.flip' , {
        y:'-100%',
        duration:1
    },)
    .to('.load-container' , {
        autoAlpha:0,

    })
    .add(()=>{
        document.querySelector('video').play()
    })
}