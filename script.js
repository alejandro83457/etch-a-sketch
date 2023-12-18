const grid = document.querySelector("#grid");

// Function to generate grid with specific dimension.
const generateGrid = (dim) => {
    for (let i = 0; i < dim; i++) {
        const pixel_col = document.createElement("div");
        pixel_col.setAttribute("id", "pixel-col");

        for (let j = 0; j < dim; j++) {
            console.log(`Adding pixel number ${i} ${j}`);

            const pixel = document.createElement("div");
            pixel.setAttribute("id", "pixel");

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

generateGrid(20);
