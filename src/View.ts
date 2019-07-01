import * as vscode from 'vscode';

export class View {


    
    public static login(): void {

        vscode.window.showInformationMessage("登录");

        const panel = vscode.window.createWebviewPanel(
            '登录',
            '登录',
            vscode.ViewColumn.One,
            {
                // Enable scripts in the webview
                enableScripts: true
            }
        );

        panel.webview.html = getWebviewContent();

        function getWebviewContent() {

            return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Cat Coding</title>
                <link rel="stylesheet" href="../lib/layui/css/layui.css">
                <link rel="stylesheet" href="../lib/layui/css/modules/layer/default/layer.css"/>
            </head>
            <body>
               <h1 id="test">Hello World</h1>
               <script src="../lib/jquery/jquery.min.js"></script>
               <script src="../lib/layui/layui.js"></script>
               <script src="../lib/layer/layer-v3.1.1/layer/mobile/layer.js"></script>
               <script>
               login();
               function login(){

                layui.use('layer', function () {

                    var layer = layui.layer;
            
                    layer.open({
                        skin: 'demo-class',
                        type: 1,
                        title: '登录',
                        area: ['600px', '700px'],
                        content: '<h1>Hello World</h1>', //这里content是一个普通的String
                        cancel: function () {
                          
                        }
                    });
                });
               }
               </script>
            </body>
            </html>`;
        }

        

    }




    public static blogList(): void {
        const panel = vscode.window.createWebviewPanel(
            '博客文章',
            '博客文章',
            vscode.ViewColumn.One,
            {
                // Enable scripts in the webview
                enableScripts: true
            }
        );

        panel.webview.html = getWebviewContent();

        function getWebviewContent() {

            return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Cat Coding</title>
                <link rel="stylesheet" href="../lib/layui/css/layui.css">
                <link rel="stylesheet" href="../lib/layui/css/modules/layer/default/layer.css"/>
            </head>
            <body style="background:#000; color:#FFF">
               <h1>默认显示博客园最新十篇文章</h1>
               <p id="list" style="background:#FF0000; color:#FF0000"></p>
               <script src="../lib/jquery/jquery.min.js"></script>
               <script src="../lib/layui/layui.js"></script>
               <script src="../lib/layer/layer-v3.1.1/layer/mobile/layer.js"></script>
               <script>
               $.ajax({
                type: "GET",
                timeout: 10000, // 超时时间 10 秒
                url: "http://localhost:2019/blog-web/posts/blog_list",
                dataType: "json",
                success: function(data) {
                     $("#list").html("傻逼:"+data.data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                  console.log(XMLHttpRequest.status);
                          console.log(XMLHttpRequest.readyState);
                          console.log(textStatus);
                },
                complete: function(XMLHttpRequest, status) { //请求完成后最终执行参数　
                }
            })
             
               </script>
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