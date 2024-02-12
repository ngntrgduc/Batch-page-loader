browser.action.onClicked.addListener(function(tab) {
    browser.tabs.create({ 
        url: browser.runtime.getURL("index.html") 
    });
});