const card = document.getElementById("scene-container");
let cursor = document.querySelector(".cursor");
let allButtons = document.querySelectorAll(".btnAll");
let textContainer = document.querySelector(".scene-container");
let container = document.querySelector(".container");
let copyButton = document.querySelector(".copy-btn");

card.addEventListener("mousemove", (e) => {
    card.style.transition = "transform 0.5s ease-out";
    const { innerWidth, innerHeight } = window;
    const xRotation = ((e.clientY / innerHeight) * 2 - 1) * -15;
    const yRotation = ((e.clientX / innerWidth) * 2 - 1) * 15;

    card.style.transform = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

card.addEventListener("mouseleave", () => {
    card.style.transition = "transform 1s ease-out";
    card.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
});

copyButton.addEventListener("click", () => {
    const clonedContainer = textContainer.cloneNode(true);
    clonedContainer.removeAttribute("style");
    const innerCopyButton = clonedContainer.querySelector(".btnAll.copy-btn");
    if (innerCopyButton) {
        innerCopyButton.remove();
    }
    const htmlContent = clonedContainer.outerHTML;
    navigator.clipboard.writeText(htmlContent);
    copyButton.innerText = "COPIED";
    setTimeout(() => {
        copyButton.innerText = "COPY";
    }, 2000);
})

if (window.innerWidth > 600) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    })

    allButtons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            cursor.style.width = "75px";
            cursor.style.height = "75px";
            cursor.style.border = "2px solid #fff";
        });

        btn.addEventListener("mouseleave", () => {
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.border = "10px solid #fff";
        });
    });
}