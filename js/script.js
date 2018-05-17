function hover() {
  $( ".layout-sidebar-second" ).hover(
    function() {
      $( ".opacity" ).addClass( "hover" );
    }, function() {
      $( ".opacity" ).removeClass( "hover" );
    }
  );
}

function drag() {

    var random = Math.floor(Math.random() * 3);

    var $li = $(".home .layout-sidebar-second .views-element-container");
    $li.eq(random % $li.length).addClass("fluxalone");

    document.getElementById("edit-submit").value = "";

    $( ".txt-vanina .views-row .views-field:nth-child(-n+4)" ).wrapAll( "<div class='entête'/>" );
    $( "#block-vanina-page-title" ).prependTo( ".en-tete" );
    $( ".date-articles" ).prependTo( "#block-vanina-page-title" );

    var a = 3;
    $(".layout-sidebar-second .views-element-container").draggable({
            addClasses:true,
            stack: ".drag",
            axis : "x",
            start: function(event, ui) { $(this).css("z-index", a++); },
        stop: function()
        {
          $(this).css({
            'width': '30%',
          })
        }
    });

    $(" .fluxalone").css({ 'left': '50vw' })
}

function retour() {
  $('.bouton_retour').click(function(e){
    e.preventDefault();
      $('.layout-sidebar-second .views-element-container:nth-child(1)').animate({ 'left': '95vw' }, 500)
      $('.layout-sidebar-second .views-element-container:nth-child(1)').css({'z-index' : '10'});

      $('.layout-sidebar-second .views-element-container:nth-child(2)').animate({ 'left': '90vw' }, 500)
      $('.layout-sidebar-second .views-element-container:nth-child(2)').css({'z-index' : '9'});

      $('.layout-sidebar-second .views-element-container:nth-child(3)').animate({ 'left': '85vw' }, 500)
      $('.layout-sidebar-second .views-element-container:nth-child(3)').css({'z-index' : '8'});
  })
}

function degrader() {
  var degrade_vert = $('#block-views-block-page-etudiant-block-1 .degrader');
  $('.layout-sidebar-second .views-element-container:nth-child(1)').on('scroll', function() {
     var st = $(this).scrollTop();
        degrade_vert.css({ 'opacity' : -(1 - st/100), 'top': st + 'px' });
  });

  var degrade_violet = $('#block-views-block-une-saison-graphique-block-1 .degrader');
  $('.layout-sidebar-second .views-element-container:nth-child(2)').on('scroll', function() {
     var st = $(this).scrollTop();
        degrade_violet.css({ 'opacity' : -(1 - st/100), 'top': st + 'px' });
  });

  var degrade_rouge = $('#block-views-block-expositions-block-1 .degrader');
  $('.layout-sidebar-second .views-element-container:nth-child(3)').on('scroll', function() {
     var st = $(this).scrollTop();
        degrade_rouge.css({ 'opacity' : -(1 - st/100), 'top': st + 'px' });
  });
}

(function($) {
  retour();
  degrader();
  hover();
  drag();
})(jQuery);
