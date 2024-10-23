let productItems = document.getElementsByClassName('yes');

for (let i = 0; i < productItems.length; i++) {
    productItems[i].addEventListener('mouseover', function () {
        this.style.backgroundColor = '#f0f0f0'; // Change background on hover
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Add shadow
        this.style.transform = 'scale(1.05)'; // Slight zoom effect
        this.style.transition = 'all 0.3s ease'; // Smooth transition
        this.style.width = '400px'
    });

    productItems[i].addEventListener('mouseout', function () {
        this.style.backgroundColor = 'white'; // Revert background
        this.style.boxShadow = 'none'; // Remove shadow
        this.style.transform = 'scale(1)'; // Revert zoom
    });
}
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('mousedown', function () {
        this.style.backgroundColor = '#333'; // Darken background
        this.style.color = 'white'; // Change text color to white
        this.style.border = '1px solid #333'; // Adjust border color
    });

    button.addEventListener('mouseup', function () {
        this.style.backgroundColor = 'white'; // Revert to original color
        this.style.color = 'black'; // Revert text color
        this.style.border = '1px solid black'; // Revert border
    });
});
function showPopup() {
    let popup = document.getElementById('window');
    popup.style.display = 'flex';
    popup.style.opacity = '0'; // Start with hidden opacity
    popup.style.transition = 'opacity 0.5s ease'; // Add smooth transition

    setTimeout(() => {
        popup.style.opacity = '1'; // Gradually fade in
    }, 10);
}

function hidePopup() {
    let popup = document.getElementById('window');
    popup.style.transition = 'opacity 0.5s ease'; // Smooth fade out
    popup.style.opacity = '0'; // Gradually fade out

    setTimeout(() => {
        popup.style.display = 'none'; // Hide after transition
    }, 500);
}

// To trigger the popup
popup.children[1].children[0].addEventListener('click', hidePopup);

// Add event listener to the product cards to show the popup
for(let i = 0; i < productItems.length; i++) {
    productItems[i].addEventListener('click', showPopup);
}
document.querySelector('.nice button').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to top
    });
});
document.addEventListener('DOMContentLoaded', () => {
    let productItems = document.getElementsByClassName('yes');

    // Hover effect on product items
    for (let i = 0; i < productItems.length; i++) {
        productItems[i].addEventListener('mouseover', function () {
            this.style.backgroundColor = '#f0f0f0';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });

        productItems[i].addEventListener('mouseout', function () {
            this.style.backgroundColor = 'white';
            this.style.boxShadow = 'none';
            this.style.transform = 'scale(1)';
        });
    }

    // Popup functionality with fade animation
    let popup = document.getElementById('window');

    for (let i = 0; i < productItems.length; i++) {
        productItems[i].addEventListener('click', function () {
            let image = this.children[1].children[3].children[0].getAttribute('src');
            let productNme = this.children[0].children[0].innerText;
            let price = this.children[0].children[2].innerText;
            let unit = Math.trunc(Math.random() * 5);
            popup.children[0].children[0].setAttribute('src', image);
            popup.children[1].children[1].innerText = productNme;
            popup.children[1].children[2].innerText = price;
            popup.children[1].children[4].innerText = '+' + unit + ' available';

            popup.style.display = 'flex';
            popup.style.opacity = '0';
            popup.style.transition = 'opacity 0.5s ease';
            setTimeout(() => popup.style.opacity = '1', 10);
        });
    }

    // Close popup
    popup.children[1].children[0].addEventListener('click', function () {
        popup.style.transition = 'opacity 0.5s ease';
        popup.style.opacity = '0';
        setTimeout(() => popup.style.display = 'none', 500);
    });

    // Smooth scroll to top
    document.querySelector('.nice button').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
