/*
 * Protection TEMPORAIRE par mot de passe (page « Site en préparation »).
 * Simple barrière dissuasive : le contenu reste lisible dans le code source et le dépôt.
 *
 * Changer le mot de passe : remplacer HASH par le résultat de
 *   printf '%s' 'nouveau-mot-de-passe' | sha256sum
 * HASH vide = protection désactivée.
 * Retirer la protection : supprimer ce fichier et, dans chaque page, les deux lignes
 * marquées « protection temporaire » dans le <head>.
 */
(() => {
  const HASH = 'bfac7260ccb3871bde30f8f07c5782b3b22ce7dfae5b85746a90dc0060cb0d15';
  const KEY = 'post-erp-acces';
  if (!HASH) return;
  try { if (localStorage.getItem(KEY) === HASH) return; } catch (e) { /* stockage indisponible */ }

  const root = document.documentElement;
  root.classList.add('gate-locked');
  const style = document.createElement('style');
  style.textContent = `
    html.gate-locked, html.gate-locked body { overflow: hidden; background: #141517; }
    html.gate-locked body > :not(.gate) { display: none !important; }
    .gate { position: fixed; inset: 0; z-index: 99999; display: grid; place-items: center; padding: 24px;
      background: radial-gradient(60rem 30rem at 50% -10%, rgb(143 203 126 / 0.14), transparent 70%), #141517;
      color: #F2F2F1; font-family: Inter, system-ui, sans-serif; }
    .gate__box { width: 100%; max-width: 26rem; text-align: center; }
    .gate__logo { display: inline-block; height: 44px; width: auto; margin-bottom: 2rem; }
    .gate__kicker { margin: 0 0 .75rem; font-size: .8125rem; letter-spacing: .04em; color: #c6d0bc; }
    .gate__title { margin: 0 0 .75rem; font-size: 2rem; line-height: 1.1; font-weight: 600; letter-spacing: -.03em; color: #fff; }
    .gate__text { margin: 0 0 1.75rem; font-size: 1rem; line-height: 1.55; color: rgb(242 242 241 / .72); }
    .gate__form { display: flex; gap: .5rem; }
    .gate__input { flex: 1; min-width: 0; height: 48px; padding: 0 1rem; border-radius: 12px; font: inherit; font-size: 1rem;
      color: #fff; background: rgb(255 255 255 / .06); border: 1px solid rgb(255 255 255 / .18); }
    .gate__input:focus-visible { outline: 2px solid #8FCB7E; outline-offset: 2px; }
    .gate__btn { height: 48px; padding: 0 1.25rem; border: 0; border-radius: 12px; font: inherit; font-weight: 600;
      color: #141517; background: #e6ede0; cursor: pointer; }
    .gate__btn:hover { background: #fff; }
    .gate__error { min-height: 1.5em; margin: .75rem 0 0; font-size: .875rem; color: #ffb4a8; }
    .gate__sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); }
  `;
  document.head.appendChild(style);

  const sha256 = async (text) => {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
  };

  const show = () => {
    const gate = document.createElement('div');
    gate.className = 'gate';
    gate.innerHTML = `
      <div class="gate__box">
        <img class="gate__logo" src="assets/brand/post-erp-logo-fond-sombre.svg" alt="Post-ERP">
        <p class="gate__kicker">ERP sur mesure · TPE et PME</p>
        <h1 class="gate__title">Site en préparation</h1>
        <p class="gate__text">Le site est en cours de finalisation. Vous avez reçu un mot de passe ? Saisissez-le ci-dessous.</p>
        <form class="gate__form" novalidate>
          <label class="gate__sr" for="gate-password">Mot de passe</label>
          <input class="gate__input" id="gate-password" type="password" placeholder="Mot de passe" autocomplete="current-password" required>
          <button class="gate__btn" type="submit">Entrer</button>
        </form>
        <p class="gate__error" role="alert"></p>
      </div>`;
    document.body.appendChild(gate);
    const input = gate.querySelector('input');
    input.focus();
    gate.querySelector('form').addEventListener('submit', async (event) => {
      event.preventDefault();
      if ((await sha256(input.value)) === HASH) {
        try { localStorage.setItem(KEY, HASH); } catch (e) { /* accès valable pour cette page seulement */ }
        gate.remove();
        style.remove();
        root.classList.remove('gate-locked');
      } else {
        gate.querySelector('.gate__error').textContent = 'Mot de passe incorrect.';
        input.select();
      }
    });
  };
  if (document.body) show(); else document.addEventListener('DOMContentLoaded', show);
})();
