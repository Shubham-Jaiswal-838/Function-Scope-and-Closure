// Call function to display greeting message
Showmessage();

function Showmessage() {
  // Declaring new Variables
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  //Call display Greeting
  Display();

  // Dispaly greeting
  function Display() {
    if (hour >= 22 || hour <= 5) document.write("Goodnight, World! <br />");
    else document.write("Hello world <br />");

    document.write(
      "Today is" + " " + " " + month + "/" + day + "/" + year + "<br />"
    );
    document.write("The current time is" + " " + hour + ":" + "" + min);
  }
}
