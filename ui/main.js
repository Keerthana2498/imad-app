console.log('Loaded!');
var element=document.getElementById("main-text");
element.innerHTML="new hfjd";
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    hk.style.marginLeft=marginLeft+'px';
}
var hk=document.getElementById("img");
hk.onclick=function(){
    var Interval=setInterval(moveRight,100)
    
};