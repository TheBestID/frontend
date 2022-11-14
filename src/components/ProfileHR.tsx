import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Achivement, { TAchivement } from 'src/components/Achivement'

type Props = {
}

const ProfileHR: React.FC<Props> = (props) => {

  return (
    <div>
      
      <div className="grid grid-cols-5 border bg-secondary-25 border-secondary-25 p-4 items-center rounded-md gap-4">
            <button className="bg-secondary-25 p-4 rounded-md h-50 w-50 border border-secondary-25 hover:border-secondary-60 items-center">
                  <div className="text-center">
                  <Image src="/vacancy.svg" alt="Identicon" width="200" height="200" className=""/>
                  </div>
                  <div className="grid grid-cols-5 items-center justify-start">
                      <div className="text-left items-center col-span-1 mt-1">
                      <Image src="/logo.svg" alt="vacancy" width="25" height="25" className=""/>
                      </div>
                      <div className="col-span-3 text-left items-center">
                        <span className="text-white text-md font-regular opacity-60">Souldev</span>
                      </div>
                  </div>
                  <div className="text-left">
                    <span className="text-white font-medium">Senior Frontend developer</span>
                  </div>
                  <div className="border border-secondary-25 p-3 rounded-xl mt-4">
                      <div className="grid grid-cols-2">
                        <div className="col-span-1">
                          <span className="text-white text-left">Bonus:</span>
                        </div>
                        <div className="col-span-1">
                          <span className="text-white text-center">10 SOL</span>
                        </div>

                      </div>
                  </div>
            </button>

            <button className="bg-secondary-25 p-4 rounded-md h-50 w-50 border border-secondary-25 hover:border-secondary-60 items-center">
                  <div className="text-center">
                  <Image src="/vacancy.svg" alt="Identicon" width="200" height="200" className=""/>
                  </div>
                  <div className="grid grid-cols-5 items-center justify-start">
                      <div className="text-left items-center col-span-1 mt-1">
                      <Image src="/logo.svg" alt="vacancy" width="25" height="25" className=""/>
                      </div>
                      <div className="col-span-3 text-left items-center">
                        <span className="text-white text-md font-regular opacity-60">Souldev</span>
                      </div>
                  </div>
                  <div className="text-left">
                    <span className="text-white font-medium">Senior Frontend developer</span>
                  </div>
                  <div className="border border-secondary-25 p-3 rounded-xl mt-4">
                      <div className="grid grid-cols-2">
                        <div className="col-span-1">
                          <span className="text-white text-left">Bonus:</span>
                        </div>
                        <div className="col-span-1">
                          <span className="text-white text-center">10 SOL</span>
                        </div>

                      </div>
                  </div>    
            </button>

            <button className="bg-secondary-25 p-4 rounded-md h-50 w-50 border border-secondary-25 hover:border-secondary-60 items-center">
                  <div className="text-center">
                  <Image src="/vacancy.svg" alt="Identicon" width="200" height="200" className=""/>
                  </div>
                  <div className="grid grid-cols-5 items-center justify-start">
                      <div className="text-left items-center col-span-1 mt-1">
                      <Image src="/logo.svg" alt="vacancy" width="25" height="25" className=""/>
                      </div>
                      <div className="col-span-3 text-left items-center">
                        <span className="text-white text-md font-regular opacity-60">Souldev</span>
                      </div>
                  </div>
                  <div className="text-left">
                    <span className="text-white font-medium">Senior Frontend developer</span>
                  </div>
                  <div className="border border-secondary-25 p-3 rounded-xl mt-4">
                      <div className="grid grid-cols-2">
                        <div className="col-span-1">
                          <span className="text-white text-left">Bonus:</span>
                        </div>
                        <div className="col-span-1">
                          <span className="text-white text-center">10 SOL</span>
                        </div>

                      </div>
                  </div>         
            </button>

            <button className="bg-secondary-25 p-4 rounded-md h-50 w-50 border border-secondary-25 hover:border-secondary-60 items-center">
                  <div className="text-center">
                  <Image src="/vacancy.svg" alt="Identicon" width="200" height="200" className=""/>
                  </div>
                  <div className="grid grid-cols-5 items-center justify-start">
                      <div className="text-left items-center col-span-1 mt-1">
                      <Image src="/logo.svg" alt="vacancy" width="25" height="25" className=""/>
                      </div>
                      <div className="col-span-3 text-left items-center">
                        <span className="text-white text-md font-regular opacity-60">Souldev</span>
                      </div>
                  </div>
                  <div className="text-left">
                    <span className="text-white font-medium">Senior Frontend developer</span>
                  </div>
                  <div className="border border-secondary-25 p-3 rounded-xl mt-4">
                      <div className="grid grid-cols-2">
                        <div className="col-span-1">
                          <span className="text-white text-left">Bonus:</span>
                        </div>
                        <div className="col-span-1">
                          <span className="text-white text-center">10 SOL</span>
                        </div>

                      </div>
                  </div>
            </button>

            <button className="bg-secondary-25 p-4 rounded-md h-50 w-50 border border-secondary-25 hover:border-secondary-60 items-center">
                  <div className="text-center">
                  <Image src="/vacancy.svg" alt="Identicon" width="200" height="200" className=""/>
                  </div>
                  <div className="grid grid-cols-5 items-center justify-start">
                      <div className="text-left items-center col-span-1 mt-1">
                      <Image src="/logo.svg" alt="vacancy" width="25" height="25" className=""/>
                      </div>
                      <div className="col-span-3 text-left items-center">
                        <span className="text-white text-md font-regular opacity-60">Souldev</span>
                      </div>
                  </div>
                  <div className="text-left">
                    <span className="text-white font-medium">Senior Frontend developer</span>
                  </div>
                  <div className="border border-secondary-25 p-3 rounded-xl mt-4">
                      <div className="grid grid-cols-2">
                        <div className="col-span-1">
                          <span className="text-white text-left">Bonus:</span>
                        </div>
                        <div className="col-span-1">
                          <span className="text-white text-center">10 SOL</span>
                        </div>

                      </div>
                  </div>
            </button>
      </div>

      <div className="mt-6">
        <span className="text-white text-2xl font-medium">1/5 Steps done</span>
      </div>
              <div className="border border-secondary-25 p-3 rounded-xl mt-6">

                  <div className="grid grid-cols-5 gap-2 items-center">
                      <div className="col-span-1 bg-secondary-25 p-2 rounded-md h-20 border border-secondary-25 hover:border-secondary-60">
                        <div className="grid grid-cols-5 items-center">
                              <div className="grid-cols-1 grid">
                              <Image src="/tick.svg" alt="Identicon" width="40" height="40" className=""/>
                              </div>
                              <div className="grid-cols-4 grid items-center">
                                <span className="text-white text-xl font-medium ml-4">About me</span>
                              </div>
                        </div>
                      </div>

                      <div className="col-span-1 bg-secondary-25 p-2 rounded-md h-20  border border-secondary-25 hover:border-secondary-60">
                        <div className="grid grid-cols-5 items-center">
                              <div className="grid-cols-1 grid">
                              <Image src="/tick0.svg" alt="Identicon" width="40" height="40" className=""/>
                              </div>
                              <div className="grid-cols-4 grid items-center">
                                <span className="text-white text-xl font-medium ml-4">Company Overview</span>
                              </div>
                        </div>
                      </div>

                      <div className="col-span-1 bg-secondary-25 p-2 rounded-md h-20  border border-secondary-25 hover:border-secondary-60">
                        <div className="grid grid-cols-5 items-center">
                              <div className="grid-cols-1 grid">
                              <Image src="/tick0.svg" alt="Identicon" width="40" height="40" className=""/>
                              </div>
                              <div className="grid-cols-4 grid items-center">
                                <span className="text-white text-xl font-medium ml-4">Technical interview</span>
                              </div>
                        </div>
                      </div>

                      <div className="col-span-1 bg-secondary-25 p-2 rounded-md h-20  border border-secondary-25 hover:border-secondary-60">
                        <div className="grid grid-cols-5 items-center">
                              <div className="grid-cols-1 grid">
                              <Image src="/tick0.svg" alt="Identicon" width="40" height="40" className=""/>
                              </div>
                              <div className="grid-cols-4 grid items-center">
                                <span className="text-white text-xl font-medium ml-4">Team meeting</span>
                              </div>
                        </div>
                      </div>

                      <div className="col-span-1 bg-secondary-25 p-2 rounded-md h-20  border border-secondary-25 hover:border-secondary-60">
                        <div className="grid grid-cols-5 items-center">
                              <div className="grid-cols-1 grid">
                              <Image src="/tick0.svg" alt="Identicon" width="40" height="40" className=""/>
                              </div>
                              <div className="grid-cols-4 grid items-center">
                                <span className="text-white text-xl font-medium ml-4">Founders interview</span>
                              </div>
                        </div>
                      </div>

                  </div>

                  

              </div>

    </div>
  )
}

export default ProfileHR
