// script.js - Updated with 30+ Categories and description
const categories = [
  {
    name: "Electrical Services",
    icon: "⚡",
    services: [
      {
        title: "Residential Wiring",
        description: "Complete home electrical solutions",
        price: "$65-$120/hr",
        rating: 4.9,
      },
      {
        title: "LED Lighting Installation",
        description: "Energy-efficient lighting solutions",
        price: "$50-$200 per fixture",
        rating: 4.7,
      },
    ],
  },
  {
    name: "Plumbing",
    icon: "🚰",
    services: [
      {
        title: "Emergency Pipe Repair",
        description: "24/7 plumbing services",
        price: "$70-$150/hr",
        rating: 4.8,
      },
      {
        title: "Water Heater Installation",
        description: "Professional installation with warranty",
        price: "$200-$800",
        rating: 4.6,
      },
    ],
  },
  {
    name: "HVAC Services",
    icon: "❄️",
    services: [
      {
        title: "AC Installation",
        description: "Energy-efficient cooling systems",
        price: "$1,500-$5,000",
        rating: 4.8,
      },
      {
        title: "Furnace Repair",
        description: "Winter heating system maintenance",
        price: "$80-$150/hr",
        rating: 4.7,
      },
    ],
  },
  {
    name: "Carpentry",
    icon: "🪚",
    services: [
      {
        title: "Custom Built-ins",
        description: "Tailored storage solutions",
        price: "$45-$75/hr",
        rating: 4.8,
      },
      {
        title: "Deck Construction",
        description: "Premium outdoor living spaces",
        price: "$35-$60/hr",
        rating: 4.5,
      },
    ],
  },
  {
    name: "Landscaping",
    icon: "🌿",
    services: [
      {
        title: "Lawn Maintenance",
        description: "Regular mowing and care",
        price: "$30-$50/hr",
        rating: 4.6,
      },
      {
        title: "Garden Design",
        description: "Custom landscape planning",
        price: "$500-$2,000",
        rating: 4.8,
      },
    ],
  },
  {
    name: "Masonry",
    icon: "🧱",
    services: [
      {
        title: "Brickwork",
        description: "Traditional and modern designs",
        price: "$5-$10/sqft",
        rating: 4.7,
      },
      {
        title: "Concrete Foundations",
        description: "Durable structural bases",
        price: "$8-$12/sqft",
        rating: 4.6,
      },
    ],
  },
  {
    name: "Roofing",
    icon: "🏠",
    services: [
      {
        title: "Shingle Replacement",
        description: "Complete roof overhauls",
        price: "$3-$5/sqft",
        rating: 4.7,
      },
      {
        title: "Leak Repair",
        description: "Emergency patching services",
        price: "$200-$500",
        rating: 4.5,
      },
    ],
  },
  {
    name: "Painting",
    icon: "🎨",
    services: [
      {
        title: "Interior Painting",
        description: "Professional wall finishing",
        price: "$2-$4/sqft",
        rating: 4.8,
      },
      {
        title: "Exterior Painting",
        description: "Weather-resistant coatings",
        price: "$3-$6/sqft",
        rating: 4.7,
      },
    ],
  },
  {
    name: "Flooring",
    icon: "🪵",
    services: [
      {
        title: "Hardwood Installation",
        description: "Classic wood floors",
        price: "$8-$12/sqft",
        rating: 4.8,
      },
      {
        title: "Tile Flooring",
        description: "Ceramic and stone options",
        price: "$6-$10/sqft",
        rating: 4.7,
      },
    ],
  },
  {
    name: "Appliance Repair",
    icon: "🔧",
    services: [
      {
        title: "Washer/Dryer Repair",
        description: "Quick appliance fixes",
        price: "$80-$120/hr",
        rating: 4.6,
      },
      {
        title: "Oven Maintenance",
        description: "Professional calibration",
        price: "$90-$150/hr",
        rating: 4.5,
      },
    ],
  },
  {
    name: "Solar Installation",
    icon: "☀️",
    services: [
      {
        title: "Panel Installation",
        description: "Renewable energy systems",
        price: "$10,000-$25,000",
        rating: 4.9,
      },
      {
        title: "System Maintenance",
        description: "Performance optimization",
        price: "$150-$300",
        rating: 4.7,
      },
    ],
  },
  {
    name: "Welding",
    icon: "🔥",
    services: [
      {
        title: "Metal Fabrication",
        description: "Custom metal work",
        price: "$50-$80/hr",
        rating: 4.6,
      },
      {
        title: "Structural Repairs",
        description: "Beam and frame welding",
        price: "$60-$100/hr",
        rating: 4.7,
      },
    ],
  },
  {
    name: "Home Automation",
    icon: "🏡",
    services: [
      {
        title: "Smart Home Setup",
        description: "Integrated systems",
        price: "$1,000-$5,000",
        rating: 4.8,
      },
      {
        title: "Security Systems",
        description: "24/7 monitoring setup",
        price: "$500-$2,000",
        rating: 4.7,
      },
    ],
  },
  {
    name: "Window Installation",
    icon: "🪟",
    services: [
      {
        title: "Energy-Efficient Windows",
        description: "Double pane installation",
        price: "$300-$800/window",
        rating: 4.7,
      },
      {
        title: "Bay Window Installation",
        description: "Custom curved designs",
        price: "$1,000-$3,000",
        rating: 4.6,
      },
    ],
  },
  {
    name: "Drywall Services",
    icon: "🧰",
    services: [
      {
        title: "Installation",
        description: "Wall system construction",
        price: "$1.50-$2.50/sqft",
        rating: 4.6,
      },
      {
        title: "Repair",
        description: "Crack and hole fixes",
        price: "$100-$300",
        rating: 4.5,
      },
    ],
  },
  {
    name: "Pest Control",
    icon: "🐜",
    services: [
      {
        title: "Termite Treatment",
        description: "Complete eradication",
        price: "$500-$2,000",
        rating: 4.7,
      },
      {
        title: "Rodent Removal",
        description: "Humane trapping",
        price: "$150-$300",
        rating: 4.6,
      },
    ],
  },
  {
    name: "Pool Services",
    icon: "🏊",
    services: [
      {
        title: "Maintenance",
        description: "Weekly cleaning",
        price: "$80-$150/week",
        rating: 4.7,
      },
      {
        title: "Heater Installation",
        description: "Year-round swimming",
        price: "$2,000-$5,000",
        rating: 4.6,
      },
    ],
  },
  {
    name: "Garage Services",
    icon: "🚪",
    services: [
      {
        title: "Door Repair",
        description: "Spring and track fixes",
        price: "$150-$400",
        rating: 4.6,
      },
      {
        title: "Floor Coating",
        description: "Epoxy finishes",
        price: "$3-$7/sqft",
        rating: 4.5,
      },
    ],
  },
  {
    name: "Concrete Work",
    icon: "🛠️",
    services: [
      {
        title: "Driveway Pouring",
        description: "Durable surfaces",
        price: "$4-$8/sqft",
        rating: 4.7,
      },
      {
        title: "Stamped Concrete",
        description: "Decorative patterns",
        price: "$8-$12/sqft",
        rating: 4.6,
      },
    ],
  },
  {
    name: "Cabinet Making",
    icon: "🗄️",
    services: [
      {
        title: "Custom Kitchen Cabinets",
        description: "Bespoke storage",
        price: "$5,000-$15,000",
        rating: 4.8,
      },
      {
        title: "Vanity Units",
        description: "Bathroom solutions",
        price: "$800-$2,500",
        rating: 4.7,
      },
    ],
  },
  {
    name: "Snow Removal",
    icon: "❄️",
    services: [
      {
        title: "Residential Plowing",
        description: "Driveway clearing",
        price: "$30-$80/visit",
        rating: 4.5,
      },
      {
        title: "Commercial Salting",
        description: "Ice prevention",
        price: "$100-$300",
        rating: 4.4,
      },
    ],
  },
  {
    name: "Gutter Services",
    icon: "🌧️",
    services: [
      {
        title: "Cleaning",
        description: "Debris removal",
        price: "$100-$300",
        rating: 4.6,
      },
      {
        title: "Installation",
        description: "Seamless gutters",
        price: "$4-$8/linear foot",
        rating: 4.7,
      },
    ],
  },
  {
    name: "Furniture Assembly",
    icon: "🛋️",
    services: [
      {
        title: "Flat-Pack Assembly",
        description: "IKEA and similar",
        price: "$40-$80/item",
        rating: 4.7,
      },
      {
        title: "Office Setup",
        description: "Ergonomic arrangements",
        price: "$50-$100/hr",
        rating: 4.6,
      },
    ],
  },
  {
    name: "Fireplace Services",
    icon: "🔥",
    services: [
      {
        title: "Chimney Cleaning",
        description: "Safety maintenance",
        price: "$150-$400",
        rating: 4.7,
      },
      {
        title: "Gas Fireplace Install",
        description: "Modern heating",
        price: "$2,000-$5,000",
        rating: 4.6,
      },
    ],
  },
  {
    name: "Home Theater",
    icon: "🎥",
    services: [
      {
        title: "Full Setup",
        description: "Surround sound systems",
        price: "$5,000-$15,000",
        rating: 4.8,
      },
      {
        title: "Acoustic Treatment",
        description: "Sound optimization",
        price: "$1,000-$3,000",
        rating: 4.7,
      },
    ],
  },
  {
    name: "Asphalt Paving",
    icon: "🛣️",
    services: [
      {
        title: "Driveway Resurfacing",
        description: "Smooth finishes",
        price: "$3-$7/sqft",
        rating: 4.6,
      },
      {
        title: "Parking Lot Striping",
        description: "Commercial markings",
        price: "$0.10-$0.30/linear foot",
        rating: 4.5,
      },
    ],
  },
  {
    name: "Elevator Services",
    icon: "🛗",
    services: [
      {
        title: "Maintenance",
        description: "Regular inspections",
        price: "$150-$300/month",
        rating: 4.7,
      },
      {
        title: "Modernization",
        description: "System upgrades",
        price: "$10,000-$50,000",
        rating: 4.6,
      },
    ],
  },
  {
    name: "Dock Services",
    icon: "⚓",
    services: [
      {
        title: "Construction",
        description: "Marine structures",
        price: "$50-$100/sqft",
        rating: 4.7,
      },
      {
        title: "Repair",
        description: "Piling replacement",
        price: "$200-$500",
        rating: 4.6,
      },
    ],
  },
  {
    name: "Green Building",
    icon: "🌱",
    services: [
      {
        title: "LEED Certification",
        description: "Sustainable design",
        price: "$2,000-$5,000",
        rating: 4.8,
      },
      {
        title: "Solar Water Heating",
        description: "Eco-friendly systems",
        price: "$4,000-$8,000",
        rating: 4.7,
      },
    ],
  },
];

