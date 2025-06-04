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


const API_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLjL79HKzJXNt15J6_dZzI7ihASVdfk-112x7LPBKFtJXr9KC0K_0osdGhVGrC4J7WhbLE6FA-KUFknRhPK6G5jBLcWE9-6ePY_taP1g0vaZJNl_O7n94_riqIEI5pP7Yhqi_RHnFBLw_1xc9FUJ5Ben9WZO4adUAD7hwdIfmq6Flb_l2N7Jv2-x6rdRyIMBPqqzOZzLej_en9I7sz2v_1CKXdmEvpvL54WNTOp1azOn4eN0ppelj9VJYoBlnbY4Z9dTjvB2uB6ME-2VsCtropHYU9aShw&lib=MFKIBho4T_j6zb_eV5855okSZlvIfKm0sZ';

let menuItems = [];

async function loadPricesFromSheet() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    menuItems = data;
    renderMenu(); // <- Gera os itens após carregar
  } catch (error) {
    console.error("Erro ao carregar dados da planilha:", error);
  }
}

function renderMenu() {
  const sections = {
    Bebidas: document.getElementById('bebidas-list'),
    Doces: document.getElementById('doces-list'),
    Comidas: document.getElementById('comidas-list'),
    Brincadeiras: document.getElementById('brincadeiras-list'),
  };

  // Limpa todas as listas
  for (const key in sections) {
    if (sections[key]) sections[key].innerHTML = '';
  }

  menuItems.forEach(item => {
    const li = document.createElement('li');
    li.className = "item";
    li.innerHTML = `
      <span class="nome-item">${item.Produto}</span>
      <span class="unit-price">R$ ${parseFloat(item.Preço).toFixed(2)}</span>
      <button class="minus" onclick="decrementQuantity(this)">-</button>
      <span id="quantity-${item.Produto}">0</span>
      <button class="plus" data-item="${item.Produto}" data-price="${item.Preço}" onclick="incrementQuantity(this)">+</button>
    `;

    const section = sections[item.Categoria];
    if (section) section.appendChild(li);
  });
}

function incrementQuantity(button) {
  const span = button.previousElementSibling;
  const quantity = parseInt(span.textContent) + 1;
  span.textContent = quantity;
}

function decrementQuantity(button) {
  const span = button.nextElementSibling;
  let quantity = parseInt(span.textContent) - 1;
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

window.onload = loadPricesFromSheet;