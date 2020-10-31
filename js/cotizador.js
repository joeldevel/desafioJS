const COSTO = {
  unDia: 30,
  dosDias: 45,
  fullDias: 50
}

btnCalcular = document.querySelector('#calcular');

function calcularCosto() {
  const cantidadUnDia = parseInt(document.querySelector('#pase_dia').value);
  const cantidadDosDias = parseInt(document.querySelector('#pase_dosdias').value);
  const cantidadFullDias = parseInt(document.querySelector('#pase_completo').value);
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

  let listaBoletos = document.createElement('ul');

  let li = document.createElement('li');
  let li2 = document.createElement('li');
  let li3 = document.createElement('li');

  li.innerHTML = datos.cantidades[0]?detalleCosto(datos.cantidades[0], COSTO.unDia,'pase/s 1 día/s'):'';
  li2.innerHTML = datos.cantidades[1]?detalleCosto(datos.cantidades[1], COSTO.dosDias,'pase/s 2 día/s'):'';
  li3.innerHTML = datos.cantidades[2]?detalleCosto(datos.cantidades[2], COSTO.fullDias,'pase/s completo/s'):'';

  listaBoletos.appendChild(li);
  listaBoletos.appendChild(li2);
  listaBoletos.appendChild(li3);

  document.querySelector('#lista-productos').innerHTML = '';

  if(li.innerHTML=='' && li2.innerHTML=='' && li3.innerHTML=='') {
    document.querySelector('#lista-productos').innerHTML = "Ningún boleto seleccionado";
  }
  else {
    document.querySelector('#lista-productos').appendChild(listaBoletos);
    document.querySelector('#suma-total').innerHTML = datos.total;
  }

}

btnCalcular.addEventListener('click', function(){
  mostrarCosto(calcularCosto());
});
