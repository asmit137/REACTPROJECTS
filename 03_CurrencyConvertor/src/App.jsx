import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [To, setTo] = useState("inr")
  const [from, setFrom] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyinfo = useCurrencyinfo(from)
  const options = Object.keys(currencyinfo) 

  // swapping functionality
  const swap = () =>{
    setFrom(To)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert= ()=>{
    setConvertedAmount(amount * currencyinfo[To])
  }


  return (
    <>

    <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://www.freepik.com/free-photos-vectors/dark-theme-background')`,
            }}
        >
            <div className="w-full">
            <h1 className='text-center m-2 font-bold text-3xl text-white'>Currency Convertors</h1> 
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount= {amount}
                                currencyOptions= {options}
                                onCurrencyChange={(currency) => setAmount(amount)}
                                 selectCurrency = {from}
                                 onAmountChange = {(amount) => setAmount(amount)}                    
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="From"
                                amount= {convertedAmount}
                                currencyOptions= {options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                 selectCurrency = {To}
                                 amountDisable
                                 
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {To.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
