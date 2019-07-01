import * as vscode from 'vscode';

export class View {

    public static uploadExtension(): void {

        vscode.window.showInformationMessage("上传扩展");
    }

    public static downloadExtension(): void {

        vscode.window.showInformationMessage("下载扩展");

    }



}