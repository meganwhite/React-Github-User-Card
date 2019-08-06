import React from 'react';
import Follower from './Follower';

const FollowerList = props => {

    return (
        <div className = "follower-list">
            {props.followers.map(follower => (
                <Follower 
                    key = {follower.id}
                    follower = {follower}
                    login = {follower.login} 
                />
            ))}
        </div>
    )
}

export default FollowerList