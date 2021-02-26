moveCookie = function(button) {
    button.addEventListener("click", (e) => {
      let checkButtonClasses = e.target.classList.contains("_active");
      let cookie = document.querySelector(".cookie");
      let promiseForCookie = new Promise(() => {
        if(!checkButtonClasses){
          
          setTimeout(function () {
            cookieButton.classList.add("_active");
            e.target.innerHTML = "";
            cookie.classList.add("active__cookie");
          }, 501);
          setTimeout(function () {
            cookie.style.left = 300 + 'px';
            cookie.style.top = -Math.pow(5,2) + 'px';
          }, 1500);
          
        } else {
          setTimeout(function () {
            cookieButton.classList.remove("_active");
            e.target.innerHTML = "Отправить";
          }, 505);
          
        }
        
      });
      
      console.log(promiseForCookie);
      promiseForCookie.then(()=>{

      });
      
    });
  }

  module.exports = moveCookie;