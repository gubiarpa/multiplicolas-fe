import React from "react";

export const Options = ({state = 0, options = []}) => {
    return (
        <div className={`${state === 0 ? 'hidden' : ''} mt-3 text-center`}>
            {
                options.map(optionItem => {
                    return <span className="mx-4" key={ optionItem }>
                        <input id={`opt${ optionItem }`} type="radio" name="test" value={ optionItem } />
                        <label className="mx-1" htmlFor={`opt${ optionItem }`}>{ optionItem }</label>
                    </span>
                })
            }
        </div>
    );
}