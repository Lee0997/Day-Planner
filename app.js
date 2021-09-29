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

var saveBtnClass = $(".btn btn-primary")
saveBtnClass.forEach(function(el){
  el.addEventListener('click', function() {
    alert(this.id);
    console.log(el)
  });
});

console.log(saveBtnClass)
//Store the user's input within the container
function saveTask(input) {
  window.localStorage.setItem("nineAM", JSON.stringify(input));
  $("#task").append(input);
}

saveButton.on('click', saveTask);