import { createContext, useContext, useCallback, useMemo, useRef, useState } from 'react'
import PureComponent01 from './components/PureComponent01'
import PureComponent02 from './components/PureComponent02'
import UseEffect from './components/UseEffect'
import UseMemo from './components/UseMemo'
import UseReducer from './components/UseReducer'
import UseRef from './components/UseRef'

export const ThemeContext = createContext(null);



function App() {

  const [show, setShow] = useState(false)
  const uneValeur = "Une valeur"
  console.log("Render App")
  const [theme, setTheme] = useState('dark');


  // const onClickPureComponent02 = () =>{
  //   console.log("onClickPureComponent02")
  // }

  // const onClickPureComponent02 = useMemo(()=>{
  //   return ()=>{
  //     console.log("onClickPureComponent02")
  //   }
  // },[])


  const onClickPureComponent02 = useCallback(() => {
    console.log("onClickPureComponent02")
  }, [])

  const inputRef = useRef<HTMLInputElement>(null)
  const componentRef = useRef<{ setFocus: () => {}, theValue: () => { '' } }>(null)

  const clickRef = () => {
    console.log(inputRef?.current?.value)

  }
  const clickComponentRef = () => {
    console.log(componentRef?.current?.theValue())
  }
  const clickComponentRefFocus = () => {
    componentRef?.current?.setFocus()
  }

  return (
      <ThemeContext.Provider value={{theme,setTheme}}>
        <h1>Hooks</h1>
        
        <button onClick={() => {theme==='light'?setTheme('dark'):setTheme('light')}}>
          Switch theme
        </button>        

        <button onClick={() => setShow(s => !s)}>{show ? "Hide" : "Show"} value</button>
        {show &&
          <>
            <h2>Show</h2>
            <UseEffect />
          </>
        }
        <hr />
        <UseReducer />
        <hr />
        <UseMemo />
        <hr />
        <PureComponent01 value={uneValeur} />
        <hr />
        <PureComponent02 onClick={onClickPureComponent02} />
        <hr />
        <input type="text" ref={inputRef} />
        <button onClick={() => clickRef()}>ClickRef</button>
        <hr />
        <UseRef ref={componentRef} />
        <br />
        <button onClick={() => clickComponentRef()}>ComponentRef</button>
        <button onClick={() => clickComponentRefFocus()}>ComponentRefFocus</button>
      </ThemeContext.Provider>
  )
}

export default App
