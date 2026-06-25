// BRANDSTORE GLOBAL JAVASCRIPT & DATABASE
// Consolidates e-commerce data and client-side interactions

// 1. PRODUCT DATABASE
const productsData = [
  {
    id: 1,
    name: "Sony WH-1000XM4 Wireless Noise Canceling Headphones",
    category: "electronics",
    brand: "Sony",
    price: 199.00,
    originalPrice: 249.99,
    rating: 4.8,
    reviewsCount: 154,
    image: "./assets/assets/Image/tech/image 23.png",
    description: "Industry-leading noise canceling wireless over-ear headphones with high-fidelity audio, smart voice control, and up to 30 hours of battery life.",
    features: ["Plastic", "Smart"],
    shipping: "Free Shipping",
    sizes: ["Standard Edition", "Signature Pro Edition (+ $50)"]
  },
  {
    id: 2,
    name: "iPhone 13 Pro Max Dual SIM - 256GB Silver",
    category: "electronics",
    brand: "Apple",
    price: 999.00,
    originalPrice: null,
    rating: 4.7,
    reviewsCount: 320,
    image: "./assets/assets/Image/tech/image 29.png",
    description: "Stunning Super Retina XDR display with ProMotion, advanced triple camera system, cinematic video mode, and industry-leading performance.",
    features: ["Metallic", "Smart"],
    shipping: "Free Shipping",
    sizes: ["128GB", "256GB (+ $100)", "512GB (+ $250)"]
  },
  {
    id: 3,
    name: "Canon EOS R6 Mirrorless Digital Camera Body",
    category: "electronics",
    brand: "Canon",
    price: 2499.00,
    originalPrice: 2699.00,
    rating: 4.9,
    reviewsCount: 84,
    image: "./assets/assets/Image/tech/image 34.png",
    description: "High-performance full-frame mirrorless camera offering up to 20 fps silent shooting, 4K video recording, and 5-axis image stabilization.",
    features: ["Metallic", "Smart"],
    shipping: "Free Shipping",
    sizes: ["Body Only", "Body + 24-105mm Lens Kit (+ $400)"]
  },
  {
    id: 4,
    name: "Xiaomi Mi Band 6 Fitness Tracker Smartwatch",
    category: "electronics",
    brand: "Xiaomi",
    price: 19.00,
    originalPrice: 24.99,
    rating: 4.5,
    reviewsCount: 423,
    image: "./assets/assets/Image/tech/6.png",
    description: "Smart fitness tracker with blood oxygen level monitoring, 30 sports workout modes, heart rate tracking, and customized 1.56 inch AMOLED display.",
    features: ["Plastic", "Smart"],
    shipping: "Shipping: $4.99",
    sizes: ["Black Band", "Blue Band", "Green Band"]
  },
  {
    id: 5,
    name: "GoPro Hero 9 Black Action Camera Bundle",
    category: "electronics",
    brand: "Sony",
    price: 299.00,
    originalPrice: 349.00,
    rating: 4.8,
    reviewsCount: 112,
    image: "./assets/assets/Image/tech/8.png",
    description: "Rugged waterproof action camera recording stunning 5K video, 20MP photos, touch screen interface, and HyperSmooth 3.0 stabilization.",
    features: ["Plastic", "Smart"],
    shipping: "Free Shipping",
    sizes: ["Standard Pack", "Travel Bundle (+ $35)"]
  },
  {
    id: 6,
    name: "Samsung Galaxy Fit 2 Tracker Watch",
    category: "electronics",
    brand: "Samsung",
    price: 49.00,
    originalPrice: null,
    rating: 4.2,
    reviewsCount: 96,
    image: "./assets/assets/Image/tech/image 32.png",
    description: "Lightweight, sleek fitness band tracking steps, active minutes, calories burned, and notifications for up to 15 days on a single charge.",
    features: ["Plastic", "Smart"],
    shipping: "Shipping: $2.50",
    sizes: ["Scarlet Red", "Classic Black"]
  },
  {
    id: 7,
    name: "Apple MacBook Pro 14-inch M1 Pro Space Gray",
    category: "electronics",
    brand: "Apple",
    price: 1299.00,
    originalPrice: 1499.00,
    rating: 4.9,
    reviewsCount: 201,
    image: "./assets/assets/Image/tech/image 33.png",
    description: "Professional notebook with M1 Pro chip, 16GB unified RAM, Liquid Retina XDR display, and premium speaker sound system.",
    features: ["Metallic", "Smart"],
    shipping: "Free Shipping",
    sizes: ["512GB SSD", "1TB SSD (+ $200)"]
  },
  {
    id: 8,
    name: "Anker PowerWave Pad 15W Wireless Qi Charger",
    category: "electronics",
    brand: "Xiaomi",
    price: 15.00,
    originalPrice: null,
    rating: 4.4,
    reviewsCount: 1250,
    image: "./assets/assets/Image/tech/image 85.png",
    description: "High-speed wireless charging pad compatible with iPhone, Galaxy, and all other Qi-enabled smart devices.",
    features: ["Plastic"],
    shipping: "Shipping: $1.99",
    sizes: ["Single Pack", "Double Pack (+ $12)"]
  },
  {
    id: 9,
    name: "Baseus 65W GaN Travel Charger Quick Charger",
    category: "electronics",
    brand: "Xiaomi",
    price: 29.00,
    originalPrice: 35.00,
    rating: 4.6,
    reviewsCount: 310,
    image: "./assets/assets/Layout/alibaba/Image/tech/image 85.png",
    description: "Gallium Nitride 65W fast charger featuring 3 output ports (2x Type C and 1x USB A) to charge laptop, phone, and tablet simultaneously.",
    features: ["Plastic"],
    shipping: "Shipping: $2.00",
    sizes: ["US Plug", "EU Plug", "UK Plug"]
  },
  {
    id: 10,
    name: "Nordic Lounge Soft Armchair with Wooden Legs",
    category: "interior",
    brand: "Sony",
    price: 45.00,
    originalPrice: 60.00,
    rating: 4.5,
    reviewsCount: 65,
    image: "./assets/assets/Image/interior/1.png",
    description: "Modern, ergonomic Scandinavian-style soft armchair upholstered in premium breathable linen cloth with sturdy solid wood support frame.",
    features: ["Metallic", "Leather"],
    shipping: "Shipping: $15.00",
    sizes: ["Light Gray", "Ocean Blue", "Charcoal Dark"]
  },
  {
    id: 11,
    name: "Velvet Sofa Cushions and Pillows Set of 4",
    category: "interior",
    brand: "Xiaomi",
    price: 9.90,
    originalPrice: 15.00,
    rating: 4.3,
    reviewsCount: 220,
    image: "./assets/assets/Image/interior/7.png",
    description: "Luxurious velvet cushion covers available in vibrant, warm colors to decorate your living room, bedroom, or patio benches.",
    features: ["Leather"],
    shipping: "Shipping: $3.00",
    sizes: ["16 x 16 inches", "18 x 18 inches (+ $2)", "20 x 20 inches (+ $4)"]
  },
  {
    id: 12,
    name: "Professional Multi-Speed Kitchen Stand Mixer",
    category: "interior",
    brand: "Samsung",
    price: 79.00,
    originalPrice: 99.00,
    rating: 4.7,
    reviewsCount: 140,
    image: "./assets/assets/Image/interior/9.png",
    description: "Powerful 6-speed electric kitchen mixer with a large stainless steel bowl, dough hooks, wire whisk, and flat beater attachments.",
    features: ["Metallic"],
    shipping: "Free Shipping",
    sizes: ["Metallic Red", "Silver Chrome", "Matte Black"]
  },
  {
    id: 13,
    name: "Minimalist Modern Stool with Matte Finish",
    category: "interior",
    brand: "Sony",
    price: 24.00,
    originalPrice: null,
    rating: 4.1,
    reviewsCount: 48,
    image: "./assets/assets/Image/interior/6.png",
    description: "Clean geometric seating solution that works beautifully as a vanity stool, desk accent chair, or minimalist entryway bench.",
    features: ["Plastic"],
    shipping: "Shipping: $5.00",
    sizes: ["Standard (18 inches)", "Tall (24 inches) (+ $8)"]
  },
  {
    id: 14,
    name: "Wooden Accent Storage Sideboard Cabinet",
    category: "interior",
    brand: "Apple",
    price: 189.00,
    originalPrice: 219.00,
    rating: 4.6,
    reviewsCount: 28,
    image: "./assets/assets/Image/interior/8.png",
    description: "Spacious wooden organizer cabinet containing three inner drawers and adjustable shelving to display dining wares or media tech accessories.",
    features: ["Metallic"],
    shipping: "Shipping: $29.99",
    sizes: ["Oak Finish", "Walnut Finish (+ $15)"]
  },
  {
    id: 15,
    name: "Nordic Desk Table Reading Lamp - Adjustable Head",
    category: "interior",
    brand: "Sony",
    price: 19.00,
    originalPrice: 25.00,
    rating: 4.4,
    reviewsCount: 88,
    image: "./assets/assets/Image/interior/image 89.png",
    description: "Contemporary workspace study lamp featuring a swiveling metal lampshade, protective matte black finish, and warm eye-care light output.",
    features: ["Metallic"],
    shipping: "Shipping: $3.99",
    sizes: ["Matte Black", "Polar White"]
  },
  {
    id: 16,
    name: "Luxury Cotton Quilt Bedding Set",
    category: "interior",
    brand: "Xiaomi",
    price: 49.00,
    originalPrice: null,
    rating: 4.5,
    reviewsCount: 77,
    image: "./assets/assets/Image/interior/image 93.png",
    description: "Hypoallergenic double-brushed cotton bedding set including a queen-sized duvet cover and two standard matched pillowcases.",
    features: [],
    shipping: "Free Shipping",
    sizes: ["Twin Size", "Queen Size (+ $10)", "King Size (+ $20)"]
  },
  {
    id: 17,
    name: "Classic Men's Vintage Leather Jacket",
    category: "clothing",
    brand: "Sony",
    price: 89.00,
    originalPrice: 110.00,
    rating: 4.8,
    reviewsCount: 118,
    image: "./assets/assets/Layout/alibaba/Image/cloth/2 1.png",
    description: "Authentic heavy-duty biker leather jacket featuring distressed textures, multiple zipper pockets, and warm polyester interior linings.",
    features: ["Leather"],
    shipping: "Free Shipping",
    sizes: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"]
  },
  {
    id: 18,
    name: "Premium Cotton Casual Crewneck T-Shirt",
    category: "clothing",
    brand: "Samsung",
    price: 12.50,
    originalPrice: 18.00,
    rating: 4.2,
    reviewsCount: 340,
    image: "./assets/assets/Layout/alibaba/Image/cloth/Bitmap (2).png",
    description: "Standard fit, ring-spun soft breathable cotton tee that stands up to regular machine washing without losing shapes or colors.",
    features: [],
    shipping: "Shipping: $1.99",
    sizes: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"]
  },
  {
    id: 19,
    name: "Elegant Women's Floral Summer Dress",
    category: "clothing",
    brand: "Apple",
    price: 39.00,
    originalPrice: null,
    rating: 4.6,
    reviewsCount: 92,
    image: "./assets/assets/Layout/alibaba/Image/cloth/Bitmap.png",
    description: "Lightweight A-line summer dress featuring a flattering waist band, side slits, and a colorful floral print pattern.",
    features: [],
    shipping: "Shipping: $3.00",
    sizes: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"]
  },
  {
    id: 20,
    name: "Thick Hooded Winter Parka Coat",
    category: "clothing",
    brand: "Canon",
    price: 120.00,
    originalPrice: 150.00,
    rating: 4.7,
    reviewsCount: 63,
    image: "./assets/assets/Layout/alibaba/Image/cloth/image 24.png",
    description: "Heavy insulated winter parka with adjustable hood, faux-fur trims, and water-repellent shell to protect against rain, wind, and snow.",
    features: ["Metallic"],
    shipping: "Free Shipping",
    sizes: ["Medium (M)", "Large (L)", "Extra Large (XL)"]
  },
  {
    id: 21,
    name: "Slim Fit Classic Stretch Denim Jeans",
    category: "clothing",
    brand: "Sony",
    price: 34.00,
    originalPrice: 45.00,
    rating: 4.3,
    reviewsCount: 154,
    image: "./assets/assets/Layout/alibaba/Image/cloth/image 26.png",
    description: "Fitted blue jeans crafted from high-grade cotton-spandex denim to offer excellent flexible stretches and durability for all-day comfort.",
    features: [],
    shipping: "Shipping: $4.00",
    sizes: ["W30 L30", "W32 L30", "W34 L32", "W36 L32"]
  },
  {
    id: 22,
    name: "Unisex Comfort Sports Activewear Set",
    category: "clothing",
    brand: "Xiaomi",
    price: 27.00,
    originalPrice: null,
    rating: 4.4,
    reviewsCount: 88,
    image: "./assets/assets/Layout/alibaba/Image/cloth/image 30.png",
    description: "Moisture-wicking athletic hoodie and sweatpants set tailored for gym workout trainings, jogging, and cozy casual lounging.",
    features: ["Plastic"],
    shipping: "Shipping: $2.50",
    sizes: ["Small (S)", "Medium (M)", "Large (L)", "Extra Large (XL)"]
  }
];

