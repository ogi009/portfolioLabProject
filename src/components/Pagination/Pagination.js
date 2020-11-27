import React from 'react';
import "../../scss/_pagination.scss";

const Pagination = ({postPerPage, totalPost, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button className="pagination_buttons" onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;