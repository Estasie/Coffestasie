
export default function formValidate () {
    let error = 0;
    let formReq = document.querySelectorAll('._req');


    for (let i=0; i< formReq.length; i++){
      const input = formReq[i];
      formRemoveError(input);

      if(input.classList.contains('_email')){
        if(!emailTest(input)){
          formAddError(input);
         
          error++;
        }
      } else if(input.getAttribute("type") === "checkbox" && input.checked === false){
        formAddError(input);
        error++;
      } else {
        if(input.value === ''){
          formAddError(input);
          error++;
        }
      }

    }
    return error;
  }

  function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
    input.parentElement.classList.remove('_valid');
    input.classList.remove('_valid');
  }

  function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
    input.parentElement.classList.add('_valid');
    input.classList.add('_valid');
  }

  function emailTest(input){
    return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email.value));
   
  }

