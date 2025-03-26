import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

animate(".scene-container", { scale: [0.4, 1] }, { ease: "circInOut", duration: 1 }).finished.then(() => {
    splitTextAnimation("Text-Content-Heading")
    splitTextAnimation2("Text-Content")
});

function splitTextAnimation(elementId) {
    const element = document.getElementById(elementId);
    element.style.opacity = 1;
    const text = element.textContent;
    const words = text.split(" ");
    console.log("Element found:", element);
    console.log("Words split:", words);
    element.innerHTML = ""

    words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = word;
        span.classList.add("word");
        element.appendChild(span);
        element.appendChild(document.createTextNode(" "));

        animate(span, { opacity: 1, y: [20, 0] }, { delay: index * 0.2, duration: 1, easing: "ease-out" });
    });
}

function splitTextAnimation2(elementId) {
    const element = document.getElementById(elementId);
    animate(element, { opacity: 1, y: [20, 0] }, { duration: 2, easing: "ease-out" })
}
