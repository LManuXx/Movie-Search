import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');
  const buscarPeli = (e) => {
    setBusqueda(e.target.value)
    let pelis_encontradas = listadoState.filter(()=>{
      return pelis_encontradas.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    })
  }
  return (
    <div className="search">
        <h3 className="title"></h3>
        <form>
            <input type="text"
                    id='serach_field'
                    name='busqueda'
                    autoComplete='off'
                    value="Busca algo"
                    onChange={buscarPeli}
            />
            <button>Buscar</button>
        </form>
    </div>

                
  )
}
