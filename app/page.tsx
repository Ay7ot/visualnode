"use client"

import card from "../public/home-cover.png"
import Image from 'next/image'
import { useUiStore } from "../generalAppStore";
import NewAndUpdated from "./newAndUpdated"
import RecentlyDeleted from "./recentlyDeleted"
import noFavorites from "../public/dashed-circle.svg"
import { FaChevronDown } from "react-icons/fa"
import Articles from './articles'

export default function Home() {
  const { navbarShown } = useUiStore()

  return (
    <main className={`dynamicMinHeight ${navbarShown ? '' : ''} p-4 md:px-[5%] lg:py-[3%] lg:px-[8%] max-w-[1440px] mx-auto`}>
      <section className="flex flex-col gap-6">
        <h2 className="font-semibold text-[#333333]">Welcome, Efrem!</h2>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="border-[#cccccc] md:flex-1 flex items-center border-[1px] text-[#333333]">
            <div className="flex-[0.85] w-full h-full hidden xl:block">
              <Image
                alt='card'
                src={card}
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
            <div className="flex-1 flex flex-col gap-4 p-4 h-full">
              <h3 className="font-semibold">This Week On-Chain</h3>
              <h4 className="font-bold text-[1.15rem] min-[320px]:text-[1.25rem] sm:text-[1.35rem] md:text-[1.5rem]">
                Dissecting Divergences
              </h4>
              <p>Despite impressive US ETF inflows, a market-neutral Cash-and-Carry trade appears to be subduing buy-side pressure, requiring non-arbitrage demand to further stimulate price action. Alongside this, ...</p>
              <p className="text-xs"><span>Jun 11, 2024</span> 6 min read</p>
              <div className="mt-auto">
                <button className="border-[#cccccc] hover:border-black transition-all duration-200 ease-linear border-[1px] px-4 py-2">Read Article</button>
              </div>
            </div>
          </div>
          <div className="border-[#cccccc] md:flex-[0.35] flex flex-col gap-4 border-[1px] p-4">
            <h3 className="font-semibold">New and updated</h3>
            <NewAndUpdated />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="border-[#cccccc] md:flex-[0.35] flex flex-col gap-4 border-[1px] p-4">
            <h3 className="font-semibold">Recently Deleted</h3>
            <RecentlyDeleted />
          </div>
          <div className="border-[#cccccc] md:flex-1 p-4 flex flex-col gap-4 border-[1px]">
            <h3 className="font-semibold">Favorites</h3>
            <div className=" text-sm flex-grow items-center flex flex-col justify-center gap-4 text-[#333333]">
              <Image
                alt="No favroites logo"
                src={noFavorites}
              />
              <h6 className="font-semibold">No Favourites Added Yet</h6>
              <p className="font-light">Save your favourite items here for quick access in the future. Start by exploring one of our Dashboards.</p>
              <div className="">
                <button className="border-[#cccccc] hover:border-black transition-all duration-200 ease-linear border-[1px] px-4 py-2">Start Exploring</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-8 flex flex-row sm:flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="font-semibold text-sm">Find what you are looking for</h3>
          <button className="border-[#cccccc] cursor-border border-[1px] w-[150px] sm:w-full md:w-[150px] px-2 py-1 flex items-center justify-between">
            <p className="text-sm">All Categories</p>
            <i className="text-xs"><FaChevronDown /></i>
          </button>
        </div>
        <div className="overflow-x-scroll scrollbarHidden w-full">

        </div>
        <Articles />
      </section>
    </main>
  )
}