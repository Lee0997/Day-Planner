const saveButton = $("#save-btn")
const taskInputEl =$("#taskInput")

function saveTask() {
  var currentVal = taskInputEl.val();
  var newVal = currentVal + $(this).text();
  taskInputEl.val(newVal)
}
//Get and Display the date at the top of the site
function getDate() {
    function update() {
      $("#clock").html(moment().format("dddd MMMM Do YYYY, h:mm:ss"));
    }
    setInterval(update, 1000);
    update();
  }
getDate();

saveButton.on('click', saveTask());