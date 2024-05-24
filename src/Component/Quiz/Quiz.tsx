import { useState } from 'react';
import '../../index.css';


function Quiz() {

   const  questions = [
        {
            question: "Html Stands For____________________________",
            options: [
                "Hyper Text Makeup Language",
                "html",
                "Case Cading Style Sheet",
                "Hypertext markup language",
            ],
            correctAns: "Hypertext markup language",
        },
        {
            question: "Css Stands For _______________________",
            options: [
                "Casecading Style Sheet",
                "Java",
                "Ram",
                "Hypertext markup language",
            ],
            correctAns: "Casecading Style Sheet",
        },
        {
            question: "Js Stands For _______________________",
            options: ["Java Style", "Java Script", "Script", "Script Src"],
            correctAns: "Java Script",
        },
        {
            question: "Dom Stands For _______________________",
            options: ["Document Object Model", "html", "Css", "Java"],
            correctAns: "Document Object Model",
        },
        {
            question: "Ram Stands For _______________________",
            options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
            correctAns: "Random Acccess Memory",
        },
        {
            question: "Rom Stands For _______________________",
            options: [
                "Hyper Text Markup Language",
                "html",
                "HTml",
                "Read Only Memory",
            ],
            correctAns: "Read Only Memory",
        },
    ]

    const [currentIndex,setCurrentIndex] = useState(0)
    const [score,setScore] = useState(0)
            
    // console.log(currentIndex)
         
    const handleCheck = (item:any,currentIndex:number)=>{
           {item == questions[currentIndex].correctAns ?
            setScore(score + 1)
            :
            setScore(score + 0)  
           }
          
          }
          // console.log(score)

    return (
    <>
    
   {currentIndex > 5 ?
   <>
   <div className="flex justify-evenly items-center h-40 text-3xl">
    <div className="">
      <p className=''>Your Total Score Is {score} out of {questions.length}</p>
      <p >Your Percentage is {Math.ceil(score * 100 / questions.length)}% </p>
      </div>
  

 <div className="">
    <button className='bg-slate-400 rounded-xl p-2 text-center' onClick={()=>{
        setCurrentIndex(0)
        setScore(0)
    }}>Start Again</button>
 </div>
 </div>
 </>
  :
<div className="container">
    <h1>Quiz App</h1>
    <div className="question">
      <p><strong>Question {currentIndex + 1}/{questions.length}:</strong>{questions[currentIndex].question}</p>
        <div className="options">{questions[currentIndex].options.map((item,index,arr)=>{

          return (
              <>
            
            <div className="" key={index}>
                            <div id='optionBox' className="option " key={index} 
                          onClick={()=>{
                            setCurrentIndex(currentIndex + 1)
                            handleCheck(item,currentIndex)
                          }}
                            
                              >{item}</div>
                            </div>
             
            
              </>
          )
        })}</div>
       
      </div>
  </div>
  }
  
  
    
   </>
  );
}

export default Quiz;