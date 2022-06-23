import React from 'react';

export class Button extends React.Component {
	render() {
		return (
		<button onClick={this.props.onClick} 
         className="w3-btn w3-ripple w3-black w3-text-white 
         w3-hover-aqua w3-hover-text-white" style={{fontSize:"40px"}}
         >
				Refresh
		</button>
		);
	}
}
