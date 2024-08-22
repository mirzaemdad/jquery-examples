//  jqurey 

$(document).ready(function(){
    $('.btn1').on('click', function(){
        alert('hello');
    })

    $('.btn2').on('click', function(){
        $("h3").hide();
    })

    $('.btn3').on('click', function(){
        $("h3").show();
    })

    $('.btn4').on('click', function(){
        $(this).hide();
    })

    $('.btn5').on('click', function(){
        $('#hideshow').hide();
    })

    $('.btn6').on('click', function(){
        $('#hideshow').show();
    })

    $('.btn7').on('dblclick', function(){
        $('#dbl').hide();
    })
    $('.btn8').on('dblclick', function(){
        $('#dbl').show();
    })

    $('#hover').hover( function(){
        alert('What happened?');
    })

    $('.btn9').on('click', function(){
        $('#tgl').toggle();
    })

    $('.btn10').on('click', function(){
        $('#div1').fadeIn();
        $('#div2').fadeIn('slow');
        $('#div3').fadeIn(2000);
    })

    $('.btn11').on('click', function(){
        $('#div7').fadeToggle();
        $('#div8').fadeToggle('slow');
        $('#div9').fadeToggle(2000);
    })

    $('.btn12').on('click', function(){
        $('#div10').fadeTo('slow', .15);
        $('#div11').fadeTo('slow', .4);
        $('#div12').fadeTo('slow', .7);
    })

    $("#flip").on("click", function(){
        $("#panel").slideDown("slow");
      });

    $(".btn14").on("click", function(){
        $(".panel").slideUp("slow");
      });

    $(".btn15").on("click", function(){
        $(".panel2").slideToggle("slow");
      });

      $('.btn16').on('click', function(){
         $(".ani").animate({left:'550px'});
      })

      $('.btn17').on('click', function(){
         $(".ani2").animate({left:'550px',
            opacity: '.5',
            width: '150px',
            height: '150px'
         });
      })

      $('.btn18').on('click', function(){
        $('.ani3').animate({height: 'toggle'});
      });


      $('.btn19').on('click', function(){
        $('.rmv').remove();
      })

      $('.btn20').on('click', function(){
        $('.empt').empty();
      })
})