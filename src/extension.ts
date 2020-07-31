// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "flutter-doc" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('flutter-doc.htmltojsx', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('✔ Complete Translate ! HTML 👉 JSX');

		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);

			// Step 1. Modifying class to className//
			let returnDoc = word.replace(/class\=/gi, 'className=');

			// Step 2. Modifying to self-closing tag within the range of 'No Closing self-closing tag' 🤔
			returnDoc = returnDoc.replace(/\<img (.+)\>/gi, '<img $1/>');
			returnDoc = returnDoc.replace(/\<area (.+)\>/gi, '<area $1/>');
			returnDoc = returnDoc.replace(/\<base (.+)\>/gi, '<base $1/>');
			returnDoc = returnDoc.replace(/\<br(.+)\>/gi, '<br$1/>');
			returnDoc = returnDoc.replace(/\<col (.+)\>/gi, '<col $1/>');
			returnDoc = returnDoc.replace(/\<command (.+)\>/gi, '<command $1/>');
			returnDoc = returnDoc.replace(/\<embed (.+)\>/gi, '<embed $1/>');
			returnDoc = returnDoc.replace(/\<hr(.+)\>/gi, '<hr$1/>');
			returnDoc = returnDoc.replace(/\<input (.+)\>/gi, '<input $1/>');
			returnDoc = returnDoc.replace(/\<keygen (.+)\>/gi, '<keygen $1/>');
			returnDoc = returnDoc.replace(/\<link (.+)\>/gi, '<link $1/>');
			returnDoc = returnDoc.replace(/\<menuitem (.+)\>/gi, '<menuitem $1/>');
			returnDoc = returnDoc.replace(/\<meta (.+)\>/gi, '<meta $1/>');
			returnDoc = returnDoc.replace(/\<param (.+)\>/gi, '<param $1/>');
			returnDoc = returnDoc.replace(/\<source (.+)\>/gi, '<source $1/>');
			returnDoc = returnDoc.replace(/\<track (.+)\>/gi, '<track $1/>');
			returnDoc = returnDoc.replace(/\<wbr (.+)\>/gi, '<wbr $1/>');

			editor.edit(editBuilder => {
				editBuilder.replace(selection, returnDoc);
			});
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
