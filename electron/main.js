// ������ ��� ���������� ����������� � �������� ����
const { app, BrowserWindow } = require('electron')
const path = require ('path');
const url = require ('url');
//require('./ipcmain');

function createWindow () {
    // ������� ���� ��������.
    const mainWindow = new BrowserWindow({
        width: 1250,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // � ��������� index.html ����������.
    //mainWindow.loadFile('index.html')

    //������� ���� �� localhost
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true
    });
    mainWindow.loadURL(startUrl);
    //mainWindow.loadURL('http://localhost:3000');

    // ���������� �������� ������������.
    mainWindow.webContents.openDevTools()
}

// ���� ����� ���������� ����� ���������� ����������������
// � ����� ������ ��� �������� ����.
// ��������� API ����� �������������� ������ ����� ������������� ����� �������.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // �� MacOS ������ ����������� ���� � ����������,
        // ����� ����, ��� �� ������ � ���� ������ � ������ �������� ���� ����.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// ����� ����� ��� ���� �������
app.on('window-all-closed', function () {
    // ��� ���������� � ������ ���� � macOS �������� ������� ����� ����������
    // ��������� �� ��� ���, ���� ������������ �� ������ ������������ ��������� Cmd + Q
    if (process.platform !== 'darwin') app.quit()
})

// � ���� ����� �� ������ �������� ��������� ����� ��������� �������� ������ ����������
//  �� ����� ������ ��������� �� � ��������� ����� � ���������� ����� require.