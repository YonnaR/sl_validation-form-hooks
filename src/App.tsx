import React, { useEffect } from 'react';
import UseMailInput from './Hooks/UseMailInput';

const App: React.FC = () => {
  
  const [mail, onMailChange, isErrorOnMail, IsMailValid] = UseMailInput()
  const [tel, onTelChange, isErrorOnTel, IsTelValid] = UseMailInput()
  const [monney, onMonneyChange, isErrorOnMonney, IsMonneyValid] = UseMailInput()

  useEffect(()=>{
    console.log({
      "mail":{
        mail, isErrorOnMail, IsMailValid
      },
      "tel":{
        tel, isErrorOnTel, IsTelValid
      },
      "money":{
        monney, isErrorOnMonney, IsMonneyValid 
      }
    })
  })

  return (
    <div className="App" style={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column"
    }}>

      <div style={DivStyles}>
        <label>This is a mail input</label>
        <input type="text" value={mail} onChange={(e)=>onMailChange(e.target.value)}/>
      </div>

      <div style={DivStyles}>
        <label> this is a tel input </label>
        <input type="text" value={tel} onChange={(e)=>onTelChange(e.target.value)}/>
      </div>

      <div style={DivStyles}>
        <label> this is a money input </label>
        <input type="text" value={monney} onChange={(e)=>onMonneyChange(e.target.value)}/>
      </div>


    </div>
  );
}

const DivStyles = {
  margin: "2rem"
}

export default App;
