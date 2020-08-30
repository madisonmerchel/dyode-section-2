$(document).ready(function() {
 if ($('[data-background]').length > 0) {
      $('[data-background]').each(function() {
        var $background, $backgroundmobile, $this;
        $this = $(this);
        $background = $(this).attr('data-background');
        $backgroundmobile = $(this).attr('data-background-mobile');
        if ($this.attr('data-background').substr(0, 1) === '#') {
          return $this.css('background-color', $background);
        } else if ($this.attr('data-background-mobile') && device.mobile()) {
          return $this.css('background-image', 'url(' + $backgroundmobile + ')');
        } else {
          return $this.css('background-image', 'url(' + $background + ')');
        }
      });
    }
  });

$('.ct-slick-homepage').slick({
    arrows:false,
    dots: true,
  });

$(".product-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 1,
  arrows: true, 
      prevArrow:"<img class='arrow-left control-c prev slick-prev' src='https://github.com/madisonmerchel/dyode-section-2/blob/master/Arrow%20Left.png?raw=true'>",
      nextArrow:"<img class='arrow-right control-c next slick-next' src='https://github.com/madisonmerchel/dyode-section-2/blob/master/Arrow%20Right.png?raw=true'>",
      responsive: [
        {
            breakpoint: 992, // tablet breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

$('#trigger-overlay').on('click', function(){
	$(".overlay").addClass('open');	
});
$('.overlay-close').on('click', function(){
	$(".overlay").removeClass('open');	
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("active");

    
    var group = this.nextElementSibling;
    if (group.style.display === "block") {
      group.style.display = "none";
    } else {
      group.style.display = "block";
    }
  });
}

AOS.init(); 