// Rest of the script.js remains the same

const professionals = [
  {
    name: "John Electrica",
    profession: "Licensed Electrician",
    rating: 4.9,
    projects: 142,
    location: "New York, NY",
  },
  {
    name: "Mike Plumbing",
    profession: "Master Plumber",
    rating: 4.8,
    projects: 89,
    location: "Chicago, IL",
  },
  {
    name: "Sarah Carpenter",
    profession: "Certified Carpenter",
    rating: 4.7,
    projects: 67,
    location: "Los Angeles, CA",
  },
];

function generateCategories() {
  const main = document.querySelector("main");
  categories.forEach((category) => {
    const section = document.createElement("section");
    section.className = "category-section";
    section.innerHTML = `
            <h2 class="category-title">
                ${category.icon} ${category.name}
            </h2>
            <div class="services-grid"></div>
        `;

    const grid = section.querySelector(".services-grid");
    category.services.forEach((service) => {
      const card = document.createElement("div");
      card.className = "service-card";
      card.innerHTML = `
                <h3>${service.title}</h3>
                <p class="service-description">${service.description}</p>
                <div class="service-price">${service.price}</div>
                <div class="rating">⭐ ${service.rating}/5</div>
                <button class="contact-btn">Contact Pro</button>
            `;
      grid.appendChild(card);
    });
    main.appendChild(section);
  });
}

