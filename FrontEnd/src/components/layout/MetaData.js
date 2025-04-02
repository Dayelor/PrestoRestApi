import React from 'react'
import { Helmet } from 'react-helmet' //importamos la libreria helmet para modificar el head de la pagina
//la libreria helmet nos permite modificar el head de la pagina

const MetaData = ({titulo}) => {
  return (
    <Helmet>
        <title>{ titulo+ " - Presto Ibérica"  }</title>
    </Helmet>
  )
}

export default MetaData