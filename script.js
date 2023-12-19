let rainbowToggle = false;
let currentColor = "black";
let isMouseDown = false;

// Objects
const grid = document.querySelector("#grid");
const resetButton = document.querySelector("#reset-button");
const rainbowButton = document.querySelector("#rainbow-button");
const colorOptions = document.querySelector("#color-options");

// Event listeners
resetButton.addEventListener("click", () => resetGrid());
rainbowButton.addEventListener("click", () => (rainbowToggle = !rainbowToggle));
colorOptions.addEventListener("change", (e) => {
    rainbowToggle = 0;
    currentColor = e.target.value;
});

// Function decides what color the pixel will be painted as.
const chooseColor = () => {
    if (rainbowToggle) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    } else {
        return currentColor;
    }
};

// Function to generate grid with specific dimension.
const generateGrid = (dim) => {
    for (let i = 0; i < dim; i++) {
        const pixel_col = document.createElement("div");
        pixel_col.setAttribute("id", "pixel-col");

        for (let j = 0; j < dim; j++) {
            console.log(`Adding pixel number ${i} ${j}`);

            const pixel = document.createElement("div");
            pixel.setAttribute("id", "pixel");

            // Event listeners will only allow you to draw when you've clicked and dragged.
            pixel.addEventListener("mousedown", () => (isMouseDown = true));
            pixel.addEventListener("mouseup", () => (isMouseDown = false));
            pixel.addEventListener("mouseover", (e) => {
                if (isMouseDown) e.target.style.backgroundColor = chooseColor();
            });

            pixel_col.appendChild(pixel);
        }
        grid.appendChild(pixel_col);
    }
};

// Function to remove the grid.
const deleteGrid = () => {
    let grid_cols = document.querySelectorAll("#pixel-col");
    grid_cols.forEach((col) => {
        col.remove();
    });
};

const resetGrid = () => {
    let pixels = document.querySelectorAll("#pixel");
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "transparent";
    });
};

generateGrid(20);
