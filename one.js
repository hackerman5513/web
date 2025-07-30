document.body.innerHTML+=`<div></div>
<div></div>
<div></div>

<style>
  body{
  display:flex;
  gap:5px;
}
div{
  border:1px solid red;
  width:100px;
  height:100px;
}
</style>'`;

evolve_square = (x)=>{
  let r = Math.random();
  if(x==0)return r>0.5 ? 1 : 0;
  if(x==2)return r>0.5 ? -1 :0;
  return r < 0.33 ? -1 : r > 0.66 ? 1 : 0;  
}

GRID = [0,1,0];

