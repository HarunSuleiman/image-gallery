
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox.querySelector("img");
    const prevBtn = lightbox.querySelector(".prev");
    const nextBtn = lightbox.querySelector(".next");
    const closeBtn = lightbox.querySelector(".close");

    let currentIndex = 0;

    // Open lightbox
    galleryImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
      });
    });

    // Show current image
    function showImage() {
      lightboxImg.src = galleryImages[currentIndex].src;
    }

    // Navigation
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage();
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showImage();
    });

    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    // Filter functionality
    const buttons = document.querySelectorAll(".filter-btns button");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        galleryImages.forEach(img => {
          if (filter === "all" || img.dataset.category === filter) {
            img.style.display = "block";
          } else {
            img.style.display = "none";
          }
        });
      });
    });