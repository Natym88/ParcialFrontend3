
import './App.css'
import Card from './components/Card'
import countryCodes from './assets/countryCodes'
import { useState } from 'react'

function App() {

  const [validatedFields, setValidatedFields] = useState(false);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [data, setData] = useState({
    name: "",
    country: "",
    code: "",
  });
  const [isNameOk, setIsNameOk] = useState(true);
  const [isCountryOk, setIsCountryOk] = useState(true);

  const nameOnChange = e => {
    setName(e.target.value)
    if(name.trim().length > 2)
      setIsNameOk(true)
  }

  const countryOnChange = e => {
    setCountry(e.target.value)
    if(country.length > 5)
    setIsCountryOk(true)
  }

  const codeOnChange = e => {
    setCode(e.target.value)
  }

  const validateName = () => {
    if(name.trim().length > 2)
      setIsNameOk(true)
    else
      setIsNameOk(false)
      setValidatedFields(false)
  }

  const validateCountry = () => {
    if(country.length > 5)
      setIsCountryOk(true)
    else
      setIsCountryOk(false)
      setValidatedFields(false)
  }

  const validateForm = () => {
    if(name.trim().length > 2 && country.length > 5)
      setValidatedFields(true)
  }

  const cleanForm = () => {
    setName("");
    setCountry("");
    setCode("")
  }

  const submitHandler = e => {
    e.preventDefault();
    validateName();
    validateCountry();
    validateForm();
    setData({
      name: name,
      country: country,
      code: code,
    });
    if(name.trim().length > 2 && country.length > 5)
      cleanForm();
  }


  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="">Nombre:</label>
        <input type="text" value={name} onChange={nameOnChange} className={!isNameOk ? "error" : ""} />
        {!isNameOk && <p className='errorMessage'>Por favor chequea que la información sea correcta</p>}
        <label htmlFor="">País:</label>
        <input type="text" value={country} onChange={countryOnChange} className={!isCountryOk ? "error" : ""} />
        {!isCountryOk && <p className='errorMessage'>Por favor chequea que la información sea correcta</p>}
        <select name="" id="" onChange={codeOnChange} value={code}>
          <option>Selecione un país</option>
          {countryCodes.map( c => (
            <option value={c.code} key={c.code}>{c.name}</option>
          ))}
        </select>
        <button type='submit'>Enviar</button>
      </form>
      {validatedFields && <Card data={data} />}
    </div>
  )
}

export default App
