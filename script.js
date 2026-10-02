/* =========================================
   SCENE SYSTEM
   ========================================= */
const scenes =
    document.querySelectorAll(".scene");
function showScene(id) {
    const current =
        document.querySelector(
            ".scene.active"
        );
    const next =
        document.getElementById(id);
    if (!next || current === next) {
        return;
    }
    if (current) {
        current.classList.add(
            "leaving"
        );
        setTimeout(function () {
            current.classList.remove(
                "active",
                "leaving"
            );
            next.classList.add(
                "active"
            );
        }, 450);
    } else {
        next.classList.add(
            "active"
        );
    }
}
/* =========================================
   STORY BUTTONS
   ========================================= */
document
    .getElementById("startButton")
    .addEventListener(
        "click",
        function () {
            showScene(
                "smileIntro"
            );
        }
    );
document
    .getElementById(
        "firstMemoryButton"
    )
    .addEventListener(
        "click",
        function () {
            showScene(
                "smileMemory"
            );
        }
    );
document
    .getElementById(
        "memoryNext"
    )
    .addEventListener(
        "click",
        function () {
            showScene(
                "photoOne"
            );
        }
    );
document
    .getElementById(
        "photoTwoButton"
    )
    .addEventListener(
        "click",
        function () {
            showScene(
                "photoTwo"
            );
        }
    );
document
    .getElementById(
        "videoButton"
    )
    .addEventListener(
        "click",
        function () {
            showScene(
                "videoScene"
            );
        }
    );
document
    .getElementById(
        "wishButton"
    )
    .addEventListener(
        "click",
        function () {
            const video =
                document.getElementById(
                    "smileVideo"
                );
            video.pause();
            showScene(
                "wishScene"
            );
        }
    );
document
    .getElementById(
        "finalButton"
    )
    .addEventListener(
        "click",
        function () {
            showScene(
                "finalScene"
            );
        }
    );
/* =========================================
   TRANSPARENT FLOATING
   I N D U 🥰
   IMPORTANT:
   They DO NOT meet together.
   They appear only occasionally,
   float gently,
   and slowly disappear.
   ========================================= */
const floatingLetters = [
    "I",
    "N",
    "D",
    "U",
    "🥰"
];
function randomBetween(
    min,
    max
) {
    return (
        Math.random() *
        (max - min) +
        min
    );
}
function createFloatingLetter() {
    const item =
        document.createElement(
            "span"
        );
    item.className =
        "name-float";
    item.textContent =
        floatingLetters[
            Math.floor(
                Math.random() *
                floatingLetters.length
            )
        ];
    /*
       Appear anywhere,
       but avoid extreme edges.
    */
    item.style.left =
        randomBetween(
            7,
            87
        ) + "vw";
    item.style.top =
        randomBetween(
            10,
            82
        ) + "vh";
    /*
       Mostly small/subtle
    */
    item.style.setProperty(
        "--float-size",
        randomBetween(
            22,
            37
        ) + "px"
    );
    /*
       Long slow appearance
    */
    const life =
        randomBetween(
            8,
            14
        );
    item.style.setProperty(
        "--float-life",
        life + "s"
    );
    /*
       Gentle movement only
    */
    item.style.setProperty(
        "--float-x1",
        randomBetween(
            -25,
            25
        ) + "px"
    );
    item.style.setProperty(
        "--float-y1",
        randomBetween(
            -20,
            20
        ) + "px"
    );
    item.style.setProperty(
        "--float-x2",
        randomBetween(
            -35,
            35
        ) + "px"
    );
    item.style.setProperty(
        "--float-y2",
        randomBetween(
            -30,
            30
        ) + "px"
    );
    item.style.setProperty(
        "--float-x3",
        randomBetween(
            -30,
            30
        ) + "px"
    );
    item.style.setProperty(
        "--float-y3",
        randomBetween(
            -35,
            35
        ) + "px"
    );
    document.body.appendChild(
        item
    );
    setTimeout(function () {
        item.remove();
    }, (life + 1) * 1000);
}
/* =========================================
   OCCASIONAL APPEARANCE
   ========================================= */
/*
   Create only a few when
   the website first opens.
*/
for (let i = 0; i < 4; i++) {
    setTimeout(
        createFloatingLetter,
        i * 1500
    );
}
/*
   Then create ONE every
   few seconds.
   This keeps it subtle.
*/
setInterval(
    function () {
        createFloatingLetter();
        /*
           Occasionally create
           a second one elsewhere.
        */
        if (Math.random() > 0.72) {
            setTimeout(
                createFloatingLetter,
                1200
            );
        }
    },
    4200
);