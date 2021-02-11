import React, {useState} from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0))

  function gerarNumerosNaoContido(Array) {
    const min = 1
    const max = 60
    const novoNumero = parseInt(Math.random() * (max - min)) + min
    return Array.includes(novoNumero) ? gerarNumerosNaoContido(Array) : novoNumero
  }

  function gerarNumeros() {
    const novoArray = Array(props.qtdeNumero).fill(0)
    .reduce((arrayAtual, e) => {
      const novoNumero = gerarNumerosNaoContido(arrayAtual)
      console.log(arrayAtual, e, novoNumero)
      return [...arrayAtual, novoNumero]
    }, [])
    .sort((a, b) => a -b) // ordena os valores em ordem cresente
    setNumeros(novoArray)
  }
  return (
    <>
      <h3>Mega</h3>
      <h4>{numeros.join(' ')}</h4>
      <button onClick={gerarNumeros}>Gerar Número</button>
    </>
  )
}
