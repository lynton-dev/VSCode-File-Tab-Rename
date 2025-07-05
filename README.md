# File Tab Rename Extension

A VS Code extension that allows you to rename files by right-clicking on file tabs.

## Features

- Right-click on any file tab to see a "Rename File" option in the context menu
- Input validation to prevent invalid file names
- Automatic handling of open files (closes and reopens after rename)
- Error handling

## Download and Install
1. Downoad the latest `file-tab-rename-xxx.vsix` file from [Latest Release](https://github.com/lynton-dev/VSCode-File-Tab-Rename/releases/latest/). 
2. In Visual Studio Code, press Ctrl+Shift+P (or Cmd+Shift+P on Mac) to open the Command Palette.
3. Search for and run "Extensions: Install from VSIX".
4. Select the previously downloaded `file-tab-rename-xxx.vsix` file.
5. Reload the VS Code window.

## Usage

1. Right-click on any file tab in the editor
2. Select "Rename File" from the context menu
3. Enter the new file name in the input box
4. Press Enter to confirm or Escape to cancel

## Installation from Source

1. Create a new folder for your extension
2. Copy all the provided files into the folder
3. Open the folder in VS Code
4. Run `npm install` to install dependencies
5. Press `F5` to launch a new Extension Development Host window
6. Test the extension by right-clicking on file tabs

## Building and Packaging

To build the extension:
```bash
npm run compile
```

To package the extension:
```bash
npm install -g vsce
vsce package
```

## Requirements

- VS Code 1.74.0 or higher
**Requirements for compiling from source:**
- Node.js and npm