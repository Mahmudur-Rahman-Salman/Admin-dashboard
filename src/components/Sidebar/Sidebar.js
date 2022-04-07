import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>

            <aside className="w-64" aria-label="Sidebar">
                <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                    <div className='bg-emerald-400 text-white p-1 rounded	'>Compose Mail</div>
                    <span className='flex justify-start mt-3 font-semibold'>FOLDERS</span>
                    <ul className="space-y-2 ">


                        <li className='border-b'>
                            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="ri-inbox-fill"></i>
                                <span className="mx-2">Inbox</span>
                                <span className="inline-flex justify-center items-center p-2 ml-28  w-8 h-3 text-sm font-medium text-white bg-yellow-500 dark:bg-blue-900 dark:text-blue-200">16</span>
                            </Link>
                        </li>
                        <li className='border-b'>
                            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="ri-mail-line"></i>
                                <span className="mx-2">Send Mail</span>
                            </Link>
                        </li>
                        <li className='border-b'>
                            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="ri-bug-fill"></i>
                                <span className="mx-2">Important</span>

                            </Link>
                        </li>
                        <li className='border-b'>
                            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="ri-draft-line"></i>
                                <span className="mx-2">Drafts</span>
                                <span className="inline-flex justify-center items-center p-2 ml-28  w-5 h-3 text-sm font-medium text-white bg-red-500 dark:bg-blue-900 dark:text-blue-200">2</span>
                            </Link>
                        </li>


                    </ul>
                    <span className='flex justify-start mt-3 font-semibold'>CATEGORIES</span>
                    <ul className=" space-y-2 border-gray-200 dark:border-gray-700">

                        <li>
                            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <span className="inline-flex justify-center items-center p-2 w-3 p-2 h-3 text-sm font-medium text-white bg-emerald-500 rounded-full dark:bg-blue-900 dark:text-blue-200"></span>
                                <span className="ml-4">Work</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <span className="inline-flex justify-center items-center p-2 w-3 p-2 h-3 text-sm font-medium text-white bg-red-500 rounded-full dark:bg-blue-900 dark:text-blue-200"></span>
                                <span className="ml-3">Documents</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <span className="inline-flex justify-center items-center p-2 w-3 p-2 h-3 text-sm font-medium text-white bg-blue-700 rounded-full dark:bg-blue-900 dark:text-blue-200"></span>
                                <span className="ml-3">Social</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <span className="inline-flex justify-center items-center p-2 w-3 p-2 h-3 text-sm font-medium text-white bg-teal-300 rounded-full dark:bg-blue-900 dark:text-blue-200"></span>
                                <span className="ml-3">Advertising</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <span className="inline-flex justify-center items-center p-2 w-3 p-2 h-3 text-sm font-medium text-white bg-yellow-300 rounded-full dark:bg-blue-900 dark:text-blue-200"></span>
                                <span className="ml-3">Clients</span>
                            </Link>
                        </li>
                    </ul>
                    <span className='flex justify-start mt-3 font-semibold'>LABELS</span>

                    {/* <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-2">
                        <div className='flex justify-center bg-white shadow-sm'><i className="ri-price-tag-3-fill"></i>Family</div>

                        <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>

                        <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24"></div>
                    </div> */}
                    <div className="grid grid-cols-3 gap-2">
                        <div className='flex items-center drop-shadow bg-gray-50 text-gray-500 p-1'>
                            <div><i className="ri-price-tag-3-fill"></i></div>
                            Family
                        </div>
                        <div className='flex items-center drop-shadow bg-gray-50 text-gray-500 p-1'>
                            <div><i className="ri-price-tag-3-fill"></i></div>
                            Work
                        </div>
                        <div className='flex items-center drop-shadow bg-gray-50 text-gray-500 p-1'>
                            <div><i className="ri-price-tag-3-fill"></i></div>
                            Home
                        </div>
                        <div className='w-40 flex items-center drop-shadow bg-gray-50 text-gray-500 p-1'>
                            <div><i className="ri-price-tag-3-fill"></i></div>
                            Children
                        </div>
                        <div className='w-40 flex items-center drop-shadow bg-gray-50 text-gray-500 p-1'>
                            <div><i className="ri-price-tag-3-fill"></i></div>
                            Holidays
                        </div>
                        <div className='flex items-center drop-shadow bg-gray-50 text-gray-500 p-1'>
                            <div><i className="ri-price-tag-3-fill"></i></div>
                            Music
                        </div>
                        <div className='w-42 flex items-center drop-shadow bg-gray-50 text-gray-500 p-1'>
                            <div><i className="ri-price-tag-3-fill"></i></div>
                            Photography
                        </div>
                        <div className='flex items-center drop-shadow bg-gray-50 text-gray-500 p-1'>
                            <div><i className="ri-price-tag-3-fill"></i></div>
                            Film
                        </div>



                    </div>

                </div>
            </aside>

        </div>
    );
};

export default Sidebar;