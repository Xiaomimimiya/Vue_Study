const $clickItem = $(".navbar-nav .bar-list")
$clickItem.on("click", function () {
    const $clicks = $(this)
    $clicks.addClass("active").siblings().removeClass("active")

})
