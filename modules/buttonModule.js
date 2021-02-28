export default function moveCookie() {
  let cookieButton =  document.querySelector(".form__button");
      let checkButtonClasses = cookieButton.classList.contains("_active");
      let cookie = document.querySelector(".cookie");
      let promiseForCookie = new Promise(() => {
        if(!checkButtonClasses){
          
          setTimeout(function () {
            cookieButton.classList.add("_active");
            cookieButton.innerHTML = "";
            cookie.classList.add("active__cookie");
          }, 501);
          setTimeout(function () {
            cookie.style.left = 300 + 'px';
            cookie.style.top = -Math.pow(5,2) + 'px';
            cookieButton.style.cursor = "default";
            cookieButton.disabled = "true";
          }, 1500);
          
        } else {
          setTimeout(function () {
            cookieButton.classList.remove("_active");
            cookieButton.innerHTML = "Отправить";
          }, 505);
          
        }
        
      
      
      console.log(promiseForCookie);
      
    });
  }