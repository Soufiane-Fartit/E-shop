import React from 'react'
import styled from 'styled-components'


const StyledCounter = styled.div`
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 20px;
    margin-right: 50px;
    align-self:center;
`;

const Counter = (props) => {
    return (
        <StyledCounter>
            {props.count} Products
        </StyledCounter>
    )
}

export default Counter
