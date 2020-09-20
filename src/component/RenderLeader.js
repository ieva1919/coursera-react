import React from 'react'
import { Media } from 'reactstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderLeader({ leader }) {
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Media>
                <Stagger in>
                    <Media>
                        <Fade in>
                            <Media object src={leader.image} alt="portrait" />
                        </Fade>
                    </Media>
                </Stagger>
                <Media body>
                    <Media heading className="heading">
                        {leader.designation}
                    </Media>
                    {leader.description}
                </Media>
            </Media>
        </FadeTransform>
    )
}

export default RenderLeader;