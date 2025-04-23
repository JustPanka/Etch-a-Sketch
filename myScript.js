const container = document.querySelector(".container");
const containerSize = container.clientWidth; 

function generateNewGrid(size) {
    if (size == undefined) {
        size = parseInt(prompt("Enter number of squares per side (max 100):"));
    }

    if (isNaN(size) || size <= 0 || size > 100) {
      alert("Please enter a valid number between 1 and 100.");
      return;
    }

    container.textContent = '';

    const squareSize = containerSize / size;

    for (let i = 0; i < size*size; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        // Set initial color
        square.setAttribute('currentDarkness', 0);
        square.style.backgroundColor = `rgba(0, 0, 0, 0)`;

        square.addEventListener("mouseover", () => {
            let darkness = parseFloat(square.getAttribute('currentDarkness'));

            if (darkness < 1) {
                darkness += 0.1;

                // Set new color
                square.setAttribute('currentDarkness', darkness);
                square.style.backgroundColor = `rgba(0, 0, 255, ${darkness})`;
            }
        });
        container.appendChild(square);
    }
}

generateNewGrid(16);

