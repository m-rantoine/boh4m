import React from 'react';

export default ({ ...props }) => {
    props.src = "http://hulab.rxnfinder.org/smi2img/"+props.children
    delete props.children
    return <img {...props} />
}