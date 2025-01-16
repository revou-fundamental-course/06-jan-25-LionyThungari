// Ini File Javascript

// Function to validate form
function formValidation() {
  let nameInput = document.getElementById("name-input").value;

  console.log(nameInput);
  // Condition for validate form
  if (nameInput == "") {
    alert("Name must be filled out");
  } else {
    // Display result form
    document.getElementById("result-form").innerHTML = nameInput;
  }
}

document.getElementById("submit-btn").addEventListener("click", formValidation);

let indexBanner = 0;

changeBackground();

function nextBanner() {
  indexBanner = indexBanner + 1;
  changeBackground();
}

// Function to change background banner
function changeBackground() {
  let bannerList = document.getElementsByClassName("banner-image");

  if (indexBanner > bannerList.length - 1) {
    // Reset indexBanner
    indexBanner = 0;
  }

  // Looping to change background
  for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = "none";
  }

  bannerList[indexBanner].style.display = "block";
}

setInterval(nextBanner, 3000);
document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen-elemen yang dibutuhkan
  const form = document.getElementById("message-form");
  const nameInput = document.getElementById("name");
  const birthDateInput = document.getElementById("birth-date");
  const genderInputs = document.getElementsByName("gender");
  const messageInput = document.getElementById("message");

  // Ambil elemen untuk welcome message dan output
  const welcomeMessage = document.getElementById("user-name");
  const outputName = document.getElementById("output-name");
  const outputBirthDate = document.getElementById("output-birth-date");
  const outputGender = document.getElementById("output-gender");
  const outputMessage = document.getElementById("output-message");
  const currentTimeElement = document.getElementById("current-time");

  // Fungsi untuk memvalidasi form
  form.addEventListener("submit", function (event) {
    // Mencegah form untuk submit jika ada input yang kosong
    event.preventDefault();

    let valid = true;
    let errorMessage = "";

    // Validasi Nama
    if (nameInput.value.trim() === "") {
      valid = false;
      errorMessage += "Nama harus diisi.\n";
    }

    // Validasi Tanggal Lahir
    if (!birthDateInput.value) {
      valid = false;
      errorMessage += "Tanggal lahir harus diisi.\n";
    }

    // Validasi Jenis Kelamin
    let genderSelected = false;
    for (let i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) {
        genderSelected = true;
        break;
      }
    }
    if (!genderSelected) {
      valid = false;
      errorMessage += "Jenis kelamin harus dipilih.\n";
    }

    // Validasi Pesan
    if (messageInput.value.trim() === "") {
      valid = false;
      errorMessage += "Pesan harus diisi.\n";
    }

    // Jika form valid, tampilkan welcome message dan output, jika tidak, tampilkan error
    if (valid) {
      // Update welcome message dengan nama pengguna
      welcomeMessage.textContent = nameInput.value;

      // Tampilkan data di output
      outputName.textContent = nameInput.value;
      outputBirthDate.textContent = birthDateInput.value;

      // Menampilkan gender yang dipilih
      let genderValue = "";
      for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
          genderValue = genderInputs[i].value;
          break;
        }
      }
      outputGender.textContent = genderValue;

      outputMessage.textContent = messageInput.value;

      // Tampilkan waktu saat ini
      const currentTime = new Date().toLocaleString();
      currentTimeElement.textContent = currentTime;

      // Reset form setelah submit
      form.reset();
    } else {
      alert(errorMessage); // Menampilkan pesan error
    }
  });
});

// Function to toggle dark mode

const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", function () {
  const body = document.body;
  const currentMode = body.classList.contains("dark-mode")
    ? "dark-mode"
    : "light-mode";

  body.classList.toggle("dark-mode");

  if (currentMode === "dark-mode") {
    toggleButton.textContent = "Light Mode";
  } else {
    toggleButton.textContent = "Dark Mode";
  }
});

// Function to display current time

setInterval(function () {
  const currentTimeElement = document.getElementById("current-time");
  const currentTime = new Date().toLocaleString();
  currentTimeElement.textContent = currentTime;
}, 1000);

// Function to display current date

setInterval(function () {
  const currentDateElement = document.getElementById("current-date");
  const currentDate = new Date().toLocaleDateString();
  currentDateElement.textContent = currentDate;
}, 1000);
