export default function Heading({heading} : {heading : string}) {
    return (
        <div className="my-3 top-0">
            <div className="flex justify-between items-center">
                <div className="mx-2">
                    <h2 className="font-bold text-2xl text-[#121212]">
                        {heading}
                    </h2>
                </div>
            </div>
        </div>
    )
}