const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, 'assets/icon/icon_sq_rgb.ico'),
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL('https://google.com');
}

app.whenReady().then(() => {
    createWindow();

    const template = [
        {
            label: 'Settings',
            submenu: [
                { role: 'reload' },
                { role: 'forcereload' },
                { type: 'separator' },
                { role: 'resetzoom' },
                { role: 'zoomin' },
                { role: 'zoomout' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        {
            label: 'Info',
            submenu: [
                { label: 'Version 1.0.0' },
                { label: 'Author: Wersy' },
                { label: 'Published on: 2023/08/25' }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});