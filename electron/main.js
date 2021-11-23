// ћодули дл€ управлени€ приложением и создани€ окна
const { app, BrowserWindow } = require('electron')
const path = require ('path');
const url = require ('url');
//require('./ipcmain');

function createWindow () {
    // —оздаем окно браузера.
    const mainWindow = new BrowserWindow({
        width: 1250,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // и загрузить index.html приложени€.
    //mainWindow.loadFile('index.html')

    //открыть окно от localhost
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true
    });
    mainWindow.loadURL(startUrl);
    //mainWindow.loadURL('http://localhost:3000');

    // ќтображаем средства разработчика.
    mainWindow.webContents.openDevTools()
}

// Ётот метод вызываетс€ когда приложение инициализируетс€
// и будет готово дл€ создани€ окон.
// Ќекоторые API могут использоватьс€ только после возникновени€ этого событи€.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // Ќа MacOS обычно пересоздают окно в приложении,
        // после того, как на иконку в доке нажали и других открытых окон нету.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// ¬ыйти когда все окна закрыты
app.on('window-all-closed', function () {
    // ƒл€ приложений и строки меню в macOS €вл€етс€ обычным делом оставатьс€
    // активными до тех пор, пока пользователь не выйдет окончательно использу€ Cmd + Q
    if (process.platform !== 'darwin') app.quit()
})

// ¬ этом файле вы можете включить остальную часть основного процесса вашего приложени€
//  ¬ы также можете поместить их в отдельные файлы и подключить через require.