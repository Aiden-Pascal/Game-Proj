/* Feel free to change any of the styling below!*/
body{
    text-align: center;

}


.title {
    font-size: 50px;
    font-weight: 800;
}

.buttons {
    display: flex;
    justify-content: space-around;

}

p {
    font-size: 30px;
    font-weight: 800;
}


button {
    height: 40px;
    a:equal spacing;
    border-radius:20px;
}


h1 {
    font-size: 50px;
    color: black;
}
document.addEventListener("DOMContentLoaded", function () {
  // Function to show the selected screen and hide others
  function showScreen(screenId) {
    // Get all elements with the class "screen"
    const screens = document.querySelectorAll(".screen");
    
    // Loop through each screen and hide it
    screens.forEach(screen => {
      screen.style.display = "none";
    });
    
    // Show the selected screen
    const activeScreen = document.getElementById(screenId);
    if (activeScreen) {
      activeScreen.style.display = "block";
    }
  }
  
  // Initially show only the "title" screen
  showScreen("title");


  window.showScreen = showScreen;
});
