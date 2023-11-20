import React from "react"
export default function WrapResponsive({children} : {children: React.ReactNode}) {
    return (
        <div className="px-5 md:px-8 2xl:px-10">
            {children}
        </div>
    )
}