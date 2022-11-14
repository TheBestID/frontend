import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Achivement, { TAchivement } from 'src/components/Achivement'

type Props = {
}

const ProfileHacks: React.FC<Props> = (props) => {

  return (
    <div>
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
                                <span className="text-white text-xl font-medium ml-4">Manage Team</span>
                              </div>
                        </div>
                      </div>

                      <div className="col-span-1 bg-secondary-25 p-2 rounded-md h-20  border border-secondary-25 hover:border-secondary-60">
                        <div className="grid grid-cols-5 items-center">
                              <div className="grid-cols-1 grid">
                              <Image src="/tick0.svg" alt="Identicon" width="40" height="40" className=""/>
                              </div>
                              <div className="grid-cols-4 grid items-center">
                                <span className="text-white text-xl font-medium ml-4">Project Overview</span>
                              </div>
                        </div>
                      </div>

                      <div className="col-span-1 bg-secondary-25 p-2 rounded-md h-20  border border-secondary-25 hover:border-secondary-60">
                        <div className="grid grid-cols-5 items-center">
                              <div className="grid-cols-1 grid">
                              <Image src="/tick0.svg" alt="Identicon" width="40" height="40" className=""/>
                              </div>
                              <div className="grid-cols-4 grid items-center">
                                <span className="text-white text-xl font-medium ml-4">Project Details</span>
                              </div>
                        </div>
                      </div>

                      <div className="col-span-1 bg-secondary-25 p-2 rounded-md h-20  border border-secondary-25 hover:border-secondary-60">
                        <div className="grid grid-cols-5 items-center">
                              <div className="grid-cols-1 grid">
                              <Image src="/tick0.svg" alt="Identicon" width="40" height="40" className=""/>
                              </div>
                              <div className="grid-cols-4 grid items-center">
                                <span className="text-white text-xl font-medium ml-4">Additional info</span>
                              </div>
                        </div>
                      </div>

                      <div className="col-span-1 bg-secondary-25 p-2 rounded-md h-20  border border-secondary-25 hover:border-secondary-60">
                        <div className="grid grid-cols-5 items-center">
                              <div className="grid-cols-1 grid">
                              <Image src="/tick0.svg" alt="Identicon" width="40" height="40" className=""/>
                              </div>
                              <div className="grid-cols-4 grid items-center">
                                <span className="text-white text-xl font-medium ml-4">Submit</span>
                              </div>
                        </div>
                      </div>

                  </div>

                  <div className="">
                    
                    <div className="mt-12">
                        <span className="text-3xl text-white font-medium">Manage Team</span>
                    </div>
                    <div className="mt-2">
                       <span className="text-xl text-white opacity-60 font-regular">Add. Remove. Change status.</span>
                    </div>
                    <div className="col-span-10 text-left">
                       <div className="border solid 1px border-secondary-25 mt-3 mb-2"></div>
                    </div>
                    <div className="mt-12">
                        <span className="text-3xl text-white font-medium">Invite teammates</span>
                    </div>
                    <div className="mt-2">
                       <span className="text-xl text-white opacity-60 font-regular">Either share the link.</span>
                    </div>

                    <div className="grid grid-cols-5 gap-2 items-center mt-6 mb-10">
                      <div className="col-span-2 border border-secondary-25 p-4 rounded-md">
                        <span className="text-white opacity-50 font-regular">Add team members - address avatar or username</span>
                      </div>
                      <div className="col-span-1 bg-secondary-25 rounded-xl hover:bg-secondary-60 p-4 text-center mr-6">
                        <span className="text-white text-xl text-center">Send invite</span>
                      </div>
                      <div className="col-span-2"></div>
                    </div>

                  </div>

              </div>





    </div>
  )
}

export default ProfileHacks
