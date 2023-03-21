gsap.registerPlugin()

let mm = gsap.matchMedia();
const downContainer = document.querySelector(".down-container");

mm.add("(min-width: 769px)", ()=>{
    const navDesktop = gsap.timeline({paused:true});
    gsap.set(".menu-vertical", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"})
    navDesktop.to(".menu-vertical", {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5})
    .to(".arrow", {rotate: 90, duration:0.5}, "<")
    downContainer.addEventListener("mouseenter", ()=>{
        navDesktop.play();
    })
    downContainer.addEventListener("mouseleave", ()=>{
        navDesktop.reverse({duration: 0});
    })
})


const toggler = document.querySelector(".bars");
const navbarContainer = document.querySelector(".navbar-container")


mm.add("(max-width: 768px)", ()=>{
    const menuTl = gsap.timeline({paused: true});

    menuTl.to(".navbar-container", {display: "flex", opacity:1, duration: 0})
    .to(".navbar-bg", {opacity: 1, duration: 0.6})
    .from(".navbar-list-links", {y:"100%", opacity:0, stagger: 0.3})

    let menu = 1;
    
    const animationFunciton = ()=>{

        toggler.classList.toggle("open")
    
        if(menu == 1){
            menuTl.play();
            menu = 0;
        }else{
            menuTl.reverse();
            menu = 1;
        }
    }
    
    toggler.addEventListener("click", animationFunciton)

    return ()=>{
    toggler.removeEventListener("click", animationFunciton)}

})




// let hola;
// let numero = 17
// window.addEventListener("resize", ()=>{
//     hola = window.innerWidth - numero;
//     console.log(hola)
// })




const titleText = document.querySelectorAll(".title-text")
const prueba = gsap.timeline({delay: 1});
prueba.set(".bg1, .bg2, .bg3, .bg4", {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
.to(".bg1, .bg2, .bg3, .bg4", {clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", duration: 1, stagger: 0.3})
.from(".onda", {scale:0, opacity: 0})
.from(".header-container", {y:"-10", opacity:0}, "-=0.5")
.from(".main-title-container", {y:"50", opacity: 0}, "-=0.5")
.from(".second-title-container", {y:"50", opacity: 0}, "-=0.2")
.from(".stairs-big-container", {y:"50", opacity: 0}, "-=0.2")


gsap.to(".stairs-list", {y:-108, yoyo:true, repeat:-1, ease:"none", duration:6})

///////////////////////////////////////



const cardContainerAnimate = document.querySelectorAll(".card-animate")
// const cardCont = document.querySelector(".card-cont");

cardContainerAnimate.forEach((item) =>{
    const cardAnimation = gsap.timeline({paused:true}, {default: {duration: 0.2, ease:"none"}});

    cardAnimation.to(item.querySelector(".card-cont"), {opacity: 1})
    .to(item.querySelector(".content"), {y:-20}, "<")
    .from(item.querySelector(".see-more-button"), {opacity: 0, y: 5}, "<")
    
    
    item.addEventListener("mouseenter", ()=>{
        cardAnimation.play()
    });
    
    item.addEventListener("mouseleave", ()=>{
        cardAnimation.reverse()
    })
})
//////////////////////////////////////////////////////////////////////////
/////////////////////////// SECTION 4 ///////////////////////////////////
////////////////////////////////////////////////////////////////////////




let horizontalSections = gsap.utils.toArray(".horizontal-scroll .horizontal-brand");
const horizontalScrollContainer = document.querySelector(".horizontal-scroll-container");

const horizontalScroll = gsap.to(horizontalSections, {
    xPercent: -100 * (horizontalSections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-scroll",
        pin: true,
        scrub: 0.1,
        // markers: true,
        end: `+=${horizontalScrollContainer.offsetWidth}`
    }
})


//////////////////////////////////////////////////////////////////////////
/////////////////////////// SECTION 6 ///////////////////////////////////
////////////////////////////////////////////////////////////////////////



const infinitWordsScroll = gsap.to(".infinit-words", {
    xPercent: -100, duration: 6, ease:"none",
    scrollTrigger:{
        trigger: ".infinit-words-container",
        scrub: 0.5,
        start: "top, bottom",
        // markers: true,
        end: "+=4000"
    }
})

const infinitWordsScroll2 = gsap.to(".infinit-words2", {
    xPercent: 100, duration: 6, ease:"none",
    scrollTrigger:{
        trigger: ".infinit-words-container2",
        scrub: 0.5,
        start: "top, bottom",
        // markers: true,
        end: "+=6000"
    }
})


// const infinitWordsArray = gsap.utils.toArray(".infinit-words")
// const infinitWordsContainer = document.querySelector(".infinit-words-container")
// const infinitWordsScroll = gsap.to(infinitWordsArray, {
//     xPercent: -100 * (infinitWordsArray.length - 1), duration: 6, ease:"none",
//     scrollTrigger:{
//         trigger: ".infinit-words-container",
//         scrub: 0.5,
//         start: "top, bottom",
//         markers: true,
//         end: "+=6000"
//     }
// })

// const infinitWordsArray2 = gsap.utils.toArray(".infinit-words2")
// const infinitWordsContainer2 = document.querySelector(".infinit-words-container2")
// const infinitWordsScroll2 = gsap.to(infinitWordsArray2, {
//     xPercent: 100 * (infinitWordsArray2.length - 1), duration: 6, ease:"none",
//     scrollTrigger:{
//         trigger: ".infinit-words-container2",
//         scrub: 0.5,
//         start: "top, bottom",
//         markers: true,
//         end: "+=6000"
//     }
// })








//////////////////////////////////////////////////////////////////////////
/////////////////////////// SECTION 3 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const verticalBgAnimation = gsap.timeline({defaults:{duration:0.6}, scrollTrigger:{
    trigger: ".section5",
    // markers: true,
    start: "top top",
    // end: "+=2000",
    // scrub: true,
    // pin: true,
    // toggleActions: "none none none none"
    // once: true
}});
verticalBgAnimation.set(".vertical1, .vertical2, .vertical3, .vertical4, .vertical5, .vertical6, .vertical7", {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"})
.to(".vertical1", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"})
.to(".vertical2", {clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}, "-=0.3")
.to(".vertical3", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}, "-=0.3")
.to(".vertical4", {clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}, "-=0.3")
.to(".vertical5", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}, "-=0.3")
.to(".vertical6", {clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"}, "-=0.3")
.to(".vertical7", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"}, "-=0.3")
.from(".team-title", {x:"-50%", opacity: 0}, "<")
.from(".team-card1", {opacity:0, scale: 0}, "-=0.2")
.from(".team-card2", {opacity:0, scale: 0}, "-=0.2")
.from(".team-card3", {opacity:0, scale: 0}, "-=0.2")
.from(".team-card4", {opacity:0, scale: 0}, "-=0.2")
.from(".team-card5", {opacity:0, scale: 0}, "-=0.2")
.from(".team-card6", {opacity:0, scale: 0}, "-=0.2")













