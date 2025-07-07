

   let elem_innerHTML = `
          <style>
            #wrap {
              width: 250px;
              height: 50px;
              display: flex;
              justify-content: space-around;
              align-items: center;
              position: relative;
            }

            #wrap > div:not(.corner) {
              width: 30px;
              height: 30px;
              border: 1px solid red;
            }

            .corner {
              position: absolute;
              width: 7px;
              height: 7px;
              border: 2px solid blue;
            }

            .corner:nth-child(5) {
              border-right: none;
              border-bottom: none;
              top: 0;
              left: 0;
            }

            .corner:nth-child(6) {
              border-left: none;
              border-bottom: none;
              top: 0;
              right: 0;
            }

            .corner:nth-child(7) {
              border-right: none;
              border-top: none;
              bottom: 0;
              left: 0;
            }

            .corner:nth-child(8) {
              border-left: none;
              border-top: none;
              bottom: 0;
              right: 0;
            }
          </style>
          
          <div id="wrap">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="corner"></div>
            <div class="corner"></div>
            <div class="corner"></div>
            <div class="corner"></div>
          </div>
        `;
      

    delta = 250;
    resizing = false;
    document.querySelector("#gridbox").innerHTML = elem_innerHTML;
    
    resize = ()=>document.querySelector("#wrap").style.width = delta+'px';
  
    document.querySelector("#wrap").onmousedown = ()=>resizing = true;
   
    document.querySelector("#wrap").onmouseup= ()=>resizing = false;
    
     document.querySelector("#wrap").onmousemove= 
       (e)=>resizing&&(delta+=e.movementX)&&resize();
   

    document.querySelector("#wrap").onmouseleave = ()=> resizing = false;

 

