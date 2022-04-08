import React from 'react';


const SidebarMenu = () => {

    return (
        <div>

            <div id="Main" className='xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-full  w-full sm:w-64 bg-gray-900 flex-col'>
                <div className='mt-10 mx-5'>
                    <img alt="profile-pic" src="https://i.ibb.co/dgPVFQs/download.jpg" className="w-8 h-8  rounded-3xl" />
                    <p className=" text-white text-base leading-4 mt-2">David Williams</p>
                    <span className=" text-gray-500 text-base leading-4 mt-2">Art Director</span>
                </div>
               
                <div className="mt-6 flex flex-col justify-start items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
                    <button className="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-indigo-400  text-white rounded ">
                        <i className="ri-layout-grid-fill"></i>
                        <p className="text-base leading-4 ">Dashboard <i className="ri-arrow-left-s-line ml-20"></i>
                        </p>
                    </button>
                    <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                        <i className="ri-vip-diamond-line"></i>
                        <p className="text-base leading-4 ">Layouts</p>
                    </button>
                    <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                        <i className="ri-line-chart-line"></i>
                        <p className="text-base leading-4 ">Graphs<i className="ri-arrow-left-s-line ml-28"></i></p>
                    </button>

                    <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                        <i className="ri-mail-fill"></i>
                        <div className='flex items-center'>

                            <span className="text-base leading-4 ">Mailbox</span>


                            <span className="ml-16 bg-yellow-500 w-12">16/24</span>
                        </div>
                    </button>

                    <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">

                        <div id="menu1" className="justify-start  flex-col w-full md:w-auto items-start pb-1">
                            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                                <p className="text-base leading-4  ">Inbox</p>
                            </button>
                            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">

                                <p className="text-base leading-4  ">Email view</p>
                            </button>
                            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">

                                <p className="text-base leading-4  ">Compose email</p>
                            </button>
                            <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">

                                <p className="text-base leading-4  ">Email templates</p>
                            </button>

                        </div>
                    </div>

                    <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                        <i class="ri-pie-chart-2-line"></i>
                        <span className="text-base leading-4 ">Matrics</span>
                    </button>
                    <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                        <i class="ri-flask-line"></i>
                        <span className="text-base leading-4 ">Widget</span>
                    </button>
                    <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                        <i class="ri-file-edit-line"></i>
                        <span className="text-base leading-4 ">Forms<i className="ri-arrow-left-s-line ml-28"></i></span>
                    </button>
                    <button className="flex jusitfy-start items-center w-full  space-x-6 focus:outline-none text-white focus:text-indigo-400   rounded ">
                        <i class="ri-tv-2-line"></i>

                        <div className='flex items-center'>
                            <span className="text-base leading-4 ">App Views</span>
                            <span className="ml-8 bg-green-700 w-20">special</span>
                        </div>
                    </button>

                </div>




            </div>
        </div>
    );
};

export default SidebarMenu;