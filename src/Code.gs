const SHEET_ID = "1MxJOPorvtYoMe7ELtNHNuzTZvpVsSwCdqGP9N4_hqWc";
const LOGO_URL = "https://raw.githubusercontent.com/alka86308-cpu/Wonorejo-v1/main/Assest/logo.png";

function doGet() {
  return HtmlService.createTemplateFromFile('index')
.evaluate()
.setTitle("SIM Administrasi Rayon Wonorejo")
.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Fungsi Login
function login(username, password) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("user");
  const data = sheet.getDataRange().getValues();
  for(let i = 1; i < data.length; i++) {
    if(data[i][0] === username && data[i][1] === password) {
      return {
        status: "sukses",
        nama: data[i][2],
        role: data[i][3],
        username: data[i][0]
      };
    }
  }
  return {status: "gagal"};
}
