import {useState, useEffect} from 'react'

import { TextInput } from "flowbite-react";

import './App.css'
import Work from './components/work.jsx';


function App() {
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
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Search for <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Works</span> with AI</h1>
            <TextInput className="mb-6" placeholder="Search" onChange={event => search_works(event.target.value)}/>

            <section className="">
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
