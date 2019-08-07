import React from 'react';
import { Card } from 'semantic-ui-react'

const Follower = props => {
    return (
        <Card >
            <div className='ui cards'>
                <div class="card">
                    <div class="image">
                        <img src = {props.follower.avatar_url} alt = "user avatar"/>
                    </div>
                    <div class="content">
                        <h2>{props.follower.login}</h2>
                    </div>
                </div>
            </div>
        </Card>

    )
}

export default Follower;