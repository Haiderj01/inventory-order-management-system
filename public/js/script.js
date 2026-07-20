// ==========================================
// Inventory Management System
// Custom JavaScript
// ==========================================

// Delete Confirmation
document.addEventListener("DOMContentLoaded", () => {

    const deleteForms = document.querySelectorAll(".delete-form");

    deleteForms.forEach(form => {

        form.addEventListener("submit", function (e) {

            const confirmDelete = confirm(
                "Are you sure you want to delete this product?"
            );

            if (!confirmDelete) {
                e.preventDefault();
            }

        });

    });

    // Auto Hide Flash Messages

    const alerts = document.querySelectorAll(".alert");

    alerts.forEach(alert => {

        setTimeout(() => {

            alert.classList.remove("show");

            alert.classList.add("fade");

            setTimeout(() => {

                alert.remove();

            }, 300);

        }, 4000);

    });

});