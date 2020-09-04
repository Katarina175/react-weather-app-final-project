import React from "react";

export default function FormattedDate (props) {
    // console.log (props.date);
    let day = props.date.getDay();
    let year = props.date.getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October","November", "December"];
    let month = months[props.date.getMonth()];
    return <div>
        {month} {day}, {year}
    </div>;
}