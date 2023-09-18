
$(document).ready(function () {
    if (navigator.appName.indexOf("Internet Explorer") != -1) {
        $('.service-boxes-container').attr('style', 'height:550px;');
    }
    $(".menubut").click(function () {
if(document.getElementById('mainmenu').style.display == 'none'){
    $(".mainmenu").css("display", "block");
} else {$(".mainmenu").css("display", "none");}       
    });
    $(".menubut").mouseout(function () {
        $(".mainmenu").css("display", "block");
    });
});

$(window).load(function () {
    $(".mainmenu .children").hide();
    $(".mainmenu .parent").hover(
                function () {
                    $(this).children(".mainmenu .parent .children").slideDown();
                },
                function () {
                    $(this).children(".mainmenu .parent .children").hide();
                });
    $(".mainmenu .parent .sub-menu li a").hover(
                function () {
                    var content = $(this).html();
                    if (content == "AHIS Login (DMH Users)") {
                        $(this).attr('onclick', 'Javascript:window.open(this.href);return false;');
                        //$(this).attr('href', '#');
                        //$(".mainmenu .parent .sub-menu li a").on("click", function () {
                        //  window.open('www.yourdomain.com', '_blank');
                        //});
                    }
                });

    //$(".service_btn").hover(
    //          function () {
    //              $(this).children('.one-third').animate({ bottom: "0px" }, 500, function () { });
    //          }, function () {
    //              $(this).children('.one-third').animate({ bottom: "-65px" }, 500, function () { });
    //              $(this).children('.popup').hide();
    //          });
});

(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function homePagePopup(sw) {
    if (sw == 1) {
        // Show popup
        $('.slider-container').attr('style', 'z-index:1055;');
        $('.slider-container .wrapper').attr('style', 'overflow:visible');
        $('.service_box').attr('style', 'height:35px;overflow:hidden;');
        document.getElementById('blackout').style.visibility = 'visible';
        document.getElementById('divpopup').style.visibility = 'visible';
        document.getElementById('blackout').style.display = 'block';
        document.getElementById('divpopup').style.display = 'block';
    }
    else {
        // Hide popup
        $('.slider-container').attr('style', 'z-index:1053;');
        $('.slider-container .wrapper').attr('style', 'overflow:hidden');
        $('.service_box').attr('style', 'height:auto;overflow:visible;');
        document.getElementById('blackout').style.visibility = 'hidden';
        document.getElementById('divpopup').style.visibility = 'hidden';
        document.getElementById('blackout').style.display = 'none';
        document.getElementById('divpopup').style.display = 'none';
    }
}

function popup(sw, id) {
    if (sw == 1) {
        // Show popup
        $('.slider-container').attr('style', 'z-index:1055;');
        $('.slider-container .wrapper').attr('style', 'overflow:visible');
        $('.service_box').attr('style', 'height:35px;overflow:hidden;');
        document.getElementById('blackout_' + id).style.visibility = 'visible';
        document.getElementById('divpopup_' + id).style.visibility = 'visible';
        document.getElementById('blackout_' + id).style.display = 'block';
        document.getElementById('divpopup_' + id).style.display = 'block';
    }
    else {
        // Hide popup
        $('.slider-container').attr('style', 'z-index:1053;');
        $('.slider-container .wrapper').attr('style', 'overflow:hidden');
        $('.service_box').attr('style', 'height:auto;overflow:visible;');
        document.getElementById('blackout_' + id).style.visibility = 'hidden';
        document.getElementById('divpopup_' + id).style.visibility = 'hidden';
        document.getElementById('blackout_' + id).style.display = 'none';
        document.getElementById('divpopup_' + id).style.display = 'none';
    }
}

$("#blackout").click(function () {
    document.getElementById('blackout').style.display = 'block';
    document.getElementById('divpopup').style.display = 'block';
    document.getElementById('blackout').style.visibility = 'visible';
    document.getElementById('divpopup').style.visibility = 'visible';
});
$(document).ready(function () {
    $(window).resize(function () {
        $('.divpopup').css({
            left: ($(window).width() - $('#divpopup').outerWidth()) / 2,
            top: ($(window).height() - $('#divpopup').outerHeight()) / 2
        });
    });
    // To initially run the function:
    $(window).resize();
});

$(document).ready(function () {
    $("html, body").scrollTop(0);
// $(".floting-btn").bind('touchstart click',function(){
//     $(".tooltip-box").toggleClass("intro");
// });
// $(".wp-pagenavi > input").bind('touchstart click',function(){
//     $("html, body").animate({ scrollTop: 0 }, "slow");
//     return false;
// });
window.setInterval(function(){
    $(".wp-pagenavi > input").bind(' click',function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
}, 3000);
});
$(document).on('ready', function() {
     
    $(".regular").slick({
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 1750,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }); 
  });

/*$(document).on({
    "contextmenu": function (e) {
        console.log("ctx menu button:", e.which); 

        // Stop the context menu
        e.preventDefault();
    },
    "mousedown": function(e) { 
        console.log("normal mouse down:", e.which); 
    },
    "mouseup": function(e) { 
        console.log("normal mouse up:", e.which); 
    }
});*/