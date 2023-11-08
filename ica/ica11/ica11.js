console.log("Making sure this is linked correctly");

const x= 1;
const y =2;

const btn=document.querySelector("button");
const canvas =document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () =>{
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number)
{
    return Math.floor(Math.random()*number);
}

function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for(let i=0; i<100; i++)
    {
        ctx.beginPath();
        let red=random(255);
        let green=random(255);
        let blue=random(255);
        let alpha=0.8;
        let color="rgba("+red+","+green+","+blue+","+alpha+")";
        ctx.fillStyle = color;
       
        let shapeType = random(2); // 0 for circle, 1 for rectangle

        if (shapeType === 0) {
            // Drawing a circle
            ctx.arc(
                random(canvas.width),
                random(canvas.height),
                random(50),
                0,
                2 * Math.PI
            );
        } else {
            // Drawing a rectangle
            ctx.fillRect(
                random(canvas.width),
                random(canvas.height),
                random(50),
                random(50)
            );
        }

        ctx.fill();
    }
}
btn.addEventListener("click", draw)