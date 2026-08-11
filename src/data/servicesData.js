import deepCleaningImg from '../assets/images/service_deep_cleaning.png';
import vehicleDetailingImg from '../assets/images/service_vehicle_detailing.png';
import bathroomSanitizationImg from '../assets/images/service_bathroom_sanitization.png';
import tankCleaningImg from '../assets/images/service_tank_cleaning.png';
import interlockCleaningImg from '../assets/images/service_interlock_cleaning.png';
import roofWallFloorImg from '../assets/images/service_roof_wall_floor_cleaning.png';
import acpGlassImg from '../assets/images/service_acp_glass_cleaning.png';
import solarPanelImg from '../assets/images/service_solar_panel_cleaning.png';
import sofaMattressImg from '../assets/images/service_sofa_mattress_cleaning.png';
import gardeningImg from '../assets/images/service_gardening_care.png';

export const servicesData = {
  'house-office-deep-cleaning': {
    slug: 'house-office-deep-cleaning',
    title: 'House & Office Deep Cleaning',
    category: 'Home & Office',
    price: 'From ₹1,499',
    shortDescription: 'Comprehensive, top-to-bottom sanitization and detailing for residential and commercial spaces.',
    fullDescription: 'Transform your living or working environment with Plenora’s hospital-grade deep cleaning. Our trained specialists inspect every nook, removing dust, hidden allergens, and stubborn grime from high ceilings down to floor baseboards.',
    heroImage: deepCleaningImg,
    whatsIncluded: [
      'Top-to-bottom dusting & cobweb removal',
      'Floor scrubbing, mopping & machine polishing',
      'Cabinet exterior & interior surface wipe-down',
      'Window glass & frame detailing',
      'High-touch surface sanitization',
      'Upholstery vacuuming & stain treatment'
    ],
    features: [
      { title: 'Eco-Friendly Solvents', desc: 'Child & pet-safe hospital grade disinfectants' },
      { title: 'Background Checked Crew', desc: 'Vetted, uniformed hospitality cleaning experts' },
      { title: '100% Satisfaction Guarantee', desc: 'Free re-cleaning if any corner is missed' }
    ],
    faqs: [
      { question: 'How long does a full home deep clean take?', answer: 'A standard 2-3 BHK deep clean typically takes between 4 to 6 hours with a dedicated team of 3 professionals.' },
      { question: 'Do I need to supply any cleaning materials?', answer: 'No. Plenora teams bring all specialized heavy-duty equipment, microfibers, and eco-safe cleaning agents.' }
    ]
  },

  'vehicle-foam-washing': {
    slug: 'vehicle-foam-washing',
    title: 'Vehicle Foam Washing & Detailing',
    category: 'Vehicle',
    price: 'From ₹499',
    shortDescription: 'Premium touchless foam wash and interior detailing for cars and commercial fleets, ensuring a showroom shine.',
    fullDescription: 'Give your luxury automobile or commercial fleet the care it deserves. Plenora uses high-pH neutral snow foam, pressure rinse, tire dressing, and deep cabin vacuuming to maintain paint integrity and interior freshness.',
    heroImage: vehicleDetailingImg,
    whatsIncluded: [
      'High-pressure pre-wash & snow foam bath',
      'Microfiber scratch-free hand wash',
      'Alloy wheel & tire sidewall deep scrubbing',
      'Dashboard & leather trim conditioning',
      'Cabin vacuuming & trunk carpet cleaning',
      'Hydrophobic glass sealant spray'
    ],
    features: [
      { title: 'pH Neutral Snow Foam', desc: 'Prevents swirl marks & protects clear coat' },
      { title: 'Doorstep Service Option', desc: 'Mobile unit brings water & power to your garage' },
      { title: 'Showroom Gloss Finish', desc: 'Synthetic sealant for long-lasting shine' }
    ],
    faqs: [
      { question: 'Is doorstep foam washing available?', answer: 'Yes! Our mobile detailing units are fully equipped with quiet generators and pressurized water tanks.' },
      { question: 'Will foam wash damage ceramic coating?', answer: 'No, our pH-balanced formulas are specifically engineered to preserve ceramic and PPF coatings.' }
    ]
  },

  'garden-landscaping-care': {
    slug: 'garden-landscaping-care',
    title: 'Garden & Landscaping Care',
    category: 'Outdoor',
    price: 'From ₹699',
    shortDescription: 'Professional lawn mowing, hedge trimming, weed control, and garden maintenance for pristine outdoor landscapes.',
    fullDescription: 'Keep your outdoor gardens, lawns, and green landscapes thriving. Plenora provides complete lawn mowing, hedge shaping, organic fertilization, weed elimination, and yard cleanup.',
    heroImage: gardeningImg,
    whatsIncluded: [
      'Precision lawn mowing & edge trimming',
      'Hedge, shrub & ornamental plant shaping',
      'Weed eradication & soil aeration',
      'Organic fertilizer & nutrient boost',
      'Yard debris & fallen leaves removal'
    ],
    features: [
      { title: 'Horticulture Specialists', desc: 'Trained gardeners for healthy plant growth' },
      { title: 'Eco-Organic Nutrients', desc: 'Safe for pets, birds & beneficial soil micro-organisms' },
      { title: 'Regular Maintenance Plans', desc: 'Weekly or monthly subscription scheduling' }
    ],
    faqs: [
      { question: 'Do you bring your own lawn mowers and trimmers?', answer: 'Yes! Plenora gardening teams bring all heavy-duty cordless mowers, hedge trimmers, and yard cleanup tools.' }
    ]
  },

  'bathroom-deep-cleaning': {
    slug: 'bathroom-deep-cleaning',
    title: 'Bathroom Deep Cleaning',
    category: 'Bathroom',
    price: 'From ₹899',
    shortDescription: 'Intensive descaling, grout whitening, and sanitization for a hygienic, spa-like bathroom experience.',
    fullDescription: 'Bathrooms accumulate hard water scale, soap scum, mold spores, and bacteria in tight tile joints. Plenora’s specialized acid-free scale dissolvers and high-temperature steam revive tile luster, sanitize fixtures, and leave a refreshing fragrance.',
    heroImage: bathroomSanitizationImg,
    whatsIncluded: [
      'Hard water scale & limescale stain removal',
      'Grout joint scrubbing & whitening',
      'Sanitization of toilet bowl, bidet & flush tank',
      'Glass shower partition & mirror streak-free polish',
      'Exhaust fan & light fixture degreasing',
      'Steam disinfections for drain outlets'
    ],
    features: [
      { title: 'Anti-Bacterial Shield', desc: 'Kills 99.9% of bacteria & germ colonies' },
      { title: 'Acid-Free Formulations', desc: 'Safe for chrome, brass, & marble surfaces' },
      { title: 'Odor Elimination', desc: 'Steam treatment eliminates deep drain odors' }
    ],
    faqs: [
      { question: 'Can you remove old hard water stains on shower glass?', answer: 'Yes! We use commercial optical polishing compounds to dissolve mineral deposits without scratching glass.' }
    ]
  },

  'tank-cleaning': {
    slug: 'tank-cleaning',
    title: 'Tank Cleaning',
    category: 'Specialized',
    price: 'From ₹589',
    shortDescription: 'Mechanized sludge removal and anti-bacterial treatment for domestic and commercial water tanks.',
    fullDescription: 'Clean water starts at the storage tank. Sediment, algae, and bacterial biofilm build up over time in overhead tanks and underground sumps. Our 6-stage mechanized cleaning process restores water purity without draining excess water.',
    heroImage: tankCleaningImg,
    whatsIncluded: [
      'Dewatering & sludge extraction via submersible pumps',
      'High-pressure jet washing of tank walls & ceiling',
      'Vacuuming of bottom sediment & bio-slurry',
      'Anti-bacterial spray treatment',
      'UV radiation treatment for microbe eradication',
      'Final water quality sample check'
    ],
    features: [
      { title: '6-Stage Process', desc: 'Thorough cleaning with zero chemical residue' },
      { title: 'Certified Technicians', desc: 'Trained for confined space safety protocols' },
      { title: 'Minimal Water Loss', desc: 'Optimized pumps extract only sludge' }
    ],
    faqs: [
      { question: 'How often should water tanks be cleaned?', answer: 'We recommend professional mechanized tank cleaning every 6 months to maintain health standards.' }
    ]
  },

  'interlock-cleaning': {
    slug: 'interlock-cleaning',
    title: 'Interlock Cleaning',
    category: 'Outdoor',
    price: 'From ₹899',
    shortDescription: 'High-pressure washing to restore the original color and texture of outdoor paving and driveways.',
    fullDescription: 'Outdoor paving tiles accumulate oil leaks, moss growth, weed infestation, and dirt accumulation. Plenora’s heavy-duty rotary surface cleaners restore interlock vibrance and clean deep into joints without disturbing sand beds.',
    heroImage: interlockCleaningImg,
    whatsIncluded: [
      'Rotary surface jet washing for uniform cleaning',
      'Moss, lichen & weed root removal',
      'Oil stain spot chemical treatment',
      'High-pressure edge flush',
      'Kiln-dried joint re-sanding option'
    ],
    features: [
      { title: 'Rotary Jet Technology', desc: 'Streak-free uniform pressure application' },
      { title: 'Stain Dissolution', desc: 'Breaks down engine oil & tire rubber marks' },
      { title: 'Enhanced Curb Appeal', desc: 'Restores fresh, vibrant driveway look' }
    ],
    faqs: [
      { question: 'Does high-pressure washing dislodge the interlock tiles?', answer: 'No. We use wide rotary flat-surface cleaners designed to clean surface dirt while preserving joint stability.' }
    ]
  },

  'roof-wall-floor-cleaning': {
    slug: 'roof-wall-floor-cleaning',
    title: 'Roof, Wall & Floor Cleaning',
    category: 'Home & Office',
    price: 'From ₹1,299',
    shortDescription: 'Restorative cleaning and polishing for hard surfaces, removing stubborn stains and weather damage.',
    fullDescription: 'Exposed building surfaces endure rain stains, dust accumulation, and grime buildup. Plenora delivers exterior wall washing, roof algae removal, and heavy floor crystallization/polishing to keep properties looking brand new.',
    heroImage: roofWallFloorImg,
    whatsIncluded: [
      'High-reach soft wash for exterior walls',
      'Roof tile algae & lichen removal',
      'Marble, granite & terrazzo floor crystallization',
      'Tile grout deep cleaning',
      'Stain treatment for weather-damaged stone'
    ],
    features: [
      { title: 'Surface Polish Restoration', desc: 'Brings high-shine mirror finish to stone floors' },
      { title: 'Soft Wash Wall Care', desc: 'Gentle low-pressure chemical cleaning for painted walls' },
      { title: 'Long-lasting Sealant', desc: 'Protects against monsoon mold & saltpetre' }
    ],
    faqs: [
      { question: 'Will pressure washing strip paint from exterior walls?', answer: 'We utilize low-pressure "soft wash" technology with specialized biodegradable cleaners that clean dirt without peeling exterior paint.' }
    ]
  },

  'acp-glass-cleaning': {
    slug: 'acp-glass-cleaning',
    title: 'ACP & Glass Cleaning',
    category: 'Specialized',
    price: 'Custom Quote',
    shortDescription: 'Professional facade cleaning for commercial buildings, ensuring spotless windows and cladding.',
    fullDescription: 'Maintain a striking commercial impression with crystal-clear facade windows and spotless Aluminum Composite Panels (ACP). Plenora employs certified rope access technicians and deionized pure water poles for safe, streak-free high-rise cleaning.',
    heroImage: acpGlassImg,
    whatsIncluded: [
      'Pure deionized water pole washing (up to 50ft)',
      'Certified rope access abseiling facade cleaning',
      'ACP panel oxidation & stain removal',
      'Window frame silicone seal inspection',
      'Hydrophobic anti-dust coating application'
    ],
    features: [
      { title: 'Certified Rope Access', desc: 'IRATA trained safety technicians' },
      { title: 'Deionized Pure Water', desc: 'Leaves zero mineral spots on dry glass' },
      { title: 'Comprehensive Insurance', desc: 'Full liability coverage for commercial sites' }
    ],
    faqs: [
      { question: 'How are commercial quotes calculated?', answer: 'Quotes are based on building height, total square footage of glass/ACP panels, and access setup required. We offer free site surveys.' }
    ]
  },

  'solar-panel-cleaning': {
    slug: 'solar-panel-cleaning',
    title: 'Solar Panel Cleaning',
    category: 'Outdoor',
    price: 'From ₹799',
    shortDescription: 'Maximize energy efficiency with our de-ionized water cleaning system for domestic and commercial arrays.',
    fullDescription: 'Dust, bird droppings, and pollution film reduce solar panel efficiency by up to 25%. Plenora uses ultra-soft non-abrasive solar brushes and purified zero-TDS water to maximize your energy yield without voiding panel warranties.',
    heroImage: solarPanelImg,
    whatsIncluded: [
      'Zero-TDS purified de-ionized water wash',
      'Ultra-soft solar panel brush scrub',
      'Bird droppings & sticky sap spot treatment',
      'Thermal hotspot visual inspection',
      'Before & after energy output log option'
    ],
    features: [
      { title: 'Zero TDS Purified Water', desc: 'Prevents mineral scaling & light obstruction' },
      { title: 'Non-Abrasive Brushes', desc: 'Zero risk of glass scratches or micro-cracks' },
      { title: 'Upto 25% Energy Boost', desc: 'Restores maximum solar power generation' }
    ],
    faqs: [
      { question: 'Why can’t I use regular tap water to clean my solar panels?', answer: 'Tap water contains dissolved minerals that leave white scaling when dry, permanently blocking sunlight absorption.' }
    ]
  },

  'sofa-mattress-cleaning': {
    slug: 'sofa-mattress-cleaning',
    title: 'Sofa & Mattress Cleaning',
    category: 'Home & Office',
    price: 'From ₹599',
    shortDescription: 'Deep extraction, allergen removal, and steam sanitization to breathe new life into your upholstery.',
    fullDescription: 'Mattresses and upholstered sofas trap dust mites, sweat residues, dead skin, and deep spills. Our hot water injection-extraction process sanitizes fabrics deep beneath the surface, leaving them fresh, clean, and fast-drying.',
    heroImage: sofaMattressImg,
    whatsIncluded: [
      'High-power HEPA dry vacuuming',
      'Enzymatic spot stain & spill pretreatment',
      'Hot water spray-extraction deep cleaning',
      'Sanitizing steam treatment',
      'Fabric deodorization & quick-dry blow drying'
    ],
    features: [
      { title: 'Dust Mite & Allergen Removal', desc: 'Ideal for asthma & allergy sufferers' },
      { title: 'Stain Extraction', desc: 'Effective on tea, coffee, wine, & pet stains' },
      { title: 'Fast 2-Hour Drying', desc: 'Low-moisture extraction for quick turn-around' }
    ],
    faqs: [
      { question: 'How long will it take for the sofa or mattress to dry?', answer: 'Thanks to our high-lift vacuum extraction units, fabrics dry completely within 2 to 3 hours.' }
    ]
  }
};
