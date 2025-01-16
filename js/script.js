console.log("Hello world Jess");

// function to validate form
function formValidation() {
  console.log("form validation has been clicked");

  let nameInput = document.getElementById("name-input").value;

  console.log(nameInput);
  //condition for validate form
  if (nameInput == "") {
    alert("Name must be filled out");
  } else {
    //display reslut form
    document.getElementById("result-form").innerHTML = nameInput;
  }
}

document
  .getElementById("submit-button")
  .addEventListener("click", formValidation);

changeBackground();
// function to change background banner
function changeBackground() {
  let bannerList = document.getElementByClassName("banner-image");
  console.log("bannerList");

  //Looping to change background
  for (let i = 0; i < bannerList.length; i++) {
    console.log(i);
    console.log(bannerList[i]);
    bannerList[i].style.display = "none";
  }
}
