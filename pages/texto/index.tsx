import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { useGlobal } from '../../src/Context'

export default function Home() {

  const {texto, setTexto} = useGlobal();
  const {paragrafos} = texto

  return (
   <div>
     <div className="bg-img"></div>
    <div className="container">

        <div className="div-texto">
            <h2>{texto.titulo}</h2>
        
            {
              paragrafos.map((linha,index)=>{
                return <p key={index}>{linha}</p>
              })
            }

            <p className="italic bibliografia">Fonte: Livro: Palavras de Fé</p>
        
            <p className="soul">
                <img alt='teste' className="logo" src="/images/logo.png"/> 
            </p>
            <p className="soul-texto">
                Sociedade Universalista da Luz
            </p>

        </div>

    </div>

   </div>
  )
}
