

console.log('hello from background');

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     if (changeInfo.title) {
//         console.log('Title changed to: ' + changeInfo.title);
//         chrome.tabs.executeScript(tab.id, { file: "content.js" });
//       // Trigger your event or perform any action here
//     }
//   });
  
  



// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log("Hello from BackGround")
//     if (request.speed) {

//         sendResponse({ received: true });
      
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, { speed: request.speed }, function(response) {
//                 console.log("Received response from content script:", response);
//             });
//         });
//     }
// });




// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log("Hello from BackGround")
//     if (request.speed) {
//       let video = document.querySelector("video");
//       if (video) {
//         console.log("BackGround Set : ", parseFloat(request.speed));
//         video.playbackRate = parseFloat(request.speed);
//       }
//     }
// });
