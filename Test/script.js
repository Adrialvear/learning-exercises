const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const selectedRadio = document.querySelector('input[name="productOption"]:checked');
  const selectedTable = selectedRadio.parentElement.parentElement.parentElement;
  const ratingCell = selectedTable.querySelector('#ratingCell');
  const quantityCell = selectedTable.querySelector('#quantityCell');
  const priceCell = selectedTable.querySelector('#priceCell');

  const ratingValue = parseFloat(ratingInput.value);
  const quantityValue = parseFloat(quantityInput.value);
  const priceValue = parseFloat(priceInput.value);

  ratingCell.textContent = ratingValue;
  quantityCell.textContent = quantityValue;
  priceCell.textContent = priceValue;
});




  