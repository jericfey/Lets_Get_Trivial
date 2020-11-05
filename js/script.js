$("#art").click(function(){
    window.location.href='./art.html';
})
$("#books").click(function(){
    window.location.href='./books.html';
})
$("#history").click(function(){
    window.location.href='./history.html';
})
$("#music").click(function(){
    window.location.href='./music.html';
})
$("#sports").click(function(){
    window.location.href='./sports.html';
})
$("#home").click(function() {
    window.location.href='./index.html'
})
$("#home-category").click(function() {
    window.location.href='./index.html'
})

$(document).ready(function()
{
    $(".gif").hover(
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.png$/i, ".gif"));
        },
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.gif$/i, ".png"));
        });
});