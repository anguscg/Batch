import {React, useState } from 'react'
import TinderCard from 'react-tinder-card'
 


function GroupCards() {
    //filling data in GroupCards
    const [group, setGroup] = useState([{
        user1: 'Angus',
        user2: 'Josh',
        url: ''
    }, 
    {
        user1: 'Angus2',
        user2: 'Josh2',
        url: ''
    }])
    

    return (
        <div>
            {group.map(users => (
                <TinderCard key={users.user1}className="swiper">
                    <div style={{backgroundColor: "orange"}} className="card">
                        <h3>{users.user1 + users.user2}</h3>
                    </div>
                </TinderCard>
            ))}



        </div>
    )
}

export default GroupCards