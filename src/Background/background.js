import CONSTANTS from "../Contants";

console.log("Im background js");

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === CONSTANTS.MESSAGE_EVENT.OPEN_EXTENTION) {
//     chrome.windows.getCurrent((currentWindow) => {
//       const windowWidth = 400;
//       const windowHeight = 400;
//       const windowLeft = currentWindow.left + currentWindow.width - windowWidth;
//       const windowTop = currentWindow.top;

//       chrome.windows.create({
//         url: chrome.runtime.getURL("popup.html"),
//         type: "popup",
//         width: windowWidth,
//         height: windowHeight,
//         left: windowLeft,
//         top: windowTop,
//       });
//     });
//   }
// });
