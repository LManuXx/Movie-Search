import React from 'react'

export const Editar = ({peli, getPeliculas, setEditar, setListadoState}) => {
    const titulo = "Editar pelicula";
    const saveEdit = (e,id) => {
        e.preventDefault();
        let target = e.target;
        const pelis = getPeliculas();
        let index = pelis.findIndex(peli => peli.id === id);
        let peli = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,
        }
        pelis[index] = peli;
        localStorage.setItem("pelis",JSON.stringify(pelis));
        setListadoState(pelis);
        setEditar(1);

        console.log(peli);

    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo}</h3>
        <form onSubmit={(e) => saveEdit(e, peli.id)}>
            <input  type='text' 
                    name='titulo'
                    className='titulo_editado'
                    defaultValue= {peli.descripcion}/>
            <textarea   name='descripcion'
                        defaultValue= {peli.descripcion}
                        className='descripcion_editada'/>
            
            <input type='submit' className='editar' value="actualizar"/>
        </form>
    </div>
  )
}
