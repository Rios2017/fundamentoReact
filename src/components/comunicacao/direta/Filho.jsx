import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
	<div>
		<p>
			{props.children} {props.sobrenome}
		</p>
	</div>
);
