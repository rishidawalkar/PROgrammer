const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame()
{
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}


function setNextQuestion()
{
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question)
{
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct)
            {
                button.dataset.correct =  answer.correct
            }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState()
{
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild)
        {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }
}

function selectAnswer(e)
{
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }
    else{
        startButton.innerText = 'Restart'
        startButton.classList .remove('hide')
    }
}

function setStatusClass(element, correct)
{
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element)
{
        element.classList.remove('correct')
        element.classList.remove('wrong')
}

const questions =[
    
     {
        question: 'which one is backend language?',
        answers:[
            {text: 'Java', correct: true },
            {text: 'HTML', correct: false},
            {text: 'CSS', correct: false},
            {text: 'Javascript', correct: false}
    ]
    
    },  {
        question: 'which one is OOP language?',
        answers:[
            {text: 'C', correct: false },
            {text: 'C++', correct: true},
            {text: 'HTML', correct: false},
            {text: 'Javascript', correct: false}

    ]
    
    },  {
        question: 'which one is frontend language?',
        answers:[
            {text: 'Java', correct: false },
            {text: 'C', correct: false},
            {text: 'C++', correct: false},
            {text: 'Javascript', correct: true}
    ]
    
    },{
        question: 'Which of the following statements is correct?',
        answers:[
            {text: 'Base class pointer cannot point to derived class.', correct: false },
            {text: 'Derived class pointer cannot point to base class.', correct: true},
            {text: 'Pointer to derived class cannot be created.', correct: false},
            {text: 'Pointer to base class cannot be created.', correct: false}
    ]
    
    },{
        question: 'Which of the following concepts of OOPS means exposing only necessary information to client?',
        answers:[
            {text: 'Encapsulation', correct: false },
            {text: 'Abstraction', correct: false},
            {text: 'Data hiding', correct: true},
            {text: 'Data binding', correct: false}
    ]
    
    },{
        question: 'Which one of the following is an application of Stack Data Structure?',
        answers:[
            {text: 'Managing function calls', correct: false },
            {text: 'The stock span problem', correct: false},
            {text: 'Arithmetic expression evaluation', correct: false},
            {text: 'All of the above', correct: true}
    ]
    
    },{
        question: 'Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?',
        answers:[
            {text: 'Insertion Sort', correct: false },
            {text: 'Quick Sort', correct: false},
            {text: 'Heap Sort', correct: false},
            {text: 'Merge Sort', correct: true}
    ]
    
    },{
        question: 'The height of a binary tree is the maximum number of edges in any root to leaf path. The maximum number of nodes in a binary tree of height h is:',
        answers:[
            {text: '2^h -1', correct: false },
            {text: '2^(h-1) – 1', correct: false},
            {text: '2^(h+1) -1', correct: true},
            {text: '2*(h+1)', correct: false}
    ]
    
    },{
        question: 'Which one of the following is an application of Queue Data Structure?',
        answers:[
            {text: 'When a resource is shared among multiple consumers.', correct: false },
            {text: 'When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes', correct: false},
            {text: 'Load Balancing', correct: false},
            {text: 'All of the above', correct: true}
    ]
    
    },{
        question: 'Which of the following operations is not O(1) for an array of sorted data. You may assume that array elements are distinct?',
        answers:[
            {text: 'Find the ith largest element', correct: false },
            {text: 'Delete an element', correct: true},
            {text: 'Find the ith smallest element', correct: false},
            {text: 'All of the above', correct: false}
    ]
    
    }
    
]