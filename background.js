chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "logData") {
    const tabId = message.tabId;
    chrome.tabs.get(tabId, (tab) => {
      const url = tab.url;
      console.log("URL:", url);

      // Introduce a delay of 1 second (adjust as needed)
      setTimeout(() => {
        chrome.cookies.getAll({ url }, (cookies) => {
          console.log("Cookies:", cookies);

          sendResponse({ url, cookies });
        });
      }, 1000);
    });
    return true;
  }
});
