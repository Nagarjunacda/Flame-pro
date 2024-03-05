import React from "react";
export function renderHTML(htmlString) {
    return React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlString } });
}