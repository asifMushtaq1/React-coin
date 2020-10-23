import React from 'react';

const Coin = ({info}) => {
  return (
    <div>
      <img 
        src={info.imgSrc} 
        alt={info.side}
        style={{width:200,  height:200}}
        />
    </div>
  )
}
export default Coin;