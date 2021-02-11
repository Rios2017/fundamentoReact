import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  //props é somente para leitura!!
  //props.titulo = "Outro titulo"
  return (
    <>
      <h3>{props.titulo}</h3>
      <p>{props.subtitulo}</p>
    </>
  )
}
