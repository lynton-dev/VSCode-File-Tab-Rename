# File Tab Rename Extension

A VS Code extension that allows you to rename files by right-clicking on file tabs.

## Features

- Right-click on any file tab to see a "Rename File" option in the context menu
- Input validation to prevent invalid file names
- Automatic handling of open files (closes and reopens after rename)
- Error handling and user feedback

## Installation

1. Create a new folder for your extension
2. Copy all the provided files into the folder
3. Open the folder in VS Code
4. Run `npm install` to install dependencies
5. Press `F5` to launch a new Extension Development Host window
6. Test the extension by right-clicking on file tabs

## Usage

1. Right-click on any file tab in the editor
2. Select "Rename File" from the context menu
3. Enter the new file name in the input box
4. Press Enter to confirm or Escape to cancel

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
- Node.js and npm

## Known Issues

- None currently known

## Release Notes

### 1.0.0

Initial release with basic file renaming functionality.