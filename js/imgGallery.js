let ulSet = document.getElementById("ulSet");
let totalNum = ulSet.childElementCount;
let currentNum;

for(var i=1; i<=totalNum; i++){
    var list = document.getElementById("list" + i);
    list.innerHTML = "<span></span><span></span>" + list.innerHTML + "<span><span></span><span></span></span>";
}

currentNum = 1;
document.getElementById();