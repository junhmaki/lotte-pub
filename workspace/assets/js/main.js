$(window).on('load', function() {
  $('.main-content').addClass('load');
})

$('.play-btn button').on('click', function () {
  $('.main-sec02').addClass('play')
});

var maskBox = document.querySelectorAll('.main-sec04')[0];

var winW = $(window).width();
var winH = $(window).height();

maskBox.style.setProperty('--x', winW/1.5 + 'px');
maskBox.style.setProperty('--y', winH/2 + 'px');

maskBox.addEventListener('mousemove', e=> {
  maskBox.style.setProperty('--x', e.layerX + 'px');
  maskBox.style.setProperty('--y', e.layerY + 'px');
})

maskBox.addEventListener('mouseleave', e=> {

  maskBox.style.setProperty('--x', winW/1.5 + 'px');
  maskBox.style.setProperty('--y', winH/2 + 'px');
});


gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
  ease: 'none'
});

var half = $(window).height() / 2;

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-sec01",
    start: '0 top',
    end: "+=" + half/0.7,
    scrub: 1,
    // pin: true,
    // markers: true
  }
});
const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-sec01",
    start: `${half} top`,
    end: "+=" + half/0.7,
    scrub: 1,
    // pin: true,
    // markers: true
  }
});


const t3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-sec01",
    start: `${half*2} top`,
    end: "+=" + half/0.7,
    scrub: 1,
    // pin: true,
    // markers: true
  }
});
const t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-sec01",
    start: `${half*3} top`,
    end: "+=" + half/0.7,
    scrub: 1,
    // pin: true,
    // markers: true
  }
});


const t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-sec01",
    start: `${half*4} top`,
    end: "+=" + half/0.7,
    scrub: 1,
    // pin: true,
    // markers: true
  }
});
const t6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-sec01",
    start: `${half*5} top`,
    end: "+=" + half/0.7,
    scrub: 1,
    // pin: true,
    // markers: true
  }
});


const t7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-sec01",
    start: `${half*6} top`,
    end: "+=" + half/0.7,
    scrub: 1,
    // pin: true,
    // markers: true
  }
});
const t8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-sec01",
    start: `${half*7} top`,
    end: "+=" + half/0.7,
    scrub: 1,
    // pin: true,
    // markers: true
  }
});
const t9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main-sec01",
    start: `${half*8} top`,
    end: "+=" + half/0.7,
    scrub: 1,
    // pin: true,
    // markers: true
  }
});

tl.to(".img01", {opacity:1, filter: "blur(0px)", scale:1, duration: 1})
tl.to(".img01", {opacity:0, scale:1.5, duration: 0.3})

t2.to(".img02", {opacity:1, filter: "blur(0px)", scale:1, duration: 1})
t2.to(".img02", {opacity:0, scale:1.5, duration: 0.3})

t3.to(".img03", {opacity:1, filter: "blur(0px)", scale:1, duration: 1})
t3.to(".img03", {opacity:0, scale:1.5, duration: 0.3})

t4.to(".img04", {opacity:1, filter: "blur(0px)", scale:1, duration: 1})
t4.to(".img04", {opacity:0, scale:1.5, duration: 0.3})

t5.to(".img05", {opacity:1, filter: "blur(0px)", scale:1, duration: 1})
t5.to(".img05", {opacity:0, scale:1.5, duration: 0.3})

t6.to(".img06", {opacity:1, filter: "blur(0px)", scale:1, duration: 1})
t6.to(".img06", {opacity:0, scale:1.5, duration: 0.3})

t7.to(".img07", {opacity:1, filter: "blur(0px)", scale:1, duration: 1})
t7.to(".img07", {opacity:0, scale:1.5, duration: 0.3})

t8.to(".img08", {opacity:1, filter: "blur(0px)", scale:1, duration: 1})
t8.to(".img08", {opacity:0, scale:1.5, duration: 0.3})

t9.to(".img09", {opacity:1, filter: "blur(0px)", scale:1, duration: 1})
t9.to(".img09", {opacity:0, scale:1.5, duration: 0.3})

var imgsTop = $('.main-sec03 .text').position().top + $(window).height();
var imgsRight = $('.main-sec03 .text').position().left;

$(window).on('scroll', function () {
  var lineSec02 = $('.main-sec02').offset().top - $(window).height();
  var sc = $('html, body').scrollTop();
  if (sc >= lineSec02) {
    $('.main-sec01').addClass('over');
  } else {
    $('.main-sec01').removeClass('over');
  }
});

$(window).on('resize', function () {
  half = $(window).height() / 2;
  ScrollTrigger.refresh();
});



// const imgBoxSize = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".main-sec03",
//     start: "top top",
//     end: "+=" + (half*2),
//     scrub: 1,
//     // pin: true,
//     // markers: true
//   }
// });

// imgBoxSize.to(".move-img", {
//   top:imgsTop, 
//   right:imgsRight,
//   width:'692px',
//   height:'866px',
//   duration: 1
// });


gsap.to('.move-img', {
  scrollTrigger: {
    trigger: '.main-sec03',
    start: "top 70%",
    onEnter: () => {
      $('.move-img').addClass('active');
    },
    // onLeave: () => {
    //   $('.move-img').removeClass('active');
    // },
    onLeaveBack: () => {
      $('.move-img').removeClass('active');
    },
  },
});


$('.act-sec').each(function () {
  gsap.to($(this), {
    scrollTrigger: {
      trigger: $(this),
      start: "top 70%",
      onEnter: () => {
        $(this).addClass('active');
      },
      // onLeave: () => {
      //   $(this).removeClass('active');
      // },
      onLeaveBack: () => {
        $(this).removeClass('active');
      },
    },
  });
})