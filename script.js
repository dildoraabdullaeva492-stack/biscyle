const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

const IMGS = [
  "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1200&q=80",
];
const FALLBACK_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450"><rect width="600" height="450" fill="#121A33"/><circle cx="170" cy="275" r="78" fill="none" stroke="#FF6B2C" stroke-width="6"/><circle cx="430" cy="275" r="78" fill="none" stroke="#F6F1E7" stroke-width="6"/><path d="M170 275 L250 175 L395 160 L290 275 Z M290 275 L255 140 M390 145 L430 275" fill="none" stroke="#FF6B2C" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  );

const RAW_BIKES = [
  [
    "Aero RX Carbon",
    "Road",
    6490,
    5.0,
    "Best Seller",
    0,
    "6.8 kg",
    "12-Spd Di2",
  ],
  [
    "Veloce SL Team",
    "Road",
    8290,
    4.9,
    "Limited",
    1,
    "6.5 kg",
    "12-Spd RED AXS",
  ],
  [
    "Strada Endurance Pro",
    "Road",
    4890,
    4.8,
    "New",
    2,
    "7.3 kg",
    "12-Spd Ultegra",
  ],
  [
    "Cima Ultralight 6.2",
    "Road",
    9400,
    5.0,
    "Limited",
    6,
    "6.2 kg",
    "12-Spd Dura-Ace",
  ],
  [
    "Crit Sprint ALX",
    "Road",
    3290,
    4.7,
    "Best Seller",
    0,
    "7.8 kg",
    "12-Spd 105 Di2",
  ],
  ["Dolomia Aero Disc", "Road", 5750, 4.9, "New", 7, "7.0 kg", "12-Spd Force"],
  [
    "Vento TT Chrono",
    "Road",
    8950,
    4.9,
    "Limited",
    1,
    "7.4 kg",
    "12-Spd Aero Di2",
  ],
  [
    "Corsa Neo Carbon",
    "Road",
    4190,
    4.8,
    "Best Seller",
    2,
    "7.5 kg",
    "12-Spd Rival",
  ],
  [
    "Falcon GX Gravel",
    "Gravel",
    5290,
    4.9,
    "Best Seller",
    3,
    "7.9 kg",
    "13-Spd Campagnolo",
  ],
  [
    "Terra X-Trail 48",
    "Gravel",
    4650,
    4.8,
    "New",
    3,
    "8.3 kg",
    "12-Spd GRX 825",
  ],
  [
    "Nomad Titanium Bikepack",
    "Gravel",
    6890,
    5.0,
    "Limited",
    6,
    "8.4 kg",
    "12-Spd XPLR",
  ],
  [
    "Flint 200 Race",
    "Gravel",
    5890,
    4.9,
    "Best Seller",
    1,
    "7.7 kg",
    "12-Spd Force XPLR",
  ],
  [
    "Outback Dual-Susp GX",
    "Gravel",
    6150,
    4.7,
    "New",
    3,
    "8.8 kg",
    "12-Spd Eagle",
  ],
  [
    "Sahara All-Road SL",
    "Gravel",
    3890,
    4.8,
    "Best Seller",
    7,
    "8.5 kg",
    "12-Spd GRX",
  ],
  [
    "Boreal Carbon Adventure",
    "Gravel",
    4990,
    4.9,
    "New",
    3,
    "8.1 kg",
    "12-Spd Apex AXS",
  ],
  [
    "Summit Pro 29",
    "Mountain",
    6790,
    5.0,
    "Best Seller",
    4,
    "11.4 kg",
    "12-Spd XX SL",
  ],
  [
    "Apex Enduro 170",
    "Mountain",
    7490,
    4.9,
    "New",
    4,
    "13.6 kg",
    "12-Spd X0 T-Type",
  ],
  [
    "Ridge XC WorldCup",
    "Mountain",
    8100,
    5.0,
    "Limited",
    4,
    "9.8 kg",
    "12-Spd XX SL",
  ],
  [
    "Kodiak Downcountry",
    "Mountain",
    5490,
    4.8,
    "Best Seller",
    5,
    "11.9 kg",
    "12-Spd XT",
  ],
  [
    "Vulcan DH Factory",
    "Mountain",
    7950,
    4.9,
    "Limited",
    4,
    "15.2 kg",
    "7-Spd X01 DH",
  ],
  [
    "Timber Trail Hardtail",
    "Mountain",
    3490,
    4.7,
    "New",
    4,
    "10.6 kg",
    "12-Spd GX",
  ],
  [
    "Granite Carbon All-Mtn",
    "Mountain",
    6250,
    4.8,
    "Best Seller",
    4,
    "12.8 kg",
    "12-Spd XTR",
  ],
  [
    "Volt E-City Stealth",
    "Electric",
    4590,
    4.9,
    "Best Seller",
    5,
    "12.9 kg",
    "Mahle X20 + Belt",
  ],
  [
    "Volt E-Road SL",
    "Electric",
    7290,
    5.0,
    "New",
    0,
    "11.2 kg",
    "TQ HPR50 + Di2",
  ],
  [
    "Ampere E-Gravel GX",
    "Electric",
    6690,
    4.8,
    "New",
    3,
    "12.4 kg",
    "TQ HPR50 + GRX",
  ],
  [
    "Surge E-Enduro 160",
    "Electric",
    8690,
    4.9,
    "Limited",
    4,
    "18.4 kg",
    "85Nm + XT Di2",
  ],
  [
    "Pulse Urban Commuter",
    "Electric",
    3790,
    4.7,
    "Best Seller",
    5,
    "13.8 kg",
    "Auto 11-Spd",
  ],
  [
    "Hyperion E-Touring",
    "Electric",
    5950,
    4.8,
    "New",
    5,
    "14.5 kg",
    "720Wh + Rohloff",
  ],
  [
    "Junior Pro 24 Carbon",
    "Kids",
    1890,
    5.0,
    "Best Seller",
    6,
    "6.9 kg",
    "11-Spd Rival",
  ],
  [
    "Mini Ripper 20 Trail",
    "Kids",
    1190,
    4.9,
    "New",
    4,
    "7.8 kg",
    "9-Spd MicroShift",
  ],
  [
    "Future Champ 26 XC",
    "Kids",
    2150,
    4.9,
    "Limited",
    6,
    "8.1 kg",
    "12-Spd GX",
  ],
  [
    "Balance Carbon 14",
    "Kids",
    690,
    4.8,
    "Best Seller",
    5,
    "3.1 kg",
    "Ultralight Push",
  ],
];

