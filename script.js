document.addEventListener("DOMContentLoaded", () => {
    const positions = document.querySelectorAll(".position");
    positions.forEach(position => {
        position.addEventListener("click", () => {
            let name = prompt("Enter Politician's Name:");
            if (name) {
                position.innerText = name;
            }
        });
    });
});
