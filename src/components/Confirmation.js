import React, {useState} from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux'
import styled from 'styled-components'

Modal.setAppElement('#root')

const StyledH1 = styled.h1`
    color: green;
    font-size: 50px;
    margin-left: 20px;
`;

const StyledP = styled.p`
    font-size: 24px;
    margin-left: 20px;
`;

const StyledButton = styled.button`
    color: green;
    font-size: 24px;
    min-height: 50px;
    min-width: 150px;
    float: right;
    margin-right: 20px;
    cursor:pointer;
`;

const Confirmation = (props) => {
    const items = props.cart;
    var isOpen = props.isOpen;
    var setIsOpen = props.setIsOpen;
    var total = props.total;

    const clearCart = () => {
        props.dispatch({type: "CLEAR_CART"});
    }
    
    return (
        <div>
            <Modal 
            isOpen={isOpen} 
            onRequestClose={()=>setIsOpen(false)} 
            style={{content:{background:'#f8f8ff', height: '65%', width: '80%', margin:'auto auto'}}}>

                        <StyledH1> Confirmed </StyledH1>
                        <StyledP> You have bought : </StyledP>
                        <StyledP>
                            {items.map((item) => <div>{item.quantity} x {item.name}</div>)}
                        </StyledP>
                        <StyledP> for {total} € </StyledP>
                        <StyledButton onClick={()=>{setIsOpen(false);clearCart()}}> Thanks </StyledButton>

            </Modal>
        </div>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Confirmation);
