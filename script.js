document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCountElement = document.getElementById('cart-count');
    
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Increment cart count
            cartCount++;
            cartCountElement.textContent = cartCount;

            // Visual feedback
            const originalText = button.textContent;
            button.textContent = "Added!";
            button.style.backgroundColor = "#2ed573"; // Green color
            
            // Revert button text and color after 1.5 seconds
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = ""; 
            }, 1500);
        });
    });
});


    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Para hindi mag-refresh ang page
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;

            submitBtn.textContent = "Sending...";
            
            setTimeout(() => {
                submitBtn.textContent = "Message Sent!";
                submitBtn.style.backgroundColor = "#2ed573"; // Green color

            
                setTimeout(() => {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.style.backgroundColor = ""; 
                    contactForm.reset();
                }, 3000);
            }, 1000);
        });
    }