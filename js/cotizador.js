const COSTO = {
  unDia: 30,
  dosDias: 45,
  fullDias: 50
}
// const COSTO_UN_DIA = 30;
// const COSTO_DOS_DIAS = 45;
// const COSTO_FULL_DIAS = 50;


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
  let total = cantidadUnDia* COSTO.unDia + cantidadDosDias * COSTO.dosDias + cantidadFullDias * COSTO.fullDias;

  return {
    cantidades:[cantidadUnDia, cantidadDosDias, cantidadFullDias],
    total: total
  };
}
function detalleCosto(cant, costo, detalle) {
  return `${cant} * $${costo} ${detalle} = $${cant*costo}`;
}
function mostrarCosto(datos) {
  console.log(datos.cantidades[0]);
  let lista = document.createElement('ul');
  let li = document.createElement('li');
  let li2 = document.createElement('li');
  let li3 = document.createElement('li');
  li.innerHTML = datos.cantidades[0]?detalleCosto(datos.cantidades[0], COSTO.unDia,'pase/s 1 dia/s'):'';
  li2.innerHTML = datos.cantidades[1]?detalleCosto(datos.cantidades[1], COSTO.dosDias,'pase/s 2 dia/s'):'';
  li3.innerHTML = datos.cantidades[2]?detalleCosto(datos.cantidades[2], COSTO.fullDias,'pase/s completo/s'):'';
  // let lis = datos[0].foreach((e)=>{`<li>${e}</li>`});
  lista.appendChild(li);
  lista.appendChild(li2);
  lista.appendChild(li3);
  document.querySelector('#lista-productos').innerHTML = '';
  if(li.innerHTML=='' && li2.innerHTML=='' && li3.innerHTML=='') {
    document.querySelector('#lista-productos').innerHTML = "Ningun boleto seleccionado";
  }
  else {
    document.querySelector('#lista-productos').appendChild(lista);
    document.querySelector('#suma-total').innerHTML = datos.total;

  }

}

btnCalcular.addEventListener('click', function(){
  mostrarCosto(calcularCosto());
});
