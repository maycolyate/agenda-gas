function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda google apps script');

}

function obtenerDatosHtml(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}