import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div className="bg-[#023047] min-h-[100vh]">
      <Head>
        <title>SoulDev</title>
        <meta name="description" content="SoulDev landing page" />
      </Head>

      <header className="flex bg-[#023047] h-24">

        <div className ="h-12 w-12 pt-6 pl-6">
          <div className ="bg-primary rounded-full h-12 w-12"></div>
        </div> 

        <div className ="h-12 w-12 pt-6 pr-12 ml-48">
          <div className ="bg-primary rounded-full h-12 w-12"></div>
        </div> 

        <div className = "space-y-1 pt-8 ml-2">
          <div className ="bg-primary rounded-full h-2 w-12"></div>
          <div className ="bg-primary rounded-full h-2 w-12"></div>
          <div className ="bg-primary rounded-full h-2 w-12"></div>
        </div>

      </header>

      <div id="spacer" className="h-8 w-8"/>

      <main className="flex flex-col lg:flex-row items-center lg:justify-center">

        <div className='relative text-center p-0 mx-auto mt-36 md:mt-52 lg:mt-72 xl:mt-80'>
                <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3 pl-3">
                  <span className="block text-primary text-7xl">HOME </span> 
                  <span>FOR DECENTRALIZED AVATARS</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-4 font-regular lh-6 ld-04 pb-11 text-gray-400 text-center pr-4 pl-4">
                The best protocol for storing your digital avatar.
                Create soul id account to participate in fair
                hackathons and get into tech companies.
                </h2>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow pb-8">
                  <a
                    href="#"
                    className="btn btn-primary btn-large mr-4 items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Explore
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary btn-large items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Create
                  </a>
                </div>
              </div>
            </div>


            <div className='relative text-center p-0 mx-auto mt-36 md:mt-52 lg:mt-72 xl:mt-80'>
                <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3 pl-3">
                  <span className="block text-primary text-7xl">HOME </span> 
                  <span>FOR DECENTRALIZED AVATARS</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-4 font-regular lh-6 ld-04 pb-11 text-gray-400 text-center pr-4 pl-4">
                The best protocol for storing your digital avatar.
                Create soul id account to participate in fair
                hackathons and get into tech companies.
                </h2>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow pb-8">
                  <a
                    href="#"
                    className="btn btn-primary btn-large mr-4 items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Explore
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary btn-large items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Create
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-12 pb-36 max-w-5xl mx-auto fsac4 md:px-1 px-3">
                <div className="ktq4">
                    <img className="w-36"
                         src="https://habrastorage.org/webt/zd/ub/yi/zdubyivqjre3b32d95dndbu8hxo.png" alt=''></img>

                    <h1 className=" text-2xl md:text-3xl pt-10 font-semibold text-white">
                        Decentralized United Nations
                    </h1>
                    <p className="text-xl md:text-2xl pt-3 value-text text-gray-200 fkrr1">
                        The decentralization of the work of the UN will help to achieve more formidable results. Our
                        community provides a space where everyone can join forces to built a new world
                    </p>
                </div>
                <div className="ktq4">
                    <img className="w-36"
                         src="https://habrastorage.org/webt/gb/k_/4x/gbk_4x1th6hyz6e-bndftljuyte.png" alt=''></img>

                    <h3 className="text-2xl md:text-3xl pt-10 font-semibold text-white">
                        Empowering by technologies
                    </h3>
                    <p className="text-xl md:text-2xl pt-3 value-text text-gray-200 fkrr1">
                        Humaniq's primary goal is to eradicate poverty, hunger and educaton using open-source
                        technology.
                        We believe blockchain will help move forward our 6 goals
                    </p>
                </div>
                <div className="ktq4">
                    <img className="w-36"
                         src="https://habrastorage.org/webt/bg/xq/ca/bgxqca8x82hbxte2yrfns8i7mmq.png" alt=''></img>
                    <h3 className="text-2xl md:text-3xl pt-10 font-semibold text-white">
                        Opportunity to contribute
                    </h3>

                    <p className="text-xl md:text-2xl pt-3 value-text text-gray-200 fkrr1">
                        We are creating a system where every member of the community can contribute to changing the
                        world.
                        Did you come up with the idea to create a new application for all third world countries? Big!
                        Submit a grant application
                    </p>
                </div>
                <div className="ktq4">
                    <img className="w-36"
                         src="https://habrastorage.org/webt/4q/hy/hk/4qhyhkavdquzkfepoik4ypgu574.png" alt=''></img>
                    <h3 className="text-2xl md:text-3xl pt-10 font-semibold text-white">
                        Building an ecosystem
                    </h3>

                    <p className="text-xl md:text-2xl pt-3 value-text text-gray-200 fkrr1">
                        In addition to creating an ecosystem, we are developing a protocol where you can create your
                        endowments to solve own problems.
                        All users can launch their own dApp to draw attention to themselves. We develop, you distribute
                    </p>
                </div>
            </div>

      </main>
    </div>
  )
}

export default Home

