function openTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.add('hidden');
    });
    document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('text-blue-500', 'border-blue-500');
      button.classList.add('text-gray-600', 'border-transparent');
    });
    document.getElementById(tabName).classList.remove('hidden');
    event.currentTarget.classList.remove('text-gray-600', 'border-transparent');
    event.currentTarget.classList.add('text-blue-500', 'border-blue-500');
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
