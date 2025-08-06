canvas = document.createElement('canvas')
ctx = canvas.getContext('2d')
document.body.appendChild(canvas)
canvas.style.border = '1px solid red'
canvas.width = 500
canvas.height = 500


make_grid = ()=>{
 ctx.fillStyle = 'rgba(255,0,0,0.4)';
  for(let i = 0; i < 500; i+=10)
   for(let j = 0; j < 500; j+=10)
    ctx.fillRect(i,j,9,9)
 ctx.fillStyle = 'red';
}

make_grid();

pixel = (x,y)=>ctx.fillRect(x*10,y*10,9,9)

pixel(5,3);
