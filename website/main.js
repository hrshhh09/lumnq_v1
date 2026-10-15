const products = [
  {n:'ORRA',s:'Vitamin C Serum',t:'bottle',c:'skincare',sc:'blush'},
  {n:'PULSE',s:'',t:'can',c:'beverage',sc:'ice'},
  {n:'NOVA',s:'Daily Greens',t:'bottle',c:'supplements',sc:'amber'},
  {n:'Velour',s:'Silk Scarf',t:'bottle',c:'fashion',sc:'violet'},
  {n:'KIND',s:'Night Cream',t:'bottle',c:'skincare',sc:'blush'},
  {n:'FIZZ',s:'',t:'can',c:'beverage',sc:'ice'},
  {n:'HALC',s:'Magnesium',t:'bottle',c:'supplements',sc:'amber'},
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
const showcase = [
  {f:'supplements-01',b:'Ferment Co.',c:'supplements'},
  {f:'skincare-01',b:'Velle',c:'skincare'},
  {f:'beverage-01',b:'Tide/Line',c:'beverage'},
  {f:'fashion-01',b:'Orrin',c:'fashion'},
  {f:'supplements-02',b:'Nocta',c:'supplements'},
  {f:'skincare-02',b:'Velle',c:'skincare'},
  {f:'beverage-02',b:'Kold',c:'beverage'},
  {f:'fashion-02',b:'Orrin',c:'fashion',sq:true},
];
masonry.innerHTML = showcase.map(s =>
  `<div class="tile ${s.sq?'sq':''}" data-c="${s.c}"><img src="assets/showcase/${s.f}.jpg" alt="${s.b} ${s.c} product scene" loading="lazy" /><span class="label"><b>${s.b}</b>${s.c}</span></div>`).join('');
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
  setPct(p); };
let pct = 50;
const setPct = p => { pct = Math.max(0, Math.min(100, p));
  before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`; handle.style.left = pct + '%'; handle.setAttribute('aria-valuenow', Math.round(pct)); };
ba.addEventListener('pointerdown', e => { dragging = true; ba.setPointerCapture(e.pointerId); setBA(e.clientX); });
ba.addEventListener('pointermove', e => dragging && setBA(e.clientX));
['pointerup','pointercancel'].forEach(t => ba.addEventListener(t, () => dragging = false));
handle.addEventListener('keydown', e => {
  const d = {ArrowLeft:-5, ArrowRight:5, Home:-100, End:100}[e.key];
  if (d !== undefined) { e.preventDefault(); setPct(pct + d); }
});

// tilt cards
document.querySelectorAll('.tilt').forEach(c => {
  c.addEventListener('mousemove', e => { const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    c.style.transform = `perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-4px)`; });
  c.addEventListener('mouseleave', () => c.style.transform = '');
});
