window.addEventListener('load', function () {
    console.log("ok");
    const header = document.querySelector('header');
    console.log(header);
    header.onmouseover = function () {
        console.log('onmouseover');
        // header.style.backgroundColor = "white";
        header.classList.add('over');
    }
    header.onmouseout = function () {
        console.log('onmouseover');
        header.classList.remove('over');
    }
});