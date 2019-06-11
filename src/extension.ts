import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('extension.blog', () => {
      // Create and show panel
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        '我的博客',
        vscode.ViewColumn.One,
        {}
      );

      // And set its HTML content
	  panel.webview.html = getWebviewContent();
	  
    })
  );
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
<iframe src="https://developers-youcong.github.io/" width="900" height="900"/>


</body>
</html>`;

}