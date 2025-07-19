
  const projects = [
    {
      id: 1,
      title: "E-commerce Moderne",
      description: "Boutique en ligne avec panier et paiement sécurisé",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      category: "E-commerce",
      tags: ["React", "Node.js", "Stripe"]
    },
    {
      id: 2,
      title: "Site Vitrine Restaurant",
      description: "Site élégant avec réservation en ligne",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      category: "Vitrine",
      tags: ["WordPress", "PHP", "MySQL"]
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Interface d'administration avec graphiques",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "Sur-mesure",
      tags: ["Vue.js", "D3.js", "Python"]
    },
    {
      id: 4,
      title: "Portfolio Créatif",
      description: "Site portfolio pour artiste avec galerie",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      category: "Vitrine",
      tags: ["Next.js", "Framer Motion", "Sanity"]
    },
    {
      id: 5,
      title: "App Mobile Fitness",
      description: "Application de suivi d'entraînement",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: "Sur-mesure",
      tags: ["React Native", "Firebase", "Redux"]
    },
    {
      id: 6,
      title: "Marketplace B2B",
      description: "Plateforme de vente entre entreprises",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "E-commerce",
      tags: ["Laravel", "Vue.js", "PostgreSQL"]
    }
  ];

  const grid = document.getElementById("projects-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderProjects(filter) {
    grid.innerHTML = "";
    const filtered = filter === "Tous" ? projects : projects.filter(p => p.category === filter);
    filtered.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-card-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

  }

  // Initial render
  renderProjects("Tous");

  // Filter click events
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });

  const services = [
    { icon: "🌐", title: "Création de site vitrine", description: "Sites modernes et responsives pour présenter votre activité" },
    { icon: "🔄", title: "Refonte de site", description: "Modernisation et optimisation de votre site existant" },
    { icon: "📱", title: "Responsive design", description: "Sites parfaitement adaptés à tous les écrans" },
    { icon: "🚀", title: "Référencement de base (SEO)", description: "Optimisation pour les moteurs de recherche" },
    { icon: "⚙️", title: "Intégration avec CMS", description: "WordPress, Odoo et autres systèmes de gestion" },
    { icon: "💡", title: "Conseil et accompagnement", description: "De l'idée à la mise en ligne, je vous guide" },
  ];

  const servicesGrid = document.getElementById("services-grid");
  services.forEach(service => {
    const div = document.createElement("div");
    div.className = "service-card";
    div.innerHTML = `
      <div style="display: flex; gap: 1rem; align-items: flex-start;">
        <div style="font-size: 1.5rem;">${service.icon}</div>
        <div>
          <div class="service-title">${service.title}</div>
          <div class="service-description">${service.description}</div>
        </div>
      </div>
    `;
    servicesGrid.appendChild(div);
  });

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Formulaire soumis");
    alert("Message envoyé !");
});
