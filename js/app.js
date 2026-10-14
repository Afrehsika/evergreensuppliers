/**
 * Evergreen Suppliers LLC - Core Interactive Engine
 * Connecticut, USA | Phone: (860) 656-8280 | Email: info@evergreensuppliersllc.com
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Data Store: Complete Product Catalog
  const products = [
    {
      id: 'ppe-01',
      title: 'ANSI Z89.1 Vented Safety Hard Hat',
      sector: 'industrial',
      category: 'Industrial PPE',
      specs: 'Type 1 Class C ventilated helmet with 4-point rapid ratchet suspension, sweatband, and headlight slot.',
      cert: 'ANSI Z89.1 / OSHA',
      moq: 'Min 24 Units',
      leadTime: '1-2 Days (CT Hub)',
      tag: 'Best Seller'
    },
    {
      id: 'ppe-02',
      title: 'Level 5 Kevlar Cut-Resistant Impact Gloves',
      sector: 'industrial',
      category: 'Industrial PPE',
      specs: 'ANSI A5 cut-resistant liner with molded TPR knuckle protection and sandy nitrile palm grip.',
      cert: 'ANSI / ISEA 105',
      moq: 'Min 60 Pairs',
      leadTime: '1-2 Days (CT Hub)',
      tag: 'Heavy Duty'
    },
    {
      id: 'ppe-03',
      title: 'NIOSH Certified N95 Particulate Respirator',
      sector: 'industrial',
      category: 'Industrial PPE',
      specs: 'Molded cup design with adjustable nose clip, welded dual head straps, 95% filtration against solid particulates.',
      cert: 'NIOSH / CDC Appr.',
      moq: 'Min 10 Boxes (200 Units)',
      leadTime: 'Next-Day Dispatch',
      tag: 'Certified'
    },
    {
      id: 'ppe-04',
      title: 'ASTM F2413 Steel-Toe Industrial Boots',
      sector: 'industrial',
      category: 'Industrial PPE',
      specs: 'Full-grain waterproof leather, puncture-resistant composite plate, slip-resistant oil outsole.',
      cert: 'ASTM F2413-18 / EH',
      moq: 'Min 12 Pairs',
      leadTime: '2-3 Business Days',
      tag: 'Contractor Spec'
    },
    {
      id: 'med-01',
      title: 'Medical Grade Powder-Free Nitrile Gloves',
      sector: 'medical',
      category: 'Medical Consumables',
      specs: '4.5 mil chemo-tested blue nitrile exam gloves. Textured fingertips for tactile precision, non-sterile.',
      cert: 'FDA 510(k) / ASTM D6319',
      moq: 'Min 10 Boxes (1,000 Gloves)',
      leadTime: 'Immediate Dispatch',
      tag: 'Clinic Standard'
    },
    {
      id: 'med-02',
      title: 'ASTM Level 3 Surgical 3-Ply Face Masks',
      sector: 'medical',
      category: 'Medical Consumables',
      specs: 'High fluid resistance (160 mmHg), BFE/PFE >= 98%, soft earloops and skin-friendly hypoallergenic inner layer.',
      cert: 'FDA Listed / ASTM F2100',
      moq: 'Min 20 Boxes (1,000 Masks)',
      leadTime: 'Next-Day Dispatch',
      tag: 'High Filtration'
    },
    {
      id: 'med-03',
      title: 'Non-Contact Clinical Infrared Thermometer',
      sector: 'medical',
      category: 'Medical Consumables',
      specs: 'Medical-grade sensor, 1-second rapid scan, high-temp audible alarm, color LCD screen with 32 memory recalls.',
      cert: 'FDA / CE Certified',
      moq: 'Min 10 Units',
      leadTime: '1-2 Business Days',
      tag: 'Diagnostic Tool'
    },
    {
      id: 'med-04',
      title: 'Hospital-Grade Broad Spectrum Disinfectant',
      sector: 'medical',
      category: 'Medical Consumables',
      specs: 'EPA-registered quaternary formula effective against MRSA, Norovirus, and Coronaviruses. 1 Gal jugs.',
      cert: 'EPA Reg. / OSHA Bloodborne',
      moq: 'Case of 4 Gallons',
      leadTime: '1-2 Business Days',
      tag: 'Sanitary Spec'
    },
    {
      id: 'gen-01',
      title: 'Cast Hand Pallet Stretch Film (80 Gauge)',
      sector: 'wholesale',
      category: 'Wholesale & Hardware',
      specs: '18 inches x 1500 feet per roll. Ultra-clear high-cling formulation, puncture-resistant for pallet securing.',
      cert: 'Industrial Commercial Grade',
      moq: 'Min 1 Pallet (192 Rolls)',
      leadTime: 'Same-Day Dispatch',
      tag: 'Warehouse Staple'
    },
    {
      id: 'gen-02',
      title: 'Contractor Grade Industrial Tool Set (168-Piece)',
      sector: 'wholesale',
      category: 'Wholesale & Hardware',
      specs: 'Chrome vanadium alloy steel hand tools, heavy-duty blow-molded case, impact rated for job sites.',
      cert: 'ASME Compliant',
      moq: 'Min 5 Sets',
      leadTime: '2-3 Business Days',
      tag: 'Jobsite Ready'
    },
    {
      id: 'gen-03',
      title: 'Commercial Microfiber Utility Towels (16"x16")',
      sector: 'wholesale',
      category: 'Wholesale & Hardware',
      specs: '300 GSM ultra-absorbent split microfiber blend, overlock stitched edges for heavy institutional cleaning.',
      cert: 'Commercial Facility Grade',
      moq: 'Min 200 Towels',
      leadTime: 'Next-Day Dispatch',
      tag: 'Bulk Pack'
    },
    {
      id: 'gen-04',
      title: 'Heavy Duty Ratchet Tie-Down Straps (4-Pack)',
      sector: 'wholesale',
      category: 'Wholesale & Hardware',
      specs: '2 inches x 27 feet polyester webbing with double J-hooks. 3,333 lbs working load limit, 10,000 lbs break strength.',
      cert: 'DOT & WSTDA Compliant',
      moq: 'Min 8 Packs',
      leadTime: '1-2 Days',
      tag: 'Logistics Spec'
    }
  ];

  // 2. Persistent Basket State via localStorage
  let quoteBasket = [];
  try {
    const saved = localStorage.getItem('evergreen_rfq_basket');
    if (saved) {
      quoteBasket = JSON.parse(saved);
    }
  } catch (e) {
    quoteBasket = [];
  }

  function saveBasket() {
    try {
      localStorage.setItem('evergreen_rfq_basket', JSON.stringify(quoteBasket));
    } catch (e) {}
  }

  // DOM Elements
  const catalogGrid = document.getElementById('catalogGrid');
  const catalogTabs = document.querySelectorAll('.catalog-tab');
  const catalogSearch = document.getElementById('catalogSearch');
  const quoteCountBadges = document.querySelectorAll('.quote-count-badge');
  const rfqDrawerOverlay = document.getElementById('rfqDrawerOverlay');
  const drawerItemsList = document.getElementById('drawerItemsList');
  const openDrawerBtns = document.querySelectorAll('.open-rfq-drawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const mainHeader = document.getElementById('mainHeader');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // Hero Quick RFQ Elements
  const calcSector = document.getElementById('calcSector');
  const calcProduct = document.getElementById('calcProduct');
  const calcTierSlider = document.getElementById('calcTierSlider');
  const calcQtyValue = document.getElementById('calcQtyValue');
  const calcLeadTime = document.getElementById('calcLeadTime');
  const calcPricingTier = document.getElementById('calcPricingTier');
  const btnAddToQuoteFromHero = document.getElementById('btnAddToQuoteFromHero');

  // Forms
  const contactForm = document.getElementById('contactForm');
  const drawerForm = document.getElementById('drawerForm');

  // 3. Render Catalog Function
  function renderCatalog(filterSector = 'all', searchQuery = '') {
    if (!catalogGrid) return;
    catalogGrid.innerHTML = '';

    const query = searchQuery.trim().toLowerCase();
    const filtered = products.filter(item => {
      const matchSector = filterSector === 'all' || item.sector === filterSector;
      const matchQuery = !query || 
        item.title.toLowerCase().includes(query) || 
        item.specs.toLowerCase().includes(query) || 
        item.cert.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);
      return matchSector && matchQuery;
    });

    if (filtered.length === 0) {
      catalogGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; background: var(--white); border-radius: var(--radius-lg); border: 1px dashed var(--slate-300);">
          <p style="font-size: 1.1rem; font-weight: 600; color: var(--slate-700); margin-bottom: 0.5rem;">No matching supplies found</p>
          <p style="color: var(--slate-500); font-size: 0.9rem;">Try adjusting your search keywords or call our Connecticut desk directly at <strong>(860) 656-8280</strong> for custom procurement.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(p => {
      const isAdded = quoteBasket.some(i => i.id === p.id);
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-badge-row">
          <span class="product-category-tag">${p.category}</span>
          <span class="product-moq">${p.moq}</span>
        </div>
        <h4 class="product-title">${p.title}</h4>
        <p class="product-specs">${p.specs}</p>
        <div class="product-meta-row">
          <span class="cert-pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            ${p.cert}
          </span>
          <span class="lead-time">${p.leadTime}</span>
        </div>
        <button class="btn-add-quote ${isAdded ? 'added' : ''}" data-id="${p.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            ${isAdded ? '<polyline points="20 6 9 17 4 12"/>' : '<path d="M12 5v14M5 12h14"/>'}
          </svg>
          ${isAdded ? 'Added to RFQ Basket' : 'Add to RFQ Basket'}
        </button>
      `;

      const addBtn = card.querySelector('.btn-add-quote');
      addBtn.addEventListener('click', () => {
        toggleItemInQuote(p);
      });

      catalogGrid.appendChild(card);
    });
  }

  // 4. Basket Management
  function toggleItemInQuote(product, customQty = 1) {
    const existingIndex = quoteBasket.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      quoteBasket.splice(existingIndex, 1);
      showToast(`Removed "${product.title}" from RFQ Basket`);
    } else {
      quoteBasket.push({
        id: product.id,
        title: product.title,
        category: product.category,
        moq: product.moq,
        qty: customQty
      });
      showToast(`Added "${product.title}" to RFQ Basket`);
    }
    saveBasket();
    updateBasketUI();
    const currentActiveTab = document.querySelector('.catalog-tab.active')?.dataset.sector || 'all';
    renderCatalog(currentActiveTab, catalogSearch ? catalogSearch.value : '');
  }

  function updateBasketUI() {
    quoteCountBadges.forEach(badge => {
      badge.textContent = quoteBasket.length;
    });

    if (!drawerItemsList) return;

    if (quoteBasket.length === 0) {
      drawerItemsList.innerHTML = `
        <div class="drawer-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 0.75rem; color: var(--slate-400);">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <p style="font-weight: 600; color: var(--slate-700); margin-bottom: 0.35rem;">Your RFQ Basket is Empty</p>
          <p style="font-size: 0.85rem; color: var(--slate-500); margin-bottom: 1rem;">Browse our product catalog to add commercial supplies.</p>
          <a href="catalog.html" class="btn-primary" style="font-size: 0.85rem; padding: 0.45rem 1rem;">View Catalog</a>
        </div>
      `;
      return;
    }

    drawerItemsList.innerHTML = '';
    quoteBasket.forEach((item, index) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'drawer-item';
      itemEl.innerHTML = `
        <div class="drawer-item-info">
          <h5>${item.title}</h5>
          <span>${item.category} &bull; ${item.moq}</span>
        </div>
        <div class="drawer-item-actions">
          <button class="btn-item-qty minus" data-idx="${index}">-</button>
          <span style="font-size: 0.875rem; font-weight: 700; min-width: 20px; text-align: center;">${item.qty}</span>
          <button class="btn-item-qty plus" data-idx="${index}">+</button>
          <button class="drawer-item-del" data-idx="${index}" title="Remove item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      `;

      itemEl.querySelector('.btn-item-qty.minus').addEventListener('click', () => {
        if (item.qty > 1) {
          item.qty--;
        } else {
          quoteBasket.splice(index, 1);
        }
        saveBasket();
        updateBasketUI();
      });

      itemEl.querySelector('.btn-item-qty.plus').addEventListener('click', () => {
        item.qty++;
        saveBasket();
        updateBasketUI();
      });

      itemEl.querySelector('.drawer-item-del').addEventListener('click', () => {
        quoteBasket.splice(index, 1);
        saveBasket();
        updateBasketUI();
        const currentActiveTab = document.querySelector('.catalog-tab.active')?.dataset.sector || 'all';
        renderCatalog(currentActiveTab, catalogSearch ? catalogSearch.value : '');
      });

      drawerItemsList.appendChild(itemEl);
    });
  }

  // 5. Hero RFQ Calculator Logic
  const sectorProductOptions = {
    industrial: [
      { name: 'ANSI Hard Hats & Eye Protection', baseLead: '1-2 Days (CT Hub)' },
      { name: 'Level 5 Kevlar Cut & Impact Gloves', baseLead: '1-2 Days (CT Hub)' },
      { name: 'NIOSH N95 & Half-Mask Respirators', baseLead: 'Next-Day Dispatch' },
      { name: 'Steel-Toe Protective Footwear', baseLead: '2-3 Business Days' }
    ],
    medical: [
      { name: 'Powder-Free Nitrile Exam Gloves', baseLead: 'Immediate Dispatch' },
      { name: 'ASTM Level 3 Surgical 3-Ply Masks', baseLead: 'Next-Day Dispatch' },
      { name: 'Clinical Infrared Thermometers & Diagnostics', baseLead: '1-2 Business Days' },
      { name: 'Hospital-Grade Surface Disinfectants', baseLead: '1-2 Business Days' }
    ],
    wholesale: [
      { name: 'Cast Stretch Film Pallet Loads', baseLead: 'Same-Day Dispatch' },
      { name: 'Contractor Hand & Power Tool Packs', baseLead: '2-3 Business Days' },
      { name: 'Institutional Microfiber Bulk Towels', baseLead: 'Next-Day Dispatch' },
      { name: 'Commercial Logistics & Ratchet Straps', baseLead: '1-2 Days' }
    ]
  };

  function updateHeroCalculator() {
    if (!calcSector || !calcProduct || !calcTierSlider) return;

    const sector = calcSector.value;
    const options = sectorProductOptions[sector] || sectorProductOptions.industrial;

    calcProduct.innerHTML = '';
    options.forEach(opt => {
      const el = document.createElement('option');
      el.value = opt.name;
      el.textContent = opt.name;
      calcProduct.appendChild(el);
    });

    const sliderVal = parseInt(calcTierSlider.value, 10);
    let qtyLabel = '';
    let pricingTierLabel = '';
    let leadTime = '1-2 Business Days (Connecticut Hub)';

    if (sliderVal <= 25) {
      qtyLabel = 'Standard Box Batch (~100 - 500 units)';
      pricingTierLabel = 'Commercial Tier 1';
      leadTime = 'Next-Day Regional Delivery';
    } else if (sliderVal <= 65) {
      qtyLabel = 'Pallet / Wholesale Quantity (~1,000 - 5,000 units)';
      pricingTierLabel = 'Wholesale Bulk Tier 2 (Volume Discount)';
      leadTime = '1-2 Days Freight Dispatch';
    } else {
      qtyLabel = 'Full Truckload / Contract Supply (10,000+ units)';
      pricingTierLabel = 'Enterprise / Master Distributor Tier 3';
      leadTime = 'Scheduled Recurring Logistics';
    }

    if (calcQtyValue) calcQtyValue.textContent = qtyLabel;
    if (calcPricingTier) calcPricingTier.textContent = pricingTierLabel;
    if (calcLeadTime) calcLeadTime.textContent = leadTime;
  }

  if (calcSector) {
    calcSector.addEventListener('change', updateHeroCalculator);
  }
  if (calcTierSlider) {
    calcTierSlider.addEventListener('input', updateHeroCalculator);
  }

  if (btnAddToQuoteFromHero) {
    btnAddToQuoteFromHero.addEventListener('click', () => {
      const sector = calcSector ? calcSector.value : 'industrial';
      const productName = calcProduct ? calcProduct.value : 'Custom Procurement Item';
      const qty = calcQtyValue ? calcQtyValue.textContent : 'Wholesale Batch';

      const customItem = {
        id: 'custom-' + Date.now(),
        title: productName,
        category: sector === 'industrial' ? 'Industrial PPE' : (sector === 'medical' ? 'Medical Consumables' : 'Wholesale Merchandise'),
        moq: qty,
        qty: 1
      };

      quoteBasket.push(customItem);
      saveBasket();
      updateBasketUI();
      showToast(`Added "${productName}" to your RFQ Basket`);
      openDrawer();
    });
  }

  // 6. Drawer Open/Close
  function openDrawer() {
    if (rfqDrawerOverlay) rfqDrawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (rfqDrawerOverlay) rfqDrawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  openDrawerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer();
    });
  });

  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', closeDrawer);
  }

  if (rfqDrawerOverlay) {
    rfqDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === rfqDrawerOverlay) {
        closeDrawer();
      }
    });
  }

  // 7. Tab Filtering
  catalogTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catalogTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const sector = tab.dataset.sector;
      renderCatalog(sector, catalogSearch ? catalogSearch.value : '');
    });
  });

  if (catalogSearch) {
    catalogSearch.addEventListener('input', (e) => {
      const activeTab = document.querySelector('.catalog-tab.active')?.dataset.sector || 'all';
      renderCatalog(activeTab, e.target.value);
    });
  }

  // 8. Toast Utility
  let toastTimer = null;
  function showToast(message) {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = message;
    toastNotification.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3800);
  }

  // 9. Forms Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || 'Client';
      const sector = document.getElementById('contactSector')?.value || 'General Inquiry';
      showToast(`Thank you, ${name}! Your RFQ request for [${sector}] has been sent to info@evergreensuppliersllc.com.`);
      contactForm.reset();
    });
  }

  if (drawerForm) {
    drawerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (quoteBasket.length === 0) {
        alert('Please add at least one item to your quote basket before submitting.');
        return;
      }
      const clientEmail = document.getElementById('drawerEmail')?.value || 'info@evergreensuppliersllc.com';
      showToast(`RFQ for ${quoteBasket.length} items logged! Sent to Connecticut Desk (${clientEmail}).`);
      quoteBasket = [];
      saveBasket();
      updateBasketUI();
      closeDrawer();
      renderCatalog();
    });
  }

  // 10. FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            const otherAns = other.querySelector('.faq-answer');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
        } else {
          item.classList.remove('open');
          answer.style.maxHeight = null;
        }
      });
    }
  });

  // 11. Sticky Header
  window.addEventListener('scroll', () => {
    if (!mainHeader) return;
    if (window.scrollY > 40) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });

  // 12. Mobile Navigation
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      hamburgerBtn.innerHTML = isOpen ? `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      ` : `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
    });
  }

  // Initial runs
  updateHeroCalculator();
  updateBasketUI();
  renderCatalog();
});
