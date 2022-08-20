import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const obterTextoDoBotao = () => "Enviar";
  const divStyle = {margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8, outline: 'none'};
  const labelStyle = {display: 'block', marginBottom: 4};
  const label = 'Nome:'
  const inputStyle = {paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'};
  const buttonStyle = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', borderRadius: 8, width: '100%'};
  return (
    <div style={divStyle}>
      <label htmlFor="nome" style={labelStyle}>{label}</label>
      <input type="text" id='nome' style={inputStyle}/>
      <button style={buttonStyle}>{obterTextoDoBotao()}</button>    
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')  
)