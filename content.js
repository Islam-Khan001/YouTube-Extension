// alert("Testing is On");
console.log("Hello from content.js");



let player;
let leftControls;

let ytMenu = document.querySelector(".ytp-settings-menu");

window.addEventListener("load", function () {
  player = document.querySelector("video");
  player.className = "MyOwnPlayer";
  leftControls = document.querySelector(".ytp-right-controls");

  let filterButton = document.createElement("button");
  filterButton.className = "flt-button ytp-button";
  filterButton.ariaKeyShortcuts = "z";
  filterButton.ariaLabel = "Full screen keyboard shortcut z";
  filterButton.title = "Extras (z)";

  filterButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" id="flt-icon" data-name="Isolation Mode" viewBox="0 0 24 24" width="48" height="48" > <path d="M10.7,2.625a3.481,3.481,0,0,0-6.3,0H0v3H4.395a3.481,3.481,0,0,0,6.3,0H24v-3Z"/><path d="M16.455,8.5a3.492,3.492,0,0,0-3.151,2H0v3H13.3a3.481,3.481,0,0,0,6.3,0H24v-3H19.605A3.492,3.492,0,0,0,16.455,8.5Z"/><path d="M7.545,16.375a3.492,3.492,0,0,0-3.15,2H0v3H4.395a3.481,3.481,0,0,0,6.3,0H24v-3H10.7A3.492,3.492,0,0,0,7.545,16.375Z"/></svg>';
  leftControls.appendChild(filterButton);

  function toggleMyContainer() {
    if (myContainer.style.display == "none") {
      myContainer.style.display = "block";
    } else {
      myContainer.style.display = "none";
    }
  }

  filterButton.addEventListener("click", toggleMyContainer);
  filterButton.addEventListener("keydown", function (event) {
    if (event.key == "z" && event.target == filterButton) {
      // event.preventDefault();
      toggleMyContainer();
    }
  });

  let invertToggle = document.createElement("div");
  invertToggle.className = "invert-tog";
  invertToggle.innerHTML = '<label id="main-invert"><p class="invert-p">Invert</p><label id="track"><input type="checkbox" id="check-inp"/><span id="slider"></span></label></label>';

  let filterDiv = document.createElement("div");
  filterDiv.className = "filter-div";
  filterDiv.innerHTML = '<p id="p-filter">Filters</p><span id="icon-arrow">></span>';

  let speedDiv = document.createElement("div");
  speedDiv.className = "speed-div";
  speedDiv.innerHTML = '<p id="p-speed">Speed (<span id="show-speed">1</span>x)</p><span id="icon-reset">@</span><input type="range" min="0.25" max="10" step="0.25" value="1" id="Speed" aria-labelledby="speedLabel">';





  let myContainer = document.createElement("div");
  myContainer.className = "myContainer";
  myContainer.appendChild(invertToggle);
  myContainer.appendChild(filterDiv);
  myContainer.appendChild(speedDiv);
  // myContainer.innerHTML +=
  //   '<label for="Speed">Speed</label><input type="range" min="0.25" max="10" step="0.25" value="1" id="Speed" aria-labelledby="speedLabel">';

  myContainer.style.display = "none";
  // let playerParent = player.parentNode;
  // playerParent.insertBefore(myContainer, player.nextSibling);
  // let menuParent = ytMenu.parentNode;
  // ytMenu.append(myContainer);
  ytMenu.insertAdjacentElement('afterend', myContainer);
  document.addEventListener("click", (event) => {
    if (
      !myContainer.contains(event.target) &&
      !filterButton.contains(event.target)
    ) {
      myContainer.style.display = "none";
    }
  });

  var speedRange = document.getElementById("Speed");
  let currSpeed = document.querySelector("#show-speed");
  let resetSpeed = document.querySelector("#icon-reset");

  resetSpeed.addEventListener("click", () => {
    player.playbackRate = 1;
    var speedRange = document.getElementById("Speed");
    speedRange.value = 1; 
    currSpeed.textContent = 1;
  });

  document.addEventListener("click", function () {
    speedRange.addEventListener("input", function () {
      currSpeed.textContent = speedRange.value;
      player.playbackRate = speedRange.value;
      console.log("The Speed is ", speedRange.value);
    });
  });
});
