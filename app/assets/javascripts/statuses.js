// Generated by CoffeeScript 1.7.1
(function() {
  $(function() {
    return $('.status').hover(function(event) {
      console.log("hover");
      return $(this).toggleClass("hover");
    });
  });

}).call(this);
