# Host switcher

## Summary
This is a small extension that helps to quickly switch hosts (and keep other URL parts).
If you have multiple environments or you often use localhost for debugging, this will make it easier!

![image](https://user-images.githubusercontent.com/54352931/113479330-28c67780-9497-11eb-8631-0ac241c00850.png)![image](https://user-images.githubusercontent.com/54352931/123553682-616ba980-d785-11eb-9043-19fdb3415189.png)

## Available features (version 0.2.1)
- Add, remove, update hosts on the popup.
- Each host can be associated with an alias.
- Use your keyboard to choose (`Tab`, `Shift+Tab`, `Up`, `Down`, `Left`, `Right`), update (`Space`), delete (`Delete`), switch (`Enter`) hosts.
- Ability to update the protocol if the target host contains it.
- Ability to create a new bookmarklet - bookmark that allows you to switch host by clicking on it in the bookmarks bar.

## Possible features
- Reorder hosts on the popup.
- Autofill the current host when you are creating a new one.
- Add more hotkeys to add new hosts (`Insert`), fast moving up and down (`Home`, `End`), etc.
- Save the host configuration to file, load the host configuration from file.
- Conditional hosts (suggest switching to the list of hosts depending on the current host).
- Ability to map URL params in addition to the host.
- Possible localization.

## Dev features
- React is used.
- Use modern syntax with babel.
- Dev server (live server) to debug and improve it in real time.
- Support 2 storage to be able to use extension pages in the popup and on the browser page to improve debugging.

## How to
### Run dev server
- Install dependencies `npm install`.
- Use `npm run dev` to run server. A new page will be open.

### Build project
- Install dependencies `npm install`.
- Use `npm run build-dev` to build extension for development.
- Use `npm run build-prod` to build extension for production.

### Install extension in Chrome
- Run dev server or build extension.
- Go to the Extensions page (`chrome://extensions/`) and enable the developer mode on the top right.
- Click Load unpacked and choose the App folder.
