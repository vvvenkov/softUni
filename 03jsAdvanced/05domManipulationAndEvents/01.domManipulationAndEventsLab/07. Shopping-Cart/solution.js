function solve() {

   const productsAddButtons = document.querySelectorAll('.add-product');
   const textArea = document.querySelector('textarea');                    //get the references
   const checkoutButton = document.querySelector('.checkout');

   let cart = {};       //make the object cart for the checkout of all products and prices

   function addProductHandler(event) {
      const productElement = event.currentTarget.parentElement.parentElement;        //get the parent.parent element 
      
      const title = productElement.querySelector('.product-title').textContent;
      const price = Number(productElement.querySelector('.product-line-price').textContent);

      textArea.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`

      if (!cart[title]){
         cart[title] = 0;
      }

      cart[title] += price;
   }

   checkoutButton.addEventListener('click', (event) => {
      const totalPrice = Object.values(cart).reduce((sum, price) => sum + price, 0);
      const list = Object.keys(cart).join(', ');
      textArea.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`;

      productsAddButtons.forEach(button => button.setAttribute('disabled', 'disabled'));
      event.currentTarget.setAttribute('disabled', 'disabled');
   })

   productsAddButtons.forEach(button => button.addEventListener('click', addProductHandler));
}