import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import axios from "axios";
import MainMenu from "../components/MainMenu"
import QuoteGenerator from "../components/QuoteGenerator"


export default function Home() {

  //const [quote, setQuote] = React.useState();

  const [playing, setPlaying] = React.useState(false);
  const start = () => {
    setPlaying(true);
  }

  /*React.useEffect(() => {
    axios.get("/api/quotes").then((response) => setQuote(response.data.content));
  }, []);*/

  return (
    <div className={styles.container}>
      {playing ? (<QuoteGenerator/>)
      : (
        <MainMenu onStart={start}/>
        
      )}
    </div>
  )
}
