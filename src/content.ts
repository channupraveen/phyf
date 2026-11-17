// All site text lives here so it is easy to edit.
// Values marked TODO are placeholders. Confirm them with the real product details.

export const product = {
  name: "phyf Shaker",
  kicker: "Blend on the move",
  price: "₹1,499", // TODO: real price
  comparePrice: "₹1,999", // TODO: remove if there is no discount
  colours: [
    { name: "Blush Pink", hex: "#F2A9AA", available: true },
    { name: "Midnight Black", hex: "#1B1B1F", available: false }, // TODO: real colour options
  ],
};

// Cards in the sliding gallery. `focus` picks which part of the photo to zoom into (x%, y%).
export const gallery = [
  {
    title: "One-Touch Blend",
    tags: ["Built-in Motor", "One Button", "Lump-Free"],
    body: "Press once and the base spins your protein smooth in seconds.",
    focus: "50% 88%",
    zoom: "260%",
  },
  {
    title: "Flip-Top Lid",
    tags: ["One-Thumb Open", "Snap Seal", "Gym-Bag Ready"],
    body: "Opens with a flick, closes tight, rides in your bag without a drip.",
    focus: "48% 30%",
    zoom: "230%",
  },
  {
    title: "Clip & Carry",
    tags: ["Metal Clip", "Woven Strap", "Hands-Free"],
    body: "Hook it to your bag, belt loop or bike and keep moving.",
    focus: "76% 50%",
    zoom: "250%",
  },
  {
    title: "See-Through Body",
    tags: ["Tinted Finish", "Measure Marks", "Easy Clean"],
    body: "Watch it mix, measure as you pour, rinse in seconds.",
    focus: "50% 62%",
    zoom: "210%",
  },
];

export const engineering = {
  label: "phyf Shaker",
  title: "Engineered for the grind",
  body: "A sealed motor base, a blade designed to pull powder down into the liquid, and a lid that locks with a click. Every part is shaped to do one job: give you a smooth shake wherever you train.", // TODO: confirm with real specs
  tags: ["#OnePressBlend", "#NoMoreLumps", "#ClipAndGo"],
};

export const banner = "Every rep deserves better";

export const specs = [
  { label: "Capacity", value: "600 ml" }, // TODO: confirm
  { label: "Body", value: "BPA-free tinted plastic" }, // TODO: confirm
  { label: "Blending", value: "Built-in electric blender, one-button" },
  { label: "Charging", value: "USB rechargeable" }, // TODO: confirm (USB-C?)
  { label: "Battery", value: "Up to 15–20 shakes per charge" }, // TODO: confirm
  { label: "In the box", value: "Shaker, carry strap with clip, charging cable" }, // TODO: confirm
];

export const stories = [
  {
    title: "Electric shaker vs regular shaker: what actually changes?",
    href: "#faq", // TODO: link to a real article
    focus: "50% 70%",
  },
  {
    title: "5 ways to get a smoother protein shake every time",
    href: "#faq", // TODO: link to a real article
    focus: "50% 35%",
  },
];

export const faqs = [
  {
    q: "Can I put it in the dishwasher?",
    a: "Wash the cup and lid by hand or on the top rack. Do not put the base with the motor in water. Wipe it clean with a damp cloth.", // TODO: confirm
  },
  {
    q: "How long does a charge last?",
    a: "A full charge mixes around 15–20 shakes, depending on how thick your shake is.", // TODO: confirm
  },
  {
    q: "Can I mix hot drinks?",
    a: "Use it for cold or room-temperature drinks. Hot liquids can build pressure inside a closed bottle.",
  },
  {
    q: "Do you deliver across India?",
    a: "Yes, we ship across India. Orders usually arrive in 3–7 working days.", // TODO: confirm shipping
  },
];

export const footerLinks = [
  { heading: "Company", links: ["About Us", "Privacy Policy", "Terms of Service"] },
  { heading: "Support", links: ["FAQs", "Shipping", "Order Tracking", "Returns & Refunds", "Warranty"] },
  { heading: "Business", links: ["Become a Reseller", "Co-Branding", "Affiliate"] },
];

export const brand = {
  email: "hello@phyf.in", // TODO: real email
  socials: [
    { name: "Instagram", href: "https://instagram.com/" }, // TODO: real links
    { name: "YouTube", href: "https://youtube.com/" },
    { name: "LinkedIn", href: "https://linkedin.com/" },
  ],
};
