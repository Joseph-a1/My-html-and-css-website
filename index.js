
$("h1").addClass("big-title")
$("button").addClass("margin-50")
$("h2").addClass("small-title")
$("h3").css("color", "purple")
$("img").addClass("img-url")
$("button").click(function() {
    $("h2").css("color", "greenyyellow")
})
$("h1").on("mouseover",function(){
    $("h1").css("color", "purple")
})
$("button").css("color", "green")
$("button").click(function() {
    $("h3").slideToggle();
})
