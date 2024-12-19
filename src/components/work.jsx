export default function Work(props) {
    return (
        <div
            className="mb-4 max-w-3xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.title}
            </h5>
            <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 text-justify">
                {props.abstract}
            </p>
            <a href={props.id}
               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-sky-400 to-emerald-600 hover:from-sky-500 hover:to-emerald-700 focus:ring-4 focus:outline-none focus:ring-teal-400 rounded-lg 2 dark:bg-gradient-to-r dark:from-sky-400 dark:to-emerald-600 dark:hover:from-sky-500 dark:hover:to-emerald-700 dark:focus:ring-teal-800">
                {props.id}
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>

    )
}