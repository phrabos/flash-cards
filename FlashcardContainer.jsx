import { useState } from 'react';
import FlashcardList from "./FlashcardList";

const FlashcardContainer = () => {
const [flashcards, setFlashcards] = useState(placeholderCards)

  return (
  <div>
  <FlashcardList flashcards={flashcards}/>
    </div>
  )
}

const placeholderCards = [
  {
    id: 1,
    question: 'What is node.js?',
    answer: 'a JavaScript runtime environment',
    options: [
      'a server',
      'a browser',
      'a JavaScript runtime environment'
    ]
  },
  {
    id: 2,
    question: 'Question 2',
    answer: 'Right Answer',
    options: [
      'Answer 1',
      'Answer 2',
      'Right Answer'
    ]
  },
  {
    id: 3,
    question: 'Question 3',
    answer: 'Right Answer',
    options: [
      'Right Answer',
      'Answer 2',
      'Answer 3'
    ]
  },
  {
    id: 4,
    question: 'Question 4',
    answer: 'Right Answer',
    options: [
      'Right Answer',
      'Answer 2',
      'Answer 3'
    ]
  },
]

export default FlashcardContainer;