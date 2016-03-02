    function updatePerpective(value)
    {
      document.getElementById('container').style.perspective = value;
      //document.getElementById('perspective-value').innerText = value;
    }

    function setPerspectiveOrigin(event)
    {
      var container = document.getElementById('container');

      var offsetX = event.pageX - container.offsetLeft;
      var offsetY = event.pageY - container.offsetTop;
      
      var originStyle = (100 * offsetX / container.offsetWidth) + '% ' + (100 * offsetY / container.offsetHeight) + '%';
      container.style.perspectiveOrigin = originStyle;
    }

    window.addEventListener('load', function() {
      var container = document.getElementById('container');
      container.addEventListener('mousemove', setPerspectiveOrigin, false);
      container.addEventListener('mouseout', function() {
        container.style.webkitPerspectiveOrigin = '50% 50%';
      }, false);
      updatePerpective(500)
    }, false);


    $(function() {      

      var navigation_bar = $('.jquery-script-center');
      var lastScrollTop = $('body').scrollTop();

      var handleScroll = function(e){

        var dir = lastScrollTop - $('body').scrollTop() ;

        if( dir < 0 )
          navigation_bar.addClass('hide');
        else
          navigation_bar.removeClass('hide');


        lastScrollTop = $('body').scrollTop();
      }

      $(window).scroll(handleScroll)


    });