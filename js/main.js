gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if(ScrollTrigger.isTouch !== 1){
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.5,
	effects: true
});
gsap.fromTo('header', {opacity: 1}, {opacity: 0, scrollTrigger: {
	trigger: 'header',
	start: 'center',
	end: '850',
	scrub: true
}});
gsap.fromTo('nav', {backdropColor: 'rgba( 0, 0, 0, 0)'}, {backdropColor: 'rgba( 0, 0, 0, 0.25 )', scrollTrigger: {
	trigger: 'nav',
	start: 'center',
	scrub: true
}});
const items_left = gsap.utils.toArray('.gallery-left .gallery-item');
const items_right = gsap.utils.toArray('.gallery-right .gallery-item');

items_left.forEach(item=>{
	gsap.fromTo(item, {x: -50, opacity: 0}, {opacity: 1,x:0, scrollTrigger: {
	trigger: item,
	start:  '-850',
	end: '-100',
	scrub: true
}})
});

items_right.forEach(item=>{
	gsap.fromTo(item, {x: 50, opacity: 0}, {opacity: 1,x:0, scrollTrigger: {
	trigger: item,
	start:  '-850',
	end: '-100',
	scrub: true
}})
});
}



const menuTrigger = document.querySelector('nav .menuTrigger');
const menu = document.querySelector('nav ul');

menuTrigger.addEventListener('click', ()=>{
	menuTrigger.classList.toggle("open");
	menu.classList.toggle("active");
})