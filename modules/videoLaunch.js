
  export function videoPausePlay(){
    let blocks = document.querySelectorAll('.container__block');
    console.log(blocks);
    blocks.forEach(el => {
      el.addEventListener('mouseover', function() {
        if(this.classList.contains('flex')){
          return;
        }else {
          this.querySelector('video').play();
        } 
      });
      el.addEventListener('mouseleave', function() {
        if(this.classList.contains('flex')){
          return;
        }else {
          this.querySelector('video').pause();
        }
      });
    })
  }


