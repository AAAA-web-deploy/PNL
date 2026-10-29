/* Pepe Needs Liquidity — public prelaunch configuration.
 * Add actual, verified public links below after announcement. Never paste wallet keys here.
 */
const PNL = Object.freeze({
  contractAddress: 'Coming Soon..',
  socials: { x: '', telegram: '' },
  network: 'ethereum'
});

const displayedContract = document.querySelector('#contract-text');
if (displayedContract) displayedContract.textContent = PNL.contractAddress;

const toast = document.querySelector('#toast');
let toastTimeout;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('active');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('active'), 3500);
}

function fallbackCopy(text) {
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.cssText = 'position:fixed;top:-2000px;left:0;opacity:0';
  document.body.appendChild(field);
  field.focus(); field.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch (_) { ok = false; }
  field.remove();
  return ok;
}

async function copyContract() {
  let copied = false;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(PNL.contractAddress);
      copied = true;
    }
  } catch (_) { /* fallback for local files and denied clipboard permissions */ }
  if (!copied) copied = fallbackCopy(PNL.contractAddress);
  if (copied) {
    showToast('Copied: ' + PNL.contractAddress);
    const btn = document.querySelector('#copy-ca');
    const original = btn.innerHTML;
    btn.textContent = 'COPIED ✓';
    setTimeout(() => { btn.innerHTML = original; }, 1800);
  } else {
    showToast('Copy unavailable — select the address and copy it manually.');
    const value = document.querySelector('#contract-text');
    if (value) {
      const range = document.createRange();
      range.selectNodeContents(value);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
}

document.querySelector('#copy-ca')?.addEventListener('click', copyContract);

document.querySelectorAll('[data-social]').forEach(button => {
  button.addEventListener('click', () => {
    const platform = button.dataset.social;
    const url = PNL.socials[platform];
    if (url && /^https:\/\//.test(url)) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      showToast((platform === 'x' ? 'X' : 'Telegram') + ' link coming soon — no official URL announced.');
    }
  });
});

const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-nav');
function setMenu(open) {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileMenu.inert = !open;
  document.body.classList.toggle('menu-open', open);
}
menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
document.addEventListener('click', event => {
  if (mobileMenu && menuToggle && !mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) setMenu(false);
});

document.querySelector('#year').textContent = String(new Date().getFullYear());

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -45px 0px', threshold: 0.07 });
  document.querySelectorAll('.reveal').forEach((element, i) => {
    element.style.transitionDelay = `${Math.min(i % 4, 2) * 65}ms`;
    observer.observe(element);
  });
}
