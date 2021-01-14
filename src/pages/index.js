import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import axios from "axios";
import MainMenu from "../components/MainMenu"
import QuoteGenerator from "../components/QuoteGenerator"


export default function Home() {

  //const [quote, setQuote] = React.useState();

  const [generating, setGenerating] = React.useState(false);
  const start = () => {
    setGenerating(true);
  }

  /*React.useEffect(() => {
    axios.get("/api/quotes").then((response) => setQuote(response.data.content));
  }, []);*/

  return (
    <div className={styles.container}>
      {generating ? (<QuoteGenerator/>)
      : (
        <MainMenu onStart={start}/>
        
      )}
    </div>
  )
}
