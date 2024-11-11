  // Products object with some items marked as 'Out-of-Stock'
  const products = { 
    'pink-top': 'In-Stock', 
    'green-top': 'Out-of-Stock', 
    'yellow-top': 'In-Stock', 
    'blue-top': 'Out-of-Stock', 
    'black-top': 'In-Stock', 
    'purple-top': 'In-Stock' 
  };
  
  function search() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = {};
    
    // Filter products based on search query
    for (let product in products) {
      if (product.toLowerCase().includes(query)) {
        filteredProducts[product] = products[product];
      }
    }
    
    display(filteredProducts); // Display filtered results
  }

  function display(filteredProducts) {
    const container = document.getElementById('product-buttons-container');
    container.innerHTML = ''; // Clear previous buttons

    // Create a button for each filtered product
    for (let product in filteredProducts) {
      const btn = document.createElement('button');
      btn.textContent = ${product} (${filteredProducts[product]});
      btn.className = filteredProducts[product] === 'In-Stock' ? 'in-stock' : 'out-of-stock';
      btn.disabled = filteredProducts[product] === 'Out-of-Stock'; // Disable button if out of stock
      container.appendChild(btn);
    }
  }

  // Display all products initially
  display(products);