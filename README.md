# Multiple links loader
Open multiple links in a flash ⚡.

Extension available on [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/multiple-links-loader/).

## Install from source
1. Clone this repository/[download zip](https://github.com/ngntrgduc/Multiple-page-loader/archive/refs/heads/firefox.zip) and extract to a folder on your local machine.

This extension can open a link when you click on it and multiple links when you click on the group name. Time-saver.

## Installation
[![](https://extensionworkshop.com/assets/img/documentation/publish/get-the-addon-178x60px.dad84b42.png)](https://addons.mozilla.org/en-US/firefox/addon/multiple-links-loader/)

### Local

1. Clone this repository/[download zip](https://github.com/ngntrgduc/Multiple-links-loader/archive/refs/heads/master.zip) and extract to a folder on your local machine.

```git
git clone https://github.com/ngntrgduc/Multiple-links-loader.git
```

2. Load extension:

- **Chrome:**  `Settings` -> `Extensions`.
- **Edge:**    `Extensions` -> `Manage Extensions`.

Then turn on `Developer mode`. Finally, click `Load unpacked` and select the folder you have just cloned/downloaded.

- **Firefox:** Go to `about:debugging`, click `Load Temporary Add-on...`, then select `manifest.json` in the `firefox` folder.

## How to use
Open the extension's Options page, and paste your link with the following format:

```
<name> | <link>
```

2. Load extension on Firefox:
Go to `about:debugging`, click `Load Temporary Add-on...`, then select `manifest.json` of the folder you have just cloned/downloaded.

3. 
   - Make the extension more visible by `Pin to Toolbar`. 
   - Change shortcut if needed.

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

**Firefox only**: You can also add delay (default: 1 second, ranged from 0 to 2) when opening tabs if the number of tabs in the group exceeds the limit (default: 4 tabs, ranged from 0 to 99). 

## Todo
- [x] Find a new icon with more size
- [ ] Comment feature in textarea
- [x] Add shortcut to open options page
- [ ] More levels for group, group can contain other groups?
- [x] Alt + click to termporary disable/ignore link when open tabs in group

## Contributing
If you found a bug or want to contribute, feel free to open an issue/pull requests. All contributions are welcomed.

## Coffee
If you like this project and you want to support me, you can [buy me a coffee :coffee:](https://ko-fi.com/ngntrgduc). Thank you very much 💖.
