import React from 'react'
import icc from '..//../assets/icc.png';

const Accordion = ({title,img,paragraf,card,num,setCard}) => {
  return (
      <div className='cardbox'>
          
          <div className='card'>
          <p onClick={() => {
              if (card === num) {
                  setCard(null);
              } else {
                  setCard(num)
              }
          }}
          >
            {title}
          </p> 
        <img className="icon"  style={ {img }}  src={icc} />
          </div>
          {card === num && <p>{ paragraf}</p>  }
    </div>
  )
}

export default Accordion;




