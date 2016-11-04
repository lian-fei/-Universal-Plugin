$(function () {

  'use strict';
  var $images = $('.docs-pictures');
  var handler = function (e) {
        console.log(e.type);
      };
  var options = {
        // inline: true,
        url: 'data-original',
        build: handler,
        built: handler,
        show: handler,
        shown: handler,
        hide: handler,
        hidden: handler
      };


  $images.on({
    'build.viewer': handler,
    'built.viewer': handler,
    'show.viewer': handler,
    'shown.viewer': handler,
    'hide.viewer': handler,
    'hidden.viewer': handler
  }).viewer(options);

});
