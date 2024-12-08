// Filter products
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      productCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal event to show product details
  $('#productModal').on('show.bs.modal', function(event) {
    const button = $(event.relatedTarget); // Button that triggered the modal
    const modal = $(this);
    modal.find('.modal-title').text("SORRY DEAR! OUT OF STOCK...");
    modal.find('.modal-body').html(`
      <p>ON SALE!! Buy It Before It's Too Late!!</p>
      <p><strong>Amount:</strong> 250</p>
      <p><strong>Seller:</strong> Paloma</p>
    `);
  });

  // Add to Cart button functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const stockStatus = this.nextElementSibling;
      stockStatus.style.display = 'inline';
    });
  });

  // Click to Buy Available Items Button
  const buyAvailableItemsButton = document.getElementById('buy-available-items');
  const outOfStockMessage = document.getElementById('out-of-stock-message');

  buyAvailableItemsButton.addEventListener('click', function() {
    outOfStockMessage.style.display = 'block';
  });
});
