import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Achivement, { TAchivement } from 'src/components/Achivement'

type Props = {
  achivements: Array<TAchivement>,
}

const ProfileCV: React.FC<Props> = (props) => {
  const { achivements } = props

  return (
    <div>
      <div className="mt-6 flex w-full bg-secondary-25 h-12 items-center">
          <span className="text-2xl font-semibold text-center text-white ml-4">
            Experience
          </span>
      </div>

      {
        Array.isArray(achivements)
        && achivements.map(
          (achivement: TAchivement, i: number) =>
            <Achivement key={i} data={achivement}/>
          )
      }

      <div className="flex w-full bg-secondary-25 h-12 items-center mb-4 mt-6">
          <span className="text-2xl font-semibold text-center text-white ml-4">Achievements</span>
      </div>

      <div className="flex flex-col border border-secondary-25 p-3 rounded-xl w-full mt-4">
            <div className="flex justify-between">
              <span className="text-xl font-medium text-white">
                Hackathon prize 
                <span className="ml-2">
                  <Image src="/icon.png" alt="Identicon" width="16" height="16"/>
                </span>
              </span>
              <span className="text-white text-sm">2022-2024</span>
            </div>
            <span className="text-white">Chainlink Fall 2022 Hackathon</span>
            <ul className="list-inside list-disc mt-3 text-white opacity-60">
              <li className="">Social impact prize
              </li>
              <span className="ml-5">1st place</span>
              <li className="">Grand prize</li>
              <span className="ml-6"> Winner</span>
            </ul>
          </div>

      <div className="flex w-full bg-secondary-25 h-12 items-center mb-4 mt-6">
          <span className="text-2xl font-semibold text-center text-white ml-4">Projects</span>
      </div>

      <div className="flex flex-col border border-secondary-25 p-3 rounded-xl w-full mt-4">
            <div className="flex justify-between">
              <span className="text-xl font-medium text-white">Build an anti-cheat tool
              <Image src="/icon.png" alt="Identicon" width="16" height="16" className=""></Image>
              </span>
              <span className="text-white text-sm">10 November 2022</span>
            </div>

            <div className="flex grid-cols-4 gap-2 justify-start items-center mt-1">
            <div className="rounded-xl border border-transparent bg-secondary-25">
              <span className="ml-2 mr-2">Solidity</span>
            </div>
            <div className="rounded-xl border border-transparent bg-secondary-25">
              <span className="ml-2 mr-2">Java script</span>
            </div>
            <div className="rounded-xl border border-transparent bg-secondary-25">
              <span className="ml-2 mr-2">Figma</span>
            </div>
            </div>

            <span className="mt-2 text-white">Help Souldev create tutorials on how to use our capabilities. https://github.com/TheBestID</span>
            
            <div className="flex grid-cols-4 gap-2 justify-start items-center mt-3">
            <div className="rounded-md border border-transparent bg-secondary-25">
              <span className="ml-2 mr-2">link:</span>
            </div>
            <Link href="https://github.com/TheBestID">
              <span className="text-white underline decoration-gray-200 text-sm">https://github.com/TheBestID</span>
            </Link>
            </div>

          </div>
      

      <div className="flex w-full bg-secondary-25 h-12 items-center mb-4 mt-6">
          <span className="text-2xl font-semibold text-center text-white ml-4">Education</span>
      </div>

      <div className="flex flex-col border border-secondary-25 p-3 rounded-xl w-full mb-6">
            <div className="flex justify-between">
              <span className="text-xl font-medium text-white">MIPT
              </span>
              <span className="text-white text-sm">2020-2024</span>
            </div>
            <span className="text-white">Bachelor of Science</span>
            <ul className="mt-3 list-inside list-disc text-white opacity-60">
                <li>Applied Math</li>
            </ul>
            <span className="text-white opacity-60 ml-5">GPA: 4.9/5.0</span>
          </div>

          <div className="flex grid-cols-2 gap-2 mt-6 h-12 lg:h-12">
                <div className="flex w-36 bg-secondary-25 items-center">
                    <span className="text-xl font-semibold text-center text-white ml-4">Skills:</span>
                </div>

                <div className="flex grid-cols-2 gap-2 justify-start items-center">

                  <div className="gap-py-2">
                    <div className="rounded-xl border border-transparent bg-secondary-25">
                      <span className="ml-2 mr-2 text-white text- lg:text-xl">Solidity</span>
                    </div>
                    <div className="rounded-xl border border-transparent bg-secondary-25">
                      <span className="ml-2 mr-2 text-white text-sm lg:text-xl">Java script</span>
                    </div>
                  </div>
                    
                    <div className="rounded-xl border border-transparent bg-secondary-25">
                      <span className="ml-2 mr-2 text-white text-sm lg:text-xl">Figma</span>
                    </div>
                    
                </div>
          </div>

          <div className="flex grid-cols-2 gap-2 mt-6 h-12 lg:h-12">
                <div className="flex w-36 bg-secondary-25 items-center">
                    <span className="text-xl font-semibold text-center text-white ml-4">Languages:</span>
                </div>

                <div className="flex grid-cols-2 gap-2 justify-start items-center">

                  <div className="gap-py-2">
                    <div className="rounded-xl border border-transparent bg-secondary-25">
                      <span className="ml-2 mr-2 text-white text- lg:text-xl">Solidity</span>
                    </div>
                    <div className="rounded-xl border border-transparent bg-secondary-25">
                      <span className="ml-2 mr-2 text-white text-sm lg:text-xl">Java script</span>
                    </div>
                  </div>
                    
                    <div className="rounded-xl border border-transparent bg-secondary-25">
                      <span className="ml-2 mr-2 text-white text-sm lg:text-xl">Figma</span>
                    </div>
                    
                </div>
          </div>

          <div className="flex grid-cols-2 gap-2 mt-6 h-12 lg:h-12">
                <div className="flex w-36 bg-secondary-25 items-center">
                    <span className="text-xl font-semibold text-center text-white ml-4">Hobbies:</span>
                </div>

                <div className="flex grid-cols-2 gap-2 justify-start items-center">

                  <div className="gap-py-2">
                    <div className="rounded-xl border border-transparent bg-secondary-25">
                      <span className="ml-2 mr-2 text-white text- lg:text-xl">Solidity</span>
                    </div>
                    <div className="rounded-xl border border-transparent bg-secondary-25">
                      <span className="ml-2 mr-2 text-white text-sm lg:text-xl">Java script</span>
                    </div>
                  </div>
                    
                    <div className="rounded-xl border border-transparent bg-secondary-25">
                      <span className="ml-2 mr-2 text-white text-sm lg:text-xl">Figma</span>
                    </div>
                    
                </div>
          </div>
    </div>
  )
}

export default ProfileCV
