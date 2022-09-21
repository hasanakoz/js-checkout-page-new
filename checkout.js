const taxRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  calculateCartPrice();
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

      calculateProductPrice(e.target);
      calculateCartPrice();
    } else {
      if (confirm("product will be removed ??")) {
        e.target.parentElement.parentElement.parentElement.remove();
        calculateCartPrice();
      }
    }
  } else if (e.target.className == "fa-solid fa-plus") {
    // console.log("plus");
    e.target.previousElementSibling.innerText++;
    calculateProductPrice(e.target);
    calculateCartPrice();
  } else if (e.target.className == "remove-product") {
    // console.log("remove");
    e.target.parentElement.parentElement.parentElement.remove();
    calculateCartPrice();
  } else {
    // console.log("other");
  }
});

const calculateProductPrice = (clickedBtn) => {
  const productInfoDiv = clickedBtn.parentElement.parentElement;
  //   console.log(productInfoDiv);
  const price = productInfoDiv.querySelector(".product-price strong").innerText;
  const quantity = productInfoDiv.querySelector(".quantity").innerText;
  const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
};
const calculateCartPrice = () => {
  const productsTotalPricesDivs = document.querySelectorAll(
    ".product-line-price"
  );

  let subTotal = 0;
  productsTotalPricesDivs.forEach((div) => {
    subTotal += parseFloat(div.innerText);
  });

  const taxPrice = subTotal * localStorage.getItem("taxRate");
  const shippingPrice = parseFloat(
    subTotal > 0 && subTotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );
  console.log(shippingPrice);
  document.querySelector("#cart-subtotal").lastElementChild.innerText =
    subTotal.toFixed(2);
  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);
  document.querySelector("#cart-shipping").children[1].innerText =
    shippingPrice.toFixed(2);
  document.querySelector("#cart-total").lastElementChild.innerText = (
    subTotal +
    taxPrice +
    shippingPrice
  ).toFixed(2);
};