// MOCK REVIEWS DATABASE
const reviewsDatabase = {
  1: [
    { name: "John Miller", rating: 5, date: "June 14, 2026", title: "Absolutely stunning noise cancellation", body: "I fly frequently and these headphones are a lifesaver. The ambient control is top tier and they are incredibly comfortable even after 8 hours of use.", helpful: 42 },
    { name: "Sven G.", rating: 4, date: "May 28, 2026", title: "Excellent sound, multi-device sync is a bit laggy", body: "Audio clarity is beautiful. Heavy bass, crisp highs. The only issue is switching between my laptop and Android phone takes about 4 seconds.", helpful: 15 },
    { name: "Sarah Connor", rating: 5, date: "April 10, 2026", title: "Worth every penny!", body: "Battery life is insane. I charged them last week and I still have 40% battery left. Fast charging gets you 5 hours of playback in 10 mins.", helpful: 9 }
  ],
  2: [
    { name: "David K.", rating: 5, date: "June 22, 2026", title: "Stunning display and battery life", body: "The 120Hz ProMotion screen is butter smooth. The camera's Cinematic Mode feels like filming a movie. Highly recommended.", helpful: 29 }
  ],
  3: [
    { name: "Elena R.", rating: 5, date: "May 18, 2026", title: "Professional grade imaging", body: "The low light performance on the EOS R6 is mindblowing. Sturdy body, comfortable grip, and autofocus captures eye tracking perfectly.", helpful: 11 }
  ]
};

// 2. STATE VARIABLES
let cartCount = parseInt(localStorage.getItem("brandstore_cart_count")) || 0;
let favorites = JSON.parse(localStorage.getItem("brandstore_favorites")) || [];

// 3. CORE DOM & INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  // Sync header cart count
  updateCartBadge();

  // Initialize Navigation Drawer Controls
  setupNavigationDrawer();

  // Initialize Header Dropdowns
  setupHeaderDropdowns();

  // Initialize Search Autocomplete Suggestions
  setupSearchAutocomplete();

  // PAGE ROUTING & LOAD DETECTORS
  const hasListingGrid = document.getElementById("products-container");
  const hasDetailsContainer = document.getElementById("product-detail-container");

  if (hasListingGrid) {
    initializeListingPage();
  }

  if (hasDetailsContainer) {
    initializeDetailsPage();
  }
});

// CART UPDATE HELPER
function updateCartBadge() {
  const badges = document.querySelectorAll("#cart-count-badge");
  badges.forEach(badge => {
    if (cartCount > 0) {
      badge.textContent = cartCount;
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  });
  localStorage.setItem("brandstore_cart_count", cartCount);
}

// 4. HEADER NAVIGATION DRAWER
function setupNavigationDrawer() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const drawerOverlay = document.getElementById("drawer-overlay");

  if (mobileMenuBtn && drawerCloseBtn && drawerOverlay) {
    mobileMenuBtn.addEventListener("click", () => {
      drawerOverlay.classList.add("open");
    });

    drawerCloseBtn.addEventListener("click", () => {
      drawerOverlay.classList.remove("open");
    });

    drawerOverlay.addEventListener("click", (e) => {
      if (e.target === drawerOverlay) {
        drawerOverlay.classList.remove("open");
      }
    });
  }
}

