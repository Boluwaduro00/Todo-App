import React from "react";

function FilterButton(props) {
    return(
        <button className="toggle-btn">
            {props.name}
        </button>
    )
}

export default FilterButton;
