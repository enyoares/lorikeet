'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-clsed', () => {
    if (process.platform !== 'darwin') app.quie();
});

app.on('ready', () => {
    // mainWindow = new BrowserWindow();
    mainWindow = new BrowserWindow({
                        webPreferences: {
                            nodeIntegration: true
                        },
                        width: 400, 
                        height: 600
                });

    mainWindow.loadURL(`file://${app.getAppPath()}/index.html`);
    mainWindow.on('closed',() => { mainWindow = null;});
});