// 5. HEADER DROPDOWNS
function setupHeaderDropdowns() {
  function setupDropdown(triggerId, menuId) {
    const trigger = document.getElementById(triggerId);
    const menu = document.getElementById(menuId);
    if (!trigger || !menu) return;

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelectorAll(".dropdown-menu-custom").forEach((otherMenu) => {
        if (otherMenu !== menu) otherMenu.classList.remove("show");
      });
      menu.classList.toggle("show");
    });
  }

  setupDropdown("help-dropdown", "help-menu");
  setupDropdown("language-dropdown", "language-menu");
  setupDropdown("ship-dropdown", "ship-menu");

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu-custom").forEach((menu) => {
      menu.classList.remove("show");
    });
  });

  // Language selectors
  const languageMenu = document.getElementById("language-menu");
  const selectedLang = document.getElementById("selected-lang");
  if (languageMenu && selectedLang) {
    languageMenu.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (btn) {
        selectedLang.textContent = btn.getAttribute("data-lang");
      }
    });
  }

  // Shipping destination flag selectors
  const shipMenu = document.getElementById("ship-menu");
  const currentFlag = document.getElementById("current-flag");
  if (shipMenu && currentFlag) {
    shipMenu.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (btn) {
        currentFlag.src = `./assets/assets/Layout1/Image/flags/${btn.getAttribute("data-flag")}`;
        currentFlag.alt = btn.getAttribute("data-country");
      }
    });
  }
}

// 6. JAVASCRIPT-BASED AUTOCOMPLETE SEARCH SUGGESTIONS
function setupSearchAutocomplete() {
  const searchInputs = [
    document.getElementById("header-search-input"),
    document.getElementById("mobile-search-input")
  ];

  const trendingQueries = [
    { text: "Smartphones", url: "products.html?category=electronics&q=Smartphones" },
    { text: "Sony Noise Canceling Headphones", url: "product-detail.html?id=1" },
    { text: "Vintage Leather Jacket", url: "product-detail.html?id=17" },
    { text: "Kitchen Stand Mixer", url: "product-detail.html?id=12" },
    { text: "Bedding Set Cotton", url: "products.html?category=interior&q=Bedding" }
  ];

  searchInputs.forEach(input => {
    if (!input) return;

    // Create Suggestion Box container
    const container = document.createElement("div");
    container.id = "search-suggestions-" + input.id;
    container.className = "absolute top-[102%] left-0 w-full bg-white border border-[#E3E8EE] rounded-lg shadow-lg z-50 p-4 hidden flex-col gap-3 text-sm";
    
    // Append to form or relative parent
    input.parentElement.classList.add("relative");
    input.parentElement.appendChild(container);

    // Show suggestions on focus
    input.addEventListener("focus", () => {
      updateSuggestions(input, container);
    });

    // Handle input query matching
    input.addEventListener("input", () => {
      updateSuggestions(input, container);
    });

    // Hide suggestions on click outside
    document.addEventListener("click", (e) => {
      if (!input.contains(e.target) && !container.contains(e.target)) {
        container.classList.add("hidden");
      }
    });
  });

  function updateSuggestions(input, container) {
    const value = input.value.trim().toLowerCase();
    container.innerHTML = "";
    container.classList.remove("hidden");

    if (value === "") {
      // Show Trending Searches when empty
      const title = document.createElement("div");
      title.className = "text-xs font-bold text-[#8B96A5] uppercase tracking-wider mb-1";
      title.textContent = "Trending Searches";
      container.appendChild(title);

      trendingQueries.forEach(item => {
        const row = document.createElement("a");
        row.href = item.url;
        row.className = "flex items-center gap-2 py-1.5 px-2 hover:bg-[#F7FAFC] rounded text-[#1C1C1C] transition-colors font-medium";
        row.innerHTML = `
          <svg class="w-4 h-4 text-[#8B96A5]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          <span>${item.text}</span>
        `;
        container.appendChild(row);
      });
    } else {
      // Filter matching products
      const matches = productsData.filter(p => p.name.toLowerCase().includes(value) || p.brand.toLowerCase().includes(value)).slice(0, 5);

      if (matches.length === 0) {
        container.innerHTML = `<div class="text-[#8B96A5] text-center py-2">No matching products found</div>`;
      } else {
        const title = document.createElement("div");
        title.className = "text-xs font-bold text-[#8B96A5] uppercase tracking-wider mb-1";
        title.textContent = "Suggested Products";
        container.appendChild(title);

        matches.forEach(p => {
          const cardLink = document.createElement("a");
          cardLink.href = `product-detail.html?id=${p.id}`;
          cardLink.className = "flex items-center gap-3 py-2 px-2 hover:bg-[#F7FAFC] rounded text-[#1C1C1C] transition-colors border-b border-[#F1F2F4] last:border-b-0";
          cardLink.innerHTML = `
            <img src="${p.image}" alt="${p.name}" class="w-8 h-8 object-contain shrink-0 bg-white p-0.5 rounded border border-[#E3E8EE]" />
            <div class="flex-grow min-w-0">
              <p class="font-semibold text-xs text-[#1C1C1C] truncate">${p.name}</p>
              <p class="text-[10px] text-[#8B96A5] capitalize">${p.category} • ${p.brand}</p>
            </div>
            <span class="text-xs font-bold text-[#127FFF]">$${p.price.toFixed(2)}</span>
          `;
          container.appendChild(cardLink);
        });
      }
    }
  }
}

// 7. PRODUCT LISTING PAGE FUNCTIONALITY
function initializeListingPage() {
  // Page state variables
  let currentCategory = "all";
  let searchKeyword = "";
  let selectedBrands = [];
  let selectedFeatures = [];
  let minPrice = null;
  let maxPrice = null;
  let minRating = 0;
  let sortBy = "featured";
  let viewMode = "grid";
  let currentPage = 1;
  const itemsPerPage = 6;

  // Listing elements
  const productsContainer = document.getElementById("products-container");
  const itemsFoundCount = document.getElementById("items-found-count");
  const currentCatDisplay = document.getElementById("current-cat-display");
  const breadcrumbCategory = document.getElementById("breadcrumb-category");
  const sortSelect = document.getElementById("sort-select");
  const viewGridBtn = document.getElementById("view-grid-btn");
  const viewListBtn = document.getElementById("view-list-btn");
  const priceMinInput = document.getElementById("price-min");
  const priceMaxInput = document.getElementById("price-max");
  const activeBadgesRow = document.getElementById("active-badges-row");
  const paginationContainer = document.getElementById("pagination-container");
  const loadMoreBtn = document.getElementById("load-more-btn");
  const headerSearchForm = document.getElementById("header-search-form");
  const headerSearchInput = document.getElementById("header-search-input");
  const headerCategorySelect = document.getElementById("header-category-select");
  const mobileSearchInput = document.getElementById("mobile-search-input");

  // VIEW CHANGERS (Grid vs List)
  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener("click", () => {
      viewMode = "grid";
      viewGridBtn.classList.add("bg-[#E5F1FF]");
      viewGridBtn.querySelector("svg").classList.add("text-[#127FFF]");
      viewGridBtn.querySelector("svg").classList.remove("text-[#8B96A5]");
      
      viewListBtn.classList.remove("bg-[#E5F1FF]");
      viewListBtn.querySelector("svg").classList.remove("text-[#127FFF]");
      viewListBtn.querySelector("svg").classList.add("text-[#8B96A5]");
      render();
    });

    viewListBtn.addEventListener("click", () => {
      viewMode = "list";
      viewListBtn.classList.add("bg-[#E5F1FF]");
      viewListBtn.querySelector("svg").classList.add("text-[#127FFF]");
      viewListBtn.querySelector("svg").classList.remove("text-[#8B96A5]");
      
      viewGridBtn.classList.remove("bg-[#E5F1FF]");
      viewGridBtn.querySelector("svg").classList.remove("text-[#127FFF]");
      viewGridBtn.querySelector("svg").classList.add("text-[#8B96A5]");
      render();
    });
  }

  // SORT
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortBy = e.target.value;
      render();
    });
  }

  // BRAND CHECKBOXES
  document.querySelectorAll(".brand-checkbox").forEach(cb => {
    cb.addEventListener("change", () => {
      selectedBrands = Array.from(document.querySelectorAll(".brand-checkbox:checked")).map(el => el.value);
      currentPage = 1;
      render();
    });
  });

  // FEATURE CHECKBOXES
  document.querySelectorAll(".feature-checkbox").forEach(cb => {
    cb.addEventListener("change", () => {
      selectedFeatures = Array.from(document.querySelectorAll(".feature-checkbox:checked")).map(el => el.value);
      currentPage = 1;
      render();
    });
  });

  // RATING RADIOS
  document.querySelectorAll(".rating-radio").forEach(rad => {
    rad.addEventListener("change", (e) => {
      minRating = parseFloat(e.target.value);
      currentPage = 1;
      render();
    });
  });

  // CATEGORY ACCORDION CLICKS
  window.setCategoryFilter = function(category) {
    currentCategory = category;
    currentPage = 1;
    
    document.querySelectorAll("#category-filter button").forEach(btn => {
      btn.classList.remove("font-semibold", "bg-[#E5F1FF]", "text-[#127FFF]");
    });
    
    const activeBtn = document.getElementById("cat-" + category);
    if (activeBtn) {
      activeBtn.classList.add("font-semibold", "bg-[#E5F1FF]", "text-[#127FFF]");
    }

    if (headerCategorySelect) {
      headerCategorySelect.value = category === "all" ? "" : category.charAt(0).toUpperCase() + category.slice(1);
    }
    render();
  };


  // PRICE RANGE APPLIER
  window.applyPriceFilter = function() {
    minPrice = parseFloat(priceMinInput.value) || null;
    maxPrice = parseFloat(priceMaxInput.value) || null;
    currentPage = 1;
    render();
  };

  // RESET
  window.clearAllFilters = function() {
    currentCategory = "all";
    searchKeyword = "";
    selectedBrands = [];
    selectedFeatures = [];
    minPrice = null;
    maxPrice = null;
    minRating = 0;
    sortBy = "featured";
    currentPage = 1;

    if (priceMinInput) priceMinInput.value = "";
    if (priceMaxInput) priceMaxInput.value = "";
    if (headerSearchInput) headerSearchInput.value = "";
    if (mobileSearchInput) mobileSearchInput.value = "";
    if (headerCategorySelect) headerCategorySelect.value = "";
    if (sortSelect) sortSelect.value = "featured";

    document.querySelectorAll(".brand-checkbox").forEach(cb => cb.checked = false);
    document.querySelectorAll(".feature-checkbox").forEach(cb => cb.checked = false);
    const allRatingRadio = document.querySelector(".rating-radio[value='0']");
    if (allRatingRadio) allRatingRadio.checked = true;

    document.querySelectorAll("#category-filter button").forEach(btn => {
      btn.classList.remove("font-semibold", "bg-[#E5F1FF]", "text-[#127FFF]");
    });
    const catAll = document.getElementById("cat-all");
    if (catAll) catAll.classList.add("font-semibold", "bg-[#E5F1FF]", "text-[#127FFF]");

    render();
  };

  // LOAD MORE IMPLEMENTATION
  window.loadMoreProducts = function() {
    const list = getFiltered();
    const totalPages = Math.ceil(list.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      const start = (currentPage - 1) * itemsPerPage;
      const sliced = list.slice(start, start + itemsPerPage);
      appendItems(sliced);
    }
  };

  // FILTER CORE
  function getFiltered() {
    let list = [...productsData];
    if (currentCategory !== "all") {
      list = list.filter(p => p.category === currentCategory);
    }
    if (searchKeyword) {
      const kw = searchKeyword.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(kw) || p.description.toLowerCase().includes(kw));
    }
    if (selectedBrands.length > 0) {
      list = list.filter(p => selectedBrands.includes(p.brand));
    }
    if (selectedFeatures.length > 0) {
      list = list.filter(p => p.features && p.features.some(f => selectedFeatures.includes(f)));
    }
    if (minPrice !== null) {
      list = list.filter(p => p.price >= minPrice);
    }
    if (maxPrice !== null) {
      list = list.filter(p => p.price <= maxPrice);
    }
    if (minRating > 0) {
      list = list.filter(p => p.rating >= minRating);
    }
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }
    return list;
  }

  // ACTIVE PILLS
  function renderBadges() {
    if (!activeBadgesRow) return;
    activeBadgesRow.innerHTML = "";
    
    const makePill = (text, removeFn) => {
      const p = document.createElement("div");
      p.className = "flex items-center gap-1 bg-white border border-[#E3E8EE] px-2.5 py-1 rounded-full text-[#1C1C1C] hover:border-[#127FFF] transition-colors";
      p.innerHTML = `<span>${text}</span><button class="text-[#8B96A5] hover:text-red-500 font-bold ml-1 cursor-pointer">×</button>`;
      p.querySelector("button").addEventListener("click", removeFn);
      activeBadgesRow.appendChild(p);
    };

    if (currentCategory !== "all") {
      makePill(`Category: ${currentCategory}`, () => setCategoryFilter("all"));
    }
    if (searchKeyword) {
      makePill(`Search: "${searchKeyword}"`, () => {
        searchKeyword = "";
        headerSearchInput.value = "";
        mobileSearchInput.value = "";
        render();
      });
    }
    selectedBrands.forEach(b => {
      makePill(`Brand: ${b}`, () => {
        const c = Array.from(document.querySelectorAll(".brand-checkbox")).find(el => el.value === b);
        if (c) c.click();
      });
    });
    selectedFeatures.forEach(f => {
      makePill(`Feature: ${f}`, () => {
        const c = Array.from(document.querySelectorAll(".feature-checkbox")).find(el => el.value === f);
        if (c) c.click();
      });
    });
    if (minPrice !== null || maxPrice !== null) {
      let t = "";
      if (minPrice !== null && maxPrice !== null) t = `$${minPrice} - $${maxPrice}`;
      else if (minPrice !== null) t = `> $${minPrice}`;
      else if (maxPrice !== null) t = `< $${maxPrice}`;
      makePill(t, () => {
        minPrice = null;
        maxPrice = null;
        priceMinInput.value = "";
        priceMaxInput.value = "";
        render();
      });
    }
    if (minRating > 0) {
      makePill(`Rating: ${minRating}★+`, () => {
        const rad = document.querySelector(".rating-radio[value='0']");
        if (rad) rad.click();
      });
    }
  }

  // HTML BUILD FOR CARDS
  function createCardHTML(p) {
    const isFav = favorites.includes(p.id);
    const hasOriginalPrice = p.originalPrice !== null;
    const starsHtml = "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
    
    if (viewMode === "grid") {
      return `
        <div class="bg-white border border-[#E3E8EE] rounded-lg p-4 flex flex-col justify-between hover:shadow-md transition-shadow duration-200 group relative">
          <button 
            onclick="toggleFavoriteListing(${p.id}, event)" 
            class="absolute top-3 right-3 w-8 h-8 rounded-full border border-[#E3E8EE] flex items-center justify-center bg-white hover:bg-[#FFE3E3] transition-colors shadow-sm cursor-pointer z-10"
            aria-label="Add to Wishlist"
          >
            <svg class="w-[18px] h-[18px] ${isFav ? 'text-red-500 fill-current' : 'text-[#8B96A5]'}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </button>

          <a href="product-detail.html?id=${p.id}" class="h-[150px] w-full flex items-center justify-center bg-white mb-3">
            <img src="${p.image}" alt="${p.name}" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200" />
          </a>

          <div class="flex flex-col gap-1.5 flex-grow justify-end">
            <span class="text-xs text-[#8B96A5] uppercase tracking-wider font-semibold">${p.brand}</span>
            <a href="product-detail.html?id=${p.id}" class="text-[#1C1C1C] text-sm font-medium leading-snug line-clamp-2 h-[40px] hover:text-[#127FFF] cursor-pointer" title="${p.name}">${p.name}</a>
            
            <div class="flex items-baseline gap-2 mt-1">
              <span class="text-[#1C1C1C] font-bold text-base">$${p.price.toFixed(2)}</span>
              ${hasOriginalPrice ? `<span class="text-[#8B96A5] text-xs line-through">$${p.originalPrice.toFixed(2)}</span>` : ""}
            </div>

            <div class="flex items-center gap-1.5 mt-0.5">
              <span class="star-rating text-sm text-[#ffb200]">${starsHtml}</span>
              <span class="text-xs text-[#8B96A5] font-semibold">${p.rating} (${p.reviewsCount})</span>
            </div>
            
            <span class="text-xs text-[#55BD90] font-medium mt-1">${p.shipping}</span>

            <a 
              href="product-detail.html?id=${p.id}"
              class="bg-[#127FFF] text-white py-2 rounded-md font-semibold text-sm hover:bg-[#0067FF] transition-all hover:scale-[1.02] active:scale-[0.98] duration-150 text-center shadow-sm cursor-pointer block w-full mt-2 flex items-center justify-center"
            >
              Buy Now
            </a>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="bg-white border border-[#E3E8EE] rounded-lg p-5 flex flex-col md:flex-row gap-5 hover:shadow-md transition-shadow duration-200 group relative w-full">
          <div class="w-full md:w-[180px] h-[150px] shrink-0 bg-white flex items-center justify-center relative rounded border border-[#F1F2F4]">
            <img src="${p.image}" alt="${p.name}" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200" />
          </div>

          <div class="flex-grow flex flex-col md:flex-row justify-between gap-4">
            <div class="flex flex-col gap-2 max-w-[480px]">
              <span class="text-xs text-[#8B96A5] uppercase tracking-wider font-semibold">${p.brand}</span>
              <a href="product-detail.html?id=${p.id}" class="text-[#1C1C1C] text-base font-bold leading-snug hover:text-[#127FFF] cursor-pointer">${p.name}</a>
              
              <div class="flex items-center gap-2">
                <span class="star-rating text-sm text-[#ffb200]">${starsHtml}</span>
                <span class="text-xs text-[#8B96A5] font-semibold">${p.rating} (${p.reviewsCount} reviews)</span>
              </div>

              <p class="text-xs text-[#505050] leading-relaxed line-clamp-3">${p.description}</p>
              
              <div class="flex gap-2 mt-1">
                ${p.features.map(f => `<span class="bg-[#F1F2F4] text-[#505050] text-[10px] font-semibold px-2 py-0.5 rounded">${f}</span>`).join('')}
              </div>
            </div>

            <div class="md:w-[150px] flex flex-col md:items-end justify-between border-t md:border-t-0 md:border-l border-[#E3E8EE] pt-4 md:pt-0 md:pl-5 shrink-0">
              <div class="flex flex-col md:items-end gap-1">
                <span class="text-[#1C1C1C] font-bold text-xl">$${p.price.toFixed(2)}</span>
                ${hasOriginalPrice ? `<span class="text-[#8B96A5] text-sm line-through">$${p.originalPrice.toFixed(2)}</span>` : ""}
                <span class="text-xs text-[#55BD90] font-medium mt-1">${p.shipping}</span>
              </div>

              <div class="flex md:flex-col gap-3 w-full mt-4 md:mt-0">
                <a 
                  href="product-detail.html?id=${p.id}"
                  class="flex-grow md:flex-grow-0 bg-[#127FFF] text-white py-2 px-4 rounded-md font-semibold text-xs hover:bg-[#0067FF] transition-all hover:scale-[1.02] active:scale-[0.98] duration-150 text-center shadow-sm cursor-pointer flex items-center justify-center"
                >
                  Buy Now
                </a>
                <button 
                  onclick="toggleFavoriteListing(${p.id}, event)"
                  class="flex items-center justify-center gap-2 border border-[#E3E8EE] bg-white text-[#127FFF] hover:bg-[#FFE3E3] py-2 px-3 rounded-md text-xs font-semibold transition-colors cursor-pointer"
                >
                  <svg class="w-4 h-4 ${isFav ? 'text-red-500 fill-current' : 'text-[#127FFF]'}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <span>${isFav ? 'Favorited' : 'Save'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }

  // RENDER PRODUCT TILES
  function render() {
    const list = getFiltered();
    
    if (itemsFoundCount) itemsFoundCount.textContent = list.length;
    if (currentCatDisplay) currentCatDisplay.textContent = currentCategory === "all" ? "All Products" : currentCategory;
    if (breadcrumbCategory) breadcrumbCategory.textContent = currentCategory === "all" ? "All Products" : currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);

    renderBadges();

    if (list.length === 0) {
      productsContainer.className = "flex flex-col items-center justify-center py-12 bg-white border border-[#E3E8EE] rounded-lg w-full";
      productsContainer.innerHTML = `
        <svg class="w-16 h-16 text-[#8B96A5] mb-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <h3 class="text-[#1C1C1C] font-bold text-lg mb-1">No products found</h3>
        <p class="text-sm text-[#8B96A5] mb-4">Try clearing filters or checking your search keywords.</p>
        <button onclick="clearAllFilters()" class="bg-[#127FFF] text-white font-semibold text-sm px-6 py-2.5 rounded-md hover:bg-[#0067FF] transition-colors cursor-pointer">Clear all filters</button>
      `;
      if (paginationContainer) paginationContainer.innerHTML = "";
      if (loadMoreBtn) loadMoreBtn.classList.add("hidden");
      return;
    }

    const totalPages = Math.ceil(list.length / itemsPerPage);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * itemsPerPage;
    const sliced = list.slice(start, start + itemsPerPage);

    if (viewMode === "grid") {
      productsContainer.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full";
    } else {
      productsContainer.className = "flex flex-col gap-4 w-full";
    }

    productsContainer.innerHTML = "";
    appendItems(sliced);

    renderPagination(totalPages);
  }

  function appendItems(items) {
    items.forEach(p => {
      const temp = document.createElement("div");
      temp.innerHTML = createCardHTML(p);
      productsContainer.appendChild(temp.firstElementChild);
    });
  }

  // RENDER PAGINATOR
  function renderPagination(totalPages) {
    if (!paginationContainer) return;
    paginationContainer.innerHTML = "";

    if (totalPages <= 1) {
      if (loadMoreBtn) loadMoreBtn.classList.add("hidden");
      return;
    } else {
      if (loadMoreBtn) loadMoreBtn.classList.remove("hidden");
    }

    // Prev
    const prev = document.createElement("button");
    prev.className = `p-2 border border-[#E3E8EE] rounded-md transition-colors flex items-center justify-center bg-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F7FAFC] cursor-pointer'}`;
    prev.innerHTML = `<svg class="w-4 h-4 text-[#1C1C1C]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>`;
    if (currentPage > 1) {
      prev.addEventListener("click", () => {
        currentPage--;
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
    paginationContainer.appendChild(prev);

    // Numbers
    for (let i = 1; i <= totalPages; i++) {
      const numBtn = document.createElement("button");
      const active = currentPage === i;
      numBtn.className = `w-9 h-9 border rounded-md font-semibold text-sm flex items-center justify-center transition-all cursor-pointer ${active ? 'bg-[#127FFF] border-[#127FFF] text-white shadow-sm' : 'bg-white border-[#E3E8EE] text-[#1C1C1C] hover:bg-[#F7FAFC]'}`;
      numBtn.textContent = i;
      numBtn.addEventListener("click", () => {
        currentPage = i;
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      paginationContainer.appendChild(numBtn);
    }

    // Next
    const next = document.createElement("button");
    next.className = `p-2 border border-[#E3E8EE] rounded-md transition-colors flex items-center justify-center bg-white ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#F7FAFC] cursor-pointer'}`;
    next.innerHTML = `<svg class="w-4 h-4 text-[#1C1C1C]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>`;
    if (currentPage < totalPages) {
      next.addEventListener("click", () => {
        currentPage++;
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
    paginationContainer.appendChild(next);
  }

  // FAVORITE INTERACTIVE ACTION IN LISTING
  window.toggleFavoriteListing = function(id, event) {
    event.preventDefault();
    event.stopPropagation();
    const idx = favorites.indexOf(id);
    if (idx > -1) {
      favorites.splice(idx, 1);
    } else {
      favorites.push(id);
    }
    localStorage.setItem("brandstore_favorites", JSON.stringify(favorites));
    render();
  };

  function updateCategoryCountBadges() {
    const countAll = document.getElementById("count-all");
    const countElectronics = document.getElementById("count-electronics");
    const countClothing = document.getElementById("count-clothing");
    const countInterior = document.getElementById("count-interior");

    if (countAll) countAll.textContent = productsData.length;
    if (countElectronics) countElectronics.textContent = productsData.filter(p => p.category === "electronics").length;
    if (countClothing) countClothing.textContent = productsData.filter(p => p.category === "clothing").length;
    if (countInterior) countInterior.textContent = productsData.filter(p => p.category === "interior").length;
  }

  // URL Sync
  const urlParams = new URLSearchParams(window.location.search);
  const urlCat = urlParams.get("category");
  const urlSearch = urlParams.get("q");
  const urlHeaderCat = urlParams.get("categories");

  if (urlCat) {
    currentCategory = urlCat.toLowerCase();
  } else if (urlHeaderCat) {
    currentCategory = urlHeaderCat.toLowerCase();
    if (headerCategorySelect) headerCategorySelect.value = urlHeaderCat;
  }

  if (urlSearch) {
    searchKeyword = urlSearch;
    if (headerSearchInput) headerSearchInput.value = urlSearch;
    if (mobileSearchInput) mobileSearchInput.value = urlSearch;
  }

  updateCategoryCountBadges();
  setCategoryFilter(currentCategory);
}

// 8. PRODUCT DETAILS PAGE FUNCTIONALITY
function initializeDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id")) || 1; // Default to Sony WH-1000XM4

  const product = productsData.find(p => p.id === productId);
  if (!product) {
    document.getElementById("product-detail-container").innerHTML = `
      <div class="text-center py-16 bg-white border border-[#E3E8EE] rounded-lg">
        <h3 class="text-lg font-bold text-[#1C1C1C]">Product not found</h3>
        <a href="products.html" class="text-[#127FFF] text-sm font-semibold hover:underline mt-2 inline-block">Go back to products</a>
      </div>
    `;
    return;
  }

  // RENDER PRODUCT DETAIL MARKUP
  renderProductDetails(product);

  // RENDER DYNAMIC REVIEWS
  renderProductReviews(product.id);

  // RENDER RELATED PRODUCTS
  renderRelatedProducts(product);
}

function renderProductDetails(p) {
  const isFav = favorites.includes(p.id);
  const starsHtml = "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
  const hasOriginalPrice = p.originalPrice !== null;
  const discountPercent = hasOriginalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;

  // Breadcrumb category sync
  const breadcrumb = document.getElementById("breadcrumb-category");
  if (breadcrumb) {
    breadcrumb.textContent = p.category.charAt(0).toUpperCase() + p.category.slice(1);
    breadcrumb.href = `products.html?category=${p.category}`;
  }
  const breadcrumbName = document.getElementById("breadcrumb-product-name");
  if (breadcrumbName) {
    breadcrumbName.textContent = p.name;
  }

  // Build the details panel
  const container = document.getElementById("product-detail-container");
  container.innerHTML = `
    <!-- Desktop Grid: Left Image gallery, Right specifications purchase panel -->
    <div class="flex flex-col lg:flex-row gap-8 bg-white border border-[#E3E8EE] rounded-lg p-5 md:p-8">
      
      <!-- Left side: Images gallery -->
      <div class="flex-grow lg:w-[48%] flex flex-col gap-4">
        
        <!-- Large image preview container -->
        <div class="border border-[#E3E8EE] rounded-lg p-6 bg-white flex items-center justify-center h-[320px] md:h-[400px] relative overflow-hidden group">
          <img 
            id="main-preview-image" 
            src="${p.image}" 
            alt="${p.name}" 
            class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110" 
          />
          <span class="absolute top-3 left-3 bg-[#FFE3E3] text-[#EB5757] text-xs font-bold px-2 py-0.5 rounded-full ${hasOriginalPrice ? '' : 'hidden'}">-${discountPercent}%</span>
        </div>

        <!-- Thumbnail list gallery -->
        <div class="flex gap-3 justify-center">
          <button onclick="changeActiveImage('${p.image}', this)" class="w-[60px] h-[60px] md:w-[76px] md:h-[76px] border-2 border-[#127FFF] rounded-lg p-2 bg-white flex items-center justify-center cursor-pointer hover:border-[#127FFF] transition-colors thumbnail-btn">
            <img src="${p.image}" alt="View 1" class="max-h-full object-contain" />
          </button>
          <button onclick="changeActiveImage('${p.image}', this)" class="w-[60px] h-[60px] md:w-[76px] md:h-[76px] border border-[#E3E8EE] rounded-lg p-2 bg-white flex items-center justify-center cursor-pointer hover:border-[#127FFF] transition-colors thumbnail-btn">
            <img src="${p.image}" alt="View 2" class="max-h-full object-contain opacity-80" />
          </button>
          <button onclick="changeActiveImage('${p.image}', this)" class="w-[60px] h-[60px] md:w-[76px] md:h-[76px] border border-[#E3E8EE] rounded-lg p-2 bg-white flex items-center justify-center cursor-pointer hover:border-[#127FFF] transition-colors thumbnail-btn">
            <img src="${p.image}" alt="View 3" class="max-h-full object-contain opacity-60" />
          </button>
        </div>
      </div>

      <!-- Right side: Specifications and CTAs -->
      <div class="flex-grow lg:w-[52%] flex flex-col gap-4">
        
        <!-- Category & Brand tag -->
        <div class="flex items-center gap-2">
          <span class="bg-[#E5F1FF] text-[#127FFF] text-xs font-bold uppercase px-3 py-1 rounded-md tracking-wide capitalize">${p.category}</span>
          <span class="text-sm font-semibold text-[#8B96A5]">Brand: <strong class="text-[#1C1C1C]">${p.brand}</strong></span>
        </div>

        <!-- Title -->
        <h1 class="text-xl md:text-2xl font-bold text-[#1C1C1C] leading-snug">${p.name}</h1>

        <!-- Rating review count link -->
        <div class="flex items-center gap-2 border-b border-[#F1F2F4] pb-3">
          <span class="star-rating text-base md:text-lg text-[#ffb200]">${starsHtml}</span>
          <span class="text-sm font-bold text-[#FFB200]">${p.rating}</span>
          <span class="text-xs text-[#8B96A5] font-semibold">•</span>
          <a href="#reviews-section" class="text-xs text-[#127FFF] font-semibold hover:underline">${p.reviewsCount} Customer Reviews</a>
          <span class="text-xs text-[#8B96A5] font-semibold">•</span>
          <span class="text-xs text-[#55BD90] font-medium flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
            In Stock
          </span>
        </div>

        <!-- Pricing Card -->
        <div class="bg-[#F7FAFC] border border-[#E3E8EE] rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div>
            <div class="flex items-baseline gap-3">
              <span class="text-2xl md:text-3xl font-bold text-[#1C1C1C]">$${p.price.toFixed(2)}</span>
              ${hasOriginalPrice ? `<span class="text-sm text-[#8B96A5] line-through font-semibold">$${p.originalPrice.toFixed(2)}</span>` : ""}
            </div>
            <p class="text-xs text-[#8B96A5] mt-1">VAT included. Local shipping calculated at checkout.</p>
          </div>
          <div class="bg-white border border-[#E3E8EE] rounded px-3 py-1.5 text-center text-xs font-semibold text-[#505050] shadow-sm">
            <span class="text-[#EB5757] font-bold">Hot Promotion</span><br/>
            ${p.shipping}
          </div>
        </div>

        <!-- Description Paragraph -->
        <p class="text-sm text-[#505050] leading-relaxed">${p.description} This item undergoes strict factory certifications and quality assurance tests before shipping to guarantee perfect retail shapes.</p>

        <!-- Specifications list table -->
        <div class="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[#F1F2F4] pt-3 text-sm">
          <div class="flex gap-2"><span class="text-[#8B96A5] w-20">Type:</span><span class="text-[#505050] font-medium capitalize">${p.category}</span></div>
          <div class="flex gap-2"><span class="text-[#8B96A5] w-20">Materials:</span><span class="text-[#505050] font-medium">${p.features.join(', ') || 'N/A'}</span></div>
          <div class="flex gap-2"><span class="text-[#8B96A5] w-20">Seller:</span><span class="text-[#127FFF] font-semibold hover:underline cursor-pointer">BrandStore LLC</span></div>
          <div class="flex gap-2"><span class="text-[#8B96A5] w-20">Shipping:</span><span class="text-[#55BD90] font-medium">Worldwide</span></div>
        </div>

        <!-- OPTIONS VARIANT DROP-DOWN SELECTOR -->
        <div class="flex flex-col gap-1.5 border-t border-[#F1F2F4] pt-3">
          <label class="text-xs font-bold text-[#8B96A5] uppercase tracking-wider block" for="variant-select">
            ${p.category === 'clothing' ? 'Select Clothing Size' : 'Select Product Version'}
          </label>
          <div class="relative w-full max-w-[280px]">
            <select
              id="variant-select"
              class="w-full border border-[#E3E8EE] rounded-md px-3 py-2 text-sm text-[#1C1C1C] outline-none cursor-pointer bg-white font-medium"
            >
              ${p.sizes ? p.sizes.map(size => `<option value="${size}">${size}</option>`).join('') : '<option value="Standard">Standard Version</option>'}
            </select>
          </div>
        </div>

        <!-- QUANTITY STEPPER & ACTION CTA BUTTONS -->
        <div class="flex flex-wrap items-center gap-4 border-t border-[#F1F2F4] pt-4 mt-1">
          <!-- Stepper quantity control -->
          <div class="flex items-center border border-[#E3E8EE] rounded-md overflow-hidden bg-[#F7FAFC] h-[42px] shrink-0">
            <button 
              onclick="adjustQuantity(-1)" 
              class="px-3.5 h-full text-lg font-bold text-[#8B96A5] hover:bg-[#E3E8EE] hover:text-[#1c1c1c] transition-colors cursor-pointer"
            >-</button>
            <input 
              type="number" 
              id="product-qty" 
              value="1" 
              min="1" 
              class="w-12 h-full text-center bg-white text-sm font-bold text-[#1C1C1C] outline-none border-none" 
            />
            <button 
              onclick="adjustQuantity(1)" 
              class="px-3.5 h-full text-lg font-bold text-[#8B96A5] hover:bg-[#E3E8EE] hover:text-[#1c1c1c] transition-colors cursor-pointer"
            >+</button>
          </div>

          <!-- Add to Cart CTA -->
          <button
            onclick="addToCartDetails(${p.id})"
            class="flex-grow md:flex-grow-0 bg-[#127FFF] hover:bg-[#0067FF] text-white text-sm font-bold py-2.5 px-8 rounded-md transition-all hover:scale-[1.02] active:scale-[0.98] duration-150 h-[42px] flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <span>Add to Cart</span>
          </button>

          <!-- Buy Now CTA -->
          <button
            onclick="buyNowDetails(${p.id})"
            class="flex-grow md:flex-grow-0 bg-[#55BD90] hover:bg-[#3FA679] text-white text-sm font-bold py-2.5 px-8 rounded-md transition-all hover:scale-[1.02] active:scale-[0.98] duration-150 h-[42px] flex items-center justify-center shadow-sm cursor-pointer"
          >
            Buy Now
          </button>

          <!-- Wishlist Heart Button -->
          <button 
            onclick="toggleFavoriteDetails(${p.id}, this)"
            class="w-10 h-10 border border-[#E3E8EE] bg-white rounded-md flex items-center justify-center hover:bg-[#FFE3E3] transition-colors cursor-pointer shadow-sm shrink-0"
            aria-label="Add to Wishlist"
          >
            <svg class="w-5 h-5 ${isFav ? 'text-red-500 fill-current' : 'text-[#127FFF]'}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// 8A. QUANTITY STEPPER CONTROL
window.adjustQuantity = function(amount) {
  const qtyInput = document.getElementById("product-qty");
  if (qtyInput) {
    let val = parseInt(qtyInput.value) || 1;
    val += amount;
    if (val < 1) val = 1;
    qtyInput.value = val;
  }
};

// 8B. ACTIVE THUMBNAIL GALLERY SWITCHER
window.changeActiveImage = function(imgSrc, btnElement) {
  const mainImg = document.getElementById("main-preview-image");
  if (mainImg) {
    mainImg.src = imgSrc;
  }

  // Active border styling toggle
  document.querySelectorAll(".thumbnail-btn").forEach(btn => {
    btn.className = btn.className.replace("border-[#127FFF] border-2", "border-[#E3E8EE] border");
    btn.querySelector("img").classList.add("opacity-80");
  });
  
  btnElement.className = btnElement.className.replace("border-[#E3E8EE] border", "border-[#127FFF] border-2");
  btnElement.querySelector("img").classList.remove("opacity-80", "opacity-60");
};

// 8C. DETAILS PAGE CART LOGIC
window.addToCartDetails = function(id) {
  const prod = productsData.find(p => p.id === id);
  const qtyInput = document.getElementById("product-qty");
  const variantSelect = document.getElementById("variant-select");
  
  if (prod && qtyInput) {
    const qty = parseInt(qtyInput.value) || 1;
    const variant = variantSelect ? variantSelect.value : "Standard";
    
    cartCount += qty;
    updateCartBadge();
    
    showNotification(`Added ${qty}x "${prod.name}" (${variant}) to cart!`);
  }
};

window.buyNowDetails = function(id) {
  const prod = productsData.find(p => p.id === id);
  const variantSelect = document.getElementById("variant-select");
  if (prod) {
    const variant = variantSelect ? variantSelect.value : "Standard";
    showNotification(`Proceeding to checkout with "${prod.name}" (${variant}).`);
  }
};

// 8D. WISHLIST TOGGLE IN DETAILS
window.toggleFavoriteDetails = function(id, btnElement) {
  const idx = favorites.indexOf(id);
  const heartSvg = btnElement.querySelector("svg");
  
  if (idx > -1) {
    favorites.splice(idx, 1);
    if (heartSvg) {
      heartSvg.classList.remove("text-red-500", "fill-current");
      heartSvg.classList.add("text-[#127FFF]");
    }
  } else {
    favorites.push(id);
    if (heartSvg) {
      heartSvg.classList.add("text-red-500", "fill-current");
      heartSvg.classList.remove("text-[#127FFF]");
    }
  }
  localStorage.setItem("brandstore_favorites", JSON.stringify(favorites));
};

// 9. CUSTOMER REVIEWS RENDERING
function renderProductReviews(id) {
  const reviewsList = document.getElementById("reviews-list");
  if (!reviewsList) return;

  const reviews = reviewsDatabase[id] || [
    { name: "John Doe", rating: 5, date: "June 1, 2026", title: "Satisfied customer", body: "Excellent packaging and speed. Very high durability build quality.", helpful: 4 }
  ];

  // Re-calculate Stats
  const total = reviews.length;
  const avg = (reviews.reduce((acc, curr) => acc + curr.rating, 0) / total).toFixed(1);
  const starsHtml = "★".repeat(Math.round(parseFloat(avg))) + "☆".repeat(5 - Math.round(parseFloat(avg)));

  const count5 = reviews.filter(r => r.rating === 5).length;
  const count4 = reviews.filter(r => r.rating === 4).length;
  const count3 = reviews.filter(r => r.rating === 3).length;
  const count2 = reviews.filter(r => r.rating === 2).length;
  const count1 = reviews.filter(r => r.rating === 1).length;

  const pct5 = Math.round((count5 / total) * 100);
  const pct4 = Math.round((count4 / total) * 100);
  const pct3 = Math.round((count3 / total) * 100);
  const pct2 = Math.round((count2 / total) * 100);
  const pct1 = Math.round((count1 / total) * 100);

  // Set reviews counter headers
  const totalReviewsLabel = document.getElementById("total-reviews-count");
  if (totalReviewsLabel) totalReviewsLabel.textContent = total;

  const reviewsHeader = document.getElementById("reviews-score-header");
  if (reviewsHeader) {
    reviewsHeader.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="text-4xl font-extrabold text-[#1C1C1C]">${avg}</span>
        <div>
          <span class="star-rating text-lg">${starsHtml}</span>
          <p class="text-xs text-[#8B96A5] font-semibold mt-0.5">${total} Reviews overall</p>
        </div>
      </div>
    `;
  }

  // Draw rating progress charts
  const ratingProgress = document.getElementById("rating-progress-bars");
  if (ratingProgress) {
    ratingProgress.innerHTML = `
      <div class="flex flex-col gap-2">
        ${[5, 4, 3, 2, 1].map(num => {
          const pct = num === 5 ? pct5 : num === 4 ? pct4 : num === 3 ? pct3 : num === 2 ? pct2 : pct1;
          const count = num === 5 ? count5 : num === 4 ? count4 : num === 3 ? count3 : num === 2 ? count2 : count1;
          return `
            <div class="flex items-center gap-2 text-xs">
              <span class="w-8 font-semibold text-[#505050] text-right">${num} Star</span>
              <div class="flex-grow bg-[#E3E8EE] h-2.5 rounded-full overflow-hidden">
                <div class="bg-[#FFB200] h-full" style="width: ${pct}%"></div>
              </div>
              <span class="w-8 text-[#8B96A5] font-semibold text-right">${pct}%</span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Draw individual review cards
  reviewsList.innerHTML = "";
  reviews.forEach((r, index) => {
    const stars = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);
    const card = document.createElement("div");
    card.className = "border-b border-[#E3E8EE] py-5 flex flex-col gap-2 last:border-b-0";
    card.innerHTML = `
      <div class="flex justify-between items-center gap-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-[#E5F1FF] text-[#127FFF] flex items-center justify-center font-bold text-xs">
            ${r.name.charAt(0)}
          </div>
          <div>
            <p class="text-sm font-bold text-[#1C1C1C]">${r.name}</p>
            <p class="text-[10px] text-[#8B96A5] font-semibold">${r.date}</p>
          </div>
        </div>
        <span class="star-rating text-xs">${stars}</span>
      </div>
      <h5 class="text-sm font-bold text-[#1C1C1C] mt-1">${r.title}</h5>
      <p class="text-xs text-[#505050] leading-relaxed">${r.body}</p>
      <div class="flex items-center gap-3 mt-1">
        <span class="text-[10px] text-[#8B96A5] font-semibold">Was this review helpful?</span>
        <button 
          onclick="helpfulReviewClick(${id}, ${index}, this)" 
          class="bg-white border border-[#E3E8EE] hover:bg-[#F7FAFC] text-[10px] font-bold text-[#127FFF] py-1 px-2.5 rounded transition-colors cursor-pointer flex items-center gap-1 shadow-sm"
        >
          <span>Yes</span>
          <span class="text-[#8B96A5]">(${r.helpful})</span>
        </button>
      </div>
    `;
    reviewsList.appendChild(card);
  });
}

// SUBMIT NEW REVIEW
window.submitUserReview = function(event) {
  event.preventDefault();

  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id")) || 1;

  const nameInput = document.getElementById("rev-name");
  const titleInput = document.getElementById("rev-title");
  const bodyText = document.getElementById("rev-body");
  const starsSelect = document.getElementById("rev-rating");

  if (!nameInput.value.trim() || !titleInput.value.trim() || !bodyText.value.trim()) {
    alert("Please fill in all review inputs.");
    return;
  }

  // Create new review object
  const newReview = {
    name: nameInput.value.trim(),
    rating: parseInt(starsSelect.value) || 5,
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    title: titleInput.value.trim(),
    body: bodyText.value.trim(),
    helpful: 0
  };

  // Push to review database
  if (!reviewsDatabase[id]) {
    reviewsDatabase[id] = [];
  }
  reviewsDatabase[id].unshift(newReview);

  // Clear inputs
  nameInput.value = "";
  titleInput.value = "";
  bodyText.value = "";
  starsSelect.value = "5";

  // Re-render
  renderProductReviews(id);
  showNotification("Thank you! Your review has been submitted.");
};

window.helpfulReviewClick = function(productId, reviewIndex, btnElement) {
  const reviews = reviewsDatabase[productId];
  if (reviews && reviews[reviewIndex]) {
    reviews[reviewIndex].helpful++;
    btnElement.querySelector("span:last-child").textContent = `(${reviews[reviewIndex].helpful})`;
    btnElement.disabled = true;
    btnElement.classList.add("opacity-50", "cursor-not-allowed");
    showNotification("Marked review as helpful!");
  }
};

// 10. RELATED PRODUCTS GRID
function renderRelatedProducts(currentProd) {
  const relatedGrid = document.getElementById("related-products-grid");
  if (!relatedGrid) return;

  // Filter 4 products from same category, excluding current product
  let matches = productsData.filter(p => p.category === currentProd.category && p.id !== currentProd.id).slice(0, 4);

  // If not enough items in same category, backfill with others
  if (matches.length < 4) {
    const extra = productsData.filter(p => p.id !== currentProd.id && !matches.includes(p)).slice(0, 4 - matches.length);
    matches = [...matches, ...extra];
  }

  relatedGrid.innerHTML = "";
  matches.forEach(p => {
    const hasOriginalPrice = p.originalPrice !== null;
    const card = document.createElement("div");
    card.className = "bg-white border border-[#E3E8EE] rounded-lg p-4 flex flex-col justify-between hover:shadow-md transition-shadow duration-200 group relative";
    card.innerHTML = `
      <a href="product-detail.html?id=${p.id}" class="h-[120px] w-full flex items-center justify-center bg-white mb-2">
        <img src="${p.image}" alt="${p.name}" class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200" />
      </a>

      <div class="flex flex-col gap-1 mt-1 justify-end flex-grow">
        <span class="text-[10px] text-[#8B96A5] uppercase tracking-wider font-semibold">${p.brand}</span>
        <a href="product-detail.html?id=${p.id}" class="text-[#1C1C1C] text-xs font-bold leading-snug line-clamp-2 h-[32px] hover:text-[#127FFF] cursor-pointer">${p.name}</a>
        
        <div class="flex items-baseline gap-2 mt-1">
          <span class="text-[#1C1C1C] font-extrabold text-sm">$${p.price.toFixed(2)}</span>
          ${hasOriginalPrice ? `<span class="text-[#8B96A5] text-[10px] line-through font-semibold">$${p.originalPrice.toFixed(2)}</span>` : ""}
        </div>

        <a 
          href="product-detail.html?id=${p.id}"
          class="bg-[#F7FAFC] hover:bg-[#E5F1FF] text-[#127FFF] border border-[#E3E8EE] hover:border-[#127FFF] py-1.5 rounded text-[11px] font-bold text-center transition-colors cursor-pointer mt-2 block"
        >
          View Details
        </a>
      </div>
    `;
    relatedGrid.appendChild(card);
  });
}

// 11. TOAST NOTIFICATION HELPERS
function showNotification(message) {
  const container = document.createElement("div");
  container.className =
    "fixed bottom-5 right-5 bg-[#1C1C1C] text-white px-4 py-3 rounded-lg shadow-xl z-50 text-sm font-semibold flex items-center gap-3 transform translate-y-10 opacity-0 transition-all duration-300";
  container.innerHTML = `
    <svg class="w-5 h-5 text-[#55BD90]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>${message}</span>
  `;
  document.body.appendChild(container);
  
  setTimeout(() => {
    container.classList.remove("translate-y-10", "opacity-0");
  }, 50);

  setTimeout(() => {
    container.classList.add("translate-y-10", "opacity-0");
    setTimeout(() => {
      container.remove();
    }, 300);
  }, 3500);
}

// Global Accordion toggler for sidebar filters (available immediately)
window.toggleAccordion = function(filterId) {
  const content = document.getElementById(filterId);
  const icon = document.getElementById(filterId + "-icon");
  if (!content) return;

  content.classList.toggle("hidden");
  if (icon) {
    icon.classList.toggle("rotate-180");
  }
};
