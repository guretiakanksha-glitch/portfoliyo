// Typing animation

const text = [
  "ECE Student",
  "Python Developer",
  "Web Developer",
  "Problem Solver"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

const heading = document.querySelector(".left h3");

function type() {

    current = text[i];

    if (!isDeleting) {

        heading.textContent = current.substring(0, j++);

        if (j > current.length) {

            isDeleting = true;

            setTimeout(type, 1000);

            return;
        }

    } else {

        heading.textContent = current.substring(0, j--);

        if (j == 0) {

            isDeleting = false;

            i++;

            if (i == text.length)
                i = 0;
        }

    }

    setTimeout(type, isDeleting ? 80 : 120);
}

type();
