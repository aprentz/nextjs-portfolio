'use client'

import { fromJSON } from "postcss"

const Contact = () => {

   const handleSubmit = async (e) => {
      console.log('hello')
      let formData = {}
      Array.from(e.currentTarget.elements).forEach( entry => {
         formData[entry.name] = entry.value
      })
      await fetch('https://nextjs-portfolio-agz5h3y44-aprentzs-projects.vercel.app/api/mail', {
         method: "post",
         body: JSON.stringify(formData)
      })

   }

   return (
      <div>
         <form className="center mt-8 min-w-[400px]" method="post" onSubmit={handleSubmit}>
            <h1 className="heading-1">send an <span className="text-blue-600">email</span></h1>
            <div className="w-[35%] min-w-[340px]">
               <div className="input-ctr">
                  <label htmlFor="name">name:</label>
                  <input className="form-input" type="text" name="name" />
               </div>
               <div className="input-ctr">
                  <label htmlFor="email">email:</label>
                  <input className="form-input" type="email" name="email" />
               </div>
               <div className="input-ctr">
                  <label htmlFor="message">message:</label>
                  <input className="form-input" type="textarea" name="message" />
               </div>
               <button className="form-btn">submit</button>
            </div>
         </form>

      </div>
   )
}

export default Contact
