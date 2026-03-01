// Função que o botão do Garçom chama
function registrarPedido(dados) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var abaPedidos = ss.getSheetByName("Pedidos");
  
  // Salva na planilha: Data, Mesa, Itens, Valor, Status, Garçom
  abaPedidos.appendRow([
    new Date(), 
    dados.mesa, 
    dados.itens, 
    dados.total, 
    "Pendente", 
    dados.garcom
  ]);
  
  return true; // Retorna confirmação para o frontend
}

// Função para exibir a página web
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index') // Nome do seu arquivo HTML
    .setTitle('Sistema de Pedidos - Garçom')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}