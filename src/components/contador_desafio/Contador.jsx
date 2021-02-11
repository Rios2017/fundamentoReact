import React, { Component } from 'react';
import './Contador.css';
import Display from './Display.jsx';
import PassoForm from './PassoForm.jsx';
import Botoes from './Botoes.jsx';

export default class Contador extends Component {
	state = {
		passo: this.props.passo || 1,
		valor: this.props.valor || 0
	};

	// incrementar
	inc = () => {
		this.setState({
			valor: this.state.valor + this.state.passo
		});
	};

	//decrementar
	dec = () => {
		this.setState({
			valor: this.state.valor - this.state.passo
		});
	};

	mudarPasso = (novoPasso) => {
		this.setState({
			passo: novoPasso
		});
	};

	render() {
		return (
			<div className="contador">
				<h2>Contador</h2>
				<PassoForm passo={this.state.passo} onPassosChange={this.mudarPasso} />

				<Display valor={this.state.valor} />

				<Botoes onInc={this.inc} onDec={this.dec} />
			</div>
		);
	}
}
