document.body.innerHTML += `<div id="wrap">${'<div></div>'.repeat(16)}</div>
<style>
 #wrap {
  display: flex;
  flex-wrap: wrap;
  width: 430px;
  padding: 10px;
  border: 1px solid red;
  gap: 10px;
}

#wrap div {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  cursor: pointer;

}

#wrap div:hover {
  box-shadow: 0 0 5px 5px blue;
}

body {
  background: black;
  display: flex;
  align-items: center;      /* vertical centering */
  justify-content: center;  /* horizontal centering */
  height: 100vh;            /* full viewport height */
  margin: 0;                /* remove default margin */
}

</style>`;

A = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7].sort(() => Math.random() - 0.5); 
COLORS = ['#FF0000', // Red
          '#00FF00', // Lime
          '#0000FF', // Blue
          '#FFFF00', // Yellow
          '#FF00FF', // Magenta
          '#00FFFF', // Cyan
          '#00000F', // Black
          '#FFFFFF'] // White

make_grid = (m, n) => {
  let grid = [];
  for (let i = 0; i < m * n; i++)
    grid.push({ x: i % m, y: Math.floor(i / m), value: A.pop(), side: 0, time: -1 });
  return grid;
}

GRID = make_grid(4, 4);

cardAt = (a, b) => GRID.find(c => c.x == a && c.y == b);

setPair = (a, b, c, d) => {
  cardAt(a, b).side = 1;
  cardAt(c, d).side = 1;
  cardAt(a, b).time = -1;
  cardAt(c, d).time = -1;
}

prev = 0;
game_done = ()=>GRID.every(x=>x.side==1);
next = (x, y) => {
  if (prev != 0)
    if (x != prev[0] || y != prev[1])
      if (cardAt(x, y).value == cardAt(...prev).value)
        setPair(x, y, prev[0], prev[1]);

  if (cardAt(x, y).side == 0) {
    cardAt(x, y).side = 1;
    cardAt(x, y).time = 5;
  }

  prev = [x, y];

  if(game_done()){
   alert('done');
   location.reload();
  }
}


tick = () => {
  for (let card of GRID)
    if (--card.time == 0)
      card.side = 0;
}

render = () => {
  let divs = document.querySelectorAll('#wrap div');
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = GRID[i].side == 0 ? 'rgba(255,0,0,0.3)' : COLORS[GRID[i].value];
  }
}

grid_click = (i) => {
  next(i % 4, Math.floor(i / 4));
  render();
}

document.querySelector('#wrap').onclick = (e) => {
  const children = [...e.target.parentElement.children];
  const i = children.indexOf(e.target);
  if (i !== -1)
    grid_click(i);
}

window.setInterval(() => { tick(); render(); }, 50);
