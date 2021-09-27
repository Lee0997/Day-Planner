const saveButton = $("#save-btn");

//Get and Display the date at the top of the site
function getDate() {
    function update() {
      $("#clock").html(moment().format("dddd MMMM Do YYYY, h:mm:ss"));
    }
    setInterval(update, 1000);
    update();
  }
getDate();

//Store the user's input within the container
function saveTask(input) {
  window.localStorage.setItem("", input);
  $("#task").append(input);
}

saveButton.on('click', saveTask);