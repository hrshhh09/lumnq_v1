const scenes = ['amber','lime','rose','blue','violet'];
const products = [
  {n:'ORRA',s:'Vitamin C Serum',t:'bottle',c:'skincare',sc:'amber'},
  {n:'PULSE',s:'',t:'can',c:'beverage',sc:'lime'},
  {n:'NOVA',s:'Daily Greens',t:'bottle',c:'supplements',sc:'blue'},
  {n:'Velour',s:'Silk Scarf',t:'bottle',c:'fashion',sc:'rose'},
  {n:'KIND',s:'Night Cream',t:'bottle',c:'skincare',sc:'violet'},
  {n:'FIZZ',s:'',t:'can',c:'beverage',sc:'amber'},
  {n:'HALC',s:'Magnesium',t:'bottle',c:'supplements',sc:'lime'},
  {n:'ATL9',s:'Eau de Parfum',t:'bottle',c:'fashion',sc:'violet'},
];
const prod = p => `<div class="product ${p.t} float"><span>${p.n}</span>${p.s?`<small>${p.s}</small>`:''}</div>`;

// hero reel
const reel = document.getElementById('reelTrack');
const reelItems = [...products, ...products].map(p =>
  `<div class="phone scene scene-${p.sc}">${prod(p)}</div>`).join('');
reel.innerHTML = reelItems + reelItems;

// showcase masonry
const masonry = document.getElementById('masonry');
masonry.innerHTML = [...products, ...products.slice().reverse()].map((p,i) =>
  `<div class="tile ${i%3===1?'sq':''}" data-c="${p.c}"><div class="scene scene-${p.sc}">${prod(p)}</div><span class="label">${p.c}</span></div>`).join('');
document.getElementById('filters').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('#filters button').forEach(x => x.classList.toggle('active', x === b));
  document.querySelectorAll('.tile').forEach(t => t.classList.toggle('hide', b.dataset.f !== 'all' && t.dataset.c !== b.dataset.f));
});

// reveal + counters
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in'); io.unobserve(e.target);
  e.target.querySelectorAll('[data-count]').forEach(el => {
    const end = +el.dataset.count, t0 = performance.now();
    const step = t => { const k = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  });
}), {threshold: .15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// before/after slider
const ba = document.getElementById('ba'), before = document.getElementById('baBefore'), handle = document.getElementById('baHandle');
let dragging = false;
const setBA = x => { const r = ba.getBoundingClientRect(); const p = Math.max(0, Math.min(100, (x - r.left) / r.width * 100));
  before.style.clipPath = `inset(0 ${100 - p}% 0 0)`; handle.style.left = p + '%'; };
ba.addEventListener('pointerdown', e => { dragging = true; ba.setPointerCapture(e.pointerId); setBA(e.clientX); });
ba.addEventListener('pointermove', e => dragging && setBA(e.clientX));
ba.addEventListener('pointerup', () => dragging = false);

// tilt cards
document.querySelectorAll('.tilt').forEach(c => {
  c.addEventListener('mousemove', e => { const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    c.style.transform = `perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-4px)`; });
  c.addEventListener('mouseleave', () => c.style.transform = '');
});

// cursor glow
const glow = document.querySelector('.cursor-glow');
addEventListener('mousemove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });

// dropzones
document.querySelectorAll('.dropzone').forEach(dz => {
  ['dragover','dragenter'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.add('drag'); }));
  ['dragleave','drop'].forEach(ev => dz.addEventListener(ev, e => { e.preventDefault(); dz.classList.remove('drag'); }));
  const show = f => { if (f) dz.querySelector('strong').textContent = `✓ ${f.name}. Sign up to generate`; };
  dz.addEventListener('drop', e => show(e.dataTransfer.files[0]));
  dz.querySelector('input').addEventListener('change', e => show(e.target.files[0]));
});
