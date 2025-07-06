function openTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.add('hidden');
    });
    document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('text-blue-600', 'text-white', 'active');
      button.classList.add('bg-gray-300', 'text-gray-800');
    });
    document.getElementById(tabName).classList.remove('hidden');
    event.currentTarget.classList.remove('bg-gray-300', 'text-gray-800');
    event.currentTarget.classList.add('bg-blue-600', 'text-white', 'active');
    // Kirim event ke Google Analytics
    gtag('event', 'tab_click', {
      'event_category': 'Tab Navigation',
      'event_label': tabName
    });
  }

  // Lacak klik link
  document.querySelectorAll('.tab-content a').forEach(link => {
    link.addEventListener('click', function() {
      gtag('event', 'link_click', {
        'event_category': 'Link',
        'event_label': this.href
      });
    });
  });
