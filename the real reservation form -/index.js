document.addEventListener("DOMContentLoaded",  ()=> {

    const quantityInput = document.getElementById('quantity');

    quantityInput.addEventListener('input', () => {
      if (quantityInput.value < 0) {
        quantityInput.value = 0;
      }
    });


    const secondQuantityInput = document.getElementById('second-quantity');

    secondQuantityInput.addEventListener('input', () => {
      if (secondQuantityInput.value < 0) {
        secondQuantityInput.value = 0;
      }
    });
   
});

