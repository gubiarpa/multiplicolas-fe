import React from "react";

export const Options = ({state = 0, options = []}) => {
    return (
        <div className={state === 0 ? 'hidden' : ''}>
            {
                options.map(optionItem => {
                    return <span key={ optionItem }>
                        <input id={`opt${ optionItem }`} type="radio" name="test" value={ optionItem } />
                        <label htmlFor={`opt${ optionItem }`}>{ optionItem }</label>
                    </span>
                })
            }
        </div>
    );
}