(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Skills
  $(".skill").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });

  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let currentIndex = 0;

  function showImage(index) {
      if (index < 0) {
          currentIndex = galleryItems.length - 1;
      } else if (index >= galleryItems.length) {
          currentIndex = 0;
      }

      const imgSrc = galleryItems[currentIndex].querySelector("img").src;
      lightboxImg.src = imgSrc;
  }

  galleryItems.forEach((item, index) => {
      item.addEventListener("click", function () {
          currentIndex = index;
          showImage(currentIndex);
          lightbox.style.display = "flex";
          sessionStorage.setItem("lightboxOpened", "true");
      });
  });

  function closeLightbox() {
      lightbox.style.display = "none";
  }

  function navigateImage(direction) {
      currentIndex += direction;
      showImage(currentIndex);
  }

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => navigateImage(-1));
  nextBtn.addEventListener("click", () => navigateImage(1));

  document.addEventListener("keydown", function (event) {
      if (lightbox.style.display === "flex") {
          if (event.key === "Escape") {
              closeLightbox();
          } else if (event.key === "ArrowLeft") {
              navigateImage(-1);
          } else if (event.key === "ArrowRight") {
              navigateImage(1);
          }
      }
  });

  // Optional: Add support for mouse scroll
  window.addEventListener("wheel", function (event) {
      if (lightbox.style.display === "flex") {
          event.preventDefault();
          const delta = event.deltaY;
          navigateImage(delta > 0 ? 1 : -1);
      }
  });

  // Check if the page was reloaded or navigated from another page
  const lightboxOpened = sessionStorage.getItem("lightboxOpened");
  if (!lightboxOpened) {
      lightbox.style.display = "none";
  }
});
