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