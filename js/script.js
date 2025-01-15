<script>
  function welcomeUser() {
    const name = prompt("Masukkan nama Anda:");
    document.getElementById("welcome-message").innerText = `Hai, ${name}! Selamat datang di situs kami.`;
  }
  window.onload = welcomeUser;
</script>
<div id="welcome-message"></div>
