import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




const Home: NextPage = () => {
  return (
    <div className="bg-[#023047] min-h-[100vh]">
      <Head>
        <title>SoulDev</title>
        <meta name="description" content="SoulDev landing page" />
      </Head>

      <header className="fixed flex bg-[#023047] h-24 w-full lg:px-16 justify-between pt-4">

      <div className="flex">
        <div className ="h-16 w-16 ml-2">
          <div className ="bg-primary rounded-full h-16 w-16">
            <Image alt="logo" src="/logo.svg" width="64" height="64"></Image>
        </div>
        </div> 
        <div className="flex flex-col ml-2 h-16 justify-center">
          <div className="text-white font-bold text-3xl">Souldev</div>
          <div className="font-semibold tracking-[0.55em] text-[#219EBC]	">network</div>
        </div>


        </div>
        <div className='flex'>
          <div className ="h-12 w-12 pt-2 pr-12">
            <div className ="bg-primary rounded-full h-12 w-12"></div>
          </div> 

          <div className = "space-y-1 pt-4 ml-2 mr-2">
            <div className ="bg-primary rounded-full h-2 w-12"></div>
            <div className ="bg-primary rounded-full h-2 w-12"></div>
            <div className ="bg-primary rounded-full h-2 w-12"></div>
          </div>
        </div>

      </header>

      <div id="spacer" className="h-8 w-8"/>

      <main className="flex flex-col items-center lg:px-16 w-full">

        
        <div className='text-center p-0 mx-auto mt-36 md:mt-52 lg:mt-72'>
                <h1 className="text-4xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3 pl-3">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#FFB703] text-5xl">HOME </span> 
                  <span className="">FOR DECENTRALIZED AVATARS</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-4 font-regular lh-6 ld-04 pb-11 text-gray-400 text-center pr-4 pl-4">
                   A web3 marketplace where people and companies can create and manage decentralized avatars
                </h2>
            </div>

            <div className="mt-5 sm:mt-8 sm:flex justify-center">
                <div className=" rounded-md pb-8">
                  <Link href="/add-wallet">
                    <a
                      className="btn btn-primary btn-large mr-4 items-center justify-center rounded-xl border border-transparent bg-primary px-10 py-4 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Explore
                    </a>
                  </Link>
                  <Link href="/add-wallet">
                    <a
                      className="btn btn-primary btn-large items-center justify-center rounded-xl border border-transparent bg-indigo-100 px-10 py-4 text-base font-medium hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Create
                    </a>
                  </Link>
                </div>
              </div> 

   
            

            <div className='text-center p-0 mx-auto mt-52'>
                <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3 pl-3">
                  <span className="block text-primary text-7xl"></span> 
                  <span>Be a part of the best company</span>
                </h1>
            </div>

            <div className="pt-2 w-full md:px-1 px-3">
              <div className ="grid gap-4 grid-cols-1s w-full mt-6 mb-6 p-4 bg-secondary-25 rounded-lg lg:gap-6 lg:grid-cols-4">

                 <div className="border border-primary p-1 rounded-md pr-3 pl-3 pb-3 pt-3">
                    <div className="bg-primary rounded-md h-24 w-full flex">
                    </div>
                    <div className="justify-center w-full flex">
                      <div className="flex w-3/12 aspect-square rounded-full bg-black">
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-white">Souldev Network</span>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-[#fff7]">Empowering people to change the world faster</span>
                    </div>
                    <div className="text-left pt-6">
                      <span className="text-white text-sm">{23} vacancies | {1000} followers</span>
                    </div>
                  </div>

                  <div className="border border-primary p-1 rounded-md pr-3 pl-3 pb-3 pt-3">
                    <div className="bg-primary rounded-md h-24 w-full flex">
                    </div>
                    <div className="justify-center w-full flex">
                      <div className="flex w-3/12 aspect-square rounded-full bg-black">
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-white">Souldev Network</span>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-[#fff7]">Empowering people to change the world faster</span>
                    </div>
                    <div className="text-left pt-6">
                      <span className="text-white text-sm">{23} vacancies | {1000} followers</span>
                    </div>
                  </div>

                    <div className="border border-primary p-1 rounded-md pr-3 pl-3 pb-3 pt-3">
                    <div className="bg-primary rounded-md h-24 w-full flex">
                    </div>
                    <div className="justify-center w-full flex">
                      <div className="flex w-3/12 aspect-square rounded-full bg-black">
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-white">Souldev Network</span>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-[#fff7]">Empowering people to change the world faster</span>
                    </div>
                    <div className="text-left pt-6">
                      <span className="text-white text-sm">{23} vacancies | {1000} followers</span>
                    </div>
                  </div>

                    <div className="border border-primary p-1 rounded-md pr-3 pl-3 pb-3 pt-3">
                    <div className="bg-primary rounded-md h-24 w-full flex">
                    </div>
                    <div className="justify-center w-full flex">
                      <div className="flex w-3/12 aspect-square rounded-full bg-black">
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-white">Souldev Network</span>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-[#fff7]">Empowering people to change the world faster</span>
                    </div>
                    <div className="text-left pt-6">
                      <span className="text-white text-sm">{23} vacancies | {1000} followers</span>
                    </div>
                  </div>

                </div>
            </div>

            <div className="flex w-full pr-1 pl-1">
                <Link href="/">
                  <a className="flex w-full h-12 mt-6 mb-24 items-center text-white text-center justify-center rounded-md border border-transparent bg-secondary-25 font-medium hover:bg-secondary-60">
                    View all vacancies
                  </a>
                </Link>
            </div>

            <div className='text-center p-0 mx-auto mt-12'>
                <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3 pl-3">
                  <span className="block text-primary text-7xl"></span> 
                  <span>Find and connect with digital talent souls</span>
                </h1>
            </div>  

            <div className="pt-2 w-full md:px-1 px-3">
              <div className ="grid gap-4 grid-cols-1s w-full mt-6 mb-6 p-4 bg-secondary-25 rounded-lg lg:gap-6 lg:grid-cols-4">

                 <div className="border border-primary p-1 rounded-md pr-3 pl-3 pb-3 pt-3">
                    <div className="bg-primary rounded-md h-24 w-full flex">
                    </div>
                    <div className="justify-center w-full flex">
                      <div className="flex w-3/12 aspect-square rounded-full bg-black">
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-white">Souldev Network</span>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-[#fff7]">Empowering people to change the world faster</span>
                    </div>
                    <div className="text-left pt-6">
                      <span className="text-white text-sm">{23} vacancies | {1000} followers</span>
                    </div>
                  </div>

                  <div className="border border-primary p-1 rounded-md pr-3 pl-3 pb-3 pt-3">
                    <div className="bg-primary rounded-md h-24 w-full flex">
                    </div>
                    <div className="justify-center w-full flex">
                      <div className="flex w-3/12 aspect-square rounded-full bg-black">
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-white">Souldev Network</span>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-[#fff7]">Empowering people to change the world faster</span>
                    </div>
                    <div className="text-left pt-6">
                      <span className="text-white text-sm">{23} vacancies | {1000} followers</span>
                    </div>
                  </div>

                    <div className="border border-primary p-1 rounded-md pr-3 pl-3 pb-3 pt-3">
                    <div className="bg-primary rounded-md h-24 w-full flex">
                    </div>
                    <div className="justify-center w-full flex">
                      <div className="flex w-3/12 aspect-square rounded-full bg-black">
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-white">Souldev Network</span>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-[#fff7]">Empowering people to change the world faster</span>
                    </div>
                    <div className="text-left pt-6">
                      <span className="text-white text-sm">{23} vacancies | {1000} followers</span>
                    </div>
                  </div>

                    <div className="border border-primary p-1 rounded-md pr-3 pl-3 pb-3 pt-3">
                    <div className="bg-primary rounded-md h-24 w-full flex">
                    </div>
                    <div className="justify-center w-full flex">
                      <div className="flex w-3/12 aspect-square rounded-full bg-black">
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-white">Souldev Network</span>
                    </div>
                    <div className="text-center pt-2">
                      <span className="text-[#fff7]">Empowering people to change the world faster</span>
                    </div>
                    <div className="text-left pt-6">
                      <span className="text-white text-sm">{23} vacancies | {1000} followers</span>
                    </div>
                  </div>

                </div>
            </div>

            <div className="flex w-full pr-1 pl-1">
                <Link href="/">
                  <a className="flex w-full h-12 mt-6 mb-24 items-center text-white text-center justify-center rounded-md border border-transparent bg-secondary-25 font-medium hover:bg-secondary-60">
                    View all profiles
                  </a>
                </Link>
            </div>

            <div className='text-center p-0 mx-auto mt-12'>
                <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-4 lh-6 ld-04 font-bold text-white mb-6 pr-3 pl-3">
                  <span className="block text-primary text-7xl"></span> 
                  <span>Get access to ideas, talents from all over the world</span>
                </h1>
            </div>

            <div className="pt-2 w-full md:px-1 px-3">
              <div className ="grid gap-4 grid-cols-1s w-full mt-10 mb-6 p-4 bg-secondary-25 rounded-lg lg:gap-6 lg:grid-cols-4">

                 <div className="text-center mt-6">
                  <span className="text-4xl text-white w-56">Create <span className="text-4xl font-semibold">OWN</span> hackathon for avatars no-code</span>
                  
                  <div className="text-center text-white mt-6">
                  <span className="">Powered by 
                    <Link href="/">
                      <a className="font-semibold"> Souldev Network</a>
                    </Link>
                  </span>
                 </div>

                 <div className="flex justify-center items-center pr-1 pl-1">
                  <Link href="/">
                    <a className="flex w-52 h-14 mt-6 mb-12 items-center text-white text-center justify-center rounded-xl border border-transparent bg-secondary-25 font-medium hover:bg-secondary-60">
                      Create hackathon
                    </a>
                  </Link>
                 </div>

                 </div>


                 <div className="flex overflow-auto w-full">

                 {
                 ([0, 0, 0]).map((item, i) => (
                 <div className="min-w-[33vw]" key={i}>
                   <div className="mr-6 border border-primary rounded-xl p-3">
                      <div className="bg-primary rounded-md h-44 w-full flex">
                      </div>
                      <div className="justify-center w-full flex">
                        <div className="flex w-3/12 aspect-square rounded-full bg-black">
                        </div>
                      </div>
                      <div className="text-center pt-6">
                        <span className="text-white">Souldev Network</span>
                      </div>
                      <div className="text-center pt-2">
                        <span className="text-[#fff8]">Empowering people to change the world faster</span>
                      </div>
                      <div className="text-left pt-10">
                        <span className="text-white text-sm">{23} vacancies | {1000} followers</span>
                      </div>
                    </div>
                    </div>
                  ))}


                  </div>


                </div>
            </div>

            <button className="flex w-60 mt-12 mb-6 border p-3 rounded-xl items-center border-secondary-25">
              <Image alt="link_github" src="/github.png" width="40" height="40"></Image>
              <span className="text-white text-3xl ml-16">Github</span>
            </button>

            <button className="flex w-60 mb-6 border p-3 rounded-xl items-center border-secondary-25">
              <Image alt="link_github" src="/github.png" width="40" height="40"></Image>
              <span className="text-white text-3xl ml-16">Github</span>
            </button>

            <button className="flex w-60 mb-12 border p-3 rounded-xl items-center border-secondary-25">
              <Image alt="link_github" src="/github.png" width="40" height="40"></Image>
              <span className="text-white text-3xl ml-16">Github</span>
            </button>


      </main>
    </div>
  )
}

export default Home

