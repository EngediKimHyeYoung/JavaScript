let ulSet = document.getElementById("ulSet");
let totalNum = ulSet.childElementCount;
let currentNum;
let indexNum = 0;
let imgRoof;

for (var i = 1; i <= totalNum; i++) {
    var list = document.getElementById("list" + i);
    list.innerHTML = "<span></span><span></span>" + list.innerHTML + "<span><span></span><span></span></span>";
    list.onclick = function () {
        console.log(this.id.slice(4, 5));
        clearInterval(imgRoof);
        currentNum = Number(this.id.slice(4, 5));
        viewImg();
        imgSetting()
    }
}

let viewImg = function () {
    for (var i = 1; i <= totalNum; i++) {
        document.getElementById("text" + i).classList.remove("textShow");
        document.getElementById("button" + i).classList.remove("buttonShow");
        document.getElementById("list" + i).classList.remove("listShow");
    }

    document.getElementById("img" + currentNum).style.zIndex = ++indexNum;
    document.getElementById("text" + currentNum).style.zIndex = ++indexNum;
    document.getElementById("button" + currentNum).style.zIndex = ++indexNum;
    document.getElementById("ulSet").style.zIndex = ++indexNum;

    document.getElementById("img" + currentNum).classList.add("imgChange");
    document.getElementById("text" + currentNum).classList.add("textShow");
    document.getElementById("button" + currentNum).classList.add("buttonShow");
    document.getElementById("list" + currentNum).classList.add("listShow");
    let clear = setInterval(function () {
        if (currentNum != 1) {
            document.getElementById("img" + (currentNum - 1)).classList.remove("imgChange");
        }
        clearInterval(clear);
    }, 1000);
}

let imgSetting = function () {
    imgRoof = setInterval(function () {
        if (currentNum == totalNum) {
            currentNum = 1;
        } else {
            currentNum++;
        }
        console.log(currentNum);
        viewImg();
    }, 3000)
}

currentNum = 1;
viewImg();
imgSetting()
