document.addEventListener("DOMContentLoaded", function () {
    const btnSobre = document.getElementById("btn-sobre");
    const fieldsetSobre = document.querySelector("fieldset.sobre");
    const btnFecharSobre = document.querySelector("fieldset.sobre #close");

    btnSobre.addEventListener("click", function (e) {
        e.preventDefault();
        if (fieldsetSobre.style.display === "flex") {
            fieldsetSobre.style.display = "none";
            return;
        }
        else {
            fieldsetSobre.style.display = "flex";
        }
    });

    btnFecharSobre.addEventListener("click", function (e) {
        e.preventDefault();
        fieldsetSobre.style.display = "none";
    });
});