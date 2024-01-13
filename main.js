<script>
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

<!-- Add this within the <body> tag, after your current content -->
function applyFilters() {
        // Get selected values from filters
        var brand = document.getElementById('brand').value;
        // Get other filter values similarly

        // Filter cards based on selected values
        var cards = document.querySelectorAll('.card');

        cards.forEach(function (card) {
            // Get data attributes or other identifiers from your cards
            var cardBrand = card.getAttribute('data-brand');
            // Get other card attributes similarly

            // Check if the card meets the filter criteria
            var showCard = true;

            if (brand !== 'all' && cardBrand !== brand) {
                showCard = false;
            }
            // Implement similar checks for other filters

            // Show or hide the card based on the filter criteria
            card.style.display = showCard ? 'block' : 'none';
        });
    }

</script>