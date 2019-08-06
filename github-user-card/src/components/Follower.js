import React from 'react';

const Follower = props => {
    return (
        <div className='follower'>
            <p>{props.follower.login}</p>
        </div>
    )
}

export default Follower;