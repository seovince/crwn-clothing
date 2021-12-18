import React from "react";
import { connect } from "react-redux";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";

import './collection.styles.scss';

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));

    return (
        <div className="collection-page">
            <h2>CATEGORY</h2>
        </div>
    )
}

// const mapStateToProps = (state, ownProps) => {
//     console.log(ownProps)
//     return {
//         collection: selectCollection(ownProps.match.params.collectionId)(state)
//     }

// }

// function mapStateToProps(state, ownProps) {
//     // const props = { iconSize: state.iconSize };
//     console.log("ownprops", state, ownProps);
//     return state;
// }

export default CollectionPage;

