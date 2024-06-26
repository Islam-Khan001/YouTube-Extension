// alert("Testing is On");
console.log("Hello from content.js");

let player;
let leftControls;

window.addEventListener("load", function () {
  player = document.querySelector("video");
  player.className = "MyOwnPlayer";
  leftControls = document.querySelector(".ytp-right-controls");

  let filterButton = document.createElement("button");
  filterButton.className = "flt-button ytp-buttodon";
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

  // class="flt-button"
  // aria-keyshortcuts="z"
  // data-priority="10"
  // data-title-no-tooltip="Extras"
  // aria-label="Full screen keyboard shortcut z"
  // title="Extras (z)"

  // let filterButton = document.createElement("img");
  // filterButton.src = "icon16.png";
  // filterButton.className = "mytp-icon";
  // filterButton.title = "Filter";
  // leftControls.appendChild(filterButton);

  let myContainer = document.createElement("div");
  myContainer.className = "myContainer";
  myContainer.innerHTML =
    '<label for="Speed">Speed</label><input type="range" min="0.25" max="10" step="0.25" value="1" id="Speed" aria-labelledby="speedLabel">';

  myContainer.style.display = "none";
  let playerParent = player.parentNode;
  playerParent.insertBefore(myContainer, player.nextSibling);

  //------------------------------------------------------------------------------------------------------

  //------------------------------------------------------------------------------------------

  // filterButton.addEventListener("click", function (){
  //   if(myContainer.style.display === "none"){
  //     myContainer.style.display = "block";
  //   } else {
  //     myContainer.style.display = "none";
  //   }
  // });

  // filterButton.addEventListener("keydown", function (event){
  //   console.log("Key pressed:", event.key);
  //   if(event.key == "z"){
  //     if(myContainer.style.display === "none"){
  //       myContainer.style.display = "block";
  //     } else {
  //       myContainer.style.display = "none";
  //     }
  //   }

  // });

  //------------------------------------------------------------------------------------------

  document.addEventListener("click", (event) => {
    if (
      !myContainer.contains(event.target) &&
      !filterButton.contains(event.target)
    ) {
      myContainer.style.display = "none";
    }
  });

  document.addEventListener("click", function () {
    var speedRange = document.getElementById("Speed");
    // var speedValue = document.getElementById('speedValue');

    speedRange.addEventListener("input", function () {
      // speedValue.innerText = 'Speed: ' + speedRange.value + 'x';
      player.playbackRate = speedRange.value;
      console.log("The Speed is ", speedRange.value);
      // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //   chrome.tabs.sendMessage(tabs[0].id, { speed: speedRange.value });
      // });
    });
  });
});
