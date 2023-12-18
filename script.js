let pixels = [];
const grid = document.querySelector("#grid");

let dimension = 16;
for (let i = 0; i < dimension; i++) {
    const pixel_col = document.createElement("div");
    pixel_col.setAttribute("id", "pixel-col");

    for (let j = 0; j < dimension; j++) {
        console.log(`Adding pixel number ${i} ${j}`);

        const pixel = document.createElement("div");
        pixel.setAttribute("id", "pixel");

        pixel_col.appendChild(pixel);
    }
    grid.appendChild(pixel_col);
}
