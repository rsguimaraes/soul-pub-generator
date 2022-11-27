import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useGlobal } from '../src/Context';

export async function getStaticProps(){
  const response = await fetch('http://localhost:5333/pdfs');
  const data = await response.json(); 

  return {
    props:{data}
  }

}

export default function Home({data}) {

  const {textos} = data;
  const {setTexto} = useGlobal()

  const abreTexto = (data=null)=>{
    setTexto(data)
  }
 
  return <div>
    <ul>
      {
      textos.map((texto,index)=>{
        return <li key={index}>
          <Link href='/texto' onClick={(e)=>setTexto(texto)}>{texto.titulo}</Link>
        </li>
      })
    }
    </ul>

    </div>
}
