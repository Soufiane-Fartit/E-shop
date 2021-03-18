import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'


const StyledItemCard = styled.div`
    background: #808080;
    min-width: 280px;
    height 430px;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 12px;
    margin-right: 12px;
    border-radius: 16px;
`;

const StyledImg = styled.img`
    width: 80%;
    max-width: 200px;
    height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    border-radius: 16px;
`;

const StyledH2 = styled.h2`
    color: #ffffff;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 20px;
`;

const StyledSpecs = styled.p`
    margin-left: 20px;
`;

const StyledH3 = styled.h3`
    color: #00ff00;
    margin-left: 20px;
    margin-right: 20px
`;

const StyledButton = styled.button`
    background: #FFFF00;
    color: #000000;
    margin-left: 20px;
    margin-right: 20px;
    height: 50px;
    width: 90px;
    border: none;
    float: right;
    cursor: pointer;
    border-radius: 8px;
`;

const ItemCard = (props) => {
    //console.log(item)

    var item_id = props.item.id;

    const addToCart = () => {
        console.log('adding item with id : ', item_id)
        props.dispatch({type: "ADD_ITEM_TO_CART", id:item_id, quantity: 1});
    };

    return (
        <StyledItemCard>
            <StyledImg src={props.item.img}></StyledImg>
            <StyledH2> {props.item.name} </StyledH2>
            <StyledSpecs> {props.item.specs.cpu}, {props.item.specs.gen} </StyledSpecs>
            <StyledH3> {props.item.price} </StyledH3>
            <StyledButton onClick={addToCart}> Add to cart </StyledButton>
        </StyledItemCard>
    )
}

// const mapStateToProps = state => ({
//     cart: state.cart
// })

export default connect()(ItemCard);
//282c34