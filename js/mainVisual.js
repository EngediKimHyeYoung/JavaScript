let indexNum = 0;
let imgSet = document.getElementById("imgSet");
let ulSet = document.getElementById("ulSet");
let totalNum = ulSet.childElementCount;
let imgRoof;

for (var i = 1; i <= totalNum; i++) {
    var list = document.getElementById("list" + i);
    list.innerHTML = "<span></span><span></span>" + list.innerHTML + "<span><span></span><span></span></span>";
    list.onclick = function () {
        clearInterval(imgRoof);
        currentNum = Number(this.id.slice(4, 5));
        viewImg();
        imgSetting();
    }
}
let imgSetting = function () {
    imgRoof = setInterval(function () {
        if (currentNum == totalNum) {
            currentNum = 1;
        } else {
            currentNum++;
        }
        viewImg();
    }, 4000);
}
let viewImg = function () {
    for (var i = 1; i <= totalNum; i++) {
        document.getElementById("list" + i).classList.remove('listShow');
        document.getElementById("text" + i).classList.remove('textShow');
        document.getElementById("button" + i).classList.remove('buttonShow');
        document.getElementById("img" + i).classList.remove('imgHide');
    }
    document.getElementById("img" + (currentNum)).style.zIndex = ++indexNum;
    document.getElementById("img" + currentNum).classList.add('imgHide');
    document.getElementById("list" + currentNum).classList.add('listShow');
    document.getElementById("text" + currentNum).classList.add('textShow');
    document.getElementById("button" + currentNum).classList.add('buttonShow');
    let clear = setInterval(function () {
        clearInterval(clear);
        if (currentNum == 1) {

        } else {
            document.getElementById("img" + (currentNum - 1)).classList.remove('imgHide');
        }
    }, 1000);
}
currentNum = 1;
viewImg();
imgSetting();