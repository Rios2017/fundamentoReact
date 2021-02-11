import React, {useState} from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [nome, setNome] = useState('Pedro')
	return (
    <>
    <h3>{nome}</h3>
      <input type="text" value={nome} onChange={event => setNome(event.target.value)}/>
    </>
  )
};
