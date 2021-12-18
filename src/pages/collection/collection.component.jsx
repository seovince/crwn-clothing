import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";

import './collection.styles.scss';

const CollectionPage = () => {
    // We use useParams here because ownProps in mapStateToProps is not
    // given anymore in react-router-dom v6
    
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));

    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPage;

