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

function openTabsInGroup(group) {
    const links = Array.from(group.getElementsByTagName('a'));
    // const delay = 1000; // delay in milliseconds
    links.forEach((link) => {
        if (!link.classList.contains('ignore')) {
            chrome.tabs.create({ url: link.href });
        }
        // chrome.tabs.create({ url: link.href });
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
                groupName.onclick = () => openTabsInGroup(group);
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
