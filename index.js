AOS.init({
    duration: 2000,
})

gsap.from('.navbar-brand', {
    opacity: 0, 
    x: -100, 
    duration: 1.5
})
gsap.from('.nav-link', {
    opacity: 0, 
    x: -100, 
    duration: 1.5, 
    stagger: 0.5, 
    delay: 1
})
gsap.from('.navbar-toggler', {
    opacity: 0, 
    duration: 1.5
})
gsap.to(".textonthepic", {
    opacity:1,
    delay:2.5,
    duration:5,
})