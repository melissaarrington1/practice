const removeCartItemButtons = document.querySelectorAll(".btn-danger");

console.log(removeCartItemButtons);

for (let i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i];
  button.addEventListener("click", function(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("all-cart-items")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-item");
  let total = 0;
  for (i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-item-price")[0];
    var quantityElement = cartRow.getElementsByClassName("cart-quantity")[0];

    let price = parseFloat(priceElement.innerHTML.replace("$", ""));
    let quantity = quantityElement.value;
    console.log(price * quantity);
    total = total + price * quantity;
  }
  document.getElementsByClassName("cart-total")[0].innerHTML = total;
}
