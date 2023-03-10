var mauricio = {
  nome: "Mauricio",
  vitorias: 2,
  empates: 5,
  derrotas: 1,
  pontos: 11
}
var bianca = {
  nome: "Bianca",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

bianca.pontos = calculaPontos(bianca)
mauricio.pontos = calculaPontos(mauricio)

function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

var jogadores = [bianca, mauricio]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html = ""
  for(var i= 0; i< jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html +="<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogadores.vitorias++
  jogadores.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela
}

function adicionarEmpate(i){
  var jogadores = jogadores[i]
  jogador.empate++
  jogador.pontos = calculaPontos(jogadores)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
  var jogadores = jogadores[i]
  jogador.empate++
  jogador.pontos = calculaPontos(jogadores)
  exibirJogadoresNaTela(jogadores)
}

//var numero = 1
//numero = numero + 4
//numero +=4