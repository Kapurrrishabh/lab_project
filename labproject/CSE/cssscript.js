var heading = document.querySelector(".intro p");
var text = heading.textContent;

function typeEffect(text, index) {
    if (index < text.length) {
        heading.textContent += text[index];
        setTimeout(function () {
            typeEffect(text, index + 1);
        }, 150);
    } else {
        setTimeout(clearHeading, 500);
    }
}
function clearHeading() {
    heading.textContent = "";
    typeEffect(text, 0);
}
typeEffect(text, 0);
document.querySelectorAll(".subcontainer").forEach((container) => {
    const subcontainer = container.querySelector(".subjects");
    const backbtn = container.querySelector(".backbtn .btn");
    const forbtn = container.querySelector(".backbtn .btn2");
    const scrollAmount = 200;
    function slideleft() {
        subcontainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
    function slideright() {
        subcontainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
    backbtn.addEventListener("click", slideleft);
    forbtn.addEventListener("click", slideright);
});
document.querySelectorAll(".coursedisc").forEach((container) => {
    const subcontainer = container.querySelector(".Allsubjects");
    const upbtn = container.querySelector(".upbtn");
    const downbtn = container.querySelector(".upbtn2");
    const scrollAmount = 250;

    function slideUp() {
        subcontainer.scrollBy({ top: -scrollAmount, behavior: "smooth" });
    }

    function slideDown() {
        subcontainer.scrollBy({ top: scrollAmount, behavior: "smooth" });
    }

    upbtn.addEventListener("click", slideUp);
    downbtn.addEventListener("click", slideDown);
});
const checkboxSem1 = document.getElementById("fsem");
const checkboxSem2 = document.getElementById("ssem");
const checkboxSem3 = document.getElementById("tsem");
const courseContainerSem1 = document.getElementById("sem1");
const courseContainerSem2 = document.getElementById("sem2");
const courseContainerSem3 = document.getElementById("sem3");
const label1 = document.getElementById("label1s");
const label2 = document.getElementById("label2s");
const label3 = document.getElementById("label3s");

checkboxSem1.addEventListener("change", function () {
    if (this.checked) {
        courseContainerSem1.style.display = "block";
        label1.style.color = "red";
    } else {
        courseContainerSem1.style.display = "none";
        label1.style.color = "black";
    }
});

checkboxSem2.addEventListener("change", function () {
    if (this.checked) {
        courseContainerSem2.style.display = "block";
        label2.style.color = "red";
    } else {
        courseContainerSem2.style.display = "none";
        label2.style.color = "black";
    }
});
checkboxSem3.addEventListener("change", function () {
    if (this.checked) {
        courseContainerSem3.style.display = "block";
        label3.style.color = "red";
    } else {
        courseContainerSem3.style.display = "none";
        label3.style.color = "black";
    }
});
