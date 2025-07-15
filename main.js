
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("go-next").onclick = function () {
      window.location.href = "next.html"; // Ganti dengan file tujuanmu
    };
  });

  function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('show');
}
