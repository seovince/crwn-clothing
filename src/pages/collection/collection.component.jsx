import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
    CollectionPageContainer,
    ContentTitle,
    ItemsContainer
} from './collection.styles'

const CollectionPage = () => {
    // We use useParams here because ownProps in mapStateToProps is not
    // given anymore in react-router-dom v6
    
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));

    const { title, items } = collection;

    return (
        <CollectionPageContainer>
            <ContentTitle>{title}</ContentTitle>
            <ItemsContainer>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </ItemsContainer>
        </CollectionPageContainer>
    )
}

export default CollectionPage;

