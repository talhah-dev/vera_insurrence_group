document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.AOS !== "undefined") {
    window.AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  }

  if (typeof window.Lenis === "undefined") {
    return;
  }

  const lenis = new window.Lenis({
    autoRaf: false,
    smoothWheel: true,
    lerp: 0.08,
  });

  function raf(time) {
    lenis.raf(time);
    window.requestAnimationFrame(raf);
  }

  window.requestAnimationFrame(raf);
});
