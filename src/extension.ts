// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {


    let disposable = vscode.commands.registerTextEditorCommand('quick-open-selected.openFile', (textEditor) => {

        const text = textEditor.document.getText(textEditor.selection) || '';

        vscode.commands.executeCommand('workbench.action.quickOpen', text).then(console.log);

        context.subscriptions.push(disposable);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
