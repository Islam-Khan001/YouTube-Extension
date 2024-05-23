// alert("Testing is On");
console.log("Hello from content.js, i am working");

let player;
let leftControls;

let videoContainer = document.querySelector(".html5-video-container");
let speedIndDiv = document.createElement("div");
speedIndDiv.className = "speed-ind-div"
speedIndDiv.innerHTML = '<p id="speed-ind"><span id="speed-ind-span">1</span></p>';
videoContainer.insertAdjacentElement("afterend", speedIndDiv);

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
      filterContainer.style.display = "none";
      myContainer.style.display = "block";
      invertToggle.style.display = "";
      filterDiv.style.display = "";
      speedDiv.style.display = "";
    } else {
      myContainer.style.display = "none";
      filterContainer.style.display = "none";
    }
  }

  filterButton.addEventListener("click", toggleMyContainer);
  document.addEventListener("keydown", function (event) {
    if (event.key == "z") {
      // event.preventDefault();
      console.log("pressed z");

      toggleMyContainer();
    }
  });

  let invertToggle = document.createElement("div");
  invertToggle.className = "invert-tog";
  invertToggle.innerHTML =
    '<label id="main-invert"><p class="invert-p">Invert</p><label id="track"><input type="checkbox" id="check-inp"/><span id="slider"></span></label></label>';

  let filterDiv = document.createElement("div");
  filterDiv.className = "filter-div";
  filterDiv.innerHTML =
    '<p id="p-filter">Filters</p><span id="icon-arrow"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></span>';

  let speedDiv = document.createElement("div");
  speedDiv.className = "speed-div";
  speedDiv.innerHTML =
    '<p id="p-speed">Speed (<span id="show-speed">1</span>x)</p><span id="icon-reset"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"/></svg></span><input type="range" min="0.25" max="10" step="0.25" value="1" id="Speed" aria-labelledby="speedLabel">';

  // Filter Container  -------------------------------------------------------------------------------------------------------------

  let filterExit = document.createElement("span");
  filterExit.className = "filter-exit";
  filterExit.innerHTML =
    '<span id="span-filterExit"><svg id="icon-filterExit" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z"/></svg></span><p id="p-resetAll">reset all</p>';

  let saturateDiv = document.createElement("div");
  saturateDiv.className = "saturate-div";
  saturateDiv.innerHTML =
    '<label id="p-saturation" for="saturate-inp">Saturation</label><span id="saturate-reset"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"/></svg></span><input type="range" min="0" max="200" step="10" value="100" id="saturate-inp" aria-labelledby="saturateLabel">';

  let contrastDiv = document.createElement("div");
  contrastDiv.className = "contrast-div";
  contrastDiv.innerHTML =
    '<label id="p-contrast" for="contrast-inp">Contrast</label><span id="contrast-reset"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"/></svg></span><input type="range" min="50" max="150" step="5" value="100" id="contrast-inp" aria-labelledby="contrastLabel">';

  let brightDiv = document.createElement("div");
  brightDiv.className = "bright-div";
  brightDiv.innerHTML =
    '<label id="p-brightness" for="brightness-inp">Brightness</label><span id="brightness-reset"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"/></svg></span><input type="range" min="50" max="150" step="10" value="100" id="brightness-inp" aria-labelledby="brightLabel">';

  let filterContainer = document.createElement("div");
  filterContainer.id = "filter-container";
  filterContainer.className = "ytp-settings-menu";

  filterContainer.appendChild(filterExit);
  filterContainer.appendChild(saturateDiv);
  filterContainer.appendChild(contrastDiv);
  filterContainer.appendChild(brightDiv);

  let myContainer = document.createElement("div");
  myContainer.className = "myContainer + ytp-settings-menu";
  // myContainer.className = "ytp-settings-menu";

  myContainer.appendChild(invertToggle);
  myContainer.appendChild(filterDiv);
  myContainer.appendChild(speedDiv);
  myContainer.appendChild(filterContainer);
  // myContainer.innerHTML +=
  //   '<label for="Speed">Speed</label><input type="range" min="0.25" max="10" step="0.25" value="1" id="Speed" aria-labelledby="speedLabel">';

  myContainer.style.display = "none";
  filterContainer.style.display = "none";
  // let playerParent = player.parentNode;
  // playerParent.insertBefore(myContainer, player.nextSibling);
  // let menuParent = ytMenu.parentNode;
  // ytMenu.append(myContainer);
  ytMenu.insertAdjacentElement("afterend", myContainer);
  document.addEventListener("click", (event) => {
    if (
      !myContainer.contains(event.target) &&
      !filterButton.contains(event.target)
    ) {
      myContainer.style.display = "none";
      filterContainer.style.display = "none";
    }
  });

  let filterExitIcon = document.getElementById("span-filterExit");
  let resetAllFilters = document.getElementById("p-resetAll");

  filterExitIcon.addEventListener("click", () => {
    filterContainer.style.display = "none";
    invertToggle.style.display = "";
    filterDiv.style.display = "";
    speedDiv.style.display = "";
    console.log("clicked on exit icon");
  });

  function resetAllFs(){
    saturateRange.value = brightRange.value = contrastRange.value = 100;
    updateFilters();
  };

  resetAllFilters.addEventListener("click", resetAllFs);

  // ---------------------------------------------------------------------------------

  let saturateRange = document.getElementById("saturate-inp");
  let contrastRange = document.getElementById("contrast-inp");
  let brightRange = document.getElementById("brightness-inp");

  saturateRange.addEventListener("input", () => {
    updateFilters();
  });

  contrastRange.addEventListener("input", () => {
    updateFilters();
  });

  brightRange.addEventListener("input", () => {
    updateFilters();
  });

  function updateFilters() {
    // console.log("sat from func ", saturateRange.value);
    if (checkInput.checked){
      player.style.filter = `saturate(${saturateRange.value}%) contrast(${contrastRange.value}%) brightness(${brightRange.value}%) invert(100%)`;
    } else {
      // console.log("sat from else ", saturateRange.value);
      player.style.filter = `saturate(${saturateRange.value}%) contrast(${contrastRange.value}%) brightness(${brightRange.value}%)`;
    }
  }

  // ----------------------------------------------------------------------------------

  let saturateReset = document.getElementById("saturate-reset");
  let contrastReset = document.getElementById("contrast-reset");
  let brightReset = document.getElementById("brightness-reset");

  saturateReset.addEventListener("click", () => {
    saturateRange.value = 100;
    updateFilters();
  });

  contrastReset.addEventListener("click", () => {
    contrastRange.value = 100;
    updateFilters();
  });

  brightReset.addEventListener("click", () => {
    brightRange.value = 100;
    updateFilters();
  });

  // ---------------------------------------------------------------------------------------------

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
    });
  });

  let speedIndP = document.getElementById('speed-ind')

  function addPadding(){
    speedIndP.style.padding = '2px 12px 2px 12px'
  }

  function removePadding(){
    speedIndP.style.padding = '2px'
  }

  let speedIndicator = document.getElementById("speed-ind-span");

  let clearSTInd;

  function showSpeedInd(){
    if(clearSTInd){
      clearTimeout(clearSTInd);
    }
    speedIndDiv.style.opacity = '100%'
    clearSTInd = setTimeout(() => {
      speedIndDiv.style.opacity = '0%';      
    }, 1000);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key == "s" && player.playbackRate < 10 && !(event.key == ' ')) {
      // event.preventDefault();
      player.playbackRate +=0.25;
      speedRange.value = player.playbackRate;
      currSpeed.textContent = speedRange.value;
      speedIndicator.textContent = (player.playbackRate).toFixed(2) + 'x';
      removePadding();
      showSpeedInd();      
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key == "a" && player.playbackRate > 0.25 && !(event.key == ' ')) {
      // event.preventDefault();
      player.playbackRate -=0.25;
      speedRange.value = player.playbackRate;
      currSpeed.textContent = speedRange.value;
      speedIndicator.textContent = (player.playbackRate).toFixed(2) + 'x';
      removePadding();
      showSpeedInd();      
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key == "d" && !(event.key == ' ')) {
      // event.preventDefault();
      player.playbackRate = 1;
      speedRange.value = player.playbackRate;
      currSpeed.textContent = 1;
      speedIndicator.textContent = '1.00x';
      removePadding();
      showSpeedInd();      
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key == "q") {
      // event.preventDefault();
      saturateRange.value -= 10;
      updateFilters(); 

      addPadding();
      speedIndicator.textContent = 'Saturation : ' + saturateRange.value/100;
      showSpeedInd();          
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key == "w") {
      // event.preventDefault();
      // console.log("Before : ", saturateRange.value);
      // var currentValue = parseInt(saturateRange.value);
      saturateRange.value = parseInt(saturateRange.value) + 10;
      // currentValue += 10;
      // saturateRange.value = currentValue;
      // console.log("After : ", saturateRange.value);
      updateFilters();  

      addPadding();
      speedIndicator.textContent = 'Saturation : ' + saturateRange.value/100;
      showSpeedInd();          
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key == "e") {
      // event.preventDefault();
      contrastRange.value -= 5;
      updateFilters(); 
      
      addPadding();      
      speedIndicator.textContent = 'Contrast : ' + (contrastRange.value/100).toFixed(2);
      showSpeedInd(); 
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key == "r") {
      // event.preventDefault();
      contrastRange.value = parseInt(contrastRange.value) + 5;
      // console.log("sat from value ", saturateRange.value);
      updateFilters();  

      addPadding();      
      speedIndicator.textContent = 'Contrast : ' + (contrastRange.value/100).toFixed(2);
      showSpeedInd(); 
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key == "v") {
      // event.preventDefault();
      resetAllFs();
      addPadding();      
      speedIndicator.textContent = 'Filters Cleared';
      showSpeedInd(); 
    }
  });

  let checkInput = document.querySelector("#check-inp");

  checkInput.addEventListener("click", () => {
    // console.log("Status : ", checkInput.checked);
    // if (checkInput.checked) {
    //   player.style.filter = "invert(100%)";
    // } else {
    //   player.style.filter = "invert(0%)";
    // }
    updateFilters();
  });



  document.addEventListener("keydown", function (event) {
    if (event.key == "x") {
      // event.preventDefault();
      if(checkInput.checked){
        checkInput.checked = false;
        updateFilters();
      } else {
        checkInput.checked = true;
        updateFilters();
      }
    }
  });

  let iconArrow = document.querySelector("#icon-arrow");

  filterDiv.addEventListener("click", () => {
    console.log("clicked on iconArrow");
    invertToggle.style.display = "none";
    filterDiv.style.display = "none";
    speedDiv.style.display = "none";
    filterContainer.style.display = "block";
  });
});




// Some of the code is in comments for testing purposes and for some future funtionalities that have not been figured out yet