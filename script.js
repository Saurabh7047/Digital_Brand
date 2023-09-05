function init(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20 +"px"
    crsr.style.top = dets.y + 20 +"px"
})
gsap.from('#page1 h1,h2',{
    rotate:"90deg",
    opacity:0,
    scale:0,
    duration:0.5
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top 27%",
        end:"top 0%",
        scrub:3
    }
})
tl.to('#page1 h1',{
    x:-110, 
},"anim")
tl.to("#page1 h2",{
    x:250
},"anim")

tl.to("#page1 video",{
    width:"90%",
},"anim")


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top -110%",
        end:"top -130%",
        scrub:3
    }
})

tl2.to("#main",{
    backgroundColor:"#fff",
  
})
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top -280%",
        end:"top -300%",
        scrub:3
    }
})
tl3.to("#main",{
    backgroundColor:"#0f0d0d"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "300px"
        crsr.style.height = "250px"
        crsr.style.borderRadius = "0 "
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50% "
        crsr.style.backgroundImage = `none`
    })
})

var pup1 =  document.querySelector(".pup1")
var pup2 =  document.querySelector(".pup2")
var pup3 =  document.querySelector(".pup3")
var h41 = document.querySelector("#nav .h41")
var h42 = document.querySelector("#nav .h42")
var h43 = document.querySelector("#nav .h43")

 h41.addEventListener("mouseenter",function(){
    pup1.style.display = "block"
    pup1.style.opacity = "1"
    })
   h41.addEventListener("mouseleave",function(){
            pup1.style.display = "none"
            pup1.style.opacity = "0"
        })
    h42.addEventListener("mouseenter",function(){
            pup2.style.display = "block"
            pup2.style.opacity = "1"
            })
   h42.addEventListener("mouseleave",function(){
            pup2.style.display = "none"
            pup2.style.opacity = "0"
                })
    h43.addEventListener("mouseenter",function(){
            pup3.style.display = "block"
            pup3.style.opacity = "1"
                    })
    h43.addEventListener("mouseleave",function(){
                            pup3.style.display = "none"
                            pup3.style.opacity = "0"
                        })

// h42.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         pup1.style.display = "block"
//         pup1.style.opacity = "1"
//     })
//     elem.addEventListener("mouseleave",function(){
//         pup1.style.display = "none"
//         pup1.style.opacity = "0"
//     })
// })

var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#footer",
        scroller:"#main",
        // markers:true,
        start:"top 22%",
        end:"top 14%",
        scrub:3
    }
})
tl4.to("#main",{
    backgroundColor:"#EDBFFF"
})


var fott = document.querySelector("h2");
fott.addEventListener("mouseenter",function(){
    crsr.style.width = "50px"
    crsr.style.height = "50px"
})
fott.addEventListener("mouseleave",function(){
    crsr.style.width = "20px"
    crsr.style.height = "20px"
})