import { useState } from 'react';
import { CardProps } from "../../../types/data";
import { AnimatePresence, motion } from 'framer-motion';

const Card: React.FC<CardProps> = ({
  thumbnail,
  title,
  authors,
  description,
  publishedDate,
  language,
  publisher,
  pageCount,
  infoLink
}) => {

  const [modal, setModal] = useState<boolean>(false);

  return (
    <section className="text-white">
      <section className="w-64 h-[440px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
            <img className="rounded-t-lg w-full h-[280px]" src={thumbnail} alt="" />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold truncate tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Published date: {publishedDate}
            </p>
            <button
              onClick={() => setModal(true)}
              className="inline-flex justify-center items-center w-full py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          {modal && (
            <AnimatePresence>
              <motion.div
                className="fixed flex justify-center items-center z-[11] top-0 left-0 w-full h-full"
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height: 'auto'}} >
                <div className="backdrop-blur-sm w-full h-full">
                  <div className="w-full h-[1080px] z-10 flex justify-center items-center">
                    <div className="w-1/3 h-[40rem] rounded-lg dark:bg-gray-700">
                      <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-2xl font-Quicksand font-semibold text-sky-400">
                          {title}
                        </h3>
                        <button 
                          onClick={() => setModal(false)}
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          <span className="sr-only">Close modal</span>
                        </button>
                      </div>
                      <div className="flex items-center">
                        <div className="pr-5">
                          <img alt="" src={thumbnail} className="w-48 h-60 p-2 " />
                        </div>
                        <div>
                          <p className='mb-3 text-lg font-Quicksand text-indigo-200'>
                            <span className="text-xl font-mono text-white">Aвтор:</span> {authors}
                          </p>
                          <p className='mb-3 text-lg font-Quicksand text-indigo-200'>
                            <span className="text-xl font-mono text-white">Язык:</span> {language}
                            </p>
                          <p className='mb-3 text-lg font-Quicksand text-indigo-200'>
                            <span className="text-xl font-mono text-white">Страниц:</span> {pageCount}
                            </p>
                          <p className='mb-3 text-lg font-Quicksand text-indigo-200'>
                            <span className="text-xl font-mono text-white">Издатель:</span> {publisher}
                          </p>
                          <p className='mb-3 text-lg font-Quicksand text-indigo-200'>
                            <span className="text-xl font-mono text-white">Дата издания:</span> {publishedDate}
                          </p>
                        </div>
                      </div>
                      <div className="h-[45%] pb-2 overflow-hidden text-clip">
                        <p className="px-2 indent-2">
                          {description}
                        </p>
                      </div>
                      <div className="px-3">
                        <a 
                          href={infoLink}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setModal(true)}
                          className="inline-flex justify-center items-center w-full py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          More info
                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
      </section>
    </section>
  )
};

export { Card }; 


