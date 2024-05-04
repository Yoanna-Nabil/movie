import React, { createContext, useState } from 'react'


export const langContext= createContext();

export default function LanguageContext({children}) {
    
    const [lang, setLang] = useState('en');
   

  //const direction = lang === 'ar' ? 'rtl' : 'ltr';

  return (
     <langContext.Provider value={{lang, setLang}}>
        {children}
     </langContext.Provider>
  )
}
