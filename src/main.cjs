// main.js (Electron entry point)
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Create a new browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // Allows using Node.js in the renderer process
    //   preload: path.join(__dirname, 'preload.js')  // Optional: used for adding specific functionalities
    },
    title:'',
    autoHideMenuBar: true
    });


  // Load the app from Vite's dev server running on localhost
  win.loadURL('http://localhost:5173');  // Your Vite app should be running here
}

app.whenReady().then(createWindow);

// Quit the app when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// For macOS: When the app is activated (e.g., clicking on the app icon in the dock), create the window.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
