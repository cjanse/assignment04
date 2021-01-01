const MainMenu = (props) => {
    return (
      <>
        <div className="bg-gray-400">
        <div className="text-7xl font-bold italic mb-4 bg-yellow-700 text-white">Spanish Quote Generator</div>
        <div className="text-lg font-serif mb-3">Find REAL spanish quotes</div>
        <button
          className="w-48 bg-indigo-500 text-white font-bold rounded-lg text-xl p-4 hover:bg-indigo-700"
          onClick={props.onStart}
        >
          Quiero una cita
        </button>
        </div>
      </>
    );
  };
  
  export default MainMenu;