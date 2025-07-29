document.body.innerHTML+=`
 <style>
#board{
  width:515px;
  height:515px;
  border:1px solid red;
  display:inline-flex;
  gap:5px;
  padding:5px;
  flex-wrap:wrap;
}

#board div{
 border:1px solid blue; 
 box-sizing: border-box;
 width:60px;
 height:60px;
 text-align:center;
 line-height:60px;
 font-size:60px;
}

#board div{
  background-color:rgba(0,0,0,0.7);
}

#board div:nth-child(16n + 1),
#board div:nth-child(16n + 3),
#board div:nth-child(16n + 5),
#board div:nth-child(16n + 7),
#board div:nth-child(16n + 10),
#board div:nth-child(16n + 12),
#board div:nth-child(16n + 14),
#board div:nth-child(16n + 16) {
  background-color: white;
}
</style>

<div id="board">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
`

c='♔♕♖♗♘♙♚♛♜♝♞♟';

divs = document.querySelectorAll('#board div');

GRID  = [];

init = ()=>{
  for(let i = 8; i < 16; i++)
   GRID[i] = '♟';

  for(let i = 48; i < 56; i++)
   GRID[i] = '♙';

 GRID[0]='♜';
 GRID[7]='♜';
}

render = ()=>{
  for(let i in GRID)
   divs[i].innerHTML = GRID[i];
}

init();
render();





