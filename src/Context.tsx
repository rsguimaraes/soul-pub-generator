import React, { createContext } from 'react';

const dataDefault:{
    texto?:any, setTexto?:(texto:any)=>void,
} = {}

const Context = createContext(dataDefault);


export const ContextProvider = ({children})=>{
    const [texto, setTexto] = React.useState<any>('');

    return <Context.Provider
    value={{
        texto, setTexto,
    }}
>
    {children}
</Context.Provider>

}

export function useGlobal(){

    return React.useContext(Context)
}
