import React from "react";

const MainContent = ({ title, content }: { title: string; content: string; }) => {
    return(
        <article style={{
            textAlign:"center",
            fontFamily:"monospace",
            fontSize:"22px",
            color:"cornflowerblue"
        }}>
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    );
};
export default MainContent