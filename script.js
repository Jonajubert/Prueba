document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const images = document.querySelectorAll(".carousel-image");

  function showNextImage() {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
  }

  setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos

  // Pop-up de la cena
  const popup = document.getElementById("popup");
  const dinnerVoucher = document.getElementById("dinner-voucher");
  const closePopup = document.querySelector(".close");

  dinnerVoucher.addEventListener("click", function () {
      popup.style.display = "block";
  });

  closePopup.addEventListener("click", function () {
      popup.style.display = "none";
  });

  // Botón que se mueve
  const travelVoucher = document.getElementById("travel-voucher");

  travelVoucher.addEventListener("mouseover", function () {
      const newX = Math.random() * (window.innerWidth - 200);
      const newY = Math.random() * (window.innerHeight - 100);
      travelVoucher.style.position = "absolute";
      travelVoucher.style.left = `${newX}px`;
      travelVoucher.style.top = `${newY}px`;
  });
});
