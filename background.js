// console.log('hello from background');

chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
      chrome.tabs.create({
        url: chrome.runtime.getURL("help.html")
      });
    }
});