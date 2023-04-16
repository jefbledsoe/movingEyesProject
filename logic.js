var balls = document.getElementsByClassName("ball");
document.onmousemove = () => {
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
    }
};
function defaultFace(){
    let body = document.getElementById('main');
    body.style.background = 'gray';
    let leftBrow = document.getElementById('leftBrow');
    leftBrow.style.transform ='rotate(0deg)'
    let rightBrow = document.getElementById('rightBrow');
    rightBrow.style.transform ='rotate(0deg)'

}
function angryFace(){
    let body = document.getElementById('main');
    body.style.background = 'red';
    let leftBrow = document.getElementById('leftBrow');
    leftBrow.style.transform ='rotate(20deg)'
    let rightBrow = document.getElementById('rightBrow');
    rightBrow.style.transform ='rotate(-20deg)'

}
function suprisedFace(){
    let body = document.getElementById('main');
    body.style.background = 'blue';
    let leftBrow = document.getElementById('leftBrow');
    leftBrow.style.transform ='rotate(-40deg)'
    let rightBrow = document.getElementById('rightBrow');
    rightBrow.style.transform ='rotate(40deg)';

}
function happyFace(){
    let body = document.getElementById('main');
    body.style.background = 'yellow';
    let leftBrow = document.getElementById('leftBrow');
    leftBrow.style.transform ='rotate(-20deg)'
    let rightBrow = document.getElementById('rightBrow');
    rightBrow.style.transform ='rotate(20deg)'
   

}