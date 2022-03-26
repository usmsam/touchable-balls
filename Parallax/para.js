let hello = document.querySelectorAll('.spin');

document.onmousemove = hello.forEach(el=> {el.addEventListener('click', function(e){if (document.onmousemove != null) {document.onmousemove = null; }else{      document.onmousemove = function (e) {
            let x = e.clientX;
            let y = e.clientY;
            el.style.left = x + "px";
            el.style.top = y + "px";
            el.style.border = 2 + "px "+'solid '+'green'
         }
      }
   })
})
document.querySelector('body').onmousemove = (e) => {
   let y = e.clientY;
   document.querySelector('.x').style.top = y + "px";

}



