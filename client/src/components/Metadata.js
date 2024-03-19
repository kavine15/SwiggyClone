import { Helmet } from "react-helmet-async"
import React from "react"

function Metadata({title}) {
    return (
        <Helmet>
            <title>{`${title} - Swiggy`}</title>
        </Helmet>
    )
}

export default Metadata;