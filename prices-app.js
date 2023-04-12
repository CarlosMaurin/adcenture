let mm = gsap.matchMedia();
const downContainer = document.querySelector(".down-container");

mm.add("(min-width: 769px)", ()=>{
    const navDesktop = gsap.timeline({paused:true});
    gsap.set(".menu-vertical", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"})
    navDesktop.to(".menu-vertical", {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.2})
    .to(".arrow", {rotate: 90, duration:0.2}, "<")
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
mm.add("(max-width: 768px)", ()=>{
  
    const downContainerMobile = document.querySelector(".service-button");
    const navMobile = gsap.timeline({paused:true});
    gsap.set(".menu-vertical", {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"})
    navMobile.to(".menu-vertical", {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.2})
    .to(".arrow", {rotate: 90, duration:0.2}, "<")
    downContainerMobile.addEventListener("mouseenter", ()=>{
        navMobile.play();
    })
    downContainerMobile.addEventListener("mouseleave", ()=>{
        navMobile.reverse({duration: 0});
    })

})
