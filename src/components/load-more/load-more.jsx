import React from "react";

const LoadMore = ({handleLoadMore}) => {
    
    return (
        <button
            className="load-more"
            type="button"
            checked
            onClick={handleLoadMore}
        >
            Загрузить еще
        </button>
    )
};

export default LoadMore;