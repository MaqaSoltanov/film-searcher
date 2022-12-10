import Favorites from "./Favorites";
import useMediaQuery from 'use-media-query-hook';
import React from "react";

export default function MobileFavorites() {
    const isMobile = useMediaQuery('(max-width: 650px)');
    return (
        <div className="favorites-container">
            {isMobile ? <Favorites /> : ""}
        </div>
    )
}