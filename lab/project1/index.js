window.addEventListener('load',function(e){



    var options = {
        valueNames: [ 'late1','trend1','price1','hue1','abc1']
      };
      
      var hackerList = new List('hacker-list', options);


      var gridThumb = document.querySelectorAll ('.thumb');

      gridThumb.forEach((gridImg) => {

          gridImg.addEventListener('click', pickThumb);

      });

      function pickThumb(e) {
        var thumb = this;
        //find the correct popup
        //add a class to that popup
        var popup = thumb.nextSibling;
        popup.classList.add("open");
      }


});


