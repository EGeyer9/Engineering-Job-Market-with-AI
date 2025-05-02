const data = [
  {
    title: "Mechanical Design Engineer",
    classic: "Designs mechanical components and systems using CAD tools and engineering calculations.",
    ai: "AI can generate and evaluate multiple design iterations automatically using generative design.",
    hybrid: "Engineers now use AI tools to explore more design options, optimize in real time, and prototype faster."
  },
  {
    title: "Software Engineer",
    classic: "Writes, tests, and debugs software for web, apps, or embedded systems.",
    ai: "AI tools like GitHub Copilot or ChatGPT generate code, detect bugs, and automate testing.",
    hybrid: "Software engineers collaborate with AI to focus on system architecture, security, and innovation."
  },
  {
    title: "Civil Engineer",
    classic: "Designs and oversees the construction of infrastructure like roads, bridges, and buildings.",
    ai: "AI models predict material behavior, simulate structural loads, and detect faults during inspection.",
    hybrid: "Civil engineers combine AI simulations with real-world data to make construction safer and greener."
  },
  {
    title: "Manufacturing Engineer",
    classic: "Improves factory systems and workflows to enhance production efficiency.",
    ai: "AI automates inspection and identifies process failures using sensors and data analytics.",
    hybrid: "Engineers guide smart machines and adaptive robotics to balance flexibility and precision."
  },
  {
    title: "Electrical Engineer",
    classic: "Designs circuits, systems, and electronic devices across industries.",
    ai: "AI recommends components and simulates circuit behavior under different conditions.",
    hybrid: "Electrical engineers work with AI to design smarter devices, energy grids, and IoT systems."
  },
  {
    title: "Biomedical Engineer",
    classic: "Develops medical equipment, imaging systems, and prosthetic devices.",
    ai: "AI helps analyze patient data, model anatomy, and identify optimal treatment plans.",
    hybrid: "Engineers and AI collaborate to build adaptive prosthetics, diagnostic tools, and smart wearables."
  },
  {
    title: "Aerospace Engineer",
    classic: "Designs aircraft, spacecraft, and missile systems through simulation and testing.",
    ai: "AI optimizes flight control, monitors engine performance, and supports autonomous systems.",
    hybrid: "Aerospace engineers use AI to speed up mission planning and vehicle optimization."
  },
  {
    title: "Environmental Engineer",
    classic: "Solves pollution, sustainability, and waste management challenges.",
    ai: "AI forecasts environmental impact, models water systems, and detects pollutants in real time.",
    hybrid: "Engineers apply AI to design smarter, more sustainable infrastructure and monitor ecosystems."
  }
];

const container = document.getElementById("container");

function createCard(job, index) {
  const card = document.createElement("div");
  card.className = "card";
  card.style.animationDelay = `${index * 0.1}s`;

  const title = document.createElement("h3");
  title.textContent = job.title;

  const classic = document.createElement("p");
  classic.innerHTML = `<strong>Traditional Role:</strong> ${job.classic}`;

  const ai = document.createElement("p");
  ai.innerHTML = `<strong>AI Disruption:</strong> ${job.ai}`;
  ai.classList.add("hidden");

  const hybrid = document.createElement("p");
  hybrid.innerHTML = `<strong>Human + AI:</strong> ${job.hybrid}`;
  hybrid.classList.add("hidden");

  card.appendChild(title);
  card.appendChild(classic);
  card.appendChild(ai);
  card.appendChild(hybrid);

  card.addEventListener("click", () => {
    ai.classList.toggle("hidden");
    hybrid.classList.toggle("hidden");
  });

  container.appendChild(card);
}

data.forEach((job, index) => createCard(job, index));
