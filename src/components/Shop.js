import React from 'react'
import styled from 'styled-components'
import Items from './Items';
import Cart from './Cart';

const StyledShop = styled.div`
    background: #ffc0cb;
    height: 100%;
`;

const Shop = () => {
    return (
        <StyledShop>
            <Items/>
            <Cart/>
        </StyledShop>
    )
}

export default Shop
