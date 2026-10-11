import { practicals } from "./data.js";

const grid = document.getElementById("practicalGrid");

grid.innerHTML = practicals.map((practical, index) => `
  <a href="${practical.link}">
    <div class="grid-item">
      <h1>${index + 1}.</h1>
      <p>${practical.description}</p>
    </div>
  </a>
`).join("");