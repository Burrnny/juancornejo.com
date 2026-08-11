// HouseMap — Leaflet wrapper (dark-styled OSM tiles, gold price pins)
function ensureLeaflet() {
  if (window.__tiLeaflet) return window.__tiLeaflet;
  window.__tiLeaflet = new Promise((res) => {
    if (window.L) { res(window.L); return; }
    if (!document.querySelector('link[data-ti-leaflet]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = 'vendor/leaflet/leaflet.css';
      l.integrity = 'sha384-sHL9NAb7lN7rfvG5lfHpm643Xkcjzp4jFvuavGOndn6pjVqS6ny56CAt3nsEVT4H';
      l.crossOrigin = 'anonymous';
      l.setAttribute('data-ti-leaflet', '1');
      document.head.appendChild(l);
    }
    const s = document.createElement('script');
    s.src = 'vendor/leaflet/leaflet.js';
    s.integrity = 'sha384-cxOPjt7s7Iz04uaHJceBmS+qpjv2JkIHNVcuOrM+YHwZOmJGBXI00mdUXEq65HTH';
    s.crossOrigin = 'anonymous';
    s.onload = () => res(window.L);
    document.head.appendChild(s);
  });
  return window.__tiLeaflet;
}
function injectMapCss() {
  if (document.querySelector('style[data-ti-mapcss]')) return;
  const st = document.createElement('style');
  st.setAttribute('data-ti-mapcss', '1');
  st.textContent = `
.ti-map{background:#0d0c0a}
.ti-map .leaflet-tile-pane{filter:invert(1) hue-rotate(180deg) brightness(.86) contrast(.9) saturate(.32)}
.ti-map .leaflet-control-attribution{background:rgba(10,9,8,.72);color:rgba(245,239,227,.42);font-size:8px}
.ti-map .leaflet-control-attribution a{color:rgba(212,176,106,.75)}
.ti-pin{position:relative;display:inline-block;transform:translate(-50%,calc(-100% - 9px));background:rgba(13,12,10,.94);border:1px solid #C6A15B;color:#EAD9B0;font:600 11px/1 -apple-system,system-ui,sans-serif;padding:6px 9px;border-radius:999px;white-space:nowrap;box-shadow:0 8px 20px rgba(0,0,0,.55);cursor:pointer}
.ti-pin:after{content:"";position:absolute;left:50%;top:100%;transform:translateX(-50%);border:5px solid transparent;border-top:7px solid #C6A15B}
.ti-pin.ti-sel{background:linear-gradient(180deg,#E3C078,#A8853F);color:#1a1206;border-color:#E3C078}
.ti-pin.ti-dim{opacity:.55}`;
  document.head.appendChild(st);
}
window.HouseMap = function HouseMap({ houses = [], selectedId = null, onSelect, interactive = true, zoom, center, fitPad = 46 }) {
  const ref = React.useRef(null);
  const mapR = React.useRef(null);
  const mkR = React.useRef({});
  React.useEffect(() => {
    let dead = false;
    ensureLeaflet().then((L) => {
      if (dead || !ref.current || mapR.current) return;
      injectMapCss();
      const opts = interactive
        ? { zoomControl: false }
        : { zoomControl: false, dragging: false, scrollWheelZoom: false, doubleClickZoom: false, boxZoom: false, keyboard: false, touchZoom: false, tap: false };
      const m = L.map(ref.current, opts);
      mapR.current = m;
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors', maxZoom: 19 }).addTo(m);
      const pts = houses.filter((h) => h.lat);
      pts.forEach((h) => {
        const ic = L.divIcon({ className: '', html: '<div class="ti-pin' + (h.id === selectedId ? ' ti-sel' : '') + (h.dim ? ' ti-dim' : '') + '">' + (h.tag || '·') + '</div>', iconSize: [0, 0] });
        const mk = L.marker([h.lat, h.lng], { icon: ic }).addTo(m);
        if (onSelect) mk.on('click', () => onSelect(h.id));
        mkR.current[h.id] = mk;
      });
      if (center) m.setView(center, zoom || 14);
      else if (pts.length === 1) m.setView([pts[0].lat, pts[0].lng], zoom || 15);
      else if (pts.length) m.fitBounds(L.latLngBounds(pts.map((h) => [h.lat, h.lng])), { padding: [fitPad, fitPad] });
      else m.setView([34.05, -118.24], 11);
      const ro = new ResizeObserver(() => { if (mapR.current) mapR.current.invalidateSize(); });
      ro.observe(ref.current);
      m.__ro = ro;
    });
    return () => {
      dead = true;
      if (mapR.current) {
        if (mapR.current.__ro) mapR.current.__ro.disconnect();
        mapR.current.remove();
        mapR.current = null;
      }
    };
  }, []);
  React.useEffect(() => {
    Object.entries(mkR.current).forEach(([id, mk]) => {
      const el = mk.getElement && mk.getElement();
      if (!el) return;
      const pin = el.querySelector('.ti-pin');
      if (pin) pin.classList.toggle('ti-sel', id === selectedId);
    });
  }, [selectedId]);
  return React.createElement('div', { ref, className: 'ti-map', style: { width: '100%', height: '100%', borderRadius: 'inherit' } });
};
