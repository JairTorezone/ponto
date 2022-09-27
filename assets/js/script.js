document.getElementById("data").value = mostrarDataAtual();

function mostrarDataAtual() {
  let d = new Date();

  //Date String
  //let ds = new Date('2020-02-01 15:42:17');

  let year = d.getFullYear();
  let month = d.getMonth();
  let day = d.getDate(); // dia atual

  let hours = d.getHours();
  let minuntes = d.getMinutes();
  let second = d.getSeconds();

  return `${day}/${month + 1}/${year} ${hours}:${minuntes}:${second}`;
}
