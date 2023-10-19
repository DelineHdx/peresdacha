document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const subMenu = item.nextElementSibling;

            if (subMenu) {
                subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});
