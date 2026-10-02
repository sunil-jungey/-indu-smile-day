const scenes =
    document.querySelectorAll(".scene");


function showScene(id) {

    const current =
        document.querySelector(".scene.active");

    const next =
        document.getElementById(id);

    if (!next || current === next) {
        return;
    }

    if (current) {

        current.classList.add("leaving");

        setTimeout(function () {

            current.classList.remove(
                "active",
                "leaving"
            );

            next.classList.add("active");

        }, 400);

    } else {

        next.classList.add("active");
    }
}


/* STORY */

document
    .getElementById("startButton")
    .addEventListener(
        "click",
        function () {

            showScene("smileIntro");

        }
    );


document
    .getElementById("photoOneButton")
    .addEventListener(
        "click",
        function () {

            showScene("smilePhotoOne");

        }
    );

document
    .getElementById("smilePhotoNext")
    .addEventListener(
        "click",
        function () {

            showScene("photoOne");

        }
    );

document
    .getElementById("photoTwoButton")
    .addEventListener(
        "click",
        function () {

            showScene("photoTwo");

        }
    );


document
    .getElementById("videoButton")
    .addEventListener(
        "click",
        function () {

            showScene("videoScene");

        }
    );


document
    .getElementById("wishButton")
    .addEventListener(
        "click",
        function () {

            const video =
                document.getElementById(
                    "smileVideo"
                );

            video.pause();

            showScene("wishScene");

        }
    );


document
    .getElementById("finalButton")
    .addEventListener(
        "click",
        function () {

            showScene("finalScene");

        }
    );


/* =========================================
   HAPPY BACKGROUND PARTICLES

   Random 😊 🌼 ✨ 💛 around the whole screen
   ========================================= */

const particles = [
    "😊",
    "✨",
    "🌼",
    "💛"
];


function random(min, max) {

    return (
        Math.random() *
        (max - min) +
        min
    );
}


function createParticle() {

    const item =
        document.createElement("span");

    item.className =
        "smile-particle";


    item.textContent =
        particles[
            Math.floor(
                Math.random() *
                particles.length
            )
        ];


    item.style.left =
        random(2, 96) + "vw";


    item.style.top =
        random(4, 94) + "vh";


    item.style.fontSize =
        random(11, 25) + "px";


    item.style.setProperty(
        "--duration",
        random(7, 14) + "s"
    );


    item.style.setProperty(
        "--x1",
        random(-15, 15) + "px"
    );


    item.style.setProperty(
        "--y1",
        random(-15, 15) + "px"
    );


    item.style.setProperty(
        "--x2",
        random(-35, 35) + "px"
    );


    item.style.setProperty(
        "--y2",
        random(-35, 35) + "px"
    );


    item.style.setProperty(
        "--x3",
        random(-25, 25) + "px"
    );


    item.style.setProperty(
        "--y3",
        random(-30, 30) + "px"
    );


    item.style.animationDelay =
        random(-12, 0) + "s";


    document.body.appendChild(item);
}


for (let i = 0; i < 25; i++) {

    createParticle();

}
const induTexts = ["I", "N", "D", "U", "🥰"];

function createInduGroup(parent, x, y, delay = 0) {
  const group = document.createElement("div");
  group.className = "indu-group";
  group.style.left = x + "px";
  group.style.top = y + "px";
  parent.appendChild(group);

  const pieces = [];

  induTexts.forEach((text, index) => {
    const piece = document.createElement("span");
    piece.className = "indu-piece";
    piece.textContent = text;

    const randomX = Math.random() * 180;
    const randomY = Math.random() * 80;

    piece.style.left = randomX + "px";
    piece.style.top = randomY + "px";
    piece.style.animation = `tinyFloat ${2 + Math.random() * 2}s ease-in-out infinite alternate`;

    group.appendChild(piece);
    pieces.push(piece);

    setTimeout(() => {
      piece.classList.add("show");
    }, delay + 100);
  });

  // form INDU🥰
  setTimeout(() => {
    const startX = 10;
    const gap = 36;
    const finalY = 35;

    pieces.forEach((piece, index) => {
      piece.style.animation = "none";
      piece.style.left = (startX + index * gap) + "px";
      piece.style.top = finalY + "px";
      piece.classList.add("final");
    });
  }, delay + 2200);

  // hold formed text a bit, then fade
  setTimeout(() => {
    pieces.forEach(piece => {
      piece.style.opacity = "0";
    });
  }, delay + 4300);

  // remove group after animation
  setTimeout(() => {
    group.remove();
  }, delay + 5600);
}

function startInduFlow() {
  const layer = document.getElementById("induFlowLayer");
  if (!layer) return;

  const width = window.innerWidth;
  const height = window.innerHeight;

  // clear old groups if any
  layer.innerHTML = "";

  // 4 positions on screen
  const positions = [
    { x: width * 0.10, y: height * 0.15 },
    { x: width * 0.58, y: height * 0.18 },
    { x: width * 0.12, y: height * 0.62 },
    { x: width * 0.55, y: height * 0.68 }
  ];

  positions.forEach((pos, i) => {
    createInduGroup(layer, pos.x, pos.y, i * 600);
  });
}

// start once page loads
window.addEventListener("load", () => {
  startInduFlow();

  // repeat continuously
  setInterval(() => {
    startInduFlow();
  }, 6500);
});