const BIKES = RAW_BIKES.map(
  ([name, category, price, rating, tag, imgIdx, weight, gears], id) => ({
    id: id + 1,
    name,
    category,
    price,
    rating,
    tag,
    image: IMGS[imgIdx],
    weight,
    gears,
  }),
);
const STORIES = [
  {
    meta: "ALPINE EXPEDITION · 6 MIN READ",
    title: "Crossing the Passo Giau Before First Light: 4,800m on the Aero RX",
    body: [
      "At 04:40 in Cortina d'Ampezzo, the air sits at two degrees Celsius. Our three prototype Aero RX SL frames roll silently out of the hotel courtyard, headlights cutting through silver valley mist.",
      "Climbing the 29 tornanti of the Passo Giau reveals why bottom-bracket stiffness-to-weight ratio matters more than raw wind-tunnel numbers alone.",
      "Descending toward Selva di Cadore at 78 km/h, the cryo-fin ceramic rotors held consistent bite without a hint of thermal glaze.",
    ],
  },
  {
    meta: "AERO ENGINEERING · 8 MIN READ",
    title: "Chasing 31 Watts: How Boundary-Layer Trip Strips Changed Our Fork",
    body: [
      "Conventional airfoil tubes stall when crosswind yaw angles exceed 12 degrees. In our subterranean Dolomites tunnel, we tested 44 fork crown geometries using particle image velocimetry.",
      "By introducing micro-textured carbon trip steps along the leading edge of the Twin-Vortex fork, airflow remains attached up to 18.5 degrees of yaw.",
    ],
  },
  {
    meta: "GRAVEL ULTRA · 5 MIN READ",
    title: "320 Kilometers of Flint & Crosswinds on the Falcon GX Gravel",
    body: [
      "Sharp limestone flint slices ordinary casings in the first 80 kilometers. We spec'd the Falcon GX with clearance for 50mm tires while preserving a tight 420mm chainstay for road-like snap.",
      "Ten hours into the headwind sector, the compliant bowed seatstays absorbed high-frequency chatter that leaves riders fatigued on rigid race frames.",
    ],
  },
];

