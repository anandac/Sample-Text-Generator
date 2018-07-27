import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Output from './Components/Output';
import Select from './Components/Control/Select';
import Text from './Components/Control/Text';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        paras: 10,
        html: true,
        text: ''
      }
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get('http://hipsterjesus.com/api/?paras='+this.state.paras+'&html='+this.state.html)
      .then((response) => {
        this.setState({text: response.data.text}, function(){
          console.log(this.state);
        });
      })
      .catch((error) => {
        console.log(error);
      });

  }

  changeParas(k){
    this.setState({paras: k}, this.getSampleText);
  }

  showHtml(j){
        this.setState({html: j}, this.getSampleText);
  }
  render() {
    return (
      <div className="App container">
        <h1> Sample Text Genertor </h1>
        <hr />
        <form className="form-content">
          <div className="form-group">
            <label> Include html: </label>
            <Select value={this.state.html} onChange={this.showHtml.bind(this)} />
          </div>
          <div className="form-group">
            <label> Paragraphs: </label>
            <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
          </div>
        </form>
       <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
