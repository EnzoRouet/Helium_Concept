// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

bubble1.style.height = 15 + "px";
bubble1.style.width = 15 + "px";

bubble2.style.height = 110 + "px";
bubble2.style.width = 110 + "px";

bubble3.style.height = 210 + "px";
bubble3.style.width = 210 + "px";

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach((bubbles) => {
  window.addEventListener("mousemove", (e) => {
    bubbles.style.left = e.pageX + "px";
    bubbles.style.top = e.pageY + "px";
  });
});

// S'assurer que les liens sont clickables

/* Fait dans le CSS dans le .bubble */

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

bubble2.style.mixBlendMode = "difference";
bubble3.style.mixBlendMode = "difference";
