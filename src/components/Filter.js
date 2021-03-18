import React from 'react'
import styled from 'styled-components'
import './Filter.css'
import {connect} from 'react-redux'

const StyledFilter = styled.div`
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 8px;
    margin-right: 8px;
`;


const Filter = (props) => {

    const setFilter = (name, option) => {
        props.dispatch({type:"SET_FILTER", name:name, option:option})
        console.log(name, option)
    }

    return (
        <StyledFilter>
        <div className="dropdown">
            <button className="dropbtn"> {props.name} </button>
            <div className="dropdown-content">
                {props.options.map((option) => <a href="#" key={option} onClick={() => setFilter(props.name, option)}> {option} </a>)}
            </div>
        </div>
        </StyledFilter>
    )
}

const mapStateToProps = state => ({
    filters: state.filters
})

export default connect(mapStateToProps)(Filter);
