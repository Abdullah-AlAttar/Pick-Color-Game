var squares = document.getElementsByClassName("square");
var targetColorText = document.getElementById("targetColor");
var message = document.getElementById("message");
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn=document.querySelector("#easy");
var hardBtn=document.querySelector("#hard");
var mode="hard";
var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(30, 100, 255)"
]

easyBtn.addEventListener("click",function()
{
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors=GenerateColors(3);
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    targetColorText.textContent=targetColor;
    for (var i = 0; i < 3; ++i) {
        squares[i].style.background = colors[i];
    }
    for(var i=3;i<6;++i)
    {
        squares[i].style.display="none";
    }
    mode="easy";
});
hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
      colors = GenerateColors(6);
      targetColor = colors[Math.floor(Math.random() * colors.length)];
      targetColorText.textContent = targetColor;
      for (var i = 0; i < 6; ++i) {
          squares[i].style.background = colors[i];
            squares[i].style.display = "block";
      }
      mode="hard";
});

var targetColor = colors[Math.floor(Math.random() * colors.length)];
var clickedColor;
for (var i = 0; i < squares.length; ++i) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function () {
        clickedColor = this.style.background;
        if (clickedColor === targetColor) {
            message.textContent = "Correct";
            OnCorrectChoice(clickedColor);
            header.style.background = clickedColor;
            resetButton.textContent = "Play Again!!";
        } else {
            this.style.background = "#232323";
            message.textContent = "try again";
        }
    });
}
targetColorText.textContent = targetColor;

function OnCorrectChoice(color) {
    for (var i = 0; i < squares.length; ++i) {
        squares[i].style.background = color;
    }
}
function GenerateColors(num)
{
    var arr=[];
    for(var i=0;i<num;++i)
    {
        arr.push(GetRandomColor());
    }
    console.log(arr);
    return arr;
}
function GetRandomColor(num) {

    return 'rgb(' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')';

}
resetButton.addEventListener("click", function () {
    var num=mode==="easy"?3:6;
    for (var i = 0; i < num; ++i) {
        colors[i] = GetRandomColor();
        squares[i].style.background = colors[i];
    }
    message.textContent = "";
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    resetButton.textContent = "New colors";
    targetColorText.textContent = targetColor;
    header.style.background = "#232323";
});