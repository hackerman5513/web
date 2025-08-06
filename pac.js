canvas = document.createElement('canvas')
ctx = canvas.getContext('2d')
document.body.appendChild(canvas)
canvas.style.border = '1px solid red'
canvas.width = 500
canvas.height = 500


make_grid = ()=>{
 ctx.clearRect(0,0,500,500);
 ctx.fillStyle = 'rgba(255,0,0,0.4)';
  for(let i = 0; i < 500; i+=10)
   for(let j = 0; j < 500; j+=10)
    ctx.fillRect(i,j,9,9)
}


pixel = (x,y)=>ctx.fillRect(x*10,y*10,9,9)


x = 13; y = 4;
level = [ [10,5,5], [30,15,40],[5,5,30] ];

document.onkeypress = (e)=>{
  let k = e.key;
  k == 'w' && y--;
  k == 's' && y++;
  k == 'a' && x--;
  k == 'd' && x++;
render_state();
}

render_level = ()=>{
  for(let x of level)
   render_beam(...x)   
}

render_beam = (x,l,y)=>{
  for(let i = 0; i < l; i++)
   pixel(i+x,y);
}

render_state =()=>{
  make_grid();
  ctx.fillStyle = 'red';
  pixel(x,y);
  ctx.fillStyle = 'purple';
  render_level();
}

render_state();


