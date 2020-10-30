const COSTO_UN_DIA = 30;
const COSTO_DOS_DIAS = 45;
const COSTO_FULL_DIAS = 50;


btnCalcular = document.querySelector('#calcular');

function mostrarCantidad() {
  const cantidadUnDia = document.querySelector('#pase_dia').value;
  const cantidadDosDias = document.querySelector('#pase_dosdias').value;
  const cantidadFullDias = document.querySelector('#pase_completo').value;
  console.log(`${cantidadUnDia}, ${cantidadDosDias}, ${cantidadFullDias}`);
}
function calcularCosto() {
  const cantidadUnDia = parseFloat(document.querySelector('#pase_dia').value);
  const cantidadDosDias = parseFloat(document.querySelector('#pase_dosdias').value);
  const cantidadFullDias = parseFloat(document.querySelector('#pase_completo').value);
  let total = cantidadUnDia* COSTO_UN_DIA + cantidadDosDias * COSTO_DOS_DIAS + cantidadFullDias * COSTO_FULL_DIAS;
  // console.log(`${cantidadUnDia}, ${cantidadDosDias}, ${cantidadFullDias}`);
  // console.log( COSTO_UN_DIA);
  return {
    cantidades:[cantidadUnDia, cantidadDosDias, cantidadFullDias],
    total: total
  };
}
function mostrarCosto(datos) {
  console.log(datos.cantidades[0]);
  let lista = document.createElement('ul');
  let li = document.createElement('li');
  let li2 = document.createElement('li');
  let li3 = document.createElement('li');
  li.innerHTML = `${datos.cantidades[0]} pases de un dia`;
  li2.innerHTML = `${datos.cantidades[1]} pases de dos dia`;
  li3.innerHTML = `${datos.cantidades[2]} pases de completos`;
  // let lis = datos[0].foreach((e)=>{`<li>${e}</li>`});
  lista.appendChild(li);
  lista.appendChild(li2);
  lista.appendChild(li3);
  document.querySelector('#lista-productos').innerHTML = '';
  document.querySelector('#lista-productos').appendChild(lista);
  document.querySelector('#suma-total').innerHTML = datos.total;
}

btnCalcular.addEventListener('click', function(){
  mostrarCosto(calcularCosto());
});
