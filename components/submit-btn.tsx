import React from 'react'
import { useFormStatus } from 'react-dom';
import { AiOutlineSend } from 'react-icons/ai'
//----------------------------------imports--------------------------------------------


// button Send in contact section - tailwind loader animation
export default function SubmitBtn() {
    const { pending } = useFormStatus();
  return (
    <button 
    className="group bg-sky-500 hover:bg-sky-700 text-white rounded-full h-[3rem] w-[8rem] outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
     type="submit"
     disabled={pending} 
     > {
        pending ? ( <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div> 
        ) : (
            <>
            Send <AiOutlineSend
             className="opacity-90 transition-all group-hover:translate-x-1" />
            </>
        )}
        </button>
        );
    }
