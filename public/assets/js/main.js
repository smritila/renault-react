$(document).ready(function() {
    $('.hero_slide').fullpage({
        fixedElements: '.renault_nav',
        autoScrolling:true,
        scrollHorizontally: false,
        fitToSection:true,
        navigation: true,
        navigationPosition: 'left',
        responsiveHeight: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
    });

    // var myFullpage = new fullpage('#fullpage', {
    //     anchors: ['firstPage', 'secondPage', '3rdPage'],
    //     sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    //     scrollBar: true
    // });





    // CAPTURE PAGE SLIDE HERE


     $('.capture_slide').fullpage({
        fixedElements: '.renault_nav',
        anchors: ['Overview','Exterior','Interior','Technology','Safety','PriceAndSpecifications','Reviews'],
        navigationTooltips: ['Overview','Exterior','Interior','Technology','Safety','Price & Specifications','Reviews'],
        showActiveTooltip: true,
        autoScrolling:true,
        scrollHorizontally: false,
        fitToSection:true,
        navigation: true,
        navigationPosition: 'left',
        responsiveHeight: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        showActiveTooltip: true,
        scrollOverflow: true,
        // normalScrollElements: '.scrollable',
        slideSelector:'slide',
        // scrollingSpeed: 100,
    });



     // CLICKING ON TOOLtIPS SHOW ITS SLIDE

    $( "#fp-nav > ul > li > div" ).each(function(index){
      $(this).click(function() { document.location.href=$(this).parent().children(0).get(0).hash; });
    })



    // LEARN MORE BUTTON FUNCTION IS HERE

    $('.learn_more_btn').click(function (e) {
        let target = $(this).data('target');

        console.log(target);
        $(target).toggleClass('learn_more_open');
           console.log($('.fp-section.active').find('.fp-scrollable').data('iscrollInstance'))
        if ($(target).hasClass('learn_more_open')) { //show

            var iscroll_obj = $('.fp-section.active').find('.fp-scrollable')[0].fp_iscrollInstance;
            // iscroll_obj.scrollTo(0, -($(window).height()), 600);
            
            $('#fp-nav').hide();
            $('.fp-section.active').find('.scroll_main_top_banner_hide').hide();
            $('.close_section_btn').fadeIn('slow')   
        } else {
            // iscroll_obj.scrollTo(0, +($(window).height()), 600);
            $('#fp-nav').show();
            $('.close_section_btn').hide()  
        }

        fullpage_api.reBuild();
        if ($(target).hasClass('learn_more_open')) {
            fullpage_api.setAllowScrolling(false);
        }
        else {
            fullpage_api.setAllowScrolling(true);
        }


        

        $('.close_section_btn').click(function(){
            $('.fp-section.active').find('.scroll_main_top_banner_hide').show();
            iscroll_obj.scrollTo(0, +($(window).height()), 50);
            console.log(target);
            $(target).removeClass('learn_more_open');
            $(this).fadeOut('slow');
            fullpage_api.reBuild();
            fullpage_api.setAllowScrolling(true);
            $('#fp-nav').show();
        })
    });



    // CAR GALLARY SLIDER HERE

    $('.gallary_slide_center_mode_1').slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        centerPadding: '30vh',
        dots: true,
        infinite: true,
        autoplay:true,

        // dotsClass: 'car_gallary_slide_dot',
        appendDots: '.car_gallary_slide_dot_1',
    });

    $('.gallary_slide_center_mode_2').slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        centerPadding: '30vh',
        dots: true,
        infinite: true,
        autoplay:true,

        // dotsClass: 'car_gallary_slide_dot',
        appendDots: '.car_gallary_slide_dot_2',
    });

    $('.gallary_slide_center_mode_3').slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        centerPadding: '30vh',
        dots: true,
        infinite: true,
        autoplay:true,

        // dotsClass: 'car_gallary_slide_dot',
        appendDots: '.car_gallary_slide_dot_3',
    });

    $('.gallary_slide_center_mode_4').slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: false,
        centerPadding: '30vh',
        dots: true,
        infinite: true,
        autoplay:true,

        // dotsClass: 'car_gallary_slide_dot',
        appendDots: '.car_gallary_slide_dot_4',
    });
                    

    // var myFullpage = new fullpage('.capture_slide', {
    //     licenseKey: '',
    //     fixedElements: '.renault_nav',
    //     navigation: true,
    //     navigationPosition: 'left',
    //     anchors: ['Overview','Exterior','Interior','Technology','Safety','CapturTrophy','PriceAndSpecifications','Reviews'],
    //     slidesNavigation: true,
    //     slidesNavPosition: 'bottom',
    //     responsiveHeight: true,
    //     scrollOverflow:true,
    //     scrollBar: false,
    //     controlArrows: false,
    //     loopHorizontal: false,
    //     scrollOverflow: true,
    //     normalScrollElements: '.navbar-collapse',
    // });




    // SHOW CUSTOM FILE UPLOAD FIELD VALUE

    $(".upload_custom").on("change", function() {

      var fileName = $(this).val().split("\\").pop();
      console.log($(this).parent())
      $(this).parent().parent().next(".show_file_name").text(fileName);
    });



    // SIDE NAV CODE IS HERE

    $('[data-toggle="offcanvas"]').on('click', function (e) {
        $('.offcanvas-collapse').toggleClass('open');
        console.log(e.target)

    })
});