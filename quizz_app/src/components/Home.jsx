import React,{useState} from 'react'
import { Questions } from './Questions'
import { Datas } from './Datas'

const Home = () => {
    const [currentQuestions , updateQuestions] = useState(Datas)
  return (
    <div className='bg-gray-600'>
           <Questions currentQuestions={currentQuestions}/>
    </div>
  )
}

export default Home