// Add new category rendering function
function generateCategoryCards() {
  const container = document.getElementById("categoriesContainer");
  if (!container) return;

  container.innerHTML = categories
    .map(
      (category) => `
      <div class="category-card">
          <div class="category-icon">${category.icon}</div>
          <h3>${category.name}</h3>
          <ul class="category-services">
              ${category.services
                .slice(0, 3)
                .map(
                  (service) => `
                  <li>${service.title} <span class="service-price">${service.price}</span></li>
              `
                )
                .join("")}
          </ul>
          <button class="btn-view" onclick="location.href='index.html#${category.name
            .toLowerCase()
            .replace(" ", "-")}'">
              View Professionals
          </button>
      </div>
  `
    )
    .join("");
}

// Update DOMContentLoaded handler
document.addEventListener("DOMContentLoaded", () => {
  generateCategories(); // For index.html
  renderPros(professionals); // For index.html
  generateCategoryCards(); // For categories.html
});

function shufflePros() {
  const shuffled = [...professionals].sort(() => Math.random() - 0.5);
  renderPros(shuffled);
}

function renderPros(pros) {
  const container = document.getElementById("prosContainer");
  container.innerHTML = "";
  pros.forEach((pro) => {
    const card = document.createElement("div");
    card.className = "pro-card";
    card.innerHTML = `
            <div class="pro-avatar"></div>
            <h3>${pro.name}</h3>
            <p class="profession">${pro.profession}</p>
            <div class="rating">⭐ ${pro.rating} (${pro.projects} projects)</div>
            <p class="location">📍 ${pro.location}</p>
        `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generateCategories();
  renderPros(professionals);
});
