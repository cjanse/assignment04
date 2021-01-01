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

  const [playing, setPlaying] = React.useState(false);
  const start = () => {
    setPlaying(true);
  }

  React.useEffect(() => {
    axios.get("../api/quotes").then((response) => setQuote(response.data.content));
  }, []);

    return (
      <>
        <div className="bg-gray-400">
        <h1>{quote}</h1>
        <button
          className="w-48 bg-indigo-500 text-white font-bold rounded-lg text-xl p-4 hover:bg-indigo-700"
        >
          ¡Useless button!
        </button>
        </div>
      </>
    );
  };
  
  export default QuoteGenerator;