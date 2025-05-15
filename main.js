const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: path.join(__dirname, 'public/assets/images/icon.ico')
  });

  win.loadFile(path.join(__dirname, 'public/login.html')).catch((err) => {
    console.error('Failed to load login.html:', err);
  });
};

app.whenReady().then(() => {
  createWindow();
}).catch((err) => {
  console.error('App failed to be ready:', err);
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
