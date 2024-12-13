gsap.from('#text-div h1', {
    duration: 1,  
    opacity: 0, 
    x: -500,  
    stagger: 0.2, 
});
gsap.to("#nav img", {
    rotate: 360,
    duration: 2,  
    repeat: -1,   
});
gsap.to("small-image-div img", {
    duration: 1,  
    opacity: 0, 
    x: -500,  
    stagger: 0.2,  
});
