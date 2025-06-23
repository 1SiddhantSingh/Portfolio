import React from 'react'

const Button = ({text, className, id}) => {
    return (
       <a className={`${className ?? ''} cta-wrapper`}>
           <div className="cta-button group">
               <div className="bg-circle" />
                   <p className="text">{text}</p>
                   <div className="hover:bg-white-50 size-10 rounded-full absolute right-10 top-1/2
            -translate-y-1/2 flex justify-center items-center overflow-hidden">
                       <img src="/images/arrow-down.svg" alt="arrow" />
                   </div>
               </div>
       </a>
    )
}
export default Button
