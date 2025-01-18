function esperarSegundos(seg) {
    return new Promise(resolve => setTimeout(resolve,seg*1000));
  }
  
  async function funcionAsincrona(tiempoEspera) {
    console.log(`Esperando ${tiempoEspera}segundos...`);
    await esperarSegundos(tiempoEspera);
    console.log("¡Tiempo de espera completado!");
  }
  
  funcionAsincrona(3);

  export default esperarSegundos;
  