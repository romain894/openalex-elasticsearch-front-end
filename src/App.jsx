import {useState, useEffect} from 'react'

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
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Search
                for <span
                    className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Works</span> with AI</h1>



            <form className="mb-4 max-w-xl mx-auto">
                <label htmlFor="default-search" className="mb-6 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input onChange={event => search_works(event.target.value)} type="search" id="work-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-400 focus:border-teal-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="Search Works" required />
                    {/*<button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-gradient-to-r from-sky-400 to-emerald-600 hover:from-sky-500 hover:to-emerald-700 focus:ring-4 focus:outline-none focus:ring-teal-400 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gradient-to-r dark:from-sky-400 dark:to-emerald-600 dark:hover:from-sky-500 dark:hover:to-emerald-700 dark:focus:ring-teal-800">Search</button>*/}
                </div>
            </form>



            {/*<TextInput className="mb-6" placeholder="Search" onChange={event => search_works(event.target.value)}/>*/}

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
