import React from 'react';
import ReactDOM from 'react-dom';
import {Copycat} from '../components/CopyCat';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


class CopyCatContainer extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input:'',
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange=this.handleChange.bind(this)
  }

  toggleTape() {
    this.setState({copying: !this.state.copying})
  }
  handleChange(e){
    this.setState({input:e.target.value})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const input = this.state.input;
    const handleChange=this.handleChange;
    
    return <CopyCat copycat={images.copycat} quietcat={images.quietcat} copying={copying}
    toggleTape = {toggleTape}
    input={input} handleChange={handleChange}
    />
  };
}


ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));
