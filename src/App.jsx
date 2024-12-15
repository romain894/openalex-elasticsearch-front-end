import { useState, useEffect } from 'react'

import './App.css'
import Work from './components/work.jsx';


function App() {
  // const [query, setQuery] = useState("");
  const [works, setWorks] = useState([]);

  useEffect(() => {
   }, []);

  const search_works = (text) => {
    fetch('http://127.0.0.1:8000/text_knn_search?text=' + text, {
      method: 'POST',
      // body: JSON.stringify({
      //   text: text,
      // }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((response) => {
      // console.log(response)
      // if(response.status === 200) {
        setWorks(response)
      // }
    })
    .catch(err => console.log(err))
  };


  return (
    <>
      {/*<input placeholder="Search" onChange={event => setQuery(event.target.value)}/>*/}
      <input placeholder="Search" onChange={event => search_works(event.target.value)}/>
      <section className="works-container">
      <h2>Works</h2>
        {works.map((work) =>
          <Work
            key={work.id}
            id={work.id}
            title={work.display_name}
            abstract={work.abstract}
          />
        )}
      </section>
    </>
  )
}

export default App
