export default function formValidate() {
  let formReq = document.querySelectorAll("._req");
  let status = false;
  for (let i = 0; i < formReq.length; i++) {
    if (formReq[i].value.length === 0) {
      status = false;
      break;
    } else if (
      formReq[i].getAttribute("type") === "checkbox" &&
      formReq[i].checked === true
    ) {
      status = true;
    }
  }

  return status;
}
