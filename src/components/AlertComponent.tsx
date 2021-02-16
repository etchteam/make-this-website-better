import React from "react";

const AlertComponent = (props: {
    errorTitle: string,
    errorBody: string,
    alertType: string,
}) => {
    return (
        <div className={`alert alert-${props.alertType}`}>
            <h3>{props.errorTitle}</h3>
            <p>{props.errorBody}</p>
        </div>
    );
}
export default AlertComponent;