import { useState } from 'react';
import React from 'react';

export function List() {
  const [activeList, setStatus] = useState('active');

  const changeStatus = (event) => {
        const value = event.target.value;
        setStatus(value);
    };

  const renderContent = () => {
    switch (activeList) {
      case 'inactive':
        return (<ul style={{
            border:'1px solid red',
            width:'270px',
            padding:10,
            textAlign:'center'
        }}>
                    <li>Currently Playing:</li>
                    <li>Kingdom Come: Deliverance 2</li>
                    <li>Metal Gear Solid Δ: Snake Eater</li>
                    <li>Alan Wake 2</li>
                </ul>);
      case 'active':
        return (<ul style={{
            border:'1px solid goldenrod',
            width:'270px',
            textAlign:'center',
            padding:10}}>
                    <li>My Favorites:</li>
                    <li>Red Redemption 2</li>
                    <li>Fallout: New Vegas</li>
                    <li>Baldur's Gate 3</li>
                </ul>);
      default:
        return (<ul>
                    <li>My Favorites:</li>
                    <li>Red Redemption 2</li>
                    <li>Fallout: New Vegas</li>
                    <li>Baldur's Gate 3</li>
                </ul>);
    }
  };

  return (
    <div>
    {renderContent()}
    <section style={{
        display:'flex',
        flexDirection:'column'

        }

    }>
    <div style={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        width:'250px',
        }

    }>
    <button style={{
        marginRight:5,
        marginBottom:1,
        width:'100px',
        background:'cornflowerblue'

    }}
     onClick={changeStatus} value={"active"} >Favorites</button>
    <button onClick={changeStatus} value={"inactive"} style={{
        marginBottom:1,
        width:'100px',
        background:'cornflowerblue'}}>Currently playing</button>
    </div>
      
    </section>
    </div>
  );
}
