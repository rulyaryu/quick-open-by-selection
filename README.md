# quick-open-by-selection README

Quick Open By Selection
## Features

Select some text that describe some path to some point in a project

and press keybinding ctrl+shift+n (or on mac cmd+shift+n) and it will open Quick Open menu 

with search results for selected text


![quick-open-selection](/images/quick-open-selection.png)

## Extension Settings

settings for keybindings (default): 

      {
        "command": "quick-open-selected.openFile",
        "title": "Open Selected",
        "key": "ctrl+shift+n",
        "mac": "cmd+shift+n",
        "when": "editorHasSelection"
      },
      {
        "command": "workbench.action.quickOpen",
        "key": "ctrl+shift+n",
        "when": "!editorHasSelection"
      }


## Release Notes

First Release

### 0.1.0

Initial release

-----------------------------------------------------------------------------------------------------------
