import { LiaChartBarSolid } from "react-icons/lia";

export default function NewAndUpdated() {

    const data = [
        "Estimated Bitwise Bitcoin ETF Balance (BITB)",
        "Estimated BlackRook Bitcoin ETF (IBIT)",
        "Uniswap Traded Volume per Token Type",
        "Uniswap Traded Volume per Size Cohort",
        "Uniswap Trades",
        "Uniswap v3 Pools Created per Fee Tier",
        "Uniwsap v3 Fees per Fee Tier",
        "Uniswap v3 Active Value Locked",
        "Uniswap v3 Mean Active Value Locked"
    ]

    return (
        <div className="overflow-y-scroll max-h-[300px] h-full flex flex-col gap-4">
            {data.map((item, index) => {
                return (
                    <div
                        className="flex items-center gap-4 hover:bg-[#e2e7fc50] cursor-pointer"
                        key={index}
                    >
                        <i className="relative z-[-1] p-1 bg-[#E2E7FC]">
                            <div className="absolute w-1 h-1 top-[-2px] right-[-2px] rounded-full bg-blue-500"></div>
                            <LiaChartBarSolid />
                        </i>
                        <div className="flex flex-col gap-1">
                            <h5 className='text-base'>{item}</h5>
                            <p className="text-xs font-light">Metric</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}