import React, { Fragment } from 'react';
import { connect } from 'react-redux';

class WordCard extends React.Component {

state={
  definition1: '',
  definition2: '',
  definition3:''
}

 fetchDefinition=(input, output)=>{
  fetch(`https://wordsapiv1.p.rapidapi.com/words/${input}/definitions`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
      'X-RapidAPI-Key':'4d90375dd6mshbfa9800b3e51019p1ebfd0jsn92f7ebed7441'
    }}).then(r=>r.json())
  .then(r=>{
    debugger
    this.setState({
    output: r
  })})
}

componentDidMount(){
}
render() {
return (
  (this.props.today) ?
    <div>
      <p> {this.props.today.word1}</p>
      <p> {this.props.today.word2}</p>
      <p> {this.props.today.word3}</p>
    </div>
    : null
  );
}
}

function mapStateToProps(state) {
  return {
    today: state.today
  }
}

const HOC = connect(mapStateToProps)
export default HOC(WordCard);