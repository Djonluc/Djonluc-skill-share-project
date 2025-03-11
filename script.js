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
        title: "Lighting Installation",
        description: "Indoor/outdoor lighting solutions",
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
        title: "Emergency Repair",
        description: "24/7 plumbing services",
        price: "$70-$150/hr",
        rating: 4.8,
      },
      {
        title: "Water Heater Installation",
        description: "Professional installation",
        price: "$200-$800",
        rating: 4.6,
      },
    ],
  },
];

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
