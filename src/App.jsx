import { useState, useEffect } from "react";
import { Card } from "./components/card/card.jsx";
import { Default } from "./components/default/default.jsx";
import { Winners } from "./components/Winners/Winners.jsx";
import { Note } from "./components/note/note.jsx";

export function App() {
  const [loaded, load] = useState(0);
  const url = "https://raw.githubusercontent.com/luancarvalho7/apiMovies/main/data.json";
  const [data, setData] = useState([]);

  function fetchData() {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }

  useEffect(() => {
    if (loaded === 0) {
      fetchData();
      load(1);
    }
  }, [loaded]);

  const [currentPage, setCurrentPage] = useState(0);

  function oii() {
    setCurrentPage(0);
  }

  function renderPage() {
    if (currentPage === 1) {
      return <Winners data={data} />;
    }
    if(currentPage == 0 ){
      return <Default data={data} />
  }
  if(currentPage == 2 ){
    return <Note data={data} />
}
  }

  function mudarpag3(){
setCurrentPage(2)
  }
  function mudarpag2(){

setCurrentPage(1)

  }
  return (
    <>
      <header><span className="heroTransition"></span></header>
      <main>
        <div className="heading">
          <h1 className="grandTitle">API Movies</h1><br/>
          <button onClick={oii} className="currentPage">All</button><br/>

          <button onClick={mudarpag2} className="currentPage">Winners</button><br/>
          <button onClick={mudarpag3} className="currentPage">Our score</button>
        </div>
        <div className="displayedData">
          {renderPage()}
        </div>
      </main>
    </>
  );



}