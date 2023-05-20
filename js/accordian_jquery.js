// 제이쿼리 형태
$("#challengeSet>dt").on("click", function(){
    $("#challengeSet>dd").slideUp();
    $(this).next().stop().slideDown();
});
