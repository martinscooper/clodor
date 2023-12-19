const createItem = (name, desc, img) => {
  const image = document.createElement("img");
  image.src = img;
  image.className = "card-image-top";

  const innerH3 = document.createElement("h5");
  innerH3.className = "text-center card-title ";
  innerH3.textContent = name;
  innerH3.style = "font-style: italic";

  const innerP = document.createElement("p");
  innerP.innerHTML = desc;
  innerP.className = "text-center lead card-text";
  innerP.style = "";

  const contentDiv = document.createElement("div");
  contentDiv.className = "card-body";
  contentDiv.appendChild(innerH3);
  contentDiv.appendChild(innerP);

  const divInner = document.createElement("div");
  divInner.className = "card my-3";
  divInner.appendChild(image);
  divInner.appendChild(contentDiv);

  const divOuter = document.createElement("div");
  divOuter.className = "col-6 col-sm-4";
  divOuter.appendChild(divInner);
  divOuter.style = "display: flex; align-self: stretch;";

  return divOuter;
};

const list = document.getElementById("target");

const names = [
  "Nelumbo ciliata",
  "Rhus mongolica",
  "Muscari campanulata",
  "Amaranthus aphylla",
  "Tropaeolum ensata",
  "Solidago anagyroides",
  "Bloomeria opulifolius",
  "Mediola leptopus",
  "Canna cordifolia",
  "Phelloendro lyonii",
  "Mahonia mollis",
  "Habranthus texensis",
  "Sarracenia selloana",
  "Panicum alseuosmoides",
  "Omphalodes albus",
  "Gentiana laevis",
  "Eragrostrum grandis",
  "Artemesia parviflora",
  "Helenium ciraeensis",
  "Calonyction virginianum",
  "Ageratum aristosa",
];

const desc = [
  "regame cada dos semanas con agua de té",
  "de boldo o manzanilla",
  "o té de peperina",

  "girame para mirar al sol",
  "o poneme de espaldas a la noche",
  "o lo que sientas",

  "googleame por rara",
  "solo vivo si",
  "me dejan morir",

  "regame si querés",
  "regame por las dudas",
  "regame",

  "mejor no me riegues,",
  "y si me regás...",
  "no, mejor no me riegues",

  "mejor contame un cuento",
  "que trate",
  "de Dios",

  "y que Dios sea",
  "como siempre",
  "un deseo olvidado",
];

const descriptions = [];

new Array(21).fill(32).forEach((_, i) => {
  const item = createItem(names[i], desc[i], `assets/plant${i + 1}.jpg`);
  list.appendChild(item);
});

const poem = document.getElementById("poem");
poem.style = "margin-top: 30px;margin-bottom: 30px;"
const poemTitle = document.createElement("h4");
poemTitle.innerHTML = "Instrucciones para regar un dpto";
poemTitle.className = "pb-2"
poem.appendChild(poemTitle);

new Array(21).fill(32).forEach((_, i) => {
  const line = document.createElement("h6");
  line.innerHTML = desc[i];
  line.className = "text-muted";
  line.className = `${line.className}`;
  poem.appendChild(line);
});
