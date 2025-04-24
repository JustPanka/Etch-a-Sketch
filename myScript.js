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
                // Increase darkness
                darkness = Number( (darkness + 0.1).toFixed(1) );
                square.setAttribute('currentDarkness', darkness);
            }

            // Assign random color with current darkness
            function getRandomColor() {
                var r = Math.floor(Math.random() * 256); // Random between 0-255
                var g = Math.floor(Math.random() * 256); // Random between 0-255
                var b = Math.floor(Math.random() * 256); // Random between 0-255
                return { r, g, b };
            }
            var color = getRandomColor(); // Call the function
            square.style.backgroundColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${darkness})`;
        });
        container.appendChild(square);
    }
}

generateNewGrid(16);
