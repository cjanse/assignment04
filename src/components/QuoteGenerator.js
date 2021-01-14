import React from "react";
import axios from "axios";

const QuoteGenerator = (props) => {

  const [response, setResponse] = React.useState("");
  const [search, setSearch] = React.useState(true);

  const handle_change = (event) => {
      setSearch(true)
    const value = event.target.value;
    setResponse(value);
  };

  const guess = () => {

  };

  const [quote, setQuote] = React.useState();
  const getQuote = () => axios.get("../api/quotes").then((response) => setQuote(response.data.content));

  const [generating, setGenerating] = React.useState(false);
  const start = () => {
    setGenerating(true);
  }



  React.useEffect(getQuote,[]);

    return (
      <>
        <div className="bg-gray-400">
        <h1 className="italic text-center p-4">{quote}</h1>
        <button
          className="flex flex-center flex-justify-center place-items-center w-48 bg-indigo-500 text-white text-center font-bold rounded-lg text-lg p-4 hover:bg-indigo-700" onClick={getQuote}
        >
          ¡Otra cita por favor!
        </button>
        </div>
      </>
    );
  };
  
  export default QuoteGenerator;