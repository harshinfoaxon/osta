$(document).ready(function() {
			$('nav.navbar').addClass('initial');
	  		// var nice = $("html").niceScroll();
			var scroll_start = 0;
			var change_one = $('#change_one');
			var change_two = $('#change_two');
			if ( $( "#change_three" ).length ) { 
			var change_three = $('#change_three');
			var change_three_offset = change_three.offset();
		}
			if ( $( "#change_four" ).length ) { 
			var change_four = $('#change_four');
			var change_four_offset = change_four.offset();
		}
			var change_one_offset = change_one.offset();
			var change_two_offset = change_two.offset();
			
			
			$(document).scroll(function() { 
		
				scroll_start = $(this).scrollTop();
				if((scroll_start > change_one_offset.top) && (scroll_start < change_two_offset.top)) {
					$('nav.navbar').addClass('initial-scroll');					
					$('nav.navbar').removeClass('osta_blue');
					$('nav.navbar').removeClass('initial');
					$('nav.navbar').removeClass('green');
					$("nds").css("display", "block");
					console.log('section1');
				}else if ( $( "#change_three" ).length ) { 
				 if ((scroll_start > change_two_offset.top) && (scroll_start < change_three_offset.top)) {
					$(' nav.navbar').addClass('osta_blue');
					$(' nav.navbar').removeClass('initial-scroll');
					$(' nav.navbar').removeClass('green');
					$(" .nds").css("display", "none");
					console.log('section2');
				} else if ( $( "#change_four" ).length ) { 
					if ((scroll_start > change_three_offset.top) && (scroll_start < change_four_offset.top)) {
					$(' nav.navbar').addClass('green');
					$(' nav.navbar').removeClass('osta_blue');
					$(' nav.navbar').removeClass('initial-scroll');					
					$(" .nds").css("display", "none");
					console.log('section3');
				}
				else  if ((scroll_start > change_four_offset.top)) {
					$(' nav.navbar').addClass('osta_blue');
					$(' nav.navbar').removeClass('green');
					$(' nav.navbar').removeClass('initial-scroll');					
					$(" .nds").css("display", "none");
					console.log('section4');
				}
				else {
					$(' nav.navbar').removeClass('osta_blue');
					$(' nav.navbar').addClass('initial');
					$(' nav.navbar').removeClass('initial-scroll');
					$(' nav.navbar').removeClass('green');
					$(" .nds").css("display", "block");
				}
			} 
				 else if ((scroll_start > change_three_offset.top)) {
					$(' nav.navbar').addClass('green');
					$(' nav.navbar').removeClass(' osta_blue');
					$(' nav.navbar').removeClass('initial-scroll');					
					$(" .nds").css("display", "none");
					console.log('section3');
				} else {
					$(' nav.navbar').removeClass('osta_blue');
					$(' nav.navbar').addClass('initial');
					$(' nav.navbar').removeClass('initial-scroll');
					$(' nav.navbar').removeClass('green');
					$(" .nds").css("display", "block");
				}

			}else if ((scroll_start > change_two_offset.top)) {
					$(' nav.navbar').addClass('green');
					$(' nav.navbar').removeClass('osta_blue');
					$(' nav.navbar').removeClass('initial-scroll');					
					$(" .nds").css("display", "none");
					console.log('section2');
				} else {
					$(' nav.navbar').removeClass('osta_blue');
					$(' nav.navbar').addClass('initial');
					$(' nav.navbar').removeClass('initial-scroll');
					$(' nav.navbar').removeClass('green');
					$(" .nds").css("display", "block");
				}


				

			});
			

			
  // Now bind the event to the desired element
 	

// Div scroll code
// if ( $( "#fullpage" ).length ) {
// 	 $('#fullpage').fullpage();
// }
			
			
		});