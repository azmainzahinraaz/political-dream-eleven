function saveAsImage() {
    html2canvas(document.querySelector(".pitch"), {
        scale: 3,  // Increased scale for better resolution
        width: 1200, // Increased canvas width
        height: 900, // Increased canvas height
        useCORS: true, // Enable CORS for external images
        backgroundColor: null // Set to null to use the existing background
    }).then(canvas => {
        // Create a new canvas to draw the background
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = canvas.width;
        finalCanvas.height = canvas.height;
        const ctx = finalCanvas.getContext('2d');

        // Fill the background with the pitch color
        ctx.fillStyle = '#2E7D32'; // Match the pitch background color
        ctx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);

        // Draw the captured canvas on top of the background
        ctx.drawImage(canvas, 0, 0);

        let link = document.createElement("a");
        link.href = finalCanvas.toDataURL("image/png");  // Use PNG format for better quality
        link.download = "Political_Dream_XI.png";   // Download as PNG
        link.click();
    });
}
