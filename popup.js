// console.log("hello its working");

// document.addEventListener('DOMContentLoaded', function () {
//     var speedRange = document.getElementById('speedRange');
//     var speedValue = document.getElementById('speedValue');
  
//     speedRange.addEventListener('input', function () {
//       speedValue.innerText = 'Speed: ' + speedRange.value + 'x';
//       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, { speed: speedRange.value });
//       });
//     });
  
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, { speed: speedRange.value });
//     });
//   });
  