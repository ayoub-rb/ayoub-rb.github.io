const modal = document.getElementById("modal");
const buttons = document.querySelectorAll(".order-btn");
const closeBtn = document.querySelector(".close");
const productText = document.getElementById("selectedProduct");

let selectedProduct = "";

buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        const card = e.target.closest(".product-card");
        const name = card.querySelector("h3").innerText;
        const size = card.querySelector(".size").value;
        const color = card.querySelector(".color").value;

        selectedProduct = `${name} | Taille: ${size} | Couleur: ${color}`;
        productText.innerText = selectedProduct;

        modal.style.display = "flex";
    });
});

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
};

// WhatsApp order
document.getElementById("confirm").addEventListener("click", () => {
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const adresse = document.getElementById("adresse").value;
    const tel = document.getElementById("tel").value;
    const ville = document.getElementById("ville").value;

    const message = encodeURIComponent(
        `Nouvelle commande Ayoub Shop\n\nProduit: ${selectedProduct}\nNom: ${nom}\nPrénom: ${prenom}\nAdresse: ${adresse}\nTéléphone: ${tel}\nVille: ${ville}`
    );

    window.open(`https://wa.me/212626508323?text=${message}`, "_blank");
});
