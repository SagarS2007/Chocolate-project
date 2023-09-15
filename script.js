// JavaScript for handling form submission and price calculation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("chocolate-pack-form");
    const totalPriceDisplay = document.getElementById("total-price");
    const chooseChocolatesHeading = document.getElementById("choose-chocolates-heading");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let totalQuantity = 0;
        let totalPrice = 0;

        // Loop through chocolate options
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox, index) {
            if (checkbox.checked) {
                const quantityInput = form.querySelector(`input[name="quantity${index + 1}"]`);
                const price = parseFloat(checkbox.getAttribute("data-price"));
                const quantity = parseInt(quantityInput.value);

                totalQuantity += quantity;
                totalPrice += price * quantity;
            }
        });

        // Check if the total quantity does not exceed 8
        if (totalQuantity > 8) {
            alert("Total quantity cannot exceed 8.");
        } else {
            totalPriceDisplay.textContent = totalPrice.toFixed(2);
        }

        // Update the heading with the current total quantity
        chooseChocolatesHeading.textContent = `Choose Chocolates (Total: ${totalQuantity}/8)`;
    });
});