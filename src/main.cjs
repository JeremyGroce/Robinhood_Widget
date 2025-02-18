// main.js (Electron entry point)
const { app, BrowserWindow, shell, globalShortcut } = require('electron');
const path = require('path');

let win;

function createWindow() {
  // Create a new browser window
  win = new BrowserWindow({
    width: 700,
    height: 400,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,  
    },
    title:'',
    autoHideMenuBar: true
    });


  win.loadURL('http://localhost:5173');  

  // opens any external links in default browser window
  win.webContents.setWindowOpenHandler(({ url }) => 
  {
    shell.openExternal(url);
    return { action: "deny" };
  });
  
}

app.whenReady().then(()=>
{
  createWindow();

  // toggle minimize/restore via numpad multiply
  globalShortcut.register('a',()=>
  {
    //if minimized
    if(win.isMinimized()) 
    {
      win.restore();
      win.show();
    }
    //if not minimized but not focused
    else if(!win.isVisible())
    {
      win.show();
    }
    // minimize if open
    else 
    {
      win.minimize();
    }
  });

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
