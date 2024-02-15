chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.create({ 
        url: chrome.runtime.getURL("index.html") 
    });
});

chrome.commands.onCommand.addListener((command) => {
    if (command === "open-options") {
        chrome.tabs.create({ 
            url: chrome.runtime.getURL("options/options.html") 
        });
    }
});