const imagefileinput =document.querySelector("#imagefileinput");
const toptextinput =document.querySelector("#toptextinput");
const bottomtextinput =document.querySelector("#bottomtextinput");
const canvas =document.querySelector("#meme");

let image;

imagefileinput.addEventListener("change", ()=>{
  const imageDataUrl=URL.createObjectURL(imagefileinput.files[0]);

  //console.log(imageDataUrl);
  image=new Image();
  image.src=imageDataUrl;

  image.addEventListener("load",()=>{
    UpdateMemeCanvas(canvas,image, toptextinput.value, bottomtextinput.value);
  },{once: true}
    );
});


toptextinput.addEventListener("change",()=>{
  UpdateMemeCanvas(canvas,image, toptextinput.value, bottomtextinput.value);
  
});
bottomtextinput.addEventListener("change",()=>{
  UpdateMemeCanvas(canvas,image, toptextinput.value, bottomtextinput.value);
  
});

function UpdateMemeCanvas(canvas, image, toptext, bottomtext)
{
  const ctx=canvas.getContext("2d");
  const width=image.width;
  const height=image.height;
  const fontSize=Math.floor(width/10);
  const yOffset=height/25;

  //update canvas background

  canvas.width=width;
  canvas.height=height;
  ctx.drawImage(image,0,0);

  // prepare text

  ctx.strokeStyle="black";
  ctx.lineWidth=Math.floor(fontSize/4);
  ctx.fillStyle="white";
  ctx.textAlign="center";
  ctx.lineJoin="round";
  ctx.font=`${fontSize}px sans-serif`;

  //Add top text
  ctx.textBaseline="top";
  ctx.strokeText(toptext,width/2,yOffset);
  ctx.fillText(toptext,width/2,yOffset);

  ctx.textBaseline="bottom";
  ctx.strokeText(bottomtext,width/2,height-yOffset);
  ctx.fillText(bottomtext,width/2,height-yOffset);
}