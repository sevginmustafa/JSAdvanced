function solve() {
   const buttons = document.querySelectorAll('.add-product');
   let result = document.querySelector('textarea');

   for (let button of buttons) {
      button.addEventListener('click', onclick);
   }

   const products = new Set();
   let totalPrice = 0;

   function onclick(ev) {
      const name = ev.target.parentNode.parentNode.querySelector('.product-title').textContent;
      const money = Number(ev.target.parentNode.parentNode.querySelector('.product-line-price').textContent);
      products.add(name);
      totalPrice += money;

      result.value += `Added ${name} for ${money.toFixed(2)} to the cart.\n`;
   }

   const checkoutButton = document.querySelector('.checkout');

   checkoutButton.addEventListener('click', checkout);

   function checkout() {
      result.value += `You bought ${[...products].join(', ')} for ${totalPrice.toFixed(2)}.`;
      checkoutButton.disabled = true;
      for (let button of buttons) {
         button.disabled = true;
      }
   }
}