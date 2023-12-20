import Link from "next/link";

export default function Heading({ heading, path }: { heading: string, path: string }) {
    return (
        <div className="my-3 top-0">
            <div className="flex justify-between items-center">
                <div className="mx-2 flex justify-between w-full items-center">
                    <h2 className="font-bold text-2xl text-[#121212]">
                        {heading}
                    </h2>
                    {path && <Link href={`/${path}`} className="py-2 px-3 bg-slate-100 border border-primary text-primary rounded-lg font-semibold">Xem thêm</Link>}
                </div>
            </div>
        </div>
    )
}