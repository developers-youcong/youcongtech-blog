import * as vscode from 'vscode';

import {View} from './View';

export function activate(context: vscode.ExtensionContext) {
 

  context.subscriptions.push(
    /**
     * 注册命令
     */
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

    }),vscode.commands.registerCommand('extension.website', () => {

        View.showProgramLearningWebSite();

    }),vscode.commands.registerCommand('extension.remind', () => {

        View.remind();

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


<h1>关于我</h1>

<p><a href='https://www.cnblogs.com/youcong/'>我的博客园</a></p>

<p><a href='https://developers-youcong.github.io'>我的Hexo</a></p>

<p><a href='https://github.com/developers-youcong'>我的GitHub</a></p>

<p>我的微信公众号</p>
<p><img src='https://mmbiz.qpic.cn/mmbiz_jpg/PHic0eu9jNT66qN4AzA13P98s3ThibWZwbsTDLAQLcZDWd7AxryAnZrL6I7kVEAXHqtHT8PIicK4Re4vFic69YQrKw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1' width="500" height="500"><p>

</body>
</html>`;

}


/**
 * 当扩展被停用时执行该方法
 */
export function deactivate() {

  vscode.window.showInformationMessage(vscode.extensions.getExtension.name + "扩展已停用");


}