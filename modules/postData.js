import formValidate from "./formValidate.js";
import { postData } from "../modules/services.js";
export default function forms(formsSelector) {
  const forms = document.querySelectorAll(formsSelector);
  const formButton = document.querySelector("#cookieButton");
  const message = {
    loading: "Отправка данных...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  // let validStatus = formValidate();
  // console.log(validStatus);
  forms.forEach((item) => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      console.log(json);
      if (formValidate()) {
        postData("http://localhost:3000/applicants", json)
          .then((data) => {
            // console.log(data);
            alert(message.success);
            statusMessage.remove();
          })
          .catch(() => {
            alert(message.failure);
          })
          .finally(() => {
            form.reset();
          });
      } else {
        console.log(message.failure);
      }
    });
  }
}
