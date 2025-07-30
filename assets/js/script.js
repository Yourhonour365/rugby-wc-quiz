
  document.addEventListener('DOMContentLoaded', function () {
    const accordion = document.getElementById('knowledgeAccordion');

    accordion.addEventListener('shown.bs.collapse', function (event) {
      const header = event.target.closest('.accordion-item');
      if (header) {
        header.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

