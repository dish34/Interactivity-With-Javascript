function billingFunction() {
  let billname = document.querySelector("#billingName");
  let billzip = document.querySelector("#billingZip");
  let shipname = document.querySelector("#shippingName");
  let shipzip = document.querySelector("#shippingZip");
  if (document.querySelector("#same").checked == true) {
    billname.value = shipname.value;
    billzip.value = shipzip.value;
  } else {
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";
  }
}
