import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Achivement, { TAchivement } from 'src/components/Achivement'

type Props = {
}

const ProfileFunds: React.FC<Props> = (props) => {

  return (
    <div>
        <div className="mt-6">
          <span className="text-white text-3xl font-medium">Build an on-chain community, that truly believes in your growth potential.</span>
        </div>

        <div className="grid grid-cols-5 p-3 items-start mt-10">

        <div className="mt-2">
        <button className="col-sapn-1 bg-secondary-25 p-3 rounded-md h-50 w-50 border border-secondary-25 items-start hover:border-primary">
                  <div className="text-center">
                  <Image src="/talent.svg" alt="Identicon" width="200" height="200" className=""/>
                  </div>
                  <div className="grid grid-cols-5 items-center justify-start">
                      <div className="text-left items-center col-span-1 mt-1">
                      <Image src="/danila.svg" alt="vacancy" width="40" height="40" className=" rounded-full"/>
                      </div>
                      <div className="col-span-3 text-left items-center">
                        <span className="text-white text-md ml-2 font-regular opacity-60">Bob</span>
                      </div>
                  </div>
                  <div className="text-left">
                    <span className="text-white font-medium">SBT for investors</span>
                  </div>
                  <div className="border border-secondary-25 p-2 rounded-xl mt-4">
                      <div className="grid grid-cols-2">
                        <div className="col-span-1">
                          <span className="text-white text-left">Bob's token:</span>
                        </div>
                        <div className="col-span-1">
                          <span className="text-white text-center">10 <span className="text-white opacity-60">$</span></span>
                        </div>

                      </div>
                  </div>
        </button>
        </div>
        <div className="col-span-4 items-center">
          <div className="border border-secondary-25 p-40 rounded-xl hover:border-secondary-60">
          <div className="text-center">
            <span className="text-white text-md font-regular text-center">Price chart</span>
            </div>
            <div className="text-center">
            <span className="text-white text-2xl font-medium opacity-60 text-center hover:opacity-100">Coming soon</span>
            </div>
          </div>

        </div>
        </div>

       <div className="border w-full border-secondary-25 p-4 h-54 rounded-xl mt-12">

            <div className="grid grid-cols-2 gap-x-6 gap-y-2">

              <div className="border border-secondary-25 p-3 rounded-xl hover:border-secondary-60">
                <div className="grid grid-cols-2">
                  <span className="text-white text-xl">Market cap</span>
                  <span className="text-white text-xl">10 000 000 <span className="text-white opacity-60">$</span></span>
                </div>

              </div>
              <div className="border border-secondary-25 p-3 rounded-xl hover:border-secondary-60">
                <div className="grid grid-cols-2">
                  <span className="text-white text-xl">Circulating Supply</span>
                  <span className="text-white text-xl">100 000 <span className="text-white opacity-60">$</span></span>
                </div>

              </div>
              <div className="border border-secondary-25 p-3 rounded-xl hover:border-secondary-60">
                <div className="grid grid-cols-2">
                  <span className="text-white text-xl">Fully Diluted Valuation</span>
                  <span className="text-white text-xl">100 000 000 <span className="text-white opacity-60">$</span></span>
                </div>

              </div>
              <div className="border border-secondary-25 p-3 rounded-xl hover:border-secondary-60">
                <div className="grid grid-cols-2">
                  <span className="text-white text-xl">Total Supply</span>
                  <span className="text-white text-xl">10 000 000 <span className="text-white opacity-60">$</span></span>
                </div>

              </div>
              <div className="border border-secondary-25 p-3 rounded-xl hover:border-secondary-60">
                <div className="grid grid-cols-2">
                  <span className="text-white text-xl">Investors</span>
                  <span className="text-white text-xl">999</span>
                </div>

              </div>
              <div className="border border-secondary-25 p-3 rounded-xl hover:border-secondary-60">
                <div className="grid grid-cols-2">
                  <span className="text-white text-xl">24 Hour Trading Vol</span>
                  <span className="text-white text-xl">60 000 <span className="text-white opacity-60">$</span></span>
                </div>

              </div>
              
            </div>

      </div>
    </div>
  )
}

export default ProfileFunds
