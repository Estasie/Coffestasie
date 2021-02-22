


window.addEventListener('DOMContentLoaded', () => {
    let blockInfo = document.querySelectorAll('.container__block');
    let form = document.querySelector('#emploersForm');
    let emploersBlock = document.querySelector('#emploers');
    

    for (let elem of blockInfo) {
        let video = document.querySelectorAll('#videoPlay');
        video.forEach(el => {
            elem.addEventListener('mouseover', () => {
                el.play();
            });
            elem.addEventListener('mouseout', () => {
                el.pause();
            });
        })

    }

    emploersBlock.addEventListener('click', () => {
        emploersBlock.classList.add('hidden');
        form.classList.remove('hidden');
        form.classList.add('flex');
    });

    function validateForm() {
        
        let data = [document.forms["empForm"]["Name"],document.forms["empForm"]["Tel"], document.forms["empForm"]["Mail"]];
        console.log(data);
        console.log(data[0].value);
        // Check Name 
        if (data[0].value === null || data[0].value === "" ){
           console.log(`Заполните поле ${data[0].value}`);
        }
        
    }

    validateForm();





});