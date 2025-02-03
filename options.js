document.getElementById("enableQuotes").addEventListener("change", (event) => {
    chrome.storage.sync.set({ showQuotes: event.target.checked });
});