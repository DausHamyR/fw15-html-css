// Dapatkan modal
var modal = document.getElementById("myModal");

// Dapatkan tombol close
var closeBtn = document.getElementsByClassName("close")[0];

// Ketika pengguna mengklik tombol close, tutup modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Ketika pengguna mengklik di luar modal, tutup modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Fungsi untuk membuka modal
function openModal() {
  modal.style.display = "block";
}
