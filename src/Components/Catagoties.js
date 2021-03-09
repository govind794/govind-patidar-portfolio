import React from 'react';

function Categoties({ filter, category }) {
    return (
        <div className="buttons">
            {
                category.map((cat, i) => {
                    return <button type="button" className="btn-port"
                        onClick={() => filter(cat)} key={i}>{cat}</button>
                })
            }
        </div>
    );
}

export default Categoties;