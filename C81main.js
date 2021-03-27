canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="white";
ctx.lineWidth=10;
ctx.rect (150,153,430,200);
ctx.stroke();



    ctx.beginPath();
    ctx.strokeStyle="blue";
    ctx.lineWidth=10;
    ctx.arc(300,210,100,0,2* Math.PI);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth=10;
    ctx.arc(450,210,100,0,2* Math.PI);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle="red";
    ctx.lineWidth=10;
    ctx.arc(600,210,100,0,2* Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="yellow";
    ctx.lineWidth=10;
    ctx.arc(375,360,100,0,2* Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="darkgreen";
    ctx.lineWidth=10;
    ctx.arc(525,360,100,0,2* Math.PI);
    ctx.stroke();




    

