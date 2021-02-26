import formValidate from '../modules/formValidate.js';
export default async function formSend(e){
    e.preventDefault(); 

    // let formedData = new formedData(form);
     

    let error = formValidate(form);

    if(error === 0){
      moveCookie();
      // let resp = await fetch('', {
      //   method: 'POST', 
      //   body: formedData
      // });

      // if(resp.ok){
      //   let res = await resp.json();
      //   alert(res.messsage);
      //   form.reset(); 
      // }
    } else {
      alert('Error');
    }
  }