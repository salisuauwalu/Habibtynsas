const openButton = document.getElementById("openButton");
const opening = document.getElementById("opening");
const lovePage = document.getElementById("lovePage");
const music = document.getElementById("music");
const message = document.getElementById("message");

const messages = [
    "Good morning, Habibty ❤️ Ki tashi lafiya, masoyiyata? Ina fatan kin fara yau da murmushi.",
    "Habibty ta, akwai zuciya daya da take fara kowace rana da tunaninki. ❤️ — Habibi Sas",
    "Good morning my love 🌹 Allah Ya sa yau ta zo miki da farin ciki da albarka.",
    "Kin san me ya fi kyau da safe? Murmushinki ne. Good morning, Habibty 🥰",
    "Ki tashi ki yi murmushi, Habibty. Akwai wanda yake son ganin ki cikin farin ciki kullum. 💕",
    "Allah Ya kare ki yau, Ya bude miki kofofin alheri, Ya sa ki yi farin ciki. 🤲🏽❤️",
    "Good morning, my Habibty. Ko da nesa ta raba mu, zuciyar Habibi ba ta da nisa da ke. 💖",
    "Saƙon farko daga Habibi Sas: Ki kula da kanki sosai, ki yi murmushi, kuma ki yi yini mai kyau. 🌸",
    "Ina fatan yau za ki samu dalilai da yawa na murmushi. Kuma ina fatan ni ma na kasance daya daga cikinsu. ❤️",
    "Ki fara ranar da kwanciyar hankali, sarauniyar zuciyata. Ina miki fatan nasara yau. ✨",
    "Good morning, beautiful soul. Kin zama daya daga cikin abubuwan da suke sa zuciyata farin ciki. 💗",
    "Habibi Sas yana miki good morning da zuciya daya: Allah Ya sa yau ta fi jiya kyau a gare ki. 🌷",
    "Da safe nakan tambayi kaina: yaya zan sa Habibty ta yi murmushi yau? Sai na tuna da wannan saƙon. 🥰",
    "Morning, Habibty. Ko da ban kusa da ke ba, fatan alheri na yana tare da ke. 💕",
    "Ki tashi lafiya, sarauniyar zuciyar Habibi. Yau ma ki haskaka duniyarki da murmushinki. ☀️❤️"
];

let currentMessage = 0;

/* Open the surprise */
openButton.addEventListener("click", function () {
    opening.style.display = "none";
    lovePage.style.display = "flex";

    /* Start music (if a music file has been added) */
    music.play().catch(function () {
        console.log("Music didn't autoplay — either the browser blocked it or no music file was added yet.");
    });

    /* Show first message */
    showMessage();

    /* Automatically change messages */
    setInterval(showMessage, 5500);

    /* Start hearts */
    setInterval(createHeart, 500);
});

/* Show message */
function showMessage() {
    message.classList.remove("pop");
    void message.offsetWidth;
    message.textContent = messages[currentMessage];
    message.classList.add("pop");
    currentMessage++;
    if (currentMessage >= messages.length) {
        currentMessage = 0;
    }
}

/* Create floating heart */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = ["❤️", "💕", "💗", "💖", "💘"][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    document.body.appendChild(heart);
    setTimeout(function () {
        heart.remove();
    }, 10000);
}
