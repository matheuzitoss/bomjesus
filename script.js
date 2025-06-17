// function calculateTotal() {
    
//     let total = 0;
//     const quantities = document.querySelectorAll('.quantity');
//     quantities.forEach(input => {
//         const price = parseFloat(input.getAttribute('data-price'));
//         const quantity = parseInt(input.value);
//         total += price * quantity;
//     });

//     document.getElementById("totalAmount").textContent = `R$ ${total.toFixed(2)}`;
//     // alert(`Total: R$ ${total.toFixed(2)}`);
    
// }


  
//   function fecharPopup() {
//     document.getElementById("popup").style.display = "none";
//   }

// function calculateTotal() {
//     document.getElementById("popup").style.display = "block";
//     let total = 0;
//     const quantities = document.querySelectorAll('.quantity');
//     quantities.forEach(input => {
//       const price = parseFloat(input.getAttribute('data-price'));
//       const quantity = parseInt(input.value);
//       total += price * quantity;
//     });
//     document.getElementById("totalAmount").textContent = `R$ ${total.toFixed(2)}`;
//   }

// function incrementQuantity(button) {
//   var span = button.previousElementSibling;
//   var quantity = parseInt(span.textContent) + 1;
//   span.textContent = quantity;
//   updatePrice(span.parentNode.parentNode, button.getAttribute('data-price'));
// }

// function decrementQuantity(button) {
//   var span = button.nextElementSibling;
//   var quantity = parseInt(span.textContent) - 1;
//   if (quantity < 0) quantity = 0;
//   span.textContent = quantity;
//   updatePrice(span.parentNode.parentNode, button.getAttribute('data-price'));
// }

// function updatePrice(li, price) {
//   var priceSpan = li.querySelector('span[id^="price"]');
//   var quantitySpan = li.querySelector('span[id^="quantity"]');
//   var quantity = parseInt(quantitySpan.textContent);
//   var total = price * quantity;
//   priceSpan.textContent = total.toFixed(2);
// }

// function calculateTotal() {
//   document.getElementById("popup").style.display = "block";
//   let total = 0;
//   const prices = document.querySelectorAll('span[id^="price"]');
//   prices.forEach(span => {
//       total += parseFloat(span.textContent);
//   });
//   document.getElementById("totalAmount").textContent = `R$ ${total.toFixed(2)}`;
//   resetQuantities();
// }

// function resetQuantities() {
//     const quantities = document.querySelectorAll('span[id^="quantity"]');
//     quantities.forEach(span => {
//         span.textContent = "0";
//     });
//     const prices = document.querySelectorAll('span[id^="price"]');
//     prices.forEach(span => {
//         span.textContent = "0.00";
//     });
// }

// function fecharPopup() {
//   document.getElementById("popup").style.display = "none";
// }
  
//   function fecharPopup() {
//     document.getElementById("popup").style.display = "none";
//   }


function incrementQuantity(button) {
  var span = button.previousElementSibling;
  var quantity = parseInt(span.textContent) + 1;
  span.textContent = quantity;
}

function decrementQuantity(button) {
  var span = button.nextElementSibling;
  var quantity = parseInt(span.textContent) - 1;
  if (quantity < 0) quantity = 0;
  span.textContent = quantity;
}

function calculateTotal() {
  document.getElementById("popup").style.display = "block";
  let total = 0;
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
      const quantitySpan = item.querySelector('span[id^="quantity"]');
      const quantity = parseInt(quantitySpan.textContent);
      const price = parseFloat(item.querySelector('.plus').getAttribute('data-price'));
      total += price * quantity;
  });
  document.getElementById("totalAmount").textContent = `R$ ${total.toFixed(2)}`;
  resetQuantities();
}

function resetQuantities() {
  const quantities = document.querySelectorAll('span[id^="quantity"]');
  quantities.forEach(span => {
      span.textContent = "0";
  });
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg(){
    cont++

    if(cont > 17){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}
