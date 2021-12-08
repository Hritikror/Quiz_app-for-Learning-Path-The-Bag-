import './App.css';
import React ,{ useState } from 'react';

const questions = [
  {
    questionText: 'What is React Js?',
    answerOptions: [
      { answerText: 'Javascript framework', isCorrect: false },
      { answerText: 'Javascript library', isCorrect: true },
      { answerText: 'Javascript file', isCorrect: false },
      { answerText: 'None of the Above', isCorrect: false },
    ],
  },
  {
    questionText: 'What does ReactJS use to increase performance?',
    answerOptions: [
      { answerText: 'Local DOM', isCorrect: false },
      { answerText: 'Virtual DOM', isCorrect: true },
      { answerText: 'Real DOM', isCorrect: false },
      { answerText: 'None of the Above', isCorrect: false },
    ],
  },
  {
    questionText: 'Number of elements, a valid react component can return',
    answerOptions: [
      { answerText: '1', isCorrect: true },
      { answerText: '2', isCorrect: false },
      { answerText: '3', isCorrect: false },
      { answerText: '4', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the default port for webpack dev server?',
    answerOptions: [
      { answerText: '8809', isCorrect: false },
      { answerText: '3306', isCorrect: false },
      { answerText: '3000', isCorrect: false },
      { answerText: '8080', isCorrect: true },
    ],
  },
  {
    questionText: 'What are two ways data gets handled in react?',
    answerOptions: [
      { answerText: 'state & component', isCorrect: false },
      { answerText: 'state & services', isCorrect: false },
      { answerText: 'services & components', isCorrect: false },
      { answerText: 'state & props', isCorrect: true },
    ],
  },
  {
    questionText: 'React Js is developed by',
    answerOptions: [
      { answerText: 'Google', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
      { answerText: 'Facebook', isCorrect: true },
      { answerText: 'None of above', isCorrect: false },
    ],
  },
  {
    questionText: 'How many stages are there in React js life cycle',
    answerOptions: [
      { answerText: '2', isCorrect: false },
      { answerText: '3', isCorrect: true },
      { answerText: '4', isCorrect: false },
      { answerText: '1', isCorrect: false },
    ],
  },
  {
    questionText: 'Everything in react is',
    answerOptions: [
      { answerText: 'component', isCorrect: true },
      { answerText: 'class', isCorrect: false },
      { answerText: 'module', isCorrect: false },
      { answerText: 'package', isCorrect: false },
    ],
  }
];

function App() {
  

	const [currentQuestion, setCurrentQuestion] = useState(Math.floor(Math.random() * questions.length));
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [selected,setSelected] =useState();
  const [selectedBool,setSelectedBool] =useState();
  const [locked,setLocked] = useState(false);
  const [index,setIndex] = useState(1);

	const handleAnswerOptionClick = (answerOption) => {
    setSelected(answerOption.answerText);
    setSelectedBool(answerOption.isCorrect);
  };
  const handleSelect = (answerOption) => {
    if(answerOption.answerText === selected) return 'clicked';
    
  }
  
  const handleShow = () => {
    
    if(selected) {
      setLocked(true)
      if(selectedBool) {
        setScore(score + 1);
      }
    }
  }

  const showResult = (answerOption) => {
    if(answerOption.answerText === selected && answerOption.isCorrect) return 'correct';
    else if(answerOption.answerText === selected && !answerOption.isCorrect) return 'incorrect';
    else return "";
  }
  const handleNext = () => {
   // questions.filter(item => item.questionText !==questions[currentQuestion].questionText)
     questions.splice(currentQuestion,1);
    // console.log(questions);
     // const nextQuestion = currentQuestion + 1;
		if (questions.length >=1) {
			setCurrentQuestion(Math.floor(Math.random() * questions.length));
      setSelected("");
      setLocked(false);
      setIndex(index+1);
		} else {
			setShowScore(true);
      
		}
  }

  return (
    <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of 8
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {index}</span>/8
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
            <div className='answer-section'>
						 {questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className={`${(locked && showResult(answerOption)) || (selected && handleSelect(answerOption))}`} onClick={() => handleAnswerOptionClick(answerOption)} disabled = {locked}>{answerOption.answerText}</button>
						))} 
					  </div>
            <br/>
            <div >
            <button className='save-answer' onClick={handleShow}>OK</button>
            </div>
					</div>
          <div>
              <button className='next-question' onClick = {locked && handleNext}>NEXT</button>
            </div>
					
				</>
			)}
		</div>
  );
}

export default App;
