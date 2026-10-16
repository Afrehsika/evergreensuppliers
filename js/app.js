/**
 * Evergreen Suppliers LLC - Core Interactive Engine
 * Connecticut, USA | Phone: (860) 656-8280 | Email: info@evergreensuppliersllc.com
 * WhatsApp: +1 (860) 656-8280
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Data Store: Complete Product Catalog with Detailed Specs & Verified Imagery
  const products = [
    {
      id: 'ppe-01',
      title: 'ANSI Z89.1 Vented Safety Hard Hat',
      sector: 'industrial',
      category: 'Industrial PPE',
      brand: 'Evergreen Industrial',
      specs: 'Type 1 Class C ventilated helmet with 4-point rapid ratchet suspension, absorbent sweatband, and universal lamp slot.',
      fullDesc: 'Engineered for high-impact protection in construction, manufacturing, and extraction facilities. Features an aerodynamic crown with cooling air channels, breathable comfort sweatband, and a precision ratchet dial for rapid micro-adjustments.',
      cert: 'ANSI Z89.1-2014 / OSHA Type 1 Class C',
      moq: 'Min 24 Units (Case)',
      leadTime: '1-2 Days (CT Hub)',
      tag: 'Best Seller',
      image: 'assets/images/product-hardhat.jpg',
      specDetails: {
        'Compliance Standard': 'ANSI Z89.1-2014, Type 1 Class C',
        'Suspension System': '4-Point Rapid Ratchet Dial',
        'Material': 'High-Density Polyethylene (HDPE)',
        'Ventilation': 'Slotted Top Cooling Vents',
        'Origin / Logistics': 'Connecticut Regional Depot Stock'
      },
      variants: ['Standard White', 'Hi-Vis Yellow', 'Safety Orange', 'Contractor Blue']
    },
    {
      id: 'ppe-02',
      title: 'Level 5 Kevlar Cut-Resistant Impact Gloves',
      sector: 'industrial',
      category: 'Industrial PPE',
      brand: 'ProArmor Industrial',
      specs: 'ANSI A5 cut-resistant liner with molded TPR knuckle protection and sandy nitrile palm grip for oily environments.',
      fullDesc: 'Heavy-duty tactile work gloves combining 13-gauge DuPont Kevlar and steel-fiber matrix with full dorsal TPR impact zones. Sandy nitrile micro-foam coating ensures high oil grip, abrasion resistance, and puncture shielding.',
      cert: 'ANSI / ISEA 105 A5 / EN 388: 4X43DP',
      moq: 'Min 60 Pairs (Pack)',
      leadTime: '1-2 Days (CT Hub)',
      tag: 'Heavy Duty',
      image: 'assets/images/industrial-ppe.jpg',
      specDetails: {
        'Cut Resistance': 'ANSI A5 (2,200g - 2,999g load)',
        'Impact Protection': 'Molded Thermoplastic Rubber (TPR)',
        'Palm Coating': 'Sandy Nitrile Double-Dip Grip',
        'Gauge & Weave': '13-Gauge Kevlar Seamless Knit',
        'Typical Uses': 'Metal fabrication, rigging, heavy demolition'
      },
      variants: ['Medium (M)', 'Large (L)', 'Extra Large (XL)', '2XL']
    },
    {
      id: 'ppe-03',
      title: 'NIOSH Certified N95 Particulate Respirator',
      sector: 'industrial',
      category: 'Industrial PPE',
      brand: 'AeroShield Respiratory',
      specs: 'Molded cup design with adjustable aluminum nose clip, welded dual head straps, and 95% filtration efficiency.',
      fullDesc: 'NIOSH-approved particulate filtering respirator designed for tight facial seal and low breathing resistance. Dual elastic welded straps prevent breakage; electrostatically charged meltblown media captures airborne dust, pollen, and aerosols.',
      cert: 'NIOSH TC-84A / CDC Approved',
      moq: 'Min 10 Boxes (200 Units)',
      leadTime: 'Next-Day Dispatch',
      tag: 'Certified',
      image: 'assets/images/industrial-ppe.jpg',
      specDetails: {
        'NIOSH Approval': 'TC-84A-9281 Standard',
        'Filtration Efficiency': '>= 95% against non-oil solid & liquid particles',
        'Construction': '4-Ply Thermally Bonded Filter Media',
        'Packaging': '20 Masks / Dispenser Box, 10 Boxes / Case'
      },
      variants: ['Cup-Shaped Standard', 'Foldable Flat-Fold']
    },
    {
      id: 'ppe-04',
      title: 'ASTM F2413 Steel-Toe Industrial Boots',
      sector: 'industrial',
      category: 'Industrial PPE',
      brand: 'TitanTrek Workwear',
      specs: 'Full-grain waterproof leather, puncture-resistant composite midplate, and oil/slip-resistant lugged outsole.',
      fullDesc: 'Built for industrial jobsite durability, cold weather insulation, and electrical hazard (EH) protection. Features an ergonomic padded collar, anti-fatigue polyurethane footbed, and Goodyear welted sole assembly.',
      cert: 'ASTM F2413-18 M/I/C EH PR',
      moq: 'Min 12 Pairs (Assorted Sizes)',
      leadTime: '2-3 Business Days',
      tag: 'Contractor Spec',
      image: 'assets/images/industrial-ppe.jpg',
      specDetails: {
        'Safety Standard': 'ASTM F2413-18 (Impact, Compression, EH)',
        'Upper Material': '2.0mm Waterproof Nubuck Leather',
        'Puncture Resistance': 'Non-Metallic Composite Midsole (1,100 N)',
        'Outsole': 'Dual-Density Oil & Acid Resistant PU/Rubber'
      },
      variants: ['Sizes 8 to 13 (Regular & Wide EE)']
    },
    {
      id: 'med-01',
      title: 'Medical Grade Powder-Free Nitrile Gloves',
      sector: 'medical',
      category: 'Medical Consumables',
      brand: 'MediProd Clinical',
      specs: '4.5 mil chemo-tested blue nitrile exam gloves. Textured fingertips for tactile precision, 100% latex-free.',
      fullDesc: 'Clinical-grade examination gloves meeting rigorous chemotherapy drug permeation resistance (ASTM D6978) and healthcare barrier protection (ASTM D6319). Polymer-coated interior facilitates damp-hand donning.',
      cert: 'FDA 510(k) Cleared / ASTM D6319',
      moq: 'Min 10 Boxes (1,000 Gloves)',
      leadTime: 'Immediate Dispatch',
      tag: 'Clinic Standard',
      image: 'assets/images/product-nitrile-gloves.jpg',
      specDetails: {
        'FDA Clearance': 'FDA 510(k) Medical Device Classification',
        'Barrier Performance': 'AQL 1.5 Freedom from Pinholes',
        'Thickness': '4.5 mil Palm / 5.2 mil Fingertip',
        'Chemo Tested': 'Tested against 7 Chemotherapy Agents (ASTM D6978)',
        'Packaging': '100 Gloves / Dispenser Box, 10 Boxes / Master Case'
      },
      variants: ['Small (S)', 'Medium (M)', 'Large (L)', 'Extra Large (XL)']
    },
    {
      id: 'med-02',
      title: 'ASTM Level 3 Surgical 3-Ply Face Masks',
      sector: 'medical',
      category: 'Medical Consumables',
      brand: 'MediGuard Health',
      specs: 'High fluid resistance (160 mmHg), BFE/PFE >= 98%, soft earloops and hypoallergenic inner spunbond layer.',
      fullDesc: 'Maximum barrier fluid-shield surgical masks engineered for hospital surgical suites, dental procedures, and patient-contact zones. Encased aluminum nose wire provides leak-free perimeter seal.',
      cert: 'FDA Listed / ASTM F2100 Level 3',
      moq: 'Min 20 Boxes (1,000 Masks)',
      leadTime: 'Next-Day Dispatch',
      tag: 'High Filtration',
      image: 'assets/images/medical-consumables.jpg',
      specDetails: {
        'Fluid Resistance': '160 mmHg Synthetic Blood (ASTM F1862)',
        'BFE / PFE': '>= 98% Bacterial & Particulate Filtration',
        'Delta P (Breathability)': '< 5.0 mm H2O/cm2',
        'Flammability': 'Class 1 Flame Spread (16 CFR Part 1610)'
      },
      variants: ['Surgical Blue (Box of 50)', 'Hospital White (Box of 50)']
    },
    {
      id: 'med-03',
      title: 'Non-Contact Clinical Infrared Thermometer',
      sector: 'medical',
      category: 'Medical Consumables',
      brand: 'ThermaScan Medical',
      specs: 'Medical-grade sensor, 1-second rapid scan, high-temp audible alarm, color LCD screen with 32 memory recalls.',
      fullDesc: 'Calibrated non-invasive infrared forehead thermometer for healthcare intake stations, institutional campuses, and clinical monitoring. Distance sensor automatically confirms 1-5cm scanning accuracy.',
      cert: 'FDA Registered / CE Medical Class IIa',
      moq: 'Min 10 Units (Case)',
      leadTime: '1-2 Business Days',
      tag: 'Diagnostic Tool',
      image: 'assets/images/medical-consumables.jpg',
      specDetails: {
        'Measurement Time': '1.0 Second Rapid Acquisition',
        'Accuracy': '+/- 0.2 C (+/- 0.4 F) in 35.0 C - 42.0 C Range',
        'Memory Capacity': '32 Patient Reading Logs',
        'Auto Shutoff': 'Automatic battery saving shutoff after 15s'
      },
      variants: ['Clinical Unit with Batteries & Certificate']
    },
    {
      id: 'med-04',
      title: 'Hospital-Grade Broad Spectrum Disinfectant',
      sector: 'medical',
      category: 'Medical Consumables',
      brand: 'OmniClean Pro',
      specs: 'EPA-registered quaternary formula effective against MRSA, Norovirus, and Coronaviruses. 1 Gal jugs.',
      fullDesc: 'Ready-to-use institutional disinfectant, virucide, and bactericide. Kills hospital pathogens in under 2 minutes of surface contact without leaving sticky residue on stainless steel or laminate medical equipment.',
      cert: 'EPA Reg. No. / OSHA Bloodborne Pathogens',
      moq: 'Case of 4 Gallons (16 Gal Pallet Multiples)',
      leadTime: '1-2 Business Days',
      tag: 'Sanitary Spec',
      image: 'assets/images/medical-consumables.jpg',
      specDetails: {
        'EPA Status': 'EPA List N Registered Hospital Grade',
        'Kill Time': '1 to 2 Minutes for enveloped viruses',
        'Dilution': 'Ready To Use (RTU) Liquid',
        'Packaging': '4 x 1-Gallon Bottles / Reinforced Case'
      },
      variants: ['Case of 4 Gallons', 'Drum Supply (55 Gallons)']
    },
    {
      id: 'gen-01',
      title: 'Cast Hand Pallet Stretch Film (80 Gauge)',
      sector: 'wholesale',
      category: 'Wholesale & Hardware',
      brand: 'FlexiWrap Industrial',
      specs: '18 inches x 1500 feet per roll. Ultra-clear high-cling formulation, puncture-resistant for pallet securing.',
      fullDesc: 'Premium 80-gauge cast co-extruded hand wrap engineered for high load retention and silent unwind. Resists corner tearing on irregular freight pallets while maintaining crystal-clear barcode scanability.',
      cert: 'Industrial Commercial Grade Heavy Duty',
      moq: 'Min 1 Pallet (192 Rolls / 48 Cases)',
      leadTime: 'Same-Day Dispatch',
      tag: 'Warehouse Staple',
      image: 'assets/images/product-stretch-film.jpg',
      specDetails: {
        'Gauge / Thickness': '80 Gauge (20.3 Microns)',
        'Roll Dimensions': '18 Inches Width x 1,500 Feet Length',
        'Core Diameter': '3-Inch Heavy Wall Paper Core',
        'Film Type': '5-Layer Cast Polyethylene Film',
        'Packaging': '4 Rolls / Carton, 48 Cartons / Full Pallet'
      },
      variants: ['Standard 18" x 1500ft', 'Machine Grade 20" x 5000ft']
    },
    {
      id: 'gen-02',
      title: 'Contractor Grade Industrial Tool Set (168-Piece)',
      sector: 'wholesale',
      category: 'Wholesale & Hardware',
      brand: 'Vanguard Hardware',
      specs: 'Chrome vanadium alloy steel hand tools, heavy-duty blow-molded case, impact rated for job sites.',
      fullDesc: 'Comprehensive mechanical and construction hand tool kit designed for maintenance technicians, facility teams, and mechanical contractors. All sockets and wrenches feature stamped size markings and corrosion-resistant chrome finish.',
      cert: 'ASME / ANSI Hand Tool Standards',
      moq: 'Min 5 Sets (Master Pack)',
      leadTime: '2-3 Business Days',
      tag: 'Jobsite Ready',
      image: 'assets/images/wholesale-merchandise.jpg',
      specDetails: {
        'Piece Count': '168 Hand & Fastener Assembly Tools',
        'Steel Composition': 'Drop-Forged Chrome Vanadium (Cr-V)',
        'Case Construction': 'Reinforced Double-Walled Blow-Molded Polyethylene',
        'Drive Sizes': '1/4-inch, 3/8-inch, and 1/2-inch Ratchet Assemblies'
      },
      variants: ['Complete 168-Piece Case']
    },
    {
      id: 'gen-03',
      title: 'Commercial Microfiber Utility Towels (16"x16")',
      sector: 'wholesale',
      category: 'Wholesale & Hardware',
      brand: 'ProClean Facility',
      specs: '300 GSM ultra-absorbent split microfiber blend, overlock stitched edges for heavy institutional cleaning.',
      fullDesc: 'Lint-free, scratch-resistant microfiber utility cleaning cloths for janitorial maintenance, hospitality, automotive facilities, and commercial floorcare. Retains up to 7 times its weight in water.',
      cert: 'Commercial Facility Grade',
      moq: 'Min 200 Towels (Bulk Pack)',
      leadTime: 'Next-Day Dispatch',
      tag: 'Bulk Pack',
      image: 'assets/images/wholesale-merchandise.jpg',
      specDetails: {
        'Weight / Density': '300 GSM (Grams per Square Meter)',
        'Fiber Ratio': '80% Polyester / 20% Polyamide Split Microfiber',
        'Dimensions': '16 Inches x 16 Inches (Square)',
        'Border Stitch': 'Reinforced Overlock 4-Thread Edge'
      },
      variants: ['Hi-Vis Yellow', 'Industrial Green', 'Commercial Blue']
    },
    {
      id: 'gen-04',
      title: 'Heavy Duty Ratchet Tie-Down Straps (4-Pack)',
      sector: 'wholesale',
      category: 'Wholesale & Hardware',
      brand: 'CargoMax Logistics',
      specs: '2 inches x 27 feet polyester webbing with double J-hooks. 3,333 lbs working load limit, 10,000 lbs break strength.',
      fullDesc: 'DOT-compliant heavy equipment tie-down assemblies for flatbed trucks, commercial trailers, and warehouse logistics. Heat-treated zinc-plated ratchet mechanisms prevent rust and bind-up.',
      cert: 'DOT & WSTDA T-1 Standards Compliant',
      moq: 'Min 8 Packs (32 Straps)',
      leadTime: '1-2 Days (CT Hub)',
      tag: 'Logistics Spec',
      image: 'assets/images/wholesale-merchandise.jpg',
      specDetails: {
        'Working Load Limit (WLL)': '3,333 lbs (1,512 kg)',
        'Assembly Break Strength': '10,000 lbs (4,536 kg)',
        'Webbing Width & Length': '2.0 Inches x 27 Feet Weather-Coated Polyester',
        'End Hardware': 'Double Steel J-Hooks with Zinc Chromate Finish'
      },
      variants: ['4-Pack Box (2" x 27ft)', 'Contractor Pallet (48 Packs)']
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
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const openDrawerBtns = document.querySelectorAll('.open-rfq-drawer');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const mainHeader = document.getElementById('mainHeader');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  // Hero Quick RFQ Estimator Elements
  const calcSector = document.getElementById('calcSector');
  const calcProduct = document.getElementById('calcProduct');
  const calcTierSlider = document.getElementById('calcTierSlider');
  const calcQtyValue = document.getElementById('calcQtyValue');
  const calcLeadTime = document.getElementById('calcLeadTime');
  const calcPricingTier = document.getElementById('calcPricingTier');
  const btnAddToQuoteFromHero = document.getElementById('btnAddToQuoteFromHero');

  // 3. Render Catalog Cards
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
        item.category.toLowerCase().includes(query) ||
        (item.brand && item.brand.toLowerCase().includes(query));
      return matchSector && matchQuery;
    });

    if (filtered.length === 0) {
      catalogGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3.5rem 1.5rem; background: var(--white); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
          <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--pale-green); color: var(--forest-green); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--primary-text); margin-bottom: 0.5rem;">No matching verified supplies found</h4>
          <p style="color: var(--secondary-text); font-size: 0.9rem; max-width: 520px; margin: 0 auto 1.5rem;">We may have direct manufacturer sourcing for unlisted product lines. Call our Connecticut desk directly at <strong>(860) 656-8280</strong> or request a custom procurement quote.</p>
          <a href="contact.html" class="btn-primary">Submit Custom Sourcing Request</a>
        </div>
      `;
      return;
    }

    filtered.forEach(p => {
      const isAdded = quoteBasket.some(i => i.id === p.id);
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-card-img-wrap">
          <img src="${p.image}" alt="${p.title}" class="product-card-img" loading="lazy">
        </div>
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
        <div class="product-card-actions">
          <button class="btn-view-product" data-id="${p.id}" title="View Technical Specifications">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            View Details
          </button>
          <button class="btn-add-quote ${isAdded ? 'added' : ''}" data-id="${p.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              ${isAdded ? '<polyline points="20 6 9 17 4 12"/>' : '<path d="M12 5v14M5 12h14"/>'}
            </svg>
            <span>${isAdded ? 'In RFQ List' : 'Add to Quote'}</span>
          </button>
        </div>
      `;

      // Event Listeners for Card
      card.querySelector('.btn-view-product').addEventListener('click', () => {
        openProductModal(p);
      });

      card.querySelector('.btn-add-quote').addEventListener('click', () => {
        toggleItemInQuote(p);
      });

      catalogGrid.appendChild(card);
    });
  }

  // 4. Product Detail Modal
  let productModalOverlay = document.getElementById('productModalOverlay');
  if (!productModalOverlay) {
    productModalOverlay = document.createElement('div');
    productModalOverlay.className = 'product-modal-overlay';
    productModalOverlay.id = 'productModalOverlay';
    productModalOverlay.setAttribute('aria-modal', 'true');
    productModalOverlay.setAttribute('role', 'dialog');
    document.body.appendChild(productModalOverlay);
  }

  function openProductModal(p) {
    let specRows = '';
    if (p.specDetails) {
      for (const [key, val] of Object.entries(p.specDetails)) {
        specRows += `
          <tr>
            <th>${key}</th>
            <td>${val}</td>
          </tr>
        `;
      }
    }

    let variantsHtml = '';
    if (p.variants && p.variants.length > 0) {
      variantsHtml = `
        <div style="margin-bottom: 1.25rem;">
          <label style="display: block; font-size: 0.8rem; font-weight: 700; color: var(--primary-text); margin-bottom: 0.35rem; text-transform: uppercase; letter-spacing: 0.04em;">Available Sizing / Variant:</label>
          <select id="modalVariantSelect" class="form-select" style="padding: 0.55rem 0.85rem; font-size: 0.875rem;">
            ${p.variants.map(v => `<option value="${v}">${v}</option>`).join('')}
          </select>
        </div>
      `;
    }

    const waText = encodeURIComponent(`Hello Evergreen Suppliers LLC, I would like to inquire about specifications and bulk pricing for ${p.title} (SKU: ${p.id}).`);

    productModalOverlay.innerHTML = `
      <div class="product-modal">
        <div class="product-modal-header">
          <div class="product-modal-title-group">
            <span class="product-category-tag">${p.category}</span>
            <span style="font-size: 0.8rem; font-weight: 600; color: var(--secondary-text);">SKU: ${p.id.toUpperCase()}</span>
          </div>
          <button class="product-modal-close" id="modalCloseBtn" aria-label="Close Product Details">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="product-modal-body">
          <div class="product-modal-img-wrap">
            <img src="${p.image}" alt="${p.title}">
          </div>

          <div>
            <h3 class="product-modal-title">${p.title}</h3>
            <p class="product-modal-desc">${p.fullDesc || p.specs}</p>

            <table class="spec-table">
              <tbody>
                <tr>
                  <th>Compliance & Cert</th>
                  <td><strong>${p.cert}</strong></td>
                </tr>
                <tr>
                  <th>Packaging / MOQ</th>
                  <td>${p.moq}</td>
                </tr>
                <tr>
                  <th>Fulfillment Lead Time</th>
                  <td>${p.leadTime}</td>
                </tr>
                ${specRows}
              </tbody>
            </table>

            ${variantsHtml}

            <div class="modal-actions-box">
              <div style="font-size: 0.8125rem; font-weight: 700; color: var(--secondary-text); margin-bottom: 0.65rem; text-transform: uppercase;">
                Procurement Actions & Bulk Quote
              </div>
              <div class="modal-actions-row">
                <div class="modal-qty-control">
                  <button type="button" class="modal-qty-btn" id="modalQtyMinus">-</button>
                  <span class="modal-qty-val" id="modalQtyVal">1</span>
                  <button type="button" class="modal-qty-btn" id="modalQtyPlus">+</button>
                </div>

                <button class="btn-primary" id="modalAddToQuoteBtn" style="flex: 1;">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
                  Add To Quote List
                </button>

                <a href="https://wa.me/18606568280?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-quick" title="Inquire on WhatsApp">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  WhatsApp Quick Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    productModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Modal Interaction Logic
    let currentQty = 1;
    const modalQtyVal = document.getElementById('modalQtyVal');
    const modalQtyMinus = document.getElementById('modalQtyMinus');
    const modalQtyPlus = document.getElementById('modalQtyPlus');
    const modalAddToQuoteBtn = document.getElementById('modalAddToQuoteBtn');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalVariantSelect = document.getElementById('modalVariantSelect');

    modalQtyMinus.addEventListener('click', () => {
      if (currentQty > 1) {
        currentQty--;
        modalQtyVal.textContent = currentQty;
      }
    });

    modalQtyPlus.addEventListener('click', () => {
      currentQty++;
      modalQtyVal.textContent = currentQty;
    });

    modalAddToQuoteBtn.addEventListener('click', () => {
      const selectedVariant = modalVariantSelect ? modalVariantSelect.value : '';
      const customTitle = selectedVariant ? `${p.title} (${selectedVariant})` : p.title;

      const existingIndex = quoteBasket.findIndex(item => item.id === p.id && item.variant === selectedVariant);
      if (existingIndex > -1) {
        quoteBasket[existingIndex].qty += currentQty;
      } else {
        quoteBasket.push({
          id: p.id,
          title: customTitle,
          category: p.category,
          moq: p.moq,
          variant: selectedVariant,
          qty: currentQty
        });
      }

      saveBasket();
      updateBasketUI();
      showToast(`Added ${currentQty}x "${customTitle}" to RFQ Basket`);
      closeProductModal();
      openDrawer();
    });

    modalCloseBtn.addEventListener('click', closeProductModal);
  }

  function closeProductModal() {
    if (productModalOverlay) {
      productModalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (productModalOverlay) {
    productModalOverlay.addEventListener('click', (e) => {
      if (e.target === productModalOverlay) {
        closeProductModal();
      }
    });
  }

  // Close modals on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeDrawer();
    }
  });

  // 5. Basket Management
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

  // 6. Enhanced 5-Step Request for Quotation (RFQ) Workflow
  let currentRfqStep = 1;
  const rfqFormData = {
    deliveryTimeline: 'Standard 2-3 Business Days',
    packagingNotes: '',
    clientName: '',
    companyName: '',
    workEmail: '',
    phoneNumber: '',
    deliveryLocation: 'Connecticut, USA'
  };

  function updateBasketUI() {
    quoteCountBadges.forEach(badge => {
      badge.textContent = quoteBasket.length;
    });

    renderRfqWizardStep(currentRfqStep);
  }

  function renderRfqWizardStep(stepNum) {
    const drawerContainer = document.querySelector('.rfq-drawer');
    if (!drawerContainer) return;

    currentRfqStep = stepNum;

    // Header with Wizard Steps
    drawerContainer.innerHTML = `
      <div class="drawer-header">
        <div class="drawer-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Request for Quote (RFQ)
        </div>
        <button class="drawer-close-btn" id="closeDrawerBtn" aria-label="Close RFQ Drawer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <div class="rfq-wizard-steps">
        <div class="rfq-step-tab ${stepNum === 1 ? 'active' : (stepNum > 1 ? 'completed' : '')}" data-step="1">1. Products (${quoteBasket.length})</div>
        <div class="rfq-step-tab ${stepNum === 2 ? 'active' : (stepNum > 2 ? 'completed' : '')}" data-step="2">2. Requirements</div>
        <div class="rfq-step-tab ${stepNum === 3 ? 'active' : (stepNum > 3 ? 'completed' : '')}" data-step="3">3. Business Info</div>
        <div class="rfq-step-tab ${stepNum === 4 ? 'active' : (stepNum > 4 ? 'completed' : '')}" data-step="4">4. Review</div>
        <div class="rfq-step-tab ${stepNum === 5 ? 'active' : ''}" data-step="5">5. Status</div>
      </div>

      <div class="rfq-step-body" style="display: flex; flex-direction: column; flex-grow: 1; overflow-y: auto;">
        ${getRfqStepHtml(stepNum)}
      </div>

      <div class="rfq-wizard-nav">
        ${getRfqNavHtml(stepNum)}
      </div>
    `;

    attachRfqStepListeners(stepNum);
  }

  function getRfqStepHtml(step) {
    if (step === 1) {
      if (quoteBasket.length === 0) {
        return `
          <div class="drawer-empty-state">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 0.75rem; color: var(--secondary-text);">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--primary-text); margin-bottom: 0.35rem;">Your RFQ Basket is Empty</h4>
            <p style="font-size: 0.85rem; color: var(--secondary-text); margin-bottom: 1.25rem;">Browse our industrial, healthcare, and wholesale catalog to select items for volume pricing.</p>
            <a href="catalog.html" class="btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1.25rem;">Explore Catalog</a>
          </div>
        `;
      }

      let itemsHtml = '';
      quoteBasket.forEach((item, index) => {
        itemsHtml += `
          <div class="drawer-item">
            <div class="drawer-item-info">
              <h5>${item.title}</h5>
              <span>${item.category} &bull; ${item.moq}</span>
            </div>
            <div class="drawer-item-actions">
              <button class="btn-item-qty minus" data-idx="${index}" aria-label="Decrease quantity">-</button>
              <span style="font-size: 0.875rem; font-weight: 700; min-width: 24px; text-align: center; color: var(--primary-text);">${item.qty}</span>
              <button class="btn-item-qty plus" data-idx="${index}" aria-label="Increase quantity">+</button>
              <button class="drawer-item-del" data-idx="${index}" title="Remove item" aria-label="Remove item from quote">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
        `;
      });

      return `
        <div style="padding: 1.5rem 1.75rem; display: flex; flex-direction: column; gap: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <h4 class="rfq-pane-title">Selected Line Items</h4>
            <span style="font-size: 0.78rem; font-weight: 700; color: var(--forest-green);">${quoteBasket.length} Items Selected</span>
          </div>
          <p class="rfq-pane-desc">Adjust required wholesale units or pallets. Minimum order quantities apply for institutional pricing.</p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${itemsHtml}
          </div>
        </div>
      `;
    }

    if (step === 2) {
      return `
        <div style="padding: 1.5rem 1.75rem;">
          <h4 class="rfq-pane-title">Step 2: Fulfillment & Sourcing Specs</h4>
          <p class="rfq-pane-desc">Specify delivery constraints, recurring logistics schedules, or specialized palletization requirements.</p>

          <div style="margin-bottom: 1.25rem;">
            <label class="form-label">Required Delivery Timeline:</label>
            <select id="rfqDeliveryTimeline" class="form-select">
              <option value="Next-Day Dispatch (Connecticut Regional)">Next-Day Dispatch (Connecticut Regional Express)</option>
              <option value="Standard 2-3 Business Days" selected>Standard Freight (2-3 Business Days)</option>
              <option value="Scheduled Weekly Recurring Supply">Scheduled Recurring B2B Contract Logistics</option>
              <option value="Direct Container / Full Truckload (FTL)">Direct Container / Full Truckload (FTL)</option>
            </select>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <label class="form-label">Packaging & Sourcing Instructions:</label>
            <textarea id="rfqPackagingNotes" class="form-textarea" placeholder="Provide any special requirements: ANSI compliance paperwork, pallet wrap specs, clinic packaging, lot numbers, or delivery dock hours...">${rfqFormData.packagingNotes}</textarea>
          </div>

          <div style="background: var(--pale-green); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.85rem 1rem; font-size: 0.8rem; color: var(--forest-green);">
            <strong>Connecticut Logistics Hub:</strong> Real-time inventory is staged for direct dispatch across Connecticut, Massachusetts, Rhode Island, and New York.
          </div>
        </div>
      `;
    }

    if (step === 3) {
      return `
        <div style="padding: 1.5rem 1.75rem;">
          <h4 class="rfq-pane-title">Step 3: Business Procurement Details</h4>
          <p class="rfq-pane-desc">Please provide your institutional or company contact information for formal quotation issuance.</p>

          <div style="margin-bottom: 1rem;">
            <label class="form-label">Authorized Contact Name *</label>
            <input type="text" id="rfqClientName" class="form-input" placeholder="e.g. John Doe, Procurement Officer" value="${rfqFormData.clientName}" required>
          </div>

          <div style="margin-bottom: 1rem;">
            <label class="form-label">Company / Facility Name *</label>
            <input type="text" id="rfqCompanyName" class="form-input" placeholder="e.g. Hartford Industrial Services LLC" value="${rfqFormData.companyName}" required>
          </div>

          <div style="margin-bottom: 1rem;">
            <label class="form-label">Corporate Work Email *</label>
            <input type="email" id="rfqWorkEmail" class="form-input" placeholder="procurement@company.com" value="${rfqFormData.workEmail}" required>
          </div>

          <div style="margin-bottom: 1rem;">
            <label class="form-label">Business Telephone Number</label>
            <input type="tel" id="rfqPhoneNumber" class="form-input" placeholder="(860) 000-0000" value="${rfqFormData.phoneNumber}">
          </div>

          <div style="margin-bottom: 1rem;">
            <label class="form-label">Delivery Destination (City, State, Zip)</label>
            <input type="text" id="rfqDeliveryLocation" class="form-input" placeholder="e.g. Hartford, CT 06103" value="${rfqFormData.deliveryLocation}">
          </div>
        </div>
      `;
    }

    if (step === 4) {
      let itemsListSummary = '';
      quoteBasket.forEach(i => {
        itemsListSummary += `
          <div class="rfq-summary-row">
            <span><strong>${i.qty}x</strong> ${i.title}</span>
            <span style="color: var(--secondary-text);">${i.category}</span>
          </div>
        `;
      });

      return `
        <div style="padding: 1.5rem 1.75rem;">
          <h4 class="rfq-pane-title">Step 4: Review Quotation Request</h4>
          <p class="rfq-pane-desc">Please verify your itemized list and procurement specifications before dispatching to our desk.</p>

          <div class="rfq-summary-card">
            <h5 style="font-size: 0.85rem; font-weight: 700; color: var(--forest-green); margin-bottom: 0.75rem; text-transform: uppercase;">Selected Supplies (${quoteBasket.length} Items)</h5>
            ${itemsListSummary}
          </div>

          <div class="rfq-summary-card">
            <h5 style="font-size: 0.85rem; font-weight: 700; color: var(--forest-green); margin-bottom: 0.75rem; text-transform: uppercase;">Procurement Information</h5>
            <div class="rfq-summary-row">
              <span style="color: var(--secondary-text);">Buyer:</span>
              <strong>${rfqFormData.clientName || 'Commercial Buyer'}</strong>
            </div>
            <div class="rfq-summary-row">
              <span style="color: var(--secondary-text);">Company:</span>
              <strong>${rfqFormData.companyName || 'Institutional Client'}</strong>
            </div>
            <div class="rfq-summary-row">
              <span style="color: var(--secondary-text);">Email:</span>
              <strong>${rfqFormData.workEmail || 'Pending Entry'}</strong>
            </div>
            <div class="rfq-summary-row">
              <span style="color: var(--secondary-text);">Delivery Destination:</span>
              <span>${rfqFormData.deliveryLocation}</span>
            </div>
            <div class="rfq-summary-row">
              <span style="color: var(--secondary-text);">Lead Time Requested:</span>
              <span>${rfqFormData.deliveryTimeline}</span>
            </div>
          </div>
          
          <p style="font-size: 0.78rem; color: var(--secondary-text);">
            By submitting, your request will be transmitted directly to the Evergreen Suppliers LLC sales desk in Connecticut (<a href="mailto:info@evergreensuppliersllc.com" style="color: var(--deep-evergreen); font-weight: 600;">info@evergreensuppliersllc.com</a>).
          </p>
        </div>
      `;
    }

    if (step === 5) {
      const refCode = 'ES-' + Math.floor(100000 + Math.random() * 900000);
      return `
        <div style="padding: 2.5rem 1.75rem; text-align: center;">
          <div style="width: 58px; height: 58px; border-radius: 50%; background: var(--pale-green); color: var(--deep-evergreen); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--forest-green); margin-bottom: 0.5rem;">Quotation Request Transmitted</h3>
          <p style="font-size: 0.9rem; color: var(--secondary-text); margin-bottom: 1.5rem;">
            Reference ID: <strong>${refCode}</strong><br>
            A customized B2B quotation document will be emailed to <strong>${rfqFormData.workEmail || 'your email'}</strong> within 24 business hours.
          </p>

          <div style="background: var(--soft-bg); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 2rem; text-align: left; font-size: 0.85rem;">
            <div style="font-weight: 700; color: var(--primary-text); margin-bottom: 0.35rem;">Need Urgent Dispatch Assistance?</div>
            <p style="color: var(--secondary-text); margin-bottom: 0.75rem;">Contact our regional procurement coordinator directly by phone or WhatsApp:</p>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <a href="tel:8606568280" class="btn-phone-quick" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                (860) 656-8280
              </a>
              <a href="https://wa.me/18606568280?text=Hello%20Evergreen%20Suppliers%2C%20following%20up%20on%20RFQ%20${refCode}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-quick" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">
                WhatsApp Desk
              </a>
            </div>
          </div>

          <button class="btn-primary" id="btnFinishRfq" style="width: 100%;">Return to Catalog</button>
        </div>
      `;
    }

    return '';
  }

  function getRfqNavHtml(step) {
    if (step === 1) {
      return `
        <button class="btn-phone-quick" id="btnClearBasket" style="font-size: 0.8rem;">Clear Basket</button>
        <button class="btn-accent" id="btnProceedToStep2" ${quoteBasket.length === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
          Proceed to Requirements
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      `;
    }
    if (step === 2) {
      return `
        <button class="btn-phone-quick" id="btnBackToStep1">Back to Line Items</button>
        <button class="btn-accent" id="btnProceedToStep3">
          Proceed to Business Details
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      `;
    }
    if (step === 3) {
      return `
        <button class="btn-phone-quick" id="btnBackToStep2">Back</button>
        <button class="btn-accent" id="btnProceedToStep4">
          Review Quotation Request
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      `;
    }
    if (step === 4) {
      return `
        <button class="btn-phone-quick" id="btnBackToStep3">Back</button>
        <button class="btn-accent" id="btnSubmitFinalRfq">
          Submit RFQ to Connecticut Desk
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      `;
    }
    if (step === 5) {
      return `
        <div style="width: 100%; text-align: center; font-size: 0.78rem; color: var(--secondary-text);">
          Connecticut Regional Desk: <a href="mailto:info@evergreensuppliersllc.com" style="color: var(--deep-evergreen); font-weight: 700;">info@evergreensuppliersllc.com</a>
        </div>
      `;
    }
    return '';
  }

  function attachRfqStepListeners(step) {
    const closeBtn = document.getElementById('closeDrawerBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeDrawer);
    }

    // Step Tabs direct clicking
    document.querySelectorAll('.rfq-step-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = parseInt(tab.dataset.step, 10);
        if (target <= 4) {
          renderRfqWizardStep(target);
        }
      });
    });

    if (step === 1) {
      // Step 1 buttons
      document.querySelectorAll('.btn-item-qty.minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.target.dataset.idx, 10);
          if (quoteBasket[idx].qty > 1) {
            quoteBasket[idx].qty--;
          } else {
            quoteBasket.splice(idx, 1);
          }
          saveBasket();
          updateBasketUI();
        });
      });

      document.querySelectorAll('.btn-item-qty.plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const idx = parseInt(e.target.dataset.idx, 10);
          quoteBasket[idx].qty++;
          saveBasket();
          updateBasketUI();
        });
      });

      document.querySelectorAll('.drawer-item-del').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const delBtn = e.target.closest('.drawer-item-del');
          const idx = parseInt(delBtn.dataset.idx, 10);
          quoteBasket.splice(idx, 1);
          saveBasket();
          updateBasketUI();
          const currentActiveTab = document.querySelector('.catalog-tab.active')?.dataset.sector || 'all';
          renderCatalog(currentActiveTab, catalogSearch ? catalogSearch.value : '');
        });
      });

      const clearBtn = document.getElementById('btnClearBasket');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          if (confirm('Are you sure you want to clear your current RFQ basket?')) {
            quoteBasket = [];
            saveBasket();
            updateBasketUI();
            const currentActiveTab = document.querySelector('.catalog-tab.active')?.dataset.sector || 'all';
            renderCatalog(currentActiveTab, catalogSearch ? catalogSearch.value : '');
          }
        });
      }

      const proceedStep2 = document.getElementById('btnProceedToStep2');
      if (proceedStep2 && quoteBasket.length > 0) {
        proceedStep2.addEventListener('click', () => {
          renderRfqWizardStep(2);
        });
      }
    }

    if (step === 2) {
      const delTimeline = document.getElementById('rfqDeliveryTimeline');
      const packNotes = document.getElementById('rfqPackagingNotes');
      const backStep1 = document.getElementById('btnBackToStep1');
      const proceedStep3 = document.getElementById('btnProceedToStep3');

      if (backStep1) {
        backStep1.addEventListener('click', () => renderRfqWizardStep(1));
      }

      if (proceedStep3) {
        proceedStep3.addEventListener('click', () => {
          if (delTimeline) rfqFormData.deliveryTimeline = delTimeline.value;
          if (packNotes) rfqFormData.packagingNotes = packNotes.value;
          renderRfqWizardStep(3);
        });
      }
    }

    if (step === 3) {
      const clientName = document.getElementById('rfqClientName');
      const companyName = document.getElementById('rfqCompanyName');
      const workEmail = document.getElementById('rfqWorkEmail');
      const phoneNumber = document.getElementById('rfqPhoneNumber');
      const delLoc = document.getElementById('rfqDeliveryLocation');
      const backStep2 = document.getElementById('btnBackToStep2');
      const proceedStep4 = document.getElementById('btnProceedToStep4');

      if (backStep2) {
        backStep2.addEventListener('click', () => renderRfqWizardStep(2));
      }

      if (proceedStep4) {
        proceedStep4.addEventListener('click', () => {
          if (!clientName.value.trim() || !companyName.value.trim() || !workEmail.value.trim()) {
            alert('Please enter your Name, Company, and Work Email to generate the quotation review.');
            return;
          }
          rfqFormData.clientName = clientName.value.trim();
          rfqFormData.companyName = companyName.value.trim();
          rfqFormData.workEmail = workEmail.value.trim();
          if (phoneNumber) rfqFormData.phoneNumber = phoneNumber.value.trim();
          if (delLoc) rfqFormData.deliveryLocation = delLoc.value.trim();

          renderRfqWizardStep(4);
        });
      }
    }

    if (step === 4) {
      const backStep3 = document.getElementById('btnBackToStep3');
      const submitFinal = document.getElementById('btnSubmitFinalRfq');

      if (backStep3) {
        backStep3.addEventListener('click', () => renderRfqWizardStep(3));
      }

      if (submitFinal) {
        submitFinal.addEventListener('click', () => {
          submitFinal.innerHTML = 'Transmitting to Desk...';
          submitFinal.disabled = true;

          setTimeout(() => {
            showToast(`RFQ for ${quoteBasket.length} lines submitted! Sent to info@evergreensuppliersllc.com`);
            quoteBasket = [];
            saveBasket();
            renderRfqWizardStep(5);
            const currentActiveTab = document.querySelector('.catalog-tab.active')?.dataset.sector || 'all';
            renderCatalog(currentActiveTab, catalogSearch ? catalogSearch.value : '');
          }, 600);
        });
      }
    }

    if (step === 5) {
      const finishBtn = document.getElementById('btnFinishRfq');
      if (finishBtn) {
        finishBtn.addEventListener('click', () => {
          closeDrawer();
          renderRfqWizardStep(1);
        });
      }
    }
  }

  // 7. Hero RFQ Calculator Logic
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
      qtyLabel = 'Standard Commercial Box (~100 - 500 units)';
      pricingTierLabel = 'Tier 1 Standard Business';
      leadTime = 'Next-Day Regional Delivery';
    } else if (sliderVal <= 65) {
      qtyLabel = 'Pallet / Wholesale Quantity (~1,000 - 5,000 units)';
      pricingTierLabel = 'Wholesale Bulk Tier 2 (Volume Discount)';
      leadTime = '1-2 Days Freight Dispatch';
    } else {
      qtyLabel = 'Full Truckload / Contract Supply (10,000+ units)';
      pricingTierLabel = 'Enterprise Contract Tier 3';
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
        id: 'calc-' + Date.now(),
        title: productName,
        category: sector === 'industrial' ? 'Industrial PPE' : (sector === 'medical' ? 'Medical Consumables' : 'Wholesale Merchandise'),
        moq: qty,
        qty: 1
      };

      quoteBasket.push(customItem);
      saveBasket();
      updateBasketUI();
      showToast(`Added "${productName}" configuration to RFQ Basket`);
      openDrawer();
    });
  }

  // 8. Drawer Open/Close
  function openDrawer() {
    if (rfqDrawerOverlay) {
      rfqDrawerOverlay.classList.add('open');
      renderRfqWizardStep(1);
    }
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

  // 9. Tab Filtering
  catalogTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catalogTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
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

  // 10. Toast Utility
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

  // 11. Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || 'Client';
      const sector = document.getElementById('contactSector')?.value || 'General Inquiry';
      showToast(`Thank you, ${name}! Your inquiry for [${sector}] has been dispatched to info@evergreensuppliersllc.com.`);
      contactForm.reset();
    });
  }

  // 12. FAQ Accordions
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

  // 13. Sticky Header
  window.addEventListener('scroll', () => {
    if (!mainHeader) return;
    if (window.scrollY > 40) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });

  // 14. Mobile Navigation & Touch Accordion Engine
  if (hamburgerBtn && navMenu) {
    // Append mobile action buttons inside navMenu if not present
    if (!navMenu.querySelector('.mobile-menu-actions')) {
      const mobileActionWrap = document.createElement('li');
      mobileActionWrap.className = 'mobile-menu-actions';
      mobileActionWrap.innerHTML = `
        <button class="btn-primary" id="mobileMenuRfqBtn" style="width: 100%; justify-content: center;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Request a Quote (Instant RFQ)
        </button>
        <a href="https://wa.me/18606568280?text=Hello%20Evergreen%20Suppliers%20LLC%2C%20I%20would%20like%20to%20request%20a%20quote." target="_blank" rel="noopener noreferrer" class="btn-whatsapp-quick" style="width: 100%; justify-content: center;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          Chat on WhatsApp
        </a>
        <a href="tel:8606568280" class="btn-phone-quick" style="width: 100%; justify-content: center; display: flex;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Desk: (860) 656-8280
        </a>
      `;
      navMenu.appendChild(mobileActionWrap);

      const mobileRfq = mobileActionWrap.querySelector('#mobileMenuRfqBtn');
      if (mobileRfq) {
        mobileRfq.addEventListener('click', () => {
          closeMobileNav();
          openDrawer();
        });
      }
    }

    function toggleMobileNav() {
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    }

    function openMobileNav() {
      navMenu.classList.add('open');
      document.body.classList.add('nav-open');
      hamburgerBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    }

    function closeMobileNav() {
      navMenu.classList.remove('open');
      document.body.classList.remove('nav-open');
      hamburgerBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }

    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileNav();
    });

    // Mobile dropdown accordion handling
    const dropdownItems = navMenu.querySelectorAll('.nav-item-dropdown');
    dropdownItems.forEach(dropdown => {
      const toggleLink = dropdown.querySelector(':scope > .nav-link');
      if (toggleLink) {
        toggleLink.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            const wasOpen = dropdown.classList.contains('mobile-open');
            // Close other dropdowns
            dropdownItems.forEach(d => {
              if (d !== dropdown) d.classList.remove('mobile-open');
            });
            if (!wasOpen) {
              dropdown.classList.add('mobile-open');
            } else {
              dropdown.classList.remove('mobile-open');
            }
          }
        });
      }
    });

    // Close mobile nav when clicking a regular link or dropdown sublink
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        // Do not close if it is a parent dropdown link on mobile
        if (window.innerWidth <= 768 && link.parentElement.classList.contains('nav-item-dropdown') && link.classList.contains('nav-link')) {
          return;
        }
        closeMobileNav();
      });
    });

    // Close when clicking outside header
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        closeMobileNav();
      }
    });
  }

  // 15. Ensure Floating WhatsApp Button Exists on Page
  let floatingWaBtn = document.querySelector('.whatsapp-floating-btn');
  if (!floatingWaBtn) {
    floatingWaBtn = document.createElement('a');
    floatingWaBtn.className = 'whatsapp-floating-btn';
    floatingWaBtn.href = 'https://wa.me/18606568280?text=Hello%20Evergreen%20Suppliers%20LLC%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20supplies.';
    floatingWaBtn.target = '_blank';
    floatingWaBtn.rel = 'noopener noreferrer';
    floatingWaBtn.title = 'Chat with Evergreen Suppliers on WhatsApp';
    floatingWaBtn.innerHTML = `
      <span class="whatsapp-pulse-ring"></span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      <span>WhatsApp Procurement</span>
    `;
    document.body.appendChild(floatingWaBtn);
  }

  // Initial runs
  updateHeroCalculator();
  updateBasketUI();
  renderCatalog();
});
