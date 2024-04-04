import { useState } from 'react'
import Accordion from './components/Accordion/Accordion'
import image from '../src/assets/mention.png';

function App() {
  const [card, setCard] = useState(0)

  return (
    <>
      <div className='container'>
           <div className='imgcont'>
               <img className='mobimage' src={image}></img>
             </div>

        <div className='faqcont'>
          <h1 className='faq'>FAQ</h1>
          
          <div className='mainecontainer'>
            <h1 className='mobfaq'>FAQ</h1>

            <div className='box1'>
              <img className='image' src={image}></img>

            </div>
         <div className='box2'>
          <Accordion
          title="How many team members can I invite?"
          paragraf="No more than 2GB. All files in your account must fit your allotted storage space."
          num={1}
          setCard={setCard}
          card={card}
          />
           <Accordion
          title="What is the maximum file upload size?"
          paragraf="No more than 2GB. All files in your account must fit your allotted storage space."
          num={2}
          setCard={setCard}
          card={card}
          />
           <Accordion
          title="How do I reset my password?"
          paragraf="No more than 2GB. Alfiles in your account must fit your allotted storage space."
          num={3}
          setCard={setCard}
          card={card}
          />
           <Accordion
          title="Can I cancel my subscription?"
          paragraf="No more than 2GB. All files in your account must fit your allotted storage space."
          num={4}
          setCard={setCard}
          card={card}
          />
           <Accordion
          title="Do you provide additional support?"
          paragraf="No more than 2GB. All files in your account must fit your allotted storage space."
          num={5}
          setCard={setCard}
          card={card}
            />
      </div>
     </div>
   </div> 
   </div>
    </>
  )
}

export default App
