import React from 'react'
import { Media } from 'reactstrap';

function RenderLeader({ leader }) {
    return (
        <Media>
            <Media>
                <Media object src={leader.image} alt="portrait" />
            </Media>
            <Media body>
                <Media heading className="heading">
                    {leader.designation}
                </Media>
                {leader.description}
            </Media>
        </Media>
    )
}

export default RenderLeader;