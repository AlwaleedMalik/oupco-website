// English copy. ar.ts must mirror this shape exactly (enforced by the Content type).
// PLACEHOLDER = invented for design review; confirm before launch.

export const en = {
  meta: {
    lang: "en",
    locale: "en_US",
    titleSuffix: "OUPCO",
    defaultTitle: "OUPCO | Smarter procurement. One unified platform.",
    description:
      "OUPCO is a Saudi-based B2B procurement platform connecting organizations across the Kingdom with approved suppliers through compliant, transparent, data-driven purchasing.",
  },

  // Language-specific company details (neutral ones live in data/site.ts)
  company: {
    fullName: "Office Unified Procurement Core Orbit",
    legalName: "OUP Company",
    hours: "Sunday – Thursday, 8:00 – 17:00", // PLACEHOLDER
    address: {
      line1: "Building No. 4136, Abdullah Ibn Saud Ibn Abdulaziz Branch",
      line2: "Al Ezdihar District, Riyadh 12486",
      country: "Saudi Arabia",
    },
  },

  ui: {
    skip: "Skip to content",
    home: "OUPCO home",
    mainNav: "Main",
    mobileNav: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    login: "Log in",
    loginPlatform: "Log in to platform",
    applyNow: "Apply now",
    contactUs: "Contact us",
    requestOnApp: "Request on oupco.app",
    switchLang: { label: "العربية", aria: "التبديل إلى العربية", hreflang: "ar" },
    step: "Step",
    you: "You",
    without: "Without OUPCO",
    with: "With OUPCO",
    comparisonCaption: "Procurement without OUPCO compared with OUPCO",
    topic: "Topic",
    thousandsMore: "+ thousands more",
    hundredsMore: "+ hundreds more",
    andGrowing: "and growing",
    newTab: "(opens in a new tab)",
    copied: "{email} copied",
    whatsapp: {
      label: "Chat on WhatsApp",
      open: "Open WhatsApp",
      message: "Hello OUPCO, I'd like to ask about your procurement services.",
      newTab: "(opens WhatsApp in a new tab)",
    },
    cta: {
      title: "Ready to simplify procurement?",
      text: "Apply for a business account. Once your contract and SLA are signed, your team can start ordering on oupco.app.",
    },
    footer: {
      tagline: "A Saudi B2B procurement platform aligned with Saudi Vision.",
      company: "Company",
      solutions: "Solutions",
      getStarted: "Get started",
      about: "About",
      howItWorks: "How It Works",
      contact: "Contact",
      applyAccount: "Apply for an account",
      loginApp: "Log in to oupco.app",
      becomeSupplier: "Become a supplier",
      rights: "All rights reserved.",
      proud: "Proudly Saudi · Aligned with Saudi Vision",
    },
  },

  nav: [
    { label: "About", href: "/about" },
    { label: "Solutions", href: "/products", children: true },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Suppliers", href: "/become-a-supplier" },
    { label: "Contact", href: "/contact" },
  ],

  solutions: [
    { label: "Products", href: "/products", icon: "package", text: "Office, IT, furniture, pantry and more" },
    { label: "Services", href: "/services", icon: "briefcase-business", text: "Legal, HR, finance, IT, facilities and logistics" },
    { label: "Printing", href: "/printing", icon: "printer", text: "Stationery, marketing print, signage and merchandise" },
    { label: "Events", href: "/events", icon: "calendar-days", text: "Corporate events, planned and delivered end to end" },
    { label: "Custom Orders", href: "/custom-orders", icon: "package-search", text: "Anything else: describe it and we'll source it" },
  ],

  stats: [
    { value: "500+", label: "Vetted suppliers" },
    { value: "1,000+", label: "Saudi-made products" }, // PLACEHOLDER: confirm count on oupco.app
    { value: "100+", label: "Business services available" }, // PLACEHOLDER: confirm count
    { value: "24h", label: "Average quote turnaround" },
  ],

  pillars: [
    { icon: "shield-check", title: "Vetted suppliers only", text: "Every vendor passes a structured review of quality standards, delivery reliability and commercial guarantees." },
    { icon: "zap", title: "Fast, simple requests", text: "Submit a request in minutes. We handle sourcing, coordination and closing the transaction end to end." },
    { icon: "file-check", title: "Compliance by default", text: "Full audit trails, transparent pricing and ZATCA-ready invoicing on every order." },
    { icon: "credit-card", title: "Flexible payment models", text: "Pay per order with Direct Payment, or lock in pricing and supply with a Frame Agreement." },
  ],

  products: [
    { id: "office", icon: "pen-tool", title: "Office & Stationery", href: "", text: "Premium paper products, writing instruments and professional filing systems.", items: ["Copy & specialty paper", "Pens, markers & highlighters", "Files, folders & archiving", "Desk accessories"] },
    { id: "technology", icon: "monitor", title: "Technology & Hardware", href: "", text: "IT peripherals, scanners, screens and essential multi-function office equipment.", items: ["Laptops & monitors", "Printers & scanners", "Peripherals & accessories", "Meeting-room tech"] },
    { id: "furniture", icon: "armchair", title: "Furniture & Ergonomics", href: "", text: "Modern workstations, executive seating and lecture stands.", items: ["Workstations & desks", "Executive & task seating", "Lecture stands & podiums", "Storage & lockers"] },
    { id: "hospitality", icon: "coffee", title: "Hospitality, Pantry & Catering", href: "", text: "Premium coffee, tea, beverages, snacks and catering for daily office and event needs.", items: ["Coffee & tea", "Water & beverages", "Snacks & pantry", "Event catering"] },
    { id: "branding", icon: "printer", title: "Branding & Print", href: "/printing", text: "Customized promotional materials, printed notebooks and event banners.", items: ["Branded notebooks", "Promotional giveaways", "Banners & signage", "Corporate stationery"] },
    { id: "sustainable", icon: "leaf", title: "Sustainable Products", href: "", text: "Eco-friendly office supplies, from recycled paper to energy-efficient technology.", items: ["Recycled paper", "Refillable supplies", "Energy-efficient devices", "Low-waste packaging"] },
  ],

  services: [
    { icon: "landmark", title: "Corporate & Legal Support", text: "Full-cycle company setup, licensing, PRO/GRO services and professional contract management.", details: ["Company setup & licensing", "PRO / GRO services", "Contract management"] },
    { icon: "users", title: "Human Capital Management", text: "Expert recruitment, Saudization advisory, payroll (HRIS) and third-party manpower (PEO/EOR) solutions.", details: ["Recruitment", "Saudization advisory", "Payroll (HRIS)", "PEO / EOR manpower"] },
    { icon: "scale", title: "Finance & Risk", text: "Dedicated bookkeeping, ZATCA tax compliance, internal auditing, treasury services and corporate insurance.", details: ["Bookkeeping", "ZATCA tax compliance", "Internal audit", "Treasury & insurance"] },
    { icon: "cpu", title: "Digital Transformation", text: "Secure app and web development, NCA (ECC)-aligned cloud solutions and AI-powered supply chain automation.", details: ["App & web development", "NCA ECC-aligned cloud", "AI supply-chain automation"] },
    { icon: "headset", title: "Managed IT & Technical Support", text: "24/7 managed IT helpdesk services and critical infrastructure maintenance.", details: ["24/7 IT helpdesk", "Infrastructure maintenance", "Device management"] },
    { icon: "building-2", title: "Integrated Facility Management", text: "Professional hard and soft facility services, corporate catering and specialized security solutions.", details: ["Hard & soft FM", "Corporate catering", "Security solutions"] },
    { icon: "truck", title: "Strategic Logistics", text: "End-to-end courier services, customs clearance, secure warehousing and last-mile delivery.", details: ["Courier services", "Customs clearance", "Warehousing", "Last-mile delivery"] },
    { icon: "plane", title: "Global Mobility & Travel", text: "Flight bookings, hotel management, visa documentation and end-to-end staff mobility.", details: ["Flights & hotels", "Visa documentation", "Staff mobility"] },
  ],

  onboardingSteps: [
    { icon: "file-pen-line", title: "Apply", text: "Submit your company details and procurement needs. It takes about 3 minutes." },
    { icon: "search-check", title: "Review", text: "Our team verifies your company and reaches out to understand your requirements." },
    { icon: "file-signature", title: "Contract & SLA", text: "We send your service agreement and SLA. Review, agree and sign." },
    { icon: "log-in", title: "Access oupco.app", text: "Your team gets access to the platform to browse catalogs, raise RFQs and track orders." },
  ],

  orderSteps: [
    { ours: false, who: "You", title: "Submit an RFQ", text: "Tell us what you need through the platform, email or WhatsApp." },
    { ours: true, who: "OUPCO", title: "Receive a quote", text: "We source from approved suppliers and send a clear, itemized quote." },
    { ours: false, who: "You", title: "Send a purchase order", text: "Approve the quote and issue your PO." },
    { ours: true, who: "OUPCO", title: "Fulfilment begins", text: "Qualified suppliers fulfil the order under the agreed terms." },
    { ours: true, who: "OUPCO", title: "Invoice issued", text: "You receive a ZATCA-compliant invoice." },
    { ours: false, who: "You", title: "Remit payment", text: "Pay by your chosen model: direct or under your frame agreement." },
    { ours: true, who: "OUPCO", title: "Receipt sent", text: "We confirm payment and close the order with a full audit trail." },
  ],

  paymentModels: [
    { icon: "zap", title: "Direct Payment", badge: "Fast & simple", text: "Straightforward purchasing for one-off or ad-hoc needs, with a seamless checkout.", points: ["No long-term commitment", "Pay per order", "Ideal for urgent or occasional purchases"] },
    { icon: "handshake", title: "Frame Agreement", badge: "Best for ongoing needs", text: "A long-term partnership with tailored pricing and a stable, reliable supply chain.", points: ["Fixed, negotiated pricing", "Credit terms for approved accounts", "One consolidated monthly invoice", "Dedicated account manager"] }, // PLACEHOLDER: confirm credit terms
  ],

  values: [
    { icon: "shield-check", title: "Integrity & Compliance", text: "Zero tolerance for conflicts of interest, purchase splitting or non-compliance. Full audit trails by default." },
    { icon: "heart-handshake", title: "Customer Obsession", text: "Measurable SLAs, defined NPS targets and proactive issue resolution." },
    { icon: "flag", title: "Saudi First", text: "Commitment to local content, Saudization, SME participation and national economic priorities." },
    { icon: "settings-2", title: "Operational Excellence", text: "Standardized SOPs, continuous improvement and a clear roadmap toward ISO 9001, ISO 20400 and ISO 22301." },
    { icon: "lock", title: "Security & Privacy by Design", text: "Embedded PDPL controls, NCA Essential Cybersecurity Controls (ECC) and least-privilege access." },
    { icon: "badge-check", title: "Partnership & Accountability", text: "Transparent vendor scorecards, structured QBRs and disciplined corrective action management." },
    { icon: "recycle", title: "Sustainability", text: "ESG-based supplier evaluation and Scope-3-aware procurement decisions." },
  ],

  vision2030: [
    { icon: "flag", title: "Local content", text: "Prioritizing Saudi-made products and local suppliers." },
    { icon: "users", title: "Saudization", text: "Building Saudi talent across our team and partners." },
    { icon: "store", title: "SME participation", text: "Opening enterprise demand to small and medium suppliers." },
    { icon: "leaf", title: "Sustainable supply chains", text: "ESG-based supplier evaluation and greener options." },
  ],

  supplierBenefits: [
    { icon: "building-2", title: "Access enterprise demand", text: "Reach corporate and government buyers across the Kingdom through a single channel." },
    { icon: "file-text", title: "Qualified RFQs", text: "Receive clear, structured requests that are ready to quote, not cold leads." },
    { icon: "circle-dollar-sign", title: "Reliable payment terms", text: "Agreed terms and transparent invoicing on every order." },
    { icon: "chart-line", title: "Performance scorecards", text: "Transparent scorecards and QBRs that reward reliable suppliers with more business." },
  ],

  supplierCriteria: [
    "Valid Commercial Registration (CR) and VAT certificate",
    "Proven product quality standards",
    "Execution capability and delivery reliability",
    "Commercial and operational guarantees",
    "Compliance with PDPL and applicable regulations",
    "Commitment to local content is a plus",
  ],

  supplierSteps: [
    { title: "Apply", text: "Submit your company details and categories." },
    { title: "Evaluation", text: "We assess quality, capability, reliability and guarantees." },
    { title: "Onboarding", text: "Agree terms and set up your catalog on the platform." },
    { title: "Start receiving RFQs", text: "Quote on requests matched to your categories." },
  ],

  faqs: [
    { q: "How do we get access to the OUPCO platform?", a: "Apply for a business account. Our team reviews your application, then sends you a service agreement and SLA. Once signed, your team gets access to oupco.app." },
    { q: "Does OUPCO hold inventory?", a: "No. OUPCO is an independent procurement intermediary. We manage sourcing, RFQs and coordination, while orders are fulfilled directly by qualified suppliers under the agreed terms." },
    { q: "Can I request something that isn't in your catalog?", a: "Yes. Our range goes well beyond what is listed. Send us your request and we will source it from our approved supplier network." },
    { q: "How do I place an order?", a: "Through the OUPCO platform or by email. A dedicated account team supports you at every step." },
    { q: "What is the difference between Direct Payment and a Frame Agreement?", a: "Direct Payment is pay-per-order for straightforward purchases. A Frame Agreement is a longer-term arrangement with negotiated pricing and guaranteed supply consistency." },
    { q: "Are your invoices ZATCA compliant?", a: "Yes. Every order is invoiced in line with ZATCA e-invoicing requirements, with a full audit trail." },
  ],

  printingCategories: [
    { icon: "notebook-pen", title: "Corporate stationery", text: "Everything with your logo on it, for everyday business.", items: ["Business cards", "Letterheads & envelopes", "Branded notebooks", "Folders & presentation packs"] },
    { icon: "newspaper", title: "Marketing print", text: "Print that sells, for campaigns, launches and sales teams.", items: ["Flyers & leaflets", "Brochures & catalogs", "Posters", "Company profiles"] },
    { icon: "flag", title: "Large format & signage", text: "Make your space and your events impossible to miss.", items: ["Banners & roll-ups", "Backdrops & step-and-repeat", "Wall & window graphics", "Indoor & outdoor signage"] },
    { icon: "gift", title: "Branded merchandise", text: "Giveaways and gifts your clients and teams will actually keep.", items: ["Corporate gifts & giveaways", "Apparel & uniforms", "Mugs, bottles & tech accessories", "Packaging & labels"] },
  ],

  printingOptions: [
    { icon: "layers", title: "Catalog or fully custom", text: "Pick from ready-made items or specify your own sizes, stocks and finishes." },
    { icon: "file-check", title: "Proofs & approvals", text: "Upload your design, review proofs and approve before anything goes to print." },
    { icon: "scan-eye", title: "Samples on request", text: "Check colour, paper and finish with a physical sample first." },
    { icon: "list-ordered", title: "Variable data", text: "Personalized names, numbers or QR codes on every piece." },
    { icon: "frame", title: "Cases & frames", text: "Certificates, awards and displays delivered finished and ready to present." },
    { icon: "zap", title: "Rush production", text: "Tight deadline? Flag it as urgent and we prioritize production." },
  ],

  printingSteps: [
    { title: "Specify", text: "Choose a catalog item or describe a custom one: size, quantity, finish." },
    { title: "Upload & proof", text: "Share your artwork. We send a digital proof, or a sample if requested." },
    { title: "Approve", text: "Sign off in one place, with the full approval trail kept on record." },
    { title: "Produce & deliver", text: "Printed by vetted partners and delivered to the branch you choose." },
  ],

  eventTypes: [
    { icon: "presentation", title: "Corporate meetings", text: "Productive, well-run sessions for your teams and partners.", items: ["Board & leadership meetings", "Workshops & trainings", "Offsites & retreats"] },
    { icon: "mic", title: "Conferences & exhibitions", text: "High-visibility events that represent your brand at its best.", items: ["Conferences & summits", "Exhibition booths", "Product launches & gala dinners"] },
    { icon: "party-popper", title: "Occasions & team events", text: "Moments that bring your people together.", items: ["Ramadan gatherings & iftars", "National Day & Founding Day", "Team building & celebrations"] },
  ],

  eventServices: [
    { icon: "user-round-check", title: "Professional planner", text: "A dedicated coordinator who owns the plan from brief to wrap-up.", href: "" },
    { icon: "building", title: "Venue sourcing", text: "In-office setups or the right external venue for your guest count.", href: "" },
    { icon: "utensils", title: "Catering", text: "Coffee breaks, business lunches, iftars and gala dinners.", href: "" },
    { icon: "truck", title: "Logistics", text: "Transport, setup, teardown and on-site coordination.", href: "" },
    { icon: "projector", title: "AV & production", text: "Sound, screens, lighting and staging that just work.", href: "" },
    { icon: "printer", title: "Branding & print", text: "Backdrops, signage, badges and giveaways, through OUPCO Printing.", href: "/printing" },
  ],

  eventSteps: [
    { title: "Share your brief", text: "Event name, venue type, date, guest count and coordinator." },
    { title: "Plan & quote", text: "We put together a plan and an itemized quote from vetted vendors." },
    { title: "Confirm", text: "Approve the plan and budget, and we lock in every vendor." },
    { title: "Delivered on the day", text: "We coordinate setup, run of show and teardown." },
    { title: "Wrap-up", text: "One consolidated, ZATCA-compliant invoice for everything." },
  ],

  customExamples: [
    { icon: "notebook-pen", title: "Branded items", text: "“50 custom-branded A5 notebooks with our logo.”" },
    { icon: "tag", title: "Specific brands", text: "“Only HP cartridges, and black and blue pens from one brand.”" },
    { icon: "cpu", title: "Specialty equipment", text: "Technical, lab or industry-specific items outside a standard catalog." },
    { icon: "boxes", title: "Bulk or one-off", text: "From a single specialist item to a large rollout across branches." },
    { icon: "flag", title: "Saudi-made alternatives", text: "Ask us for locally manufactured options to support local content." },
    { icon: "sparkles", title: "Something unusual", text: "If your organization needs it, we'll find a vetted supplier for it." },
  ],

  customInclude: [
    { title: "A detailed description", text: "What it is and what it's for. Photos or links help." },
    { title: "Preferred brands or specs", text: "Models, colours, sizes or standards to match." },
    { title: "Quantity", text: "How many, and whether it's a one-off or recurring." },
    { title: "Budget", text: "A target budget helps us propose the right options." },
  ],

  customSteps: [
    { title: "Describe it", text: "Submit your request on oupco.app. No rigid forms." },
    { title: "We source it", text: "Our team searches our approved supplier network." },
    { title: "Get a quote", text: "Clear options and pricing, with alternatives where useful." },
    { title: "Order & delivery", text: "Approve, and it's fulfilled and delivered like any other order." },
  ],

  whySaudi: [
    { icon: "building-2", title: "One vendor, 500+ suppliers", text: "Set up OUPCO once in your ERP and reach 500+ vetted suppliers through us. No new vendor registration for every purchase." },
    { icon: "receipt-text", title: "One ZATCA-compliant invoice", text: "Consolidated invoicing across products, services and events, fully compliant with ZATCA e-invoicing." },
    { icon: "wallet", title: "Purchase orders & credit terms", text: "Order against your PO. Approved accounts get credit terms and a single monthly statement." },
    { icon: "flag", title: "Local content, measured", text: "Saudi-made options in every category, local suppliers prioritized, and reporting to support your local content targets." },
    { icon: "workflow", title: "Approvals & audit trail", text: "Multi-level approvals, budgets by branch or department, and a full audit trail on every order." },
    { icon: "headset", title: "A team that answers", text: "A dedicated account manager in Arabic and English, on WhatsApp, with SLAs written into your contract." },
  ],

  beforeAfter: [
    { topic: "Vendor registration", without: "A new vendor file for every supplier", with: "Register OUPCO once" },
    { topic: "Quotes", without: "Chasing several suppliers for prices", with: "One RFQ, an itemized quote in ~24h" },
    { topic: "Invoices", without: "Dozens of invoices in different formats", with: "One consolidated, ZATCA-compliant invoice" },
    { topic: "Approvals", without: "Email chains and paper sign-offs", with: "Built-in approvals and a full audit trail" },
    { topic: "Spend visibility", without: "Scattered across teams and branches", with: "Real-time dashboard by branch and category" },
    { topic: "Local content", without: "Hard to track or report", with: "Saudi-made options and local supplier reporting" },
  ],

  applyRequirements: [
    { icon: "file-badge", title: "Commercial Registration (CR)", text: "Your 10-digit CR or unified number." },
    { icon: "receipt-text", title: "VAT certificate", text: "If your company is VAT registered." },
    { icon: "map-pinned", title: "National address", text: "Your registered Saudi national address." },
    { icon: "id-card", title: "Authorized contact", text: "The person who can sign the agreement and SLA." },
  ],

  applyFaqs: [
    { q: "Does it cost anything to apply or use OUPCO?", a: "No. Applying is free and there are no membership or platform fees. You only pay for what you order." },
    { q: "Who can apply?", a: "Any company or government entity registered in Saudi Arabia, from SMEs to large enterprises." },
    { q: "How long does approval take?", a: "We review applications within 2 business days. Once your agreement and SLA are signed, your team gets access to oupco.app straight away." },
    { q: "Can we order with purchase orders and pay on credit?", a: "Yes. You can order against your PO, and approved accounts can be offered credit terms with one consolidated monthly invoice." },
    { q: "Which cities do you deliver to?", a: "We deliver across the Kingdom, to your offices and branches. The delivery timeline is confirmed on every quote, based on the items and the supplier, so you know exactly when to expect your order." },
    { q: "Can we support our local content targets through OUPCO?", a: "Yes. We offer Saudi-made options in every category, prioritize local suppliers and can report on your local content spend." },
  ],

  // Form option lists. The English values are what gets saved to Supabase.
  lists: {
    sectors: ["Government & semi-government", "Technology & telecom", "Finance & insurance", "Healthcare", "Education", "Hospitality & events", "Energy & industrial", "Retail & consumer", "Media & entertainment", "Professional services", "Other"],
    companySizes: ["1–49 employees", "50–249 employees", "250–999 employees", "1,000+ employees"],
    monthlySpend: ["Under SAR 25,000", "SAR 25,000 – 100,000", "SAR 100,000 – 500,000", "Over SAR 500,000", "Not sure yet"],
    contactTopics: ["General question", "Products", "Business services", "Printing", "Events", "Custom orders", "My account / existing order", "Partnerships & media", "Something else"],
    extraNeeds: ["Printing", "Events", "Custom orders", "A mix of products and services"],
    extraCategories: ["Printing & production", "Events & hospitality", "Other"],
    regions: ["Riyadh", "Makkah / Jeddah", "Eastern Province", "Madinah", "Qassim", "Asir", "Nationwide", "Other"],
  },

  forms: {
    select: "Select…",
    optional: "(optional)",
    required: "This field is required.",
    chooseOption: "Please choose an option.",
    invalid: "Please enter a valid value.",
    tooShort: "Please enter a little more detail.",
    tooLong: "This is a little too long.",
    sending: "Sending…",
    errorBefore: "Something went wrong. Please try again or email",
    pdpl: "We handle your data in line with the PDPL.",
    company: "Company",
    contactPerson: "Contact person",
    companyName: "Company name",
    companyShort: "Company",
    cr: "Commercial Registration (CR) number",
    crPlaceholder: "10 digits",
    crHelp: "Used to verify your company",
    vat: "VAT number",
    vatHelp: "15 digits, starts and ends with 3",
    fullName: "Full name",
    jobTitle: "Job title",
    workEmail: "Work email",
    mobile: "Mobile number",
    mobileHelp: "Saudi mobile, 9 digits starting with 5",
    website: "Website",
  },

  pages: {
    home: {
      badge: "Saudi B2B procurement",
      h1a: "Smarter procurement.",
      h1b: "One unified platform.",
      leadStrong: "One vendor. 500+ vetted suppliers. One ZATCA-compliant invoice.",
      lead: "Full control over every order, built for how Saudi companies buy.",
      seeHow: "See how it works",
      checks: ["Free to apply", "Purchase orders & credit terms", "One ZATCA-compliant invoice"],
      about: {
        eyebrow: "Who we are",
        title: "Your independent procurement partner in Saudi Arabia",
        text: "OUPCO sits between buyers and approved suppliers. We centralize catalogs, manage RFQs and coordinate procurement on your behalf, so you cut cost, strengthen governance and move faster. We hold no inventory and have no stake in any product, only in getting you the right result.",
        cta: "More about OUPCO",
      },
      why: {
        eyebrow: "Why Saudi companies choose OUPCO",
        title: "Built around how procurement works in the Kingdom",
        text: "Less vendor admin for procurement, cleaner invoices for finance, and the controls and local content reporting management expects.",
      },
      diff: { eyebrow: "The difference", title: "Procurement, before and after OUPCO" },
      products: {
        eyebrow: "Products",
        title: "Everything your workplace runs on",
        text: "From stationery to IT hardware to pantry essentials, sourced from vetted suppliers in one request.",
        cta: "All products",
        notFoundStrong: "Can't find it in our catalog?",
        askUs: "Ask us",
        askUsSr: "(opens contact page in a new tab)",
        notFoundRest: "We'll source it from our approved supplier network.",
      },
      services: {
        eyebrow: "Business services",
        title: "Integrated services, managed for you",
        text: "Beyond physical goods, we manage complex administrative and technical workflows so you can focus on your core mission.",
        cta: "All services",
      },
      more: { eyebrow: "More ways we help", title: "Printing, events and anything else you need" },
      local: {
        eyebrow: "Saudi first · Aligned with Saudi Vision",
        title: "Hit your local content targets without extra work",
        text: "Saudi-made options in every category, local suppliers prioritized on every RFQ, and spend reports that show your local content share.",
        manufacturer: "Are you a Saudi manufacturer?",
        metrics: [
          { value: "1,000+", label: "Saudi-made products" }, // PLACEHOLDER: confirm on oupco.app
          { value: "Every", label: "category has local options" },
          { value: "Priority", label: "for local suppliers on RFQs" },
          { value: "Reports", label: "on your local content spend" },
        ],
      },
      start: {
        eyebrow: "Get started",
        title: "Your business account in four steps",
        text: "Free to apply. We review every application within 2 business days.",
        approvedBefore: "Already approved? See",
        approvedLink: "how ordering works",
        approvedAfter: "on oupco.app.",
      },
      payment: { eyebrow: "Flexible models", title: "Buy the way your organization works" },
      brands: { eyebrow: "Brands we supply", title: "The brands your teams already ask for" },
      faq: { eyebrow: "Before you apply", title: "Questions companies ask us", text: "Anything else? Our team is a WhatsApp message away." },
      clients: "Trusted by leading organizations in the Kingdom",
    },

    about: {
      title: "About",
      description: "OUPCO is a Saudi B2B procurement platform and independent intermediary aligned with Saudi Vision. Our vision, mission and values.",
      header: { eyebrow: "About OUPCO", title: "The trusted procurement partner for the Kingdom", text: "We help enterprises and government entities across Saudi Arabia buy goods and services through compliant, transparent and data-driven processes." },
      story: {
        eyebrow: "Our story",
        title: "Procurement, unified",
        p1: "is a Saudi-based B2B procurement platform. We act as an independent intermediary between buyers and approved suppliers, so organizations across the Kingdom can source goods and services from vetted third-party vendors.",
        p2: "The platform streamlines purchasing by centralizing catalogs, managing RFQs and coordinating procurement on behalf of our clients. Orders are fulfilled directly by qualified suppliers in line with the agreed terms.",
        p3: "Through structured sourcing, vendor management and controlled workflows, we help organizations reduce cost, improve governance and run more efficiently.",
      },
      modelTitle: "How our model works",
      model: [
        { yes: true, text: "Independent intermediary between buyers and approved suppliers" },
        { yes: true, text: "Centralized catalogs, RFQ management and coordinated procurement" },
        { yes: true, text: "Structured sourcing, vendor management and controlled workflows" },
        { yes: false, text: "We don't hold inventory" },
        { yes: false, text: "We don't manufacture, so there's no conflict of interest in what we recommend" },
      ],
      vm: [
        { icon: "eye", title: "Our vision", text: "To be the most trusted procurement partner in the Kingdom of Saudi Arabia, setting the regional standard for compliant, data-driven and sustainable B2B purchasing." },
        { icon: "target", title: "Our mission", text: "To unify how organizations in KSA buy goods and services by delivering transparent catalogs, fast RFQs and managed procurement that save cost and time." },
      ],
      values: { eyebrow: "Our values", title: "Seven commitments behind every order", text: "They shape how we choose suppliers, handle your data and measure ourselves." },
      iso: { title: "ISO roadmap", text: "Working toward ISO 9001, ISO 20400 and ISO 22301." },
      v2030: { eyebrow: "Saudi Vision", title: "Built in the Kingdom, for the Kingdom", text: "Our procurement model is designed to support national priorities, from local content to a more sustainable supply chain." },
      clients: { eyebrow: "Our clients", title: "Organizations that buy with OUPCO" },
      cta: "Let's build a better procurement process together",
    },

    products: {
      title: "Products",
      description: "Office supplies, IT hardware, furniture, pantry, branding and sustainable products for organizations in Saudi Arabia, all sourced from approved suppliers.",
      header: { eyebrow: "Products", title: "Corporate goods & workspace essentials", text: "One request covers it all: stationery, technology, furniture, pantry and print, sourced from vetted suppliers at transparent prices." },
      categoriesNav: "Product categories",
      explorePrinting: "Explore printing services",
      custom: { title: "Need something that isn't listed?", text: "Our range goes well beyond these categories. Tell us what you need and we'll source it from our approved supplier network.", cta: "Custom orders" },
      brands: { eyebrow: "Brands we supply", title: "Trusted brands, one supplier relationship", text: "A selection of the brands available through OUPCO." },
      cta: { title: "Start buying through OUPCO", text: "Apply for a business account. After your contract and SLA are signed, order everything here through oupco.app." },
    },

    services: {
      title: "Services",
      description: "Integrated business services in Saudi Arabia: corporate & legal, HR, finance, digital, IT support, facility management, logistics and travel.",
      header: { eyebrow: "Business services", title: "Integrated services, so you can focus on your mission", text: "Beyond physical goods, OUPCO manages complex administrative and technical workflows with full local compliance and enterprise-wide efficiency." },
      why: { eyebrow: "Why through OUPCO", title: "Your strategic partner in the Kingdom" },
      reasons: [
        { icon: "layers", title: "One partner, many providers", text: "A single point of contact replaces dozens of separate vendor relationships." },
        { icon: "shield-check", title: "Local compliance built in", text: "Every provider is vetted for Saudi regulatory, PDPL and NCA ECC requirements." },
        { icon: "chart-line", title: "Measured performance", text: "SLAs, scorecards and quarterly business reviews keep every service accountable." },
      ],
      cta: { title: "Tell us what you need managed", text: "Share your requirements and we'll match you with qualified, compliant providers." },
    },

    printing: {
      title: "Printing",
      description: "Professional corporate printing in Saudi Arabia: stationery, marketing print, large format signage and branded merchandise, with proofs, samples and approvals in one place.",
      header: { eyebrow: "Printing", title: "Professional printing, tailored to your brand", text: "Customize specifications, upload designs and manage approvals in one streamlined process, from business cards to exhibition backdrops." },
      categories: { eyebrow: "What we print", title: "Four ways to put your brand in front of people" },
      options: { eyebrow: "Built for corporate print", title: "Every option you need, none of the back-and-forth", text: "The same controls our clients use on oupco.app when they place a print order." },
      process: { eyebrow: "How it works", title: "From artwork to delivery in four steps" },
      cta: { title: "Ready to print with OUPCO?", text: "New to OUPCO? Apply for a business account. Existing clients can place print orders directly on oupco.app." },
    },

    events: {
      title: "Events",
      description: "End-to-end corporate event management in Saudi Arabia: meetings, conferences, exhibitions, Ramadan gatherings and team events, with planning, venue, catering, logistics and AV.",
      header: { eyebrow: "Events", title: "End-to-end corporate event management", text: "Plan, organize and run corporate events with confidence. From setup to logistics and branding, every detail is managed in one place." },
      types: { eyebrow: "What we organize", title: "Events of every size, run like clockwork" },
      services: { eyebrow: "Full event services", title: "One partner for everything on the day", text: "Pick only what you need, or hand us the whole event." },
      explorePrinting: "Explore printing",
      process: { eyebrow: "How it works", title: "From brief to wrap-up", text: "One brief, one plan, one invoice." },
      cta: { title: "Planning your next corporate event?", text: "New to OUPCO? Apply for a business account. Existing clients can submit an event brief on oupco.app." },
    },

    custom: {
      title: "Custom Orders",
      description: "Can't find it in a catalog? Describe what your organization needs and OUPCO sources it from approved suppliers across Saudi Arabia.",
      header: { eyebrow: "Custom orders", title: "Can't find it? Tell us, and we'll source it", text: "No limits, no rigid forms. Describe what you need and our team finds the right solution from our approved supplier network." },
      examples: { eyebrow: "What you can ask for", title: "If your organization needs it, we can find it" },
      include: { eyebrow: "Get a faster quote", title: "What to include in your request", text: "The more we know, the faster we can come back with the right options. A few lines is usually enough." },
      process: { eyebrow: "How it works", title: "From request to delivery" },
      cta: { title: "Have something specific in mind?", text: "New to OUPCO? Apply for a business account. Existing clients can submit a custom order on oupco.app." },
    },

    how: {
      title: "How It Works",
      description: "How procurement works with OUPCO: from RFQ to receipt in seven steps, with Direct Payment or Frame Agreement models.",
      header: { eyebrow: "How it works", title: "From request to receipt, fully managed", text: "A clear, seven-step process with full audit trails, flexible payment models and a dedicated team behind every order." },
      start: { eyebrow: "Getting started", title: "Four steps to your business account", text: "Every client is onboarded with a signed service agreement and SLA, so expectations are clear before the first order." },
      process: { eyebrow: "The order process", title: "Seven steps, zero guesswork", text: "Once you're on oupco.app, every order follows the same clear process. You always know who owns the next step.", yourStep: "Your step", ourStep: "OUPCO's step" },
      channels: { eyebrow: "Ordering", title: "Order the way that suits you" },
      channelList: [
        { icon: "monitor-smartphone", title: "oupco.app", text: "Browse catalogs, raise RFQs and track every order in one place.", cta: "Log in" },
        { icon: "mail", title: "Email", text: "Send your list or RFQ to info@oupco.com and we'll take it from there.", cta: "Copy email address" },
        { icon: "message-circle", title: "WhatsApp", text: "Quick requests and order updates from your account team.", cta: "Chat with us" },
      ],
      payment: { eyebrow: "Payment models", title: "Direct Payment or Frame Agreement", text: "Choose per order, or combine both: frame agreements for recurring needs and direct payment for everything else." },
      faq: { eyebrow: "FAQ", title: "Common questions", text: "Can't find your answer? Our team is happy to help." },
    },

    contact: {
      title: "Contact",
      description: "Talk to the OUPCO team. Riyadh, Saudi Arabia, info@oupco.com.",
      header: { eyebrow: "Contact", title: "Talk to our team", text: "Questions about OUPCO, our products or services? Message us on WhatsApp for the fastest reply, or send the form below and we'll get back to you within one business day." },
      formTitle: "Send us a message",
      topic: "What is it about?",
      message: "Message",
      send: "Send message",
      successTitle: "Message received",
      successText: "Thank you. A member of our team will be in touch within one business day.",
      chat: { title: "Prefer to chat?", text: "Message our team directly on WhatsApp at" },
      details: { title: "Contact details", email: "Email", phone: "Phone", hours: "Working hours", office: "Head office" },
      account: { title: "Want a business account?", text: "Apply, sign your contract and SLA, and start ordering on oupco.app." },
    },

    apply: {
      title: "Apply for a Business Account",
      description: "Apply for an OUPCO business account. After review, we send your contract and SLA, then your team gets access to oupco.app.",
      eyebrow: "Business account",
      h1: "Apply to procure with OUPCO",
      lead: "Tell us about your company. Once approved and your agreement is signed, your team gets access to oupco.app.",
      checks: ["Free to apply, no platform fees", "Takes about 3 minutes", "Reviewed within 2 business days"],
      formTitle: "Company application",
      sector: "Sector",
      size: "Company size",
      mainNeed: "What will you mainly buy?",
      spend: "Estimated monthly spend",
      notes: "Anything else we should know?",
      notesHelp: "E.g. current suppliers, upcoming needs, number of platform users.",
      frame: "We're interested in a Frame Agreement for recurring purchases",
      submit: "Submit application",
      successTitle: "Application received",
      successText: "Thank you. Our team will review your application and contact you within 2 business days with next steps, including your contract and SLA.",
      need: { title: "What you'll need", text: "Have these ready. We'll ask for copies after the first review." },
      getTitle: "What you get",
      included: [
        "500+ vetted suppliers through a single vendor: OUPCO",
        "Access to oupco.app for your whole procurement team",
        "Purchase orders, and credit terms for approved accounts",
        "One consolidated, ZATCA-compliant invoice",
        "Approvals, budgets and a full audit trail",
        "A dedicated account manager and a signed SLA",
      ],
      existing: { title: "Already have an account?", text: "Log in to place orders and track requests.", cta: "Go to oupco.app" },
      supplier: { title: "Want to supply OUPCO instead?", text: "Vendors apply through our supplier programme.", cta: "Become a supplier" },
      faq: { eyebrow: "Before you apply", title: "Questions companies ask us", text: "Still unsure? Message us on WhatsApp or email and we'll help." },
    },

    supplier: {
      title: "Become a Supplier",
      description: "Join OUPCO's approved supplier network and reach corporate and government buyers across Saudi Arabia.",
      header: { eyebrow: "For suppliers", title: "Grow with the Kingdom's procurement partner", text: "Join our approved vendor network and receive qualified RFQs from enterprises and government entities across Saudi Arabia." },
      applyCta: "Apply as a supplier",
      seeReq: "See requirements",
      benefits: { eyebrow: "Why partner with us", title: "More qualified business, less chasing" },
      criteria: { eyebrow: "What we look for", title: "A rigorous, fair evaluation", text: "Every supplier is assessed on quality, execution capability, delivery reliability and the guarantees behind each transaction." },
      process: { eyebrow: "The process", title: "From application to first RFQ" },
      network: "Part of our supplier network",
      form: { eyebrow: "Apply", title: "Supplier application", text: "It takes about 3 minutes. Our vendor team reviews every application and responds within 5 business days." },
      category: "Main category",
      region: "Coverage",
      local: {
        question: "Do you manufacture or add value locally in Saudi Arabia?",
        help: "Local content is a priority for OUPCO and Saudi Vision. Local suppliers are fast-tracked in our review.",
        yes: { title: "Yes, local content", text: "We manufacture, assemble or add value in Saudi Arabia.", badge: "Fast-tracked" },
        no: { title: "No, we import or resell", text: "Our products or services are sourced from outside the Kingdom." },
      },
      about: "Tell us about your products or services",
      submit: "Submit application",
      docsNote: "We'll ask for supporting documents after the first review.",
      successTitle: "Application received",
      successText: "Thank you. Our vendor team will review your details and respond within 5 business days.",
    },

    notFound: {
      title: "Page not found",
      eyebrow: "Error 404",
      h1: "We couldn't find that page",
      text: "It may have moved, or the link may be out of date.",
      home: "Back to home",
    },
  },
};
