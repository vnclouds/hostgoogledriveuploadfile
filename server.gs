
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html');
}

function uploadFiles(form) {
  
  try {
    
    var dropbox = "ibotvn";
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
    var blob = form.myFile;    
 
    var file = folder.createFile(blob);    
    file.setDescription("Uploaded by " + form.myName);
    
    return '<div style="font-size:15px; text-align: center;"><p>URL:<br /><input size="50" value="' + file.getUrl() + '"/></p><br /><p>BBCode: <br /><input size="50" value="[URL=' + file.getUrl() + ']' + file.getUrl() +'[/URL]"/></p><br /><br /><a href="' + file.getUrl() + '" target="_blank">TẢI VỀ</a></div>';
    
  } catch (error) {
    
    return error.toString();
  }
  
}
