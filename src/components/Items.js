import React from 'react'
import ItemCard from './ItemCard'
import Filters from './Filters'
import styled from 'styled-components'
import {connect} from 'react-redux'


const StyledItems = styled.div`
    display:flex;
    flex-direction:row;
    float: left;
    width: 75%;
    height: 100%;
    flex-flow: row wrap;
`;


const Items = (props) => {
    var items =  props.items;
    var sort_filter = props.filters.sort;
    var proc_filter = props.filters.proc;
    var gen_filter = props.filters.gen;
    console.log('filters', sort_filter);
    console.log('filters', proc_filter);
    console.log('filters', gen_filter);
    
    if (proc_filter!=="all") {
        items = items.filter((item)=>item.specs.cpu===proc_filter)
    }
    
    if (gen_filter!=="all") {
        items = items.filter((item)=>item.specs.gen===gen_filter)
    }

    if (sort_filter==="lowest") {
        items = items.sort(function(a,b){return a.price-b.price})
    }

    if (sort_filter==="highest") {
        items = items.sort(function(a,b){return b.price-a.price})
    }

    if (sort_filter==="featured") {
        items = items.sort(function(a,b){return a.id-b.id})
    }


    return (
        <>
        <Filters count={items.length}/>
        <StyledItems>
            {items.map((item) => <ItemCard key={item.id} item={item}/> )}
        </StyledItems>
        </>
    )
}

const mapStateToProps = state => ({
    items: state.items,
    filters: state.filters
})

export default connect(mapStateToProps)(Items);
