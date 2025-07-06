// Toggle Dropdown Menu
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownButton = document.getElementById('dropdownButton');
    dropdownMenu.classList.toggle('active');
    dropdownButton.classList.toggle('active');
}

// Tab Switching Logic
function openTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });

    // Reset all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('bg-green-600', 'text-white', 'active');
        button.classList.add('bg-gray-300', 'text-gray-800');
    });

    // Show selected tab content
    document.getElementById(tabName).classList.remove('hidden');

    // Style the clicked button
    event.currentTarget.classList.remove('bg-gray-300', 'text-gray-800');
    event.currentTarget.classList.add('bg-green-600', 'text-white', 'active');

    // Update dropdown button text and icon
    const dropdownText = document.getElementById('dropdownText');
    dropdownText.innerHTML = event.currentTarget.innerHTML;

    // Close dropdown
    document.getElementById('dropdownMenu').classList.remove('active');
    document.getElementById('dropdownButton').classList.remove('active');

    // Send event to Google Analytics
    gtag('event', 'tab_click', {
        'event_category': 'Tab Navigation',
        'event_label': tabName
    });
}

// Track link clicks for Google Analytics
document.querySelectorAll('.tab-content a').forEach(link => {
    link.addEventListener('click', function() {
        gtag('event', 'link_click', {
            'event_category': 'Link',
            'event_label': this.href
        });
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.relative');
    if (!dropdown.contains(event.target)) {
        document.getElementById('dropdownMenu').classList.remove('active');
        document.getElementById('dropdownButton').classList.remove('active');
    }
});// Toggle Dropdown Menu
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownButton = document.getElementById('dropdownButton');
    dropdownMenu.classList.toggle('active');
    dropdownButton.classList.toggle('active');
}

// Tab Switching Logic
function openTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });

    // Reset all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('bg-green-600', 'text-white', 'active');
        button.classList.add('bg-gray-300', 'text-gray-800');
    });

    // Show selected tab content
    document.getElementById(tabName).classList.remove('hidden');

    // Style the clicked button
    event.currentTarget.classList.remove('bg-gray-300', 'text-gray-800');
    event.currentTarget.classList.add('bg-green-600', 'text-white', 'active');

    // Update dropdown button text and icon
    const dropdownText = document.getElementById('dropdownText');
    dropdownText.innerHTML = event.currentTarget.innerHTML;

    // Close dropdown
    document.getElementById('dropdownMenu').classList.remove('active');
    document.getElementById('dropdownButton').classList.remove('active');

    // Send event to Google Analytics
    gtag('event', 'tab_click', {
        'event_category': 'Tab Navigation',
        'event_label': tabName
    });
}

// Attach click event to tab buttons
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const tabId = button.getAttribute('data-tab');
        openTab(tabId);
    });
});

// Track link clicks for Google Analytics
document.querySelectorAll('.tab-content a').forEach(link => {
    link.addEventListener('click', function() {
        gtag('event', 'link_click', {
            'event_category': 'Link',
            'event_label': this.href
        });
    });
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.relative');
    if (!dropdown.contains(event.target)) {
        document.getElementById('dropdownMenu').classList.remove('active');
        document.getElementById('dropdownButton').classList.remove('active');
    }
});
