  //Динамическое изменение размера шрифта у логотипа, в зависимости от ширина окна браузера
  function fontSize() {
    var width = 1000; // ширина, от которой идет отсчет
    var fontSize_h1 = 62; // минимальный размер шрифта h1
    var fontSize_h3 = 22; // минимальный размер шрифта h3
    var lineLogo    = 242; // минимальный размер градиентной полосы в логотипе
    var bodyWidth = $('html').width();
    var multiplier = bodyWidth / width;
    if ($('html').width() >= width) {
      fontSize_h1 = Math.floor(fontSize_h1 * multiplier);
      fontSize_h3 = Math.floor(fontSize_h3 * multiplier);
      lineLogo    = Math.floor(lineLogo * multiplier);
    }  
    $('h1').css({fontSize: fontSize_h1+'px'});
    $('h3').css({fontSize: fontSize_h3+'px'});
    $('.line_logo').css({width: lineLogo+'px'});
  }
  $(function() { fontSize(); });
  $(window).resize(function() { fontSize(); });