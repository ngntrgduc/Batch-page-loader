function addLink(groupLinks, line) {
    // The line have format: <name> | <link>
    let name = line.split('|')[0].trim();
    let url  = line.split('|')[1].trim();
    let link = document.createElement('a');
    link.href = url;
    link.textContent = name;
    groupLinks.appendChild(link);
}

function isGroupName(line) {
    return line[0] == '#';
}

function isLink(line) {
    return line.length != 0 && !isGroupName(line);
}

function openTabsInGroup(group) {
    let links = group.getElementsByTagName('a');
    for (link of links) {
        chrome.tabs.create({ url: link.href });
    }
}

container = document.getElementById("main")

chrome.storage.local.get('links', function(data) {
    if (!data.links) {
        chrome.runtime.openOptionsPage();
    } else {
        let i = 0;
        while (i < data.links.length) {
            let line = data.links[i];
    
            if (isGroupName(line)) {
                let group = document.createElement("div");
                group.classList.add("group");

                let groupLinks = document.createElement("div");
                groupLinks.classList.add("group-links");
                
                let groupName = document.createElement("p");
                groupName.textContent = line.slice(1).trim();
                groupName.onclick = () => openTabsInGroup(group);
                group.appendChild(groupName);

                let j = i + 1;
                line = data.links[j];
                while (j < data.links.length && isLink(line)) {
                    addLink(groupLinks, line);
                    j += 1;
                    line = data.links[j];
                }

                group.appendChild(groupLinks);
                container.appendChild(group);
            }
            i += 1;
        }
    }
});
