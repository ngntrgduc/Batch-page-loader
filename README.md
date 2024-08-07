# Multiple links loader
Open multiple links in a flash ⚡.

## What is this?
A picture is worth a thousand words:

| Start page | Options page |
|:---:|:---:|
|![](/images/page.png) | ![](/images/options.png) |

This extension can open a link when you click on it and multiple links when you click on the group name. Time-saver.

## Installation
**Note**: If you use Firefox, the extension is available on [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/multiple-links-loader/), or you can checkout [`firefox` branch](https://github.com/ngntrgduc/Multiple-links-loader/tree/firefox) for local installation.

1. Clone this repository/[download zip](https://github.com/ngntrgduc/Multiple-links-loader/archive/refs/heads/master.zip) and extract to a folder on your local machine.

```git
git clone https://github.com/ngntrgduc/Multiple-links-loader.git
```

2. Load extension:

- **Chrome:**  `Settings` -> `Extensions`.
- **Edge:**    `Extensions` -> `Manage Extensions`.

Then turn on `Developer mode`. Finally, click `Load unpacked` and select the folder you have just cloned/downloaded.

3. 
   - Make the extension more visible by `Pin` (Chrome)/`Show in toolbar` (Edge). 
   - Change shortcut in `Keyboard shortcuts` if needed.

4. Enjoy ✨. 

## How to use
Open the extension's Options page, and paste your link with the following format:

```
<name> | <link>
```

When you want to open the link, click on the name of it.
If you want to group multiple links, put the group name in the following format:

```
# <group name>
```

and after that, put links under the group name

Here are the basic options:

```
# Social
Discord | https://discord.com/channels/@me
LinkedIn | https://www.linkedin.com/notifications/
Twitter | https://twitter.com/home

# News
Hacker News | https://news.ycombinator.com/best
The Verge | https://www.theverge.com/
GitHub trending | https://github.com/trending
Papers with code | https://paperswithcode.com/

# Mail
Outlook | https://outlook.office.com/mail/
Gmail | https://mail.google.com/mail/u/0/#inbox
```

You can also add delay (default: 1 second, ranged from 0 to 2) when opening tabs if the number of tabs in the group exceeds the limit (default: 4 tabs, ranged from 0 to 99). 

## Todo
- [x] Find a new icon with more size
- [ ] Comment feature in textarea
- [x] Add shortcut to open options page
- [ ] More levels for group, group can contain other groups?

## Contributing
If you found a bug or want to contribute, feel free to open an issue/pull requests. All contributions are welcomed.

## Coffee
If you like this project and you want to support me, you can [buy me a coffee :coffee:](https://ko-fi.com/ngntrgduc). Thank you very much 💖.