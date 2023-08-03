// variables
let productImg = document.getElementsByClassName("product-img")[0];
let modalContainer = document.getElementsByClassName("modal-container")[0];
let closeSign = document.getElementsByTagName("svg")[0];
let modalImg = document.getElementsByClassName("modal-img")[0];
let modalCaption = document.getElementsByClassName("modal-caption")[0];

// onclick events
function showModal() {
  modalContainer.style.display = "block";
  modalImg.src = productImg.src;
  modalCaption.innerHTML = productImg.alt;
}

function hideModal() {
  modalContainer.style.display = "none";
}