function loadOptions() {
    browser.storage.local.get('links', (data) => {
        if (data.links) {
            document.getElementById('options').value = data.links.join('\n');
        }
    });
}

function formatLink(link) {
    return link.trim();
}

function getLinks() {
    let links = [];
    let rawLinks = document.getElementById('options').value.split('\n');
    for (let link of rawLinks) {
        // console.log(link, link.length);
        links.push(formatLink(link));
    }
    return links;
}

document.getElementById('button').addEventListener('click', () => {
    document.getElementById('button').innerText = 'Saved';

    let links = getLinks();

    // Set new links on local storage
    browser.storage.local.set({
        'links': links
    }, () => console.log('Links were saved.'));

    // Load settings after set
    loadOptions();
});

// Change button text when user type in textarea
document.getElementById('options').addEventListener('input', () => {
    document.getElementById('button').innerText = 'Save';
});

// Open options page
loadOptions();