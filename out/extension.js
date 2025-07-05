"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const path = require("path");
const fs = require("fs");
function activate(context) {
    // Register the rename file command
    const renameFileCommand = vscode.commands.registerCommand('fileTabRename.renameFile', async (uri) => {
        try {
            await renameFile(uri);
        }
        catch (error) {
            vscode.window.showErrorMessage(`Failed to rename file: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    });
    context.subscriptions.push(renameFileCommand);
}
exports.activate = activate;
async function renameFile(uri) {
    if (!uri || !uri.fsPath) {
        vscode.window.showErrorMessage('No file selected for renaming');
        return;
    }
    const currentPath = uri.fsPath;
    const currentName = path.basename(currentPath);
    const currentDir = path.dirname(currentPath);
    // Show input box for new file name
    const newName = await vscode.window.showInputBox({
        prompt: 'Enter new file name',
        value: currentName,
        validateInput: (value) => {
            if (!value || value.trim() === '') {
                return 'File name cannot be empty';
            }
            // Check for invalid characters
            const invalidChars = /[<>:"/\\|?*]/;
            if (invalidChars.test(value)) {
                return 'File name contains invalid characters';
            }
            // Check if file already exists
            const newPath = path.join(currentDir, value);
            if (value !== currentName && fs.existsSync(newPath)) {
                return 'A file with this name already exists';
            }
            return null;
        }
    });
    if (!newName || newName === currentName) {
        return; // User cancelled or didn't change the name
    }
    const newPath = path.join(currentDir, newName);
    try {
        // Close the file if it's currently open
        const document = vscode.workspace.textDocuments.find(doc => doc.uri.fsPath === currentPath);
        if (document) {
            await vscode.window.showTextDocument(document);
            await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
        }
        // Rename the file
        const workspaceEdit = new vscode.WorkspaceEdit();
        workspaceEdit.renameFile(uri, vscode.Uri.file(newPath));
        const success = await vscode.workspace.applyEdit(workspaceEdit);
        if (success) {
            // Open the renamed file
            const newUri = vscode.Uri.file(newPath);
            await vscode.window.showTextDocument(newUri);
            vscode.window.showInformationMessage(`File renamed to: ${newName}`);
        }
        else {
            vscode.window.showErrorMessage('Failed to rename file');
        }
    }
    catch (error) {
        vscode.window.showErrorMessage(`Error renaming file: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map