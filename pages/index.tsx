import { useState } from "react"

const MAX_MONEY = Number.MAX_SAFE_INTEGER

const numberToMoneyFormat = (money: number): string => {
  return money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
};

const extractNumber = (money: string): number => {
  return Number(money.replace(/[^0-9]/g, ''));
};

export default function Home() {
  const [value, setPrice] = useState(0)

  const handleChangeText = (text: string) => {    
    const number = extractNumber(text)
    let money = number

    if (number > MAX_MONEY) money = MAX_MONEY
    
    if (number < 0) money = 0 
    
    setPrice(money)
  };

  return (
    <div className="main">
      <div className="input-wrapper">
        <h1 className="atm-title">Input Monetário</h1>
        <input 
          type="text" 
          name="atm"
          className="atm-input"
          inputMode="numeric"
          value={numberToMoneyFormat(value / 100)} 
          onChange={event => handleChangeText(event.target.value)} 
        />

        <div className="result-wrapper">
          <h1 className="result-title">Resultado</h1>
          <p className="result-text">Com formatação {numberToMoneyFormat(value / 100)}</p>
          <p className="result-text">Sem formatação {value / 100}</p>
        </div>
      </div>
    </div>
  )
}
