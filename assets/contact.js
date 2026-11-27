/*
 * Formulaire de contact statique (remplace l'envoi Shopify).
 * Sans serveur, le formulaire ouvre la messagerie du visiteur avec un e-mail pré-rempli.
 * L'adresse de destination se règle dans contact.html : attribut data-mailto du <form>.
 */
(() => {
  const form = document.querySelector('form[data-static-contact]');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const lines = [];
    for (const field of form.querySelectorAll('input, select, textarea')) {
      if (field.type === 'hidden' || !field.value.trim()) continue;
      const label = form.querySelector(`label[for="${field.id}"]`);
      const name = (label ? label.textContent : field.name).replace('*', '').trim();
      lines.push(field.tagName === 'TEXTAREA' ? `\n${name} :\n${field.value.trim()}` : `${name} : ${field.value.trim()}`);
    }
    const company = form.querySelector('[autocomplete="organization"]');
    const subject = `Demande de devis${company && company.value.trim() ? ' – ' + company.value.trim() : ''}`;
    window.location.href =
      `mailto:${form.dataset.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  });
})();
