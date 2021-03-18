import React, { useState } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Confirmation from './Confirmation';

const StyledCart = styled.div`
    float: right;
    width: 25%;
    height: 100%;
    min-height:1000px;
`;

const StyledH1 = styled.h1`
    margin-left: 16px;
`;

const StyledH2 = styled.h2`
    margin-right: 16px;
    margin-top: 46px;
    position: absolute;
    right:0;
`;

const StyledCartItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #d3d3d3;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 12px;
`;

const StyledCartItemName = styled.h3`
    color: #000000;
    margin-left: 20px;
`;

const StyledCartItemPriceContainer = styled.p`
    margin-right: 20px;
`;

const StyledCartItemPrice = styled.p`
    color: #000000;
    float: right;
`;

const StyledCartItemButton = styled.button`
    background: #696969;
    color: #000000;
    width: 80px;
    height: 30px;
    border:none;
    cursor: pointer;
`;


const StyledConfirmButton = styled.button`
    background: #00ff00;
    border: none;
    color: #808080;
    font-size: 30px;
    width: 94%;
    height: 50px;
    border-radius: 8px;
    float:right;
    margin-right: 10px;
    margin-top: 106px;
    cursor: pointer;
`; 

const Cart = (props) => {

    var [isOpenConfirmation, setIsOpen] = useState(false);

    const removeItem = (id) => {
        console.log('removing item with id : ', id)
        props.dispatch({type: "REMOVE_ITEM_FROM_CART", id:id});
    }

    const items = props.cart;
    console.log('listItems', items);

    const total = items.map((item) => item.price*item.quantity).reduce((a, b) => a + b, 0);

    return (
        <StyledCart>
            <StyledH1> CART </StyledH1>
            <hr style={{width: "90%", size: "20px"}}/>
            <div style={{height: "15px"}}></div>
            <div>
                {items.map((item) => 
                                    <StyledCartItemWrapper>
                                        <StyledCartItemName>{item.name}</StyledCartItemName>
                                        <StyledCartItemPriceContainer>
                                            <StyledCartItemPrice>{item.price} € x {item.quantity} <StyledCartItemButton onClick={() => removeItem(item.id)}> Remove </StyledCartItemButton> </StyledCartItemPrice>
                                        </StyledCartItemPriceContainer>
                                    </StyledCartItemWrapper>)}
            </div>
            <StyledH2> Total : {total} € </StyledH2>
            <StyledConfirmButton onClick={()=>{setIsOpen(true)}}> BUY </StyledConfirmButton>
            <Confirmation isOpen={isOpenConfirmation} setIsOpen={setIsOpen} total={total} state={props.state} dispatch={props.dispatch}/>
        </StyledCart>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Cart);
