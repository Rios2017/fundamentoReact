import './App.css';
import React from 'react';
import Primeiro from './components/basico/Primeiro';
import ComParametro from './components/basico/ComParametro';
import ComFilhos from './components/basico/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basico/Repeticao';
import Condicional from './components/basico/Condicional';
import CondicionalComIf from './components/basico/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador_desafio/Contador';
import Mega from './components/mega_desafio/Mega';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
	<div className="app">
		<h2>Fundamentos React</h2>
		<div className="cards">
			<Card titulo="#11 - Mega" color="#73503C">
				<Mega qtdeNumero={8} />
			</Card>
			<Card titulo="#10 - Contador" color="#293E6A">
				<Contador passo={10} valor={100} />
			</Card>
			<Card titulo="#09 - Input" color="#9C0F5F">
				<Input />
			</Card>
			<Card titulo="#08 - Comunicação Indireta" color="#000">
				<Super />
			</Card>
			<Card titulo="#07 - Comunicação Direta" color="#4298B5">
				<Pai sobrenome="Freitas" />
			</Card>
			<Card titulo="#06 - Condicional v2" color="#FA6900">
				<CondicionalComIf numero={13} />
			</Card>
			<Card titulo="#05 - Condicional v1" color="#E94C6F">
				<Condicional numero={14} />
			</Card>
			<Card titulo="#04 - Repetição" color="#008BBA">
				<Repeticao />
			</Card>
			<Card titulo="#03 - Componente Com Filhos" color="#D96459">
				<ComFilhos>
					<ul>
						<li>Ana</li>
						<li>Bia</li>
						<li>Carlos</li>
						<li>Daniel</li>
					</ul>
				</ComFilhos>
			</Card>
			<Card titulo="#02 - Componente Com Parametro" color="#FF85CB">
				<ComParametro titulo="Esse é o Titulo" subtitulo="Esse é o Subtitulo" />
			</Card>
			<Card titulo="#01 - Primeiro componente" color="#92B06A">
				<Primeiro />
			</Card>
		</div>
	</div>
);
