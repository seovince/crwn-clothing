import React from "react";
import { Routes, Route } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { selectCollections } from "../../redux/shop/shop.selector";

import './shop.styles.scss'

const ShopPage = () => (
    <div className="shop-page">
        <Routes>
            <Route exact path={'/'} element={<CollectionOverview />} />
            <Route path={':collectionId'} element={<CollectionPage />} />
        </Routes>
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(
    mapStateToProps,
    null
)(ShopPage);