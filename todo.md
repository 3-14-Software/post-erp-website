# À faire avant la mise en ligne

## Bloquant

- [ ] **Formulaire de contact** : remplacer `A-COMPLETER@example.com` dans `contact.html` (attribut `data-mailto` du formulaire). Tester l'envoi réel depuis un poste avec un client mail.
- [ ] **Mentions légales** : compléter tous les champs `[À COMPLÉTER]` de `mentions-legales.html` (éditeur, statut, SIRET, adresse, directeur de la publication, hébergeur).
- [ ] **Politique de confidentialité** : réécrire `politique-de-confidentialite.html`. Le texte actuel est celui généré par Shopify : il décrit une boutique en ligne (commandes, paiements, Shopify), contient une adresse e-mail personnelle et un lien mort « préférences de cookies ».

## À faire une fois l'adresse du site connue

- [ ] **Image de partage** : déclarer `assets/brand/partage-social-1200x628.png` dans les 4 pages (`og:image` et `twitter:image`, URL absolue obligatoire).
- [ ] **URL canonique** : ajouter `<link rel="canonical">` et `og:url` sur chaque page.
- [ ] **GitHub Pages** : activer dans Settings → Pages (branche `main`, dossier racine), puis brancher le nom de domaine si besoin (fichier `CNAME`).

## Améliorations

- [ ] **Page 404** : aucune page d'erreur n'a été reprise de la maquette ; créer un `404.html`.
- [ ] **Formulaire sans client mail** : le `mailto:` ne fonctionne pas pour un visiteur sans messagerie configurée ; envisager un service de formulaire (Formspree, Web3Forms…) ou un petit backend.
- [ ] **Poids du CSS** : `assets/theme/compiled-styles.css` (400 Ko) est la feuille complète du thème Horizon, dont la majorité sert à la boutique ; à élaguer.
- [ ] **Scripts du thème** : `assets/theme/*.js` ne servent qu'au pied de page (accordéon, infobulle des politiques) ; à remplacer par du HTML/CSS simple.
- [ ] **`theme-color`** : la balise meta est vide dans les 4 pages.
