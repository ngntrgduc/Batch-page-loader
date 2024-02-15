browser.action.onClicked.addListener(function(tab) {
    browser.tabs.create({ 
        url: browser.runtime.getURL("index.html") 
    });
});

browser.commands.onCommand.addListener((command) => {
    if (command === "open-options") {
        browser.tabs.create({ 
            url: browser.runtime.getURL("options/options.html") 
        });
    }
  });
  