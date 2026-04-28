// Bg Control Script
function initBgControl() {
  const bgGrids = document.querySelectorAll(".bg-grid");
  if (bgGrids.length === 0) return;

  function createGrids() {
    bgGrids.forEach(bgGrid => {
        bgGrid.innerHTML = "";
        
        const width = bgGrid.offsetWidth;
        const height = bgGrid.offsetHeight;
        
        const cellSize = 50; 
        
        const cols = Math.ceil(width / cellSize);
        const rows = Math.ceil(height / cellSize);
        const totalCells = cols * rows;

        // Use a fragment for better performance
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.classList.add("bg-grid-cell");
        fragment.appendChild(cell);
        }
        
        bgGrid.appendChild(fragment);
    });
  }

  createGrids();

  // Re-calculate on resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createGrids, 200);
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initBgControl);
