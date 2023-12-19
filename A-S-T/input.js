const form = document
  .getElementById("form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let userNameValues = document.getElementById("input1").value;
    let userPassValues = document.getElementById("input2").value;
    if (
      userNameValues.length >= 5 &&
      userNameValues.length <= 8 &&
      userPassValues.length >= 5 &&
      userPassValues.length <= 8
    ) {
      alert("Your successfully loged in!");
    } else {
      alert("Please your cridentials should be between 5 and 8 values.");
    }
  });
