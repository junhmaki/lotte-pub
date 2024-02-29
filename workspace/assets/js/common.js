gsap.registerPlugin(SplitText, ScrollTrigger);
gsap.defaults({
  ease: 'none'
});


//PC header 스크롤 class 조절
var oldsc = 0;
$(window).on('scroll', function () {
  var sc = $('html, body').scrollTop();
  if (sc > 0) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }

  if (sc > oldsc) {
    $('.header').addClass('down');
  } else {
    $('.header').removeClass('down');
  }
  oldsc = sc;
});


if ($('.sub-content').length) {
  $('.sub-content').addClass('load');
}

//gsap 텍스트 opacity 공통
const quotes = document.querySelectorAll(".quote");
function setupSplits() {
  quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = new SplitText(quote, { 
      type: "lines,words,chars",
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 60%",
      },
      duration: 1, 
      opacity: 0.1, 
      stagger: 0.01,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();

//gsap 서브페이지 모션 공통
if ($('.mid-text').length) {
  $('.mid-text').each(function () {
    gsap.to($(this), {
      scrollTrigger: {
        trigger: $(this),
        start: "top 70%",
        end: "+=10%",
        scrub: 1,
        // markers: true,
      },
      opacity:1,
      filter:'blur(0)',
      transform:'translateY(0)',
    });  
  });  
}
//gsap 서브페이지 모션 공통
if ($('.img-full').length) {
  $('.img-full').each(function () {
    gsap.to($(this), {
      scrollTrigger: {
        trigger: $(this),
        start: "top 70%",
        end: "+=20%",
        scrub: 1,
        // markers: true,
      },
      opacity:1,
      transform:'scale(1)',
    });  
  });
}
if ($('.act-sec').length) {
  $('.act-sec').each(function () {
    gsap.to($(this), {
      scrollTrigger: {
        trigger: $(this),
        start: "top 70%",
        onEnter: () => {
          $(this).addClass('active');
        },
        onLeaveBack: () => {
          $(this).removeClass('active');
        },
      },
    });
  });
}


$('.popup-wrap .close').on('click', function() {
  $('.popup-wrap').hide();
});


$('button[data-popup]').on('click', function () {
  $('.popup-wrap').show();
});

var fileName = [
  'index', 'fuvi', 'fuce', 'fume', 'tohi', 'path', 'pahi', 'mvmo'
]

$('.footer .next').on('click', function () {
  var pageName = $('body').attr('data-page');
  var count = fileName.indexOf(pageName);
  if (count == 7) {
    count = 0;
  } else {
    count++;
  }
  location.href = `/${fileName[count]}.html`;
});