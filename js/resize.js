  //Динамическое изменение размера шрифта у логотипа, в зависимости от ширина окна браузера
  function logoSize() {
    var width = 1000; // ширина, от которой идет отсчет
    var fontSize_h1 = 58; // минимальный размер шрифта h1
    var fontSize_h3 = 20; // минимальный размер шрифта h3
    var lineLogo    = 226; // минимальный размер линии в логотипе
    var faber_logo_height = 74; // минимальный отступ линии от верхнего слова
    var bodyWidth = $('html').width();
    var multiplier = bodyWidth / width;
    if ($('html').width() >= width) {
      fontSize_h1 = Math.floor(fontSize_h1 * multiplier);
      fontSize_h3 = Math.floor(fontSize_h3 * multiplier);
      lineLogo    = Math.floor(lineLogo * multiplier);
      faber_logo_height = Math.floor(faber_logo_height * multiplier);
    }  
    $('h1').css({fontSize: fontSize_h1+'px'});
    $('h3').css({fontSize: fontSize_h3+'px'});
    $('.line_logo').css({width: lineLogo+'px'});
    $('.faber_main_logo').css({height: faber_logo_height+'px'});
    $('#wrap_main').css({  // центрирование логотипа по середине экрана
      left: ($(document).width() - $('#wrap_main').outerWidth())/2,
      top: ($(document).height() - $('#wrap_main').outerHeight())/4
    });
  }
  $(function() { logoSize(); });
  $(window).resize(function() { logoSize(); });