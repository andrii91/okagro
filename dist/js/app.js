$(document).ready(function(){function e(e){t=e.touches[0].clientX,l=e.touches[0].clientY}function s(e){if(t&&l){var s=e.touches[0].clientX,i=e.touches[0].clientY,o=t-s,n=l-i;Math.abs(o)>Math.abs(n)&&(o>0?($(".program-link li a.active").parent().next().find("a").trigger("click"),console.log("left")):($(".program-link li a.active").parent().prev().find("a").trigger("click"),console.log("right"))),t=null,l=null}}$(window).scroll(function(){return $(".nav").toggleClass("fixed",$(window).scrollTop()>0)}),$(window).scrollTop()>0&&$(".nav").addClass("fixed"),$("#nav-icon").click(function(){$(this).toggleClass("open"),$(this).parents("nav").toggleClass("open")}),$(window).width()<1200&&$(".menu li a").click(function(){$("nav").removeClass("open")}),Object.defineProperty(HTMLMediaElement.prototype,"playing",{get:function(){return!!(this.currentTime>0&&!this.paused&&!this.ended&&this.readyState>2)}}),$("body").on("click touchstart",function(){const e=document.getElementById("video-bg");e.playing||e.play()});var i=$(".rev_slider");i.on("init",function(e,s,i){var t=$(s.$slides[s.currentSlide]),l=t.next(),o=t.prev();o.addClass("slick-sprev"),l.addClass("slick-snext"),t.removeClass("slick-snext").removeClass("slick-sprev"),s.$prev=o,s.$next=l}).on("beforeChange",function(e,s,i,t){console.log("beforeChange");var l=$(s.$slides[t]);console.log(s.$prev,s.$next),s.$prev.removeClass("slick-sprev"),s.$next.removeClass("slick-snext"),next=l.next(),prev=l.prev(),prev.prev(),prev.next(),prev.addClass("slick-sprev"),next.addClass("slick-snext"),s.$prev=prev,s.$next=next,l.removeClass("slick-next").removeClass("slick-sprev")}),i.slick({speed:1e3,arrows:!1,dots:!1,focusOnSelect:!0,prevArrow:'<button class="prev"> <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 8.707a1 1 0 0 1 0-1.414L6.657.929A1 1 0 0 1 8.07 2.343L2.414 8l5.657 5.657a1 1 0 1 1-1.414 1.414L.293 8.707ZM2 9H1V7h1v2Z" fill="#fff"/></svg></button>',nextArrow:'<button class="next"> <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 0 0 .93 2.343L6.586 8 .929 13.657a1 1 0 1 0 1.414 1.414l6.364-6.364ZM7 9h1V7H7v2Z" fill="#fff"/></svg></button>',infinite:!0,centerMode:!0,slidesPerRow:1,slidesToShow:1,slidesToScroll:1,centerPadding:"0",swipe:!0,customPaging:function(e,s){return""},responsive:[{breakpoint:768,settings:{arrows:!0}}]}),i.on("afterChange",function(e,s,i,t){$(".video_slider .slick-slide").find("video").trigger("pause").removeAttr("controls"),$(".video_slider .slick-slide").find(".video-info").show(),$(".video_slider .slick-slide").find(".play-btn").show();$(".video_slider .slick-active").find("video").trigger("play").attr("controls","controls");$(".video_slider .slick-active").find(".video-info").hide(),$(".video_slider .slick-active").find(".play-btn").hide()}),$(".speaker-slider").slick({rows:2,slidesToShow:4,prevArrow:'<button class="prev"> <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 8.707a1 1 0 0 1 0-1.414L6.657.929A1 1 0 0 1 8.07 2.343L2.414 8l5.657 5.657a1 1 0 1 1-1.414 1.414L.293 8.707ZM2 9H1V7h1v2Z" fill="#1F134A"/></svg></button>',nextArrow:'<button class="next"> <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 0 0 .93 2.343L6.586 8 .929 13.657a1 1 0 1 0 1.414 1.414l6.364-6.364ZM7 9h1V7H7v2Z" fill="#1F134A"/></svg></button>',responsive:[{breakpoint:768,settings:{slidesToShow:2}}]}),$(".logo-slider5").slick({rows:3,slidesToShow:5,arrows:!1,responsive:[{breakpoint:768,settings:{slidesToShow:2}}]}),$(".program-link li a").click(function(e){e.preventDefault(),$(".program-link li a").removeClass("active"),$(this).addClass("active"),$(".content-item").removeClass("active"),$($(this).attr("href")).addClass("active")}),$(".scroll").click(function(e){e.preventDefault();var s=$(this).attr("href"),i=$(s).offset().top;$("body,html").animate({scrollTop:i-100},300)}),setTimeout(function(){$("input, select").styler()},100),$('input[name="package_type"]').change(function(){"Юридична особа"==$(this).val()?$(".package_2-item").show():$(".package_2-item").hide()}),$(".price-slider").slick({dots:!1,infinite:!1,prevArrow:'<button class="prev"> <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 8.707a1 1 0 0 1 0-1.414L6.657.929A1 1 0 0 1 8.07 2.343L2.414 8l5.657 5.657a1 1 0 1 1-1.414 1.414L.293 8.707ZM2 9H1V7h1v2Z" fill="#fff"/></svg></button>',nextArrow:'<button class="next"> <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 0 0 .93 2.343L6.586 8 .929 13.657a1 1 0 1 0 1.414 1.414l6.364-6.364ZM7 9h1V7H7v2Z" fill="#fff"/></svg></button>',speed:300,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:769,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".logo-slider").slick({dots:!1,infinite:!1,speed:300,arrows:!1,slidesToShow:5,slidesToScroll:5,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]}),$(".arr-prev").click(function(){$(".logo-slider5").slick("slickPrev")}),$(".arr-next").click(function(){$(".logo-slider5").slick("slickNext")}),$(".arr-previnfo").click(function(){$(".logo-slider").slick("slickPrev")}),$(".arr-nextinfo").click(function(){$(".logo-slider").slick("slickNext")}),document.addEventListener("touchstart",e,!1),document.addEventListener("touchmove",s,!1);var t=null,l=null});