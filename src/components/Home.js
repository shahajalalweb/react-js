import React, {useState} from 'react'

import style from "../style/home.module.css"
import { faqsData } from './data'
import FAQ from './faq'


 
const Home = () => {
  const [faqs, setFaqs] = useState(faqsData);

  return (
    <div className={style.container}> 

      <section className={style.faqs}>
        {
          faqs.map(faq => <FAQ  key={faq.id} {...faq} />)
        }
      </section> 

    </div>
  )
}

export default Home