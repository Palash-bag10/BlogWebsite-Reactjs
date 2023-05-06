import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import './Pagination.css'

export default function Pagination() {

  const {pageCount, changePageHandler, totalPageCount} = useContext(AppContext);

  return (
    <>
     <div className=' inset-x-0 flex justify-center items-center border-t-2 border-t-gray-300 fixed bottom-0 bg-slate-300 py-3'>
      <div className=' w-11/12 max-w-2xl flex items-center justify-between'>
        <div className=' flex gap-x-4'>
          { pageCount > 1 &&
            (<button 
            className=' pagination__button border border-black rounded-md px-3 py-1'
            onClick={() => changePageHandler(pageCount - 1)}>
              Previous
            </button>)
          }

          {
            pageCount < totalPageCount &&
            (<button 
            className=' pagination__button border border-black rounded-md px-3 py-1'
            onClick={() => changePageHandler(pageCount + 1)}>
              Next
            </button>)
          }
        </div>

        <p className=' font-bold text-sm'>
          PAGE {pageCount} of {totalPageCount}
        </p>
      </div>
     </div> 
    </>
  )
}