const readStore = (k, d) => {
  try {
    return JSON.parse(localStorage.getItem(k)) || d;
  } catch {
    return d;
  }
};
const writeStore = (k, v) => {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {}
};

let state = {
  filter: "All",
  wishOnly: false,
  search: "",
  sort: "featured",
  visible: 12,
  cart: readStore("axvel_cart", []),
  wish: readStore("axvel_wish", []),
  qvBike: BIKES[0],
  qvQty: 1,
  qvSize: "M (54)",
  lbIdx: 0,
  cfg: {
    color: "#FF6B2C",
    colorName: "Tangerine Ignis",
    cAdd: 0,
    wName: "60MM AERO CARBON",
    wAdd: 0,
    sName: "Ivory Microtex 3D",
    sAdd: 0,
  },
};

const bindSmoothTilt = (selector, maxDeg = 6) => {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  $$(selector).forEach((el) => {
    if (el.dataset.tiltBound) return;
    el.dataset.tiltBound = "1";
    let rect = null,
      raf = 0;
    el.addEventListener(
      "pointerenter",
      () => {
        rect = el.getBoundingClientRect();
        el.classList.add("is-tilting");
      },
      { passive: true },
    );
    el.addEventListener(
      "pointermove",
      (e) => {
        if (!rect || raf) return;
        const cx = e.clientX,
          cy = e.clientY;
        raf = requestAnimationFrame(() => {
          const x = (cx - rect.left) / rect.width;
          const y = (cy - rect.top) / rect.height;
          el.style.setProperty(
            "--rx",
            `${((0.5 - y) * maxDeg * 2).toFixed(2)}deg`,
          );
          el.style.setProperty(
            "--ry",
            `${((x - 0.5) * maxDeg * 2).toFixed(2)}deg`,
          );
          el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
          el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
          raf = 0;
        });
      },
      { passive: true },
    );
    el.addEventListener(
      "pointerleave",
      () => {
        if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
        el.classList.remove("is-tilting");
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
      },
      { passive: true },
    );
  });
};

const renderProducts = () => {
  const grid = $("#product-grid"),
    countLbl = $("#bike-count-label"),
    moreBtn = $("#load-more-btn"),
    moreCnt = $("#load-more-count");
  if (!grid) return;
  let list = BIKES.filter(
    (b) =>
      (state.filter === "All" || b.category === state.filter) &&
      (!state.wishOnly || state.wish.includes(b.id)) &&
      (b.name.toLowerCase().includes(state.search.toLowerCase()) ||
        b.category.toLowerCase().includes(state.search.toLowerCase())),
  );
  if (state.sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (state.sort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (state.sort === "rating") list.sort((a, b) => b.rating - a.rating);
  const slice = list.slice(0, state.visible);
  countLbl.textContent = `SHOWING ${slice.length} OF ${list.length} MODELS`;
  $("#wishlist-badge").textContent = state.wish.length;
  grid.innerHTML = slice.length
    ? slice
        .map(
          (b) => `
    <article class="bike-card" data-id="${b.id}">
      <div class="bike-card-media" data-qv="${b.id}">
        <span class="bike-tag">${b.tag}</span>
        <button type="button" class="wish-btn ${state.wish.includes(b.id) ? "active" : ""}" data-wish="${b.id}" aria-label="Save ${b.name} to wishlist">♥</button>
        <img src="${b.image}" alt="${b.name} — ${b.category} bicycle" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${FALLBACK_SVG}';" />
        <span class="qv-trigger-overlay">Quick View ↗</span>
      </div>
      <div class="bike-card-body">
        <div class="bike-meta-line"><span>${b.category.toUpperCase()} · ${b.weight}</span><span class="bike-stars">★ ${b.rating.toFixed(1)}</span></div>
        <h3 class="bike-title" data-qv="${b.id}">${b.name}</h3>
        <div class="bike-card-footer">
          <strong class="bike-price">$${b.price.toLocaleString()}</strong>
          <button type="button" class="add-cart-btn" data-add="${b.id}" aria-label="Add ${b.name} to bag">+ Add to Cart</button>
        </div>
      </div>
    </article>`,
        )
        .join("")
    : `<p class="mono-label" style="grid-column:1/-1;padding:2rem 0;">No bicycles match your filter criteria.</p>`;
  const rem = Math.max(0, list.length - slice.length);
  moreBtn.style.display = rem > 0 ? "inline-flex" : "none";
  if (moreCnt) moreCnt.textContent = `+${rem}`;
  bindSmoothTilt(".bike-card", 5.5);
};

const saveCart = () => {
  writeStore("axvel_cart", state.cart);
  const totalQty = state.cart.reduce((s, i) => s + i.qty, 0),
    sub = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const badge = $("#cart-badge");
  badge.textContent = totalQty;
  badge.classList.remove("bump");
  void badge.offsetWidth;
  badge.classList.add("bump");
  $("#cart-drawer-count").textContent = totalQty;
  $("#cart-subtotal").textContent = `$${sub.toLocaleString()}`;
  $("#shipping-fill").style.width = `${Math.min(100, (sub / 2500) * 100)}%`;
  $("#shipping-msg").innerHTML =
    sub >= 2500
      ? "Complimentary <strong>AirVault Global Freight</strong> unlocked!"
      : `Add <strong>$${(2500 - sub).toLocaleString()}</strong> for complimentary AirVault freight`;
  $("#cart-items").innerHTML = state.cart.length
    ? state.cart
        .map(
          (item, idx) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${FALLBACK_SVG}';" />
      <div>
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-sub">${item.spec} · $${item.price.toLocaleString()}</div>
        <div class="cart-item-controls">
          <button type="button" class="ci-btn" data-cqty="${idx}" data-d="-1" aria-label="Decrease quantity">−</button>
          <span class="mono-label">${item.qty}</span>
          <button type="button" class="ci-btn" data-cqty="${idx}" data-d="1" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <button type="button" class="ci-btn" data-crem="${idx}" aria-label="Remove item">✕</button>
    </div>`,
        )
        .join("")
    : `<p class="mono-label" style="text-align:center;margin-top:2rem;">Your riding bag is empty.</p>`;
};

const addToCart = (bike, qty = 1, spec = "Size M (54)") => {
  const key = `${bike.name}-${spec}`,
    ex = state.cart.find((i) => i.key === key);
  if (ex) ex.qty += qty;
  else
    state.cart.push({
      key,
      name: bike.name,
      price: bike.price,
      image: bike.image || IMGS[0],
      spec,
      qty,
    });
  saveCart();
};

const toggleCart = (open) => {
  $("#cart-drawer").classList.toggle("open", open);
  $("#cart-backdrop").classList.toggle("open", open);
  $("#cart-drawer").setAttribute("aria-hidden", !open);
};

const openQuickView = (id) => {
  const b = BIKES.find((x) => x.id === Number(id)) || BIKES[0];
  state.qvBike = b;
  state.qvQty = 1;
  $("#qv-tag").textContent = b.tag;
  $("#qv-img").src = b.image;
  $("#qv-cat").textContent = `${b.category.toUpperCase()} SERIES`;
  $("#qv-title").textContent = b.name;
  $("#qv-price").textContent = `$${b.price.toLocaleString()}`;
  $("#qv-rating").textContent = `★ ${b.rating.toFixed(1)}`;
  $("#qv-spec-weight").textContent = b.weight;
  $("#qv-spec-gears").textContent = b.gears;
  $("#qv-qty-val").textContent = "1";
  $("#quick-view-modal").classList.add("open");
  $("#quick-view-modal").setAttribute("aria-hidden", "false");
};

const updateConfigurator = () => {
  document.documentElement.style.setProperty("--cfg-frame", state.cfg.color);
  const total = 6490 + state.cfg.cAdd + state.cfg.wAdd + state.cfg.sAdd;
  $("#cfg-price").textContent = `$${total.toLocaleString()}`;
  $("#cfg-color-name").textContent = state.cfg.colorName;
  $("#cfg-summary-tag").textContent =
    `AERO RX SL · ${state.cfg.colorName.toUpperCase()} · ${state.cfg.wName}`;
  return total;
};

const animateNumber = (el, dur = 1800) => {
  const target = parseFloat(el.dataset.count || "0");
  const dec = Number(el.dataset.decimals || 0);
  if (el._raf) cancelAnimationFrame(el._raf);
  const t0 = performance.now();
  const step = (now) => {
    const p = Math.min(1, (now - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    const cur = target * eased;
    el.textContent =
      dec > 0
        ? cur.toFixed(dec)
        : target >= 10000
          ? Math.round(cur).toLocaleString()
          : Math.round(cur);
    if (p < 1) el._raf = requestAnimationFrame(step);
  };
  el._raf = requestAnimationFrame(step);
};

const boot = () => {
  const pre = $("#preloader"),
    cnt = $("#preloader-count");
  if (pre && cnt) {
    const start = performance.now(),
      dur = 1750;
    const tickPre = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      cnt.textContent = Math.round(eased * 100);
      if (p < 1) requestAnimationFrame(tickPre);
      else pre.classList.add("done");
    };
    requestAnimationFrame(tickPre);
  }
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const sc = window.scrollY,
          max = document.documentElement.scrollHeight - window.innerHeight;
        $("#site-header")?.classList.toggle("scrolled", sc > 40);
        document.documentElement.style.setProperty(
          "--scroll-pct",
          max > 0 ? sc / max : 0,
        );
        ticking = false;
      });
    },
    { passive: true },
  );

  const revObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) en.target.classList.add("in-view");
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  $$(".reveal").forEach((el) => revObs.observe(el));

  const cntObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        const el = en.target;
        if (en.isIntersecting) {
          const inHero = Boolean(el.closest("#hero"));
          const delay =
            inHero && pre && !pre.classList.contains("done") ? 1850 : 60;
          if (el._timer) clearTimeout(el._timer);
          el._timer = setTimeout(() => animateNumber(el, 1850), delay);
        } else {
          if (el._timer) clearTimeout(el._timer);
          if (el._raf) cancelAnimationFrame(el._raf);
          el.textContent = Number(el.dataset.decimals || 0) > 0 ? "0.0" : "0";
        }
      });
    },
    { threshold: 0.25 },
  );
  $$("[data-count]").forEach((el) => {
    el.textContent = Number(el.dataset.decimals || 0) > 0 ? "0.0" : "0";
    cntObs.observe(el);
  });

  renderProducts();
  saveCart();
  bindSmoothTilt(".cat-card", 6.5);
  bindSmoothTilt("#hero-tilt", 5);

  const burger = $("#burger-btn"),
    mMenu = $("#mobile-menu");
  burger.addEventListener("click", () => {
    const open = !mMenu.classList.contains("open");
    burger.classList.toggle("open", open);
    mMenu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  $$(".mobile-nav-link").forEach((a) =>
    a.addEventListener("click", () => {
      burger.classList.remove("open");
      mMenu.classList.remove("open");
    }),
  );

  const setCategory = (cat) => {
    state.filter = cat;
    state.wishOnly = false;
    state.visible = 12;
    $$(".filter-btn").forEach((b) => {
      const act = b.dataset.filter === cat;
      b.classList.toggle("active", act);
      b.setAttribute("aria-selected", act);
    });
    renderProducts();
  };
  $$(".filter-btn").forEach((b) =>
    b.addEventListener("click", () => setCategory(b.dataset.filter)),
  );
  $$("[data-cat-select]").forEach((el) =>
    el.addEventListener("click", () => {
      setCategory(el.dataset.catSelect);
      $("#bikes").scrollIntoView({ behavior: "smooth" });
    }),
  );
  $("#wishlist-filter-btn").addEventListener("click", () => {
    state.wishOnly = !state.wishOnly;
    $("#bikes").scrollIntoView({ behavior: "smooth" });
    renderProducts();
  });
  $("#bike-search").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderProducts();
  });
  $("#bike-sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderProducts();
  });
  $("#load-more-btn").addEventListener("click", () => {
    state.visible += 20;
    renderProducts();
  });

  $("#product-grid").addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-add]");
    if (addBtn) {
      const b = BIKES.find((x) => x.id === Number(addBtn.dataset.add));
      addToCart(b, 1, "Size M (54)");
      toggleCart(true);
      return;
    }
    const wishBtn = e.target.closest("[data-wish]");
    if (wishBtn) {
      const id = Number(wishBtn.dataset.wish);
      state.wish = state.wish.includes(id)
        ? state.wish.filter((x) => x !== id)
        : [...state.wish, id];
      writeStore("axvel_wish", state.wish);
      renderProducts();
      return;
    }
    const qv = e.target.closest("[data-qv]");
    if (qv) openQuickView(qv.dataset.qv);
  });

  $("#qv-close").addEventListener("click", () =>
    $("#quick-view-modal").classList.remove("open"),
  );
  $$(".qv-dot").forEach((d) =>
    d.addEventListener("click", () => {
      $$(".qv-dot").forEach((x) => x.classList.remove("active"));
      d.classList.add("active");
      $("#qv-img").style.setProperty("--qv-hue", d.dataset.hue);
    }),
  );
  $$(".size-btn").forEach((s) =>
    s.addEventListener("click", () => {
      $$(".size-btn").forEach((x) => x.classList.remove("active"));
      s.classList.add("active");
      state.qvSize = s.dataset.size;
    }),
  );
  $("#qv-qty-minus").addEventListener("click", () => {
    state.qvQty = Math.max(1, state.qvQty - 1);
    $("#qv-qty-val").textContent = state.qvQty;
  });
  $("#qv-qty-plus").addEventListener("click", () => {
    state.qvQty += 1;
    $("#qv-qty-val").textContent = state.qvQty;
  });
  $("#qv-add-btn").addEventListener("click", () => {
    addToCart(state.qvBike, state.qvQty, `Size ${state.qvSize}`);
    $("#quick-view-modal").classList.remove("open");
    toggleCart(true);
  });

  $("#cart-open-btn").addEventListener("click", () => toggleCart(true));
  $("#cart-close-btn").addEventListener("click", () => toggleCart(false));
  $("#cart-backdrop").addEventListener("click", () => toggleCart(false));
  $("#cart-items").addEventListener("click", (e) => {
    const qBtn = e.target.closest("[data-cqty]");
    if (qBtn) {
      const idx = Number(qBtn.dataset.cqty);
      state.cart[idx].qty += Number(qBtn.dataset.d);
      if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1);
      saveCart();
    }
    const rBtn = e.target.closest("[data-crem]");
    if (rBtn) {
      state.cart.splice(Number(rBtn.dataset.crem), 1);
      saveCart();
    }
  });
  $("#checkout-btn").addEventListener("click", () => {
    if (!state.cart.length) {
      $("#checkout-status").textContent = "Add a bicycle to your bag first.";
      return;
    }
    $("#checkout-status").textContent =
      `Order #AX-${Math.floor(1000 + Math.random() * 9000)} Confirmed! Preparing AirVault shipment.`;
    state.cart = [];
    saveCart();
  });

  const techItems = $$(".tech-item"),
    hotspots = $$(".tech-hotspot");
  const activateTech = (idx) => {
    techItems.forEach((el, i) => el.classList.toggle("active", i === idx));
    hotspots.forEach((el, i) => el.classList.toggle("active", i === idx));
    const h3 = techItems[idx].querySelector("h3").textContent,
      p = techItems[idx].querySelector("p").textContent;
    $("#tech-active-badge").textContent =
      `0${idx + 1} · ${h3.split(" ")[0].toUpperCase()}`;
    $("#tech-readout-title").textContent = `0${idx + 1}. ${h3}`;
    $("#tech-readout-desc").textContent = p;
  };
  techItems.forEach((el, i) =>
    el.addEventListener("click", () => activateTech(i)),
  );
  hotspots.forEach((el, i) =>
    el.addEventListener("click", () => activateTech(i)),
  );

  $$(".color-swatch").forEach((sw) =>
    sw.addEventListener("click", () => {
      $$(".color-swatch").forEach((x) => x.classList.remove("active"));
      sw.classList.add("active");
      state.cfg.color = sw.dataset.cfgColor;
      state.cfg.colorName = sw.dataset.cfgName;
      state.cfg.cAdd = Number(sw.dataset.cfgAdd);
      updateConfigurator();
    }),
  );
  $$(".cfg-opt-btn").forEach((wb) =>
    wb.addEventListener("click", () => {
      $$(".cfg-opt-btn").forEach((x) => x.classList.remove("active"));
      wb.classList.add("active");
      document.documentElement.style.setProperty(
        "--cfg-wheel",
        wb.dataset.cfgWheel,
      );
      document.documentElement.style.setProperty(
        "--cfg-rim-w",
        wb.dataset.cfgRim,
      );
      state.cfg.wName = wb.dataset.cfgWname;
      state.cfg.wAdd = Number(wb.dataset.cfgWadd);
      $("#cfg-weight").textContent = wb.dataset.cfgKg;
      $("#cfg-aero").textContent = wb.dataset.cfgAero;
      updateConfigurator();
    }),
  );
  $$(".cfg-saddle-btn").forEach((sb) =>
    sb.addEventListener("click", () => {
      $$(".cfg-saddle-btn").forEach((x) => x.classList.remove("active"));
      sb.classList.add("active");
      document.documentElement.style.setProperty(
        "--cfg-saddle",
        sb.dataset.cfgSaddle,
      );
      state.cfg.sName = sb.dataset.cfgSname;
      state.cfg.sAdd = Number(sb.dataset.cfgSadd);
      updateConfigurator();
    }),
  );
  $("#cfg-add-btn").addEventListener("click", () => {
    const price = updateConfigurator();
    addToCart(
      {
        name: `Custom Aero RX SL (${state.cfg.colorName})`,
        price,
        image: IMGS[0],
      },
      1,
      `${state.cfg.wName} · ${state.cfg.sName}`,
    );
    toggleCart(true);
  });

  const vidEl = $("#brand-video"),
    vidModal = $("#video-modal");
  const playVidSafe = () => {
    if (!vidEl) return;
    const p = vidEl.play();
    if (p && p.catch)
      p.catch(() => {
        vidEl.muted = true;
        vidEl.play().catch(() => {});
      });
  };
  const openVid = (e) => {
    if (e) e.stopPropagation();
    vidModal.classList.add("open");
    vidModal.setAttribute("aria-hidden", "false");
    playVidSafe();
  };
  const closeVid = () => {
    vidModal.classList.remove("open");
    vidModal.setAttribute("aria-hidden", "true");
    vidEl?.pause();
  };
  $("#open-video-btn").addEventListener("click", openVid);
  $("#hero-watch-btn").addEventListener("click", openVid);
  $("#cinematic").addEventListener("click", openVid);
  $("#video-close").addEventListener("click", closeVid);
  vidModal.addEventListener("click", (e) => {
    if (e.target === vidModal) closeVid();
  });
  $$(".vid-pill").forEach((btn) =>
    btn.addEventListener("click", () => {
      $$(".vid-pill").forEach((x) => x.classList.remove("active"));
      btn.classList.add("active");
      $("#vid-title").textContent = btn.dataset.vidTitle;
      vidEl.src = btn.dataset.vidSrc;
      vidEl.load();
      playVidSafe();
    }),
  );

  $$(".story-card").forEach((sc) =>
    sc.addEventListener("click", () => {
      const st = STORIES[Number(sc.dataset.storyId)] || STORIES[0];
      $("#sm-meta").textContent = st.meta;
      $("#sm-title").textContent = st.title;
      $("#sm-body").innerHTML = st.body.map((p) => `<p>${p}</p>`).join("");
      $("#story-modal").classList.add("open");
    }),
  );
  $("#sm-close").addEventListener("click", () =>
    $("#story-modal").classList.remove("open"),
  );

  const galFigs = $$(".masonry-item");
  const showLb = (idx) => {
    state.lbIdx = (idx + galFigs.length) % galFigs.length;
    const fig = galFigs[state.lbIdx];
    $("#lb-img").src = fig.querySelector("img").src;
    $("#lb-caption").textContent = fig
      .querySelector("figcaption")
      .innerText.replace("\n", " — ");
    $("#lightbox-modal").classList.add("open");
  };
  galFigs.forEach((f, i) => f.addEventListener("click", () => showLb(i)));
  $("#lb-close").addEventListener("click", () =>
    $("#lightbox-modal").classList.remove("open"),
  );
  $("#lb-prev").addEventListener("click", () => showLb(state.lbIdx - 1));
  $("#lb-next").addEventListener("click", () => showLb(state.lbIdx + 1));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      $$(".modal-backdrop.open").forEach((m) => m.classList.remove("open"));
      closeVid();
      toggleCart(false);
    }
    if ($("#lightbox-modal").classList.contains("open")) {
      if (e.key === "ArrowLeft") showLb(state.lbIdx - 1);
      if (e.key === "ArrowRight") showLb(state.lbIdx + 1);
    }
  });

  const car = $("#testi-carousel");
  $("#testi-prev").addEventListener("click", () =>
    car.scrollBy({ left: -420, behavior: "smooth" }),
  );
  $("#testi-next").addEventListener("click", () =>
    car.scrollBy({ left: 420, behavior: "smooth" }),
  );
  $("#back-to-top").addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  $("#newsletter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const em = $("#nl-email").value.trim(),
      fb = $("#nl-feedback");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      fb.className = "form-feedback err";
      fb.textContent = "Please enter a valid email address.";
      return;
    }
    fb.className = "form-feedback ok";
    fb.textContent = "Welcome to the AXVEL Atelier Club. Check your inbox.";
    $("#nl-email").value = "";
    const stage = $("#confetti-stage"),
      cols = ["#FF6B2C", "#FFB36B", "#7FD6FF", "#F6F1E7"];
    for (let i = 0; i < 24; i++) {
      const p = document.createElement("span");
      p.className = "confetti-bit";
      p.style.setProperty("--c", cols[i % 4]);
      p.style.setProperty("--tx", `${(Math.random() - 0.5) * 260}px`);
      p.style.setProperty("--ty", `${-40 - Math.random() * 140}px`);
      stage.appendChild(p);
      setTimeout(() => p.remove(), 1000);
    }
  });

  $("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const n = $("#cf-name"),
      em = $("#cf-email"),
      ph = $("#cf-phone"),
      m = $("#cf-msg"),
      fb = $("#cf-feedback");
    const vN = n.value.trim().length >= 2,
      vE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim());
    const vP = /^[0-9+\-\s()]{7,}$/.test(ph.value.trim()),
      vM = m.value.trim().length >= 10;
    n.parentElement.classList.toggle("invalid", !vN);
    em.parentElement.classList.toggle("invalid", !vE);
    ph.parentElement.classList.toggle("invalid", !vP);
    m.parentElement.classList.toggle("invalid", !vM);
    if (vN && vE && vP && vM) {
      fb.className = "form-feedback ok";
      fb.textContent = `Inquiry received, ${n.value.trim()}. Master Builder will respond within 4 hours.`;
      e.target.reset();
    } else {
      fb.className = "form-feedback err";
      fb.textContent = "Please complete all highlighted fields.";
    }
  });
};

if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", boot);
else boot();
