const buttons = document.querySelectorAll(".menu-btn");
const tabs = document.querySelectorAll(".tab");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        tabs.forEach(tab => tab.classList.remove("active"));
        button.classList.add("active");
        const target = button.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
    });
});
