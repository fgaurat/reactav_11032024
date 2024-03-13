import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from 'i18next'

function App() {
  const {t,i18n} = useTranslation()

const changeLanguage = (l:string)=>{
  i18n.changeLanguage(l)
}

  return (
    <>
      <h1>{t('Welcome to React')}</h1>
      <button onClick={() => changeLanguage("en")}>en</button>
      <button onClick={() => changeLanguage("fr-FR")}>fr-FR</button>
    </>
  )
}

export default App
