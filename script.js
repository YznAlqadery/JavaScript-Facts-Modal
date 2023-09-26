const factOneBtn = document.querySelector(".btn-modal-1");
const factOneModal = document.querySelector(".fact-1 ");
const factTwoBtn = document.querySelector(".btn-modal-2");
const factTwoModal = document.querySelector(".fact-2");
const factThreeBtn = document.querySelector(".btn-modal-3");
const factThreeModal = document.querySelector(".fact-3");
const overlay = document.querySelector(".overlay");
const closeModalButton = document.querySelectorAll(".close-modal");

factOneBtn.addEventListener("click", () => {
  factOneModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
factTwoBtn.addEventListener("click", () => {
  factTwoModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
factThreeBtn.addEventListener("click", () => {
  factThreeModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

function closeModal() {
  factOneModal.classList.add("hidden");
  factTwoModal.classList.add("hidden");
  factThreeModal.classList.add("hidden");
  overlay.classList.add("hidden");
}
for (let i = 0; i < closeModalButton.length; i++) {
  closeModalButton[i].addEventListener("click", closeModal);
}
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (
      !factOneModal.classList.contains("hidden") ||
      !factTwoModal.classList.contains("hidden") ||
      !factThreeModal.classList.contains("hidden")
    ) {
      closeModal();
    }
  }
});
