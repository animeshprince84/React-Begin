import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1>This is the Title Component.</h1>
);

const HeaderComponent = () => (
    <div id="container">
        <Title/>
        <div className="heading">This is Header Component</div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);
