function addLink(groupLinks, line) {
    // The line have format: <name> | <link>
    let name = line.split('|')[0].trim();
    let url = line.split('|')[1].trim();
    let link = document.createElement('a');
    link.href = url;
    link.textContent = name;
    // Alt + Left Click to toggle ignore
    link.addEventListener('click', (event) => {
        if (event.altKey && event.button === 0) {
            event.preventDefault();
            link.classList.toggle('ignore');
        }
    });
    groupLinks.appendChild(link);
}

function isGroupName(line) {
    return line[0] == '#';
}

function isLink(line) {
    return line.length != 0 && !isGroupName(line);
}

function openTabsInGroup(group, inBackground = false) {
    const links = Array.from(group.getElementsByTagName('a'));
    links.forEach((link) => {
        if (!link.classList.contains('ignore')) {
            if (!inBackground) chrome.tabs.create({ url: link.href });
            else chrome.tabs.create({ url: link.href, active: false }); 
        }
    });
}

container = document.getElementById('main')

chrome.storage.local.get('links', (data) => {
    if (!data.links) {
        chrome.runtime.openOptionsPage();
    } else {
        let i = 0;
        while (i < data.links.length) {
            let line = data.links[i];
            if (isGroupName(line)) {
                let group = document.createElement('div');
                group.classList.add('group');

                let groupLinks = document.createElement('div');
                groupLinks.classList.add('group-links');
                
                let groupName = document.createElement('p');
                groupName.textContent = line.slice(1).trim();
                groupName.addEventListener('mousedown', (event) => {
                    if (event.button === 0) { // Left Click: Open tabs normally
                        openTabsInGroup(group);
                    } else if (event.button === 1) { // Middle Click: Open tabs in background
                        event.preventDefault();
                        openTabsInGroup(group, inBackground = true);
                    }
                });
                group.appendChild(groupName);

                let j = i + 1;
                while (j < data.links.length && isLink(data.links[j])) {
                    addLink(groupLinks, data.links[j]);
                    j++;
                }

                group.appendChild(groupLinks);
                container.appendChild(group);
            }
            i++;
        }
    }
});
