import { LiaChartBarSolid } from "react-icons/lia";
import { MdOutlineDashboard } from "react-icons/md";

export default function RecentlyDeleted() {
    const data = [
        {
            name: "Mastering the realized cap",
            type: "Dashboard"
        },
        {
            name: "HODLers Essential Dashboard",
            type: "Dashboard"
        },
        {
            name: "Trade Volume per Trade size [USD]",
            type: "Metric"
        },
        {
            name: "Trade Volume per Token Type [USD]",
            type: "Metric"
        },
        {
            name: "BTC: Core On-Chain",
            type: "Dashboard"
        },
        {
            name: "Number of Active Addresses",
            type: "Metric"
        },
    ]

    return (
        <div>
            {data.map((item, index) => {
                return (
                    <div
                        className="flex items-center gap-4 py-2 hover:bg-[#e2e7fc50] cursor-pointer"
                        key={index}
                    >
                        <i className=" p-1 bg-[#E2E7FC]">
                            {item.type === 'Metric' ? <LiaChartBarSolid /> : <MdOutlineDashboard />}
                        </i>
                        <div className="flex flex-col gap-1">
                            <h5 className='text-base'>{item.name}</h5>
                            <p className="text-xs font-light">{item.type}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}