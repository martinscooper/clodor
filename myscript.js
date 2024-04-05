const createItem = (name, desc, img, position) => {
  const img2 = document.createElement("img");
  img2.src = img;
  img2.className = "img-fluid";

  const image = document.createElement("div");
  image.style = "max-height:500px; width:300px; overflow:hidden"
  image.appendChild(img2);
  
  const innerH3 = document.createElement("h5");
  innerH3.className = "text-center card-title plant-name";
  innerH3.textContent = name;
  innerH3.style = "font-style: italic";

  const innerP = document.createElement("p");
  innerP.innerHTML = desc;
  innerP.className = "text-center lead card-text text-muted";
  innerP.style = "";
  
  const contentDiv = document.createElement("div");
  contentDiv.className = "card-body";
  contentDiv.appendChild(innerH3);
  contentDiv.appendChild(innerP);

  const divInner = document.createElement("div");
  divInner.className = "card my-3 back";
  divInner.style = "border: none; display: flex; flex-direction: column; align-items: center"
  divInner.appendChild(image);
  divInner.appendChild(contentDiv);

  const divOuter = document.createElement("div");
  divOuter.className = `col-12 col-lg-4 back`;
  divOuter.appendChild(divInner);
  divOuter.style = "display: flex; justify-content: center";

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
  "Regame cada dos semanas con agua de té",
  "de boldo o manzanilla",
  "pero no de peperina",

  "Girame para mirar al Sol",
  "o poneme de espaldas a la noche",
  "o lo que sientas",

  "Googleame por rara",
  "solo vivo si",
  "me dejan morir",

  "Regame si querés",
  "regame por las dudas",
  "regame ahora ya y siempre",

  "Pará, mejor no, no me riegues,",
  "y si me regás...",
  "no, mejor no me riegues",

  "Mejor contame un cuento",
  "que trate",
  "de Dios",

  "Y que Dios sea",
  "como siempre",
  "un deseo olvidado",
];

const descriptions = [];

new Array(21).fill(32).forEach((_, i) => {
  const item = createItem(names[i], desc[i], `assets/plant${i + 1}.jpg`, i % 3);
  list.appendChild(item);
});

const poem = document.getElementById("poem");
poem.style = "margin-top: 40px;margin-bottom: 30px;";
const poemTitle = document.createElement("h4")  ;
poemTitle.innerHTML = "Instrucciones para regar un dpto";
poemTitle.className = "pb-2 poem-title text-center";
poem.appendChild(poemTitle);

// new Array(21).fill(32).forEach((_, i) => {
//   const line = document.createElement("h6");
//   line.innerHTML = desc[i];
//   line.className = "text-muted";
//   poem.appendChild(line);

//   if (i % 3 === 2) {
//     poem.appendChild(document.createElement("br"));
//   }
// });




const poem2 = document.getElementById("poem2");
poem2.style = "margin-top: 30px;margin-bottom: 30px;";
poem2.className = 'poem'
let stanza;
new Array(21).fill(32).forEach((_, i) => {
  const mod = i % 3;

  if (mod === 0) {
    stanza = document.createElement('ul')
  }
  const line = document.createElement("li");
  line.className = 'text-muted text-center'
  line.innerHTML = mod === 0 ? `${desc[i][0].toUpperCase()}${desc[i].slice(1)}` : desc[i];
  stanza.appendChild(line);

  if (i % 3 === 2) {
    poem2.appendChild(stanza);
    poem2.appendChild(document.createElement("br"));
  }
});


