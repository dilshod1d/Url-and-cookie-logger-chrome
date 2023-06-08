document.addEventListener("DOMContentLoaded", () => {
  const logButton = document.getElementById("logButton");
  logButton.addEventListener("click", logUrlAndCookies);
});

function logUrlAndCookies() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.runtime.sendMessage(
      { tabId: activeTab.id, action: "logData" },
      (response) => {
        console.log("Response:", response);
      }
    );
  });
}
