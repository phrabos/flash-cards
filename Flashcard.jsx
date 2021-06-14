import { useState } from 'react';

const Flashcard = ({card}) => {
  const [flip, setFlip] = useState(false)

  return (
    <div onClick={()=> setFlip(!flip)}>
    {flip ? card.answer : card.question }
    </div>
    )
}

export default Flashcard;