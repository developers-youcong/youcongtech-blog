import * as vscode from 'vscode';

export class View {


 
   public static showProgramLearningWebSite():void{


    const panel = vscode.window.createWebviewPanel(
        '编程学习网站',
        '编程学习网站',
        vscode.ViewColumn.Two,
        {}
      );

      // And set its HTML content
      panel.webview.html = getWebviewContent();


      function getWebviewContent() {
        return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Cat Coding</title>
      </head>
      <body>
      <h1>编程学习推荐</h1>
      
      <hr/>

      <h2>编程语言学习网站</h2>

      <h3><a href='https://www.runoob.com/'>菜鸟教程</a></h3>
    
      <h3><a href='http://www.w3school.com.cn/'>W3CSCHOOL</a></h3>


      <h2>算法在线刷题网站</h2>

      <h3><a href='https://leetcode-cn.com/'>LeetCode</h3>

      <h3><a href='https://www.luogu.org/'>洛谷</h3>

      <h3><a href='http://codevs.cn/'>Code-VS</h3>

      <h3><a href='https://www.lintcode.com/problem/'>LintCode</h3>

      <h3><a href='https://www.topcoder.com/'>TopCoder</h3>
      </body>
      </html>`;
      
      }
   }


   public static remind():void{

    
    const panel = vscode.window.createWebviewPanel(
        '超越妹妹',
        '超越妹妹',
        vscode.ViewColumn.Three,
        {}
      );

      // And set its HTML content
      panel.webview.html = getWebviewContent();


      function getWebviewContent() {
        return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Cat Coding</title>
      </head>
      <body>
      <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562001491012&di=fae6788b4a787f27b4f4226cfcb67f28&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fpop%2Fjfs%2Ft23107%2F203%2F1808665610%2F34133%2F7e2258fb%2F5b696d12N001991c5.jpg' width="500" height="600">
      <p>小哥哥，代码写了很长时间了，该休息了。</p>
      </body>
      </html>`;
      
      }
   }
    public static uploadExtension(): void {

        vscode.window.showInformationMessage("上传扩展");
    }

    public static downloadExtension(): void {

        vscode.window.showInformationMessage("下载扩展");

    }



}