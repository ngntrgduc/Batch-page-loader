# Multiple links loader
Open multiple links in a flash ⚡.

This extension can open a link when you click on it and multiple links when you click on the group name. Time-saver.

## Installation
Extension available on [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/multiple-links-loader/).

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
Open the extension's Options page using `Alt` + `Shift` + `L`, and paste your link with the following format:

```
<name> | <link>
```

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

Use `Alt` + `L` to open the extension main page. You can also toggle ignore tabs by `Alt` + `Left click` on site link. When opening a group, ignored tabs won't open.
Furthermore, you can also open tabs in background by `Middle click` on group name or link.

**Firefox only**: You can also add delay (default: 1 second, ranged from 0 to 2) when opening tabs if the number of tabs in the group exceeds the limit (default: 4 tabs, ranged from 0 to 99).

## Todo/Idea
- [x] Find a new icon with more size
- [ ] ~~Comment feature in textarea~~ -> Unnecessary
- [x] Add shortcut to open options page
- [x] Alt + click to termporary disable/ignore link when open tabs in group
   - [ ] Pernamently disable?
- [ ]  fix delay < 1 (handle delay < 1)
- [ ]  fix if disable links, and the remain links < limit but it still add delay
- [x]  middle click to open tabs in group in background
- [ ]  using j,k or tab, shift tab to switch between group
- [ ] ~~More levels for group, group can contain other groups?~~
- [ ] ~~Options to change theme/colors on the main page~~ -> Keep it simple
- [ ] ~~Implement alt + arrow key to move line ~~ -> Ctrl X and Ctrl V do the job

## Contributing
If you found a bug or want to contribute, feel free to open an issue/pull requests. All contributions are welcomed.

## Coffee
If you like this project and you want to support me, you can [buy me a coffee :coffee:](https://ko-fi.com/ngntrgduc). Thank you very much 💖.
