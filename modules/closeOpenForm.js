let formContainer = document.querySelector("#emploersForm"),
    emploersBlock = document.querySelector("#emploers"),
    backButton = document.querySelector('.form__back');
export function openForm() {
    emploersBlock.addEventListener("click", () => {
      emploersBlock.classList.add("hidden");
      formContainer.classList.remove("hidden");
      formContainer.classList.add("flex");
    });
  }

export function closeForm(){
    
    backButton.addEventListener('click', () => {
      emploersBlock.classList.remove("hidden");
      formContainer.classList.add("hidden");
      formContainer.classList.remove("flex");
    });
  }

