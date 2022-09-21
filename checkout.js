const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  sessionStorage.setItem("taxRate", taxRate);
  sessionStorage.setItem("shippingPrice", shippingPrice);
  sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (e) => {
  if (e.target.className == "fa-solid fa-minus") {
    // console.log("minus");
    if (e.target.parentElement.querySelector(".quantity").innerText > 1) {
      e.target.parentElement.querySelector(".quantity").innerText--;
    } else {
      if (confirm("product will be removed ??")) {
        e.target.parentElement.parentElement.parentElement.remove();
      }
    }
  } else if (e.target.className == "fa-solid fa-plus") {
    // console.log("plus");
    e.target.previousElementSibling.innerText++;
  } else if (e.target.className == "remove-product") {
    // console.log("remove");
  } else {
    // console.log("other");
  }
});
