import Flashcard from "./Flashcard";

const FlashcardList = ({flashcards}) => {

  return (
    <div className='card-grid'>
      {flashcards.map(card => {
        return <Flashcard key={card.id} card={card} />
      })}
      
    </div>
  )
}

export default FlashcardList;