(function () {
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var slides = [
    { src: "assets/photos/20251203_071400340_iOS.jpg", alt: "Memory Project — studio photograph 1" },
    { src: "assets/photos/20251203_071831484_iOS.jpg", alt: "Memory Project — studio photograph 2" },
    { src: "assets/photos/20251203_071832542_iOS.jpg", alt: "Memory Project — studio photograph 3" },
    { src: "assets/photos/20251203_072833218_iOS.jpg", alt: "Memory Project — studio photograph 4" },
    { src: "assets/photos/20251203_072834656_iOS.jpg", alt: "Memory Project — studio photograph 5" },
    { src: "assets/photos/20251203_072846210_iOS.jpg", alt: "Memory Project — studio photograph 6" },
    { src: "assets/photos/20251203_072847485_iOS.jpg", alt: "Memory Project — studio photograph 7" },
    { src: "assets/photos/20251203_072848159_iOS.jpg", alt: "Memory Project — studio photograph 8" },
    { src: "assets/photos/20251203_072848628_iOS.jpg", alt: "Memory Project — studio photograph 9" },
    { src: "assets/photos/20251203_072850018_iOS.jpg", alt: "Memory Project — studio photograph 10" },
    { src: "assets/photos/20251203_072850763_iOS.jpg", alt: "Memory Project — studio photograph 11" },
  ];

  var root = document.getElementById("lightbox");
  if (!root) return;

  var img = root.querySelector(".lightbox__img");
  var idx = 0;

  function show(i) {
    idx = (i + slides.length) % slides.length;
    var s = slides[idx];
    img.src = s.src;
    img.alt = s.alt;
  }

  function open(at) {
    show(Number(at) || 0);
    root.hidden = false;
    document.body.style.overflow = "hidden";
    root.querySelector(".lightbox__close").focus();
  }

  function close() {
    root.hidden = true;
    document.body.style.overflow = "";
    img.removeAttribute("src");
  }

  document.querySelectorAll(".gallery__open").forEach(function (btn) {
    btn.addEventListener("click", function () {
      open(btn.getAttribute("data-lightbox"));
    });
  });

  root.querySelectorAll("[data-lightbox-close]").forEach(function (el) {
    el.addEventListener("click", close);
  });

  var prev = root.querySelector("[data-lightbox-prev]");
  var next = root.querySelector("[data-lightbox-next]");
  if (prev) prev.addEventListener("click", function () { show(idx - 1); });
  if (next) next.addEventListener("click", function () { show(idx + 1); });

  root.addEventListener("keydown", function (e) {
    if (root.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
})();
