import React from 'react'
import styled from 'styled-components'
import Counter from './Counter';
import Filter from './Filter'

const StyledFiltersContainer = styled.div`
    background: #d3d3d3;
    //width: 75%;
    display:flex;
`;

const Filters = (props) => {
    
    const sortingFilterChoices = ["lowest", "highest", "latest"];
    const cpuFilterChoices = ["all", "i9", "i7", "i5", "amd"];
    const cpuGenFilterChoices = ["all", "11th", "10th", "9th", "8th"];

    return (
        <StyledFiltersContainer>
            <Counter count={props.count}/>
            <Filter name="sort" options={sortingFilterChoices}/>
            <Filter name="proc" options={cpuFilterChoices}/>
            <Filter name="gen" options={cpuGenFilterChoices}/>
        </StyledFiltersContainer>
    )
}

export default Filters
