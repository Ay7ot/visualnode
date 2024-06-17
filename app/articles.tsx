import { MdOutlineDashboard } from "react-icons/md";
import Image from "next/image"

export default function Articles() {
    const data = [
        {
            name: 'Stablecoin Activity',
            type: "Market",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'Introduction to Realized and Unrealized Value',
            type: "Bitcoin",
            img: "https://cdn.glassnode.com/placeholders/dashboards/a82b2e60-2abf-4fef-7304-61d87ec9284f.png?v=26012022"
        },
        {
            name: 'Navigating Market tops and Bottoms',
            type: "Bitcoin",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'Growth by Halving Epoch',
            type: "Bitcoin",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'Mastering the MVRV Ratio',
            type: "Bitcoin",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'Pricing Models',
            type: "Market",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'On-chain Activity',
            type: "Market",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'Address Cohorts',
            type: "Market",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'Lightning Network',
            type: "Market",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'Cointime Economics',
            type: "Market",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'Supply and Scarcity',
            type: "Market",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'Entity Balance Change',
            type: "Market",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'Supply and Issuance',
            type: "Ethereum",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'Proof-of-Stake Consensus',
            type: "Ethereum",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },
        {
            name: 'Spending dynamics',
            type: "Bitcoin",
            img: "https://cdn.glassnode.com/placeholders/dashboards/b74e9f8d-3de6-4009-64ce-32202a1e4ba4.png?v=26012022"
        },

    ]
    return (
        <div className="grid md:grid-cols-3 gap-6 mt-6">
            {data.map((data, index) => {
                return (
                    <div
                        key={index}
                        className='flex flex-col gap-3 cursor-pointer border-[1px] border-[#cccccc] hover:border-black p-3'
                    >
                        <div className='flex items-center gap-2'>
                            <i className="p-1 bg-[#E2E7FC]">
                                <MdOutlineDashboard />
                            </i>
                            <p>{data.name}</p>
                        </div>
                        <div className="w-full">
                            <Image
                                alt={`image showing ${data.name} graph`}
                                src={data.img}
                                className="h-full w-full object-contain"
                                height={200}
                                width={200}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}