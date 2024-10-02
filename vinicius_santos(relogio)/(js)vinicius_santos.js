/*
 *  Script com a lógica do relógio digital.
 *  Modifique este arquivo o quanto for necessário.
 *
 *  DICAS GERAIS:
 *
 *  Você pode implementar a lógica de um relógio utilizando o método Date() do javaScript
 *  para retorna um objeto de data com a hora, os minutos e os segundos atuais.
 *
 *  Depois de computar os valores de hora, minutos e segundos,
 *  atualize o DOM do documento HTML por meio do método atualizarRelogio(). Para isso,
 *  você deve atualizar o texto dos elementos HTML que representam a hora, os minutos e os segundos.
 *
 *  Essa atualização pode ser feita usando o método 'setInterval' do javaScript com intervalos
 *  de 1000ms (1 segundo).
 */

/** Chamada da função de atualziarRelogio para funcionar o relógio usando o método 'setInterval'*/
// TODO (implementar) ...


function atualizarRelogio() {
    // Obtém o horário atual
    const dataAtual = new Date();
    const horas = String(dataAtual.getHours()).padStart(2, '0');   // Pega as horas e formata para 2 dígitos
    const minutos = String(dataAtual.getMinutes()).padStart(2, '0'); // Pega os minutos e formata para 2 dígitos
    const segundos = String(dataAtual.getSeconds()).padStart(2, '0'); // Pega os segundos e formata para 2 dígitos
  
    // Atualiza os elementos HTML com o horário atual
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
  }
  
  // Chama a função `atualizarRelogio` a cada segundo (1000 ms)
  setInterval(atualizarRelogio, 1000);
  
  