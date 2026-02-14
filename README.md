# 🎈 Helium Concept - Interactive UI & DOM Manipulation

**Projet d'étude** axé sur la création d'interfaces dynamiques et l'implémentation d'effets visuels avancés en JavaScript natif.
Une reproduction de la landing page Helium mettant l'accent sur l'expérience utilisateur et l'interactivité fluide.

![Aperçu du projet](./img/main.png)

## 🎯 Contexte & Objectifs Pédagogiques

Ce projet a été réalisé dans le cadre d'un **cursus d'apprentissage en autodidacte** pour approfondir la gestion des interactions utilisateur.

L'objectif principal était de s'éloigner des interfaces statiques pour explorer le potentiel du **JavaScript Vanilla** dans la création d'effets visuels sans librairies externes (comme Three.js ou GSAP).

**Objectifs validés :**

- Maitrise des **événements de souris** (`mousemove`) et de la propagation.
- Manipulation dynamique des styles CSS via le DOM en temps réel.
- Compréhension des propriétés de fusion de couleurs (**Mix-Blend-Mode**) en Web Design.
- Création d'une mise en page complexe en **CSS Grid & Flexbox**.

## 🛠️ Stack Technique

- **Frontend :** HTML5, CSS3 (Modern Layouts).
- **Scripting :** JavaScript ES6+ (DOM Level 3).
- **Design :** Mix-Blend-Mode, Transitions CSS fluides.

## ✨ Fonctionnalités Développées

### 1. Système de curseur dynamique (Bubble Cursor)
Développement d'un système de suivi de souris composé de trois couches indépendantes :
- Un pointeur central précis.
- Deux halos interactifs utilisant des délais de transition différents pour créer un effet d'inertie.

### 2. Effets Visuels de Contraste
Utilisation de la propriété `mix-blend-mode: difference` sur les éléments mobiles, permettant au curseur d'adapter sa couleur en fonction du fond survolé (texte ou image), garantissant une lisibilité constante.

### 3. Interface Responsive
Mise en place d'une structure adaptative utilisant Grid et Flexbox pour assurer la cohérence du design sur différents formats d'écran.

## 🏗️ Architecture du Code

Le projet est structuré de manière simple et efficace pour favoriser la performance :
- **Logique d'animation :** Centralisée dans un script qui écoute les mouvements sur l'objet `window`.
- **Gestion des nœuds :** Utilisation de `querySelectorAll` pour appliquer des transformations simultanées à plusieurs éléments graphiques.

## 🧠 Challenges Techniques Résolus

### L'Interaction Curseur vs Éléments Cliquables

Un problème majeur est survenu : les "bulles" suivant la souris passaient au-dessus des liens, empêchant le clic sur la navigation.

- _Solution :_ Utilisation de la propriété CSS `pointer-events: none` sur les éléments décoratifs pour les rendre "transparents" aux clics, tout en conservant leur rendu visuel.

### Performance des Animations

L'injection répétée de styles dans le DOM lors de chaque mouvement de souris peut être coûteuse en ressources.

- _Solution :_ Optimisation via des transitions CSS sur les propriétés de position pour déléguer le calcul de l'inertie au moteur de rendu du navigateur plutôt qu'à la logique JS.

## ⚙️ Installation & Lancement

Le projet est une application front-end pure, aucun serveur backend n'est requis.

1. **Cloner le dépôt :**
```bash
git clone [https://github.com/EnzoRouet/Projet-4](https://github.com/EnzoRouet/Projet-4)
```

2. **Lancer le projet :**
Ouvrez simplement le fichier index.html dans votre navigateur ou utilisez l'extension Live Server sur VS Code.
