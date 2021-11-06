import { useState } from "react"

const maxMoney = Number.MAX_SAFE_INTEGER

const numberForReal = (money: number): string => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    .format(money)
    .replace(/^(\D+)/, '$1 ');
};

const extractNumber = (money: string): number => {
  return Number(money.replace(/[^0-9]/g, ''));
};

export default function Home() {
  const [value, setPrice] = useState(0)

  const handleChangeText = (text: string) => {    
    const number = extractNumber(text)

    if (number > maxMoney) {
      setPrice(maxMoney)
      return;
    }
    
    if (number < 0) {
      setPrice(0)
      return;
    } 
    
    setPrice(number)
  };

  const handleShowMoney = () => {
    const money = value / 100
    alert(numberForReal(money) + '\n' + money)
  }

  return (
    <div className="main">
      <div className="input-wrapper">
        <h1 className="atm-title">Input Monetário</h1>
        <input 
          type="text" 
          name="atm"
          className="atm-input"
          inputMode="numeric"
          value={numberForReal(value / 100)} 
          onChange={event => handleChangeText(event.target.value)} 
        />
        <button onClick={handleShowMoney} className="atm-button">
          Exibir
        </button>
      </div>
    </div>
  )
}
