const saveButton = $("#save-btn");
const clearButton = $("#clear-btn");
// Colours for row backgrounds
// .bg-success
// .bg-danger
// .bg-warning

//Get and Display the date at the top of the site
function getDate() {
  function update() {
    $("#clock").html(moment().format("dddd MMMM Do YYYY, h:mm:ss"));
  }
  setInterval(update, 1000);
  update();
}
getDate();

function saveTask() {
  var userInputNine = $("#nine").val();
  window.localStorage.setItem("userInputNine", userInputNine);
  var userInputTen = $("#ten").val();
  window.localStorage.setItem("userInputTen", userInputTen);
  var userInputEleven = $("#eleven").val();
  window.localStorage.setItem("userInputEleven", userInputEleven);
  var userInputTwelve = $("#twelve").val();
  window.localStorage.setItem("userInputTwelve", userInputTwelve);
  var userInputOne = $("#one").val();
  window.localStorage.setItem("userInputOne", userInputOne);
  var userInputTwo = $("#two").val();
  window.localStorage.setItem("userInputTwo", userInputTwo);
  var userInputThree = $("#three").val();
  window.localStorage.setItem("userInputThree", userInputThree);
  var userInputFour = $("#four").val();
  window.localStorage.setItem("userInputFour", userInputFour);
  var userInputFive = $("#five").val();
  window.localStorage.setItem("userInputFive", userInputFive);
}

function returnStorage() {
  const nine = window.localStorage.getItem("userInputNine");
  console.log(nine);
  $("#nine").val(nine);
  const ten = window.localStorage.getItem("userInputTen");
  $("#ten").val(ten);
  const eleven = window.localStorage.getItem("userInputEleven");
  $("#eleven").val(eleven);
  const twelve = window.localStorage.getItem("userInputTwelve");
  $("#twelve").val(twelve);
  const one = window.localStorage.getItem("userInputOne");
  $("#one").val(one);
  const two = window.localStorage.getItem("userInputTwo");
  $("#two").val(two);
  const three = window.localStorage.getItem("userInputThree");
  $("#three").val(three);
  const four = window.localStorage.getItem("userInputFour");
  $("#four").val(four);
  const five = window.localStorage.getItem("userInputFive");
  $("#five").val(five);
}

function removeStorage() {
  localStorage.clear()
  window.location.reload()
}

clearButton.on("click", removeStorage);

saveButton.on("click", saveTask);
$(() => {
  returnStorage();

  var currentTime = moment().format("HH");

  for (let i = 9; i <= 17; i++) {
    const currentTimeBlock = $(`#${i}`);
    if (currentTime < i) {
      currentTimeBlock.css('background-color', 'orange');
    } else if (currentTime === i) {
      currentTimeBlock.css('background-color', 'blue');
    } else {
      currentTimeBlock.css('background-color', 'gray');
    }
  }
});
