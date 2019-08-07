import React from 'react';
import { Card } from 'semantic-ui-react'

const Follower = props => {
    return (
        <Card >
            <div className='ui card'>
                <img src = {props.follower.avatar_url} alt = "user avatar"/>
                <h2>{props.follower.login}</h2>
            </div>
        </Card>

    )
}

export default Follower;