import { FaDiscord, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa"

export default function Footer() {

    const data = [
        "Home", "Pricing", "Catalog", "Insights", "Affiliate", "Documentation", "Academy", "Changelog", "Support",
        "Careers", "Contact",
        "Privacy Notice", "Terms & Conditions", "Impressum", "Trust Center"
    ]
    return (
        <footer className="bg-[#333333] px-4 py-6 flex flex-col gap-3">
            <div className="flex gap-4 md:flex-row flex-wrap">
                {data.map((data, index) => (<p className="text-white text-xs" key={index}>{data}</p>))}
            </div>
            <div className="flex items-center text-sm text-white gap-4">
                <i><FaTwitter /></i>
                <i><FaDiscord /></i>
                <i><FaLinkedin /></i>
                <i><FaTelegram /></i>
            </div>
            <p className="text-xs text-[#cccccc]">&copy; 2024 Visualnode. All Rights Reserved</p>
        </footer>
    )
}