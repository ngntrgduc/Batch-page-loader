const saveButton = document.getElementById('button');
const optionsTextArea = document.getElementById('options');

function loadOptions() {
    chrome.storage.local.get('links', (data) => {
        if (data.links) {
            optionsTextArea.value = data.links.join('\n');
        }
    });
}

function formatLink(link) {
    return link.trim();
}

function getLinks() {
    return optionsTextArea.value.split('\n').map(formatLink);
}

function saveOptions() {
    saveButton.innerText = 'Saved';
    const links = getLinks();
    chrome.storage.local.set({ 'links': links });
}

saveButton.addEventListener('click', () => {
    saveOptions();
    loadOptions();
});

// Change button text when user type in textarea
optionsTextArea.addEventListener('input', () => {
    saveButton.innerText = 'Save';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 's' && e.ctrlKey) {
        e.preventDefault();
        saveOptions();
        loadOptions();
    }
})

loadOptions();
