import logo from './logo.svg';
import './App.css';

import { useState } from 'react';



function App(){
  const [nome, setNome] = useState('');
  const [carteira, setCarteira] = useState('');
  const [cpf, setCpf] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [dia, setDia] = useState('');
  const [horario, setHorario] = useState('');
 




  function handleRegister(e){
  e.preventDefault();
  
  const dados = {
     nome:nome,
     carteira:carteira,
     cpf:cpf,
     especialidade:especialidade,
     dia:dia,
     horario:horario
  }
  console.log(dados)


  }

  return(
    <div>

      <h1>BtClin</h1>
      
      <h2>Agendar consultas</h2>
      <hr></hr>

      <form onSubmit={handleRegister}>

        <div class="label">
        
        <label>Nome:</label><br/>
        <input 
         placeholder="Digite seu nome" 
         value={nome}
         onChange={ (e) => setNome(e.target.value) }
        /><br/>
        </div>
        <div class="label">
         <label>Número carteira:</label><br/>
        <input 
         placeholder="Digite o número carteira" 
         value={carteira}
         onChange={ (e) => setCarteira(e.target.value) }
        /><br/>
  </div>
  <div class="label">
        <label>cpf:</label><br/>
        <input 
         placeholder="Digite seu cpf" 
         value={cpf}
         onChange={ (e) => setCpf(e.target.value) }
        /><br/>  </div>

<div class="label">
        <label id="option">especialidade Médica: </label><br/>
        <select 
          value={especialidade}
          onChange={ (e) => setEspecialidade(e.target.value) }>
          <option value="Cardiologista">Cardiologista</option>
          <option value="Pediatra">Pediatra</option>
          <option value="Genicologista">Genicologista</option>
          <option value="Ortopedista">Ortopedista</option>
          <option value="Fonodiologo">Fonodiologo</option>
          <option value="terapeuta">Terapeuta</option>
          <option value="psiquiatra">Psiquiatra</option>
        </select>
        <br/> </div>
      

     <div class="label">
        <label>Data:</label><br/>
        <input 
         type="date"
         value={dia}
         onChange={ (e) => setDia(e.target.value) }
        /><br/>
        </div>


      <div class="label">
         <label>Horário:</label><br/>
          <select value={horario}
         onChange={ (e) => setHorario(e.target.value) } >
          <option value="09:00 (manhã)">09:00 (manhã)</option>
          <option value="14:00 (tarde)">14:00 (tarde)</option>
          <option value="18:00 (noite)">18:00 (noite)</option>
        
        </select>
       <br></br></div>
        <button type="submit">Marcar</button>
      </form>

      <br/><br/>

   

    </div>
  );
}



export default App;