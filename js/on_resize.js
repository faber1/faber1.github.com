  //Динамическое изменение высоты блока main, в зависимости от ширина окна браузера (для удержания положения меню)
  function mainSize() {
    var bodyHeight = $('html').height();
    mainHeight = bodyHeight - 80; 
    $('.main').css({height: mainHeight+'px'});
  }
  $(function() { mainSize(); });
  $(window).resize(function() { mainSize(); });