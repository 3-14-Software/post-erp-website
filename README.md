# Site « ERP sur mesure » — version statique

Copie statique de la maquette Shopify (thème Horizon + sections `erp-*`), sans aucune dépendance à Shopify.

- `index.html`, `contact.html`, `mentions-legales.html`, `politique-de-confidentialite.html`
- `assets/` : polices, images, CSS et les quelques scripts du thème encore utilisés
- `.nojekyll` : GitHub Pages sert les fichiers tels quels

## Publier sur GitHub Pages

1. Créer un dépôt GitHub et y pousser le contenu de ce dossier (à la racine, branche `main`).
2. Dans le dépôt : Settings → Pages → Source « Deploy from a branch », branche `main`, dossier `/ (root)`.

Tous les liens sont relatifs : le site fonctionne aussi bien sur `utilisateur.github.io/depot/` que sur un domaine personnalisé.

## À compléter

Liste complète et à jour dans [todo.md](todo.md).

- **Formulaire de contact** : dans `contact.html`, remplacer `A-COMPLETER@example.com` (attribut `data-mailto` du formulaire). Le formulaire ouvre la messagerie du visiteur avec un e-mail pré-rempli (`assets/contact.js`).
- **Mentions légales** : champs `[À COMPLÉTER]`.
- **Politique de confidentialité** : texte généré par Shopify, à réécrire (il décrit une boutique Shopify).
- **Image de partage** : `assets/brand/partage-social-1200x628.png` est fournie mais pas encore déclarée (`og:image` exige l'URL définitive du site).

## Aperçu local

    python3 -m http.server 8931
