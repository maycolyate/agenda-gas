function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda google apps script');

}

function obtenerDatosHtml(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() {
    let hoja = SpreadsheetApp.openById('1ACLYbDAf_aVZbyJYQjFA_TxN1MA9os8DvLC5hcYJqFE').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}