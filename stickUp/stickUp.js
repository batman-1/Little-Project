/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-27 17:16:13
 * @version $Id$
 */
  $.fn.extend({stickUp:function(){
			var $nav=this,
          $width=$nav.width(),
          $height=$nav.height(),
          $top=$nav.offset().top,
          $left=$nav.offset().left;

      var $cloneNav=$nav.clone()
                        .css({'visibility':'hidden','display':'none'})
                        .insertBefore($nav);

          $(window).on('scroll',function(){
             var scrollTop=$(window).scrollTop();
              if ($top<=scrollTop) {
                if (!isFixed()) {
                  setFixed();
                }   
              }else{
                 if (isFixed()) {
                   unsetFixed();
                 }
              }
          }) 
          function isFixed(){
            return $nav.data('isFixed');
          }
          function setFixed(){     
            $nav.data('isFixed',true)
            .css({
              'position':'fixed',
              'top':0,
              'left':$left,
              'width':$width,
              'height':$height,
              'margin':0,
              'z-index':9999
            })
            $cloneNav.show();
          }
          function unsetFixed(){     
            $nav.data('isFixed',false)
            .removeAttr('style');
            $cloneNav.hide();
          }
				
		}})
