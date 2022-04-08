import React from 'react';
import { Link } from 'react-router-dom';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

const Sidebar = () => {
    return (
        <div>

            <div className='flex'>
                <SidebarMenu></SidebarMenu>

                {/* Headings */}




                <section className="w-full" aria-label="Sidebar">



                    <div>
                        <div className='flex justify-start items-center'>
                            <i class="ri-menu-fill text-teal-400 p-2"></i>
                            <input type="search" placeholder='search for something' className='flex justify-start w-9/12 m-2 p-2' />
                            <i class="ri-mail-fill"><sup className='bg-yellow-300 text-sm'>16</sup></i>
                            <i class="ri-notification-3-fill"><sup className='bg-teal-500 text-sm'>8</sup></i>

                            <i class="ri-login-box-fill m-2"> <span className='text-md text-gray-500'>log out</span></i>
                        </div>

                    </div>






                    {/* compose box */}

                    <div className='flex'>
                        <div className="w-64 overflow-y-auto py-4 px-6 bg-gray-50 rounded dark:bg-gray-800">
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
                                        <span className="inline-flex justify-center items-center w-3 p-2 h-3 text-sm font-medium text-white bg-emerald-500 rounded-full dark:bg-blue-900 dark:text-blue-200"></span>
                                        <span className="ml-4">Work</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                        <span className="inline-flex justify-center items-center w-3 p-2 h-3 text-sm font-medium text-white bg-red-500 rounded-full dark:bg-blue-900 dark:text-blue-200"></span>
                                        <span className="ml-3">Documents</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                        <span className="inline-flex justify-center items-center w-3 p-2 h-3 text-sm font-medium text-white bg-blue-700 rounded-full dark:bg-blue-900 dark:text-blue-200"></span>
                                        <span className="ml-3">Social</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                        <span className="inline-flex justify-center items-center w-3 p-2 h-3 text-sm font-medium text-white bg-teal-300 rounded-full dark:bg-blue-900 dark:text-blue-200"></span>
                                        <span className="ml-3">Advertising</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                        <span className="inline-flex justify-center items-center w-3 p-2 h-3 text-sm font-medium text-white bg-yellow-300 rounded-full dark:bg-blue-900 dark:text-blue-200"></span>
                                        <span className="ml-3">Clients</span>
                                    </Link>
                                </li>
                            </ul>
                            <span className='flex justify-start mt-3 font-semibold'>LABELS</span>

                           
                            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-2">
                                <div className='flex items-center drop-shadow bg-gray-50 text-gray-500'>
                                    <div><i className="ri-price-tag-3-fill"></i></div>
                                    Family
                                </div>
                                <div className='flex items-center drop-shadow bg-gray-50 text-gray-500'>
                                    <div><i className="ri-price-tag-3-fill"></i></div>
                                    Work
                                </div>
                                <div className='flex items-center drop-shadow bg-gray-50 text-gray-500'>
                                    <div><i className="ri-price-tag-3-fill"></i></div>
                                    Home
                                </div>
                                
                                
                                <div className='flex items-center drop-shadow bg-gray-50 text-gray-500'>
                                    <div><i className="ri-price-tag-3-fill"></i></div>
                                    Music
                                </div>
                                
                                <div className='flex items-center drop-shadow bg-gray-50 text-gray-500'>
                                    <div><i className="ri-price-tag-3-fill"></i></div>
                                    Film
                                </div>

                            </div>

                        </div>



                        {/* inbox  */}
                        <p className='text-lg ml-10'>Inbox(16)</p>
                       
                        <div className="mt-7 overflow-x-auto">
                            <div>
                                <table className="whitespace-nowrap">
                                    <tbody>
                                        <tr className="h-16  border border-gray-100 rounded">
                                            <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon  text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                               
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className>
                                                <div className="flex items-center pl-5">
                                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">Anna Smith</p>

                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">

                                                    <p className="text-sm leading-none text-gray-600 ml-2">Lorum ipsum dolor noretek imtet set</p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <button className="py-3 px-3 text-sm focus:outline-none leading-none">6:10am</button>
                                            </td>
                                        </tr>
                                        <tr className="h-16  border border-gray-100 rounded">
                                            <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon  bg-teal-700 text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <path d="M5 12l5 5l10 -10" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className>
                                                <div className="flex items-center pl-5">
                                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">Jack Nowaik</p>

                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">

                                                    <p className="text-sm leading-none text-gray-600 ml-2">Aldus version including version of lorum ipsum</p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <button className="py-3 px-3 text-sm focus:outline-none leading-none">8:22pm</button>
                                            </td>
                                        </tr>
                                        <tr className="h-16  border border-gray-100 rounded">
                                        <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon  text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                               
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className>
                                                <div className="flex items-center pl-5">
                                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">Facebook</p>
                                                    <span className='bg-yellow-500 p-1'>Clients</span>       
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">

                                                    <p className="text-sm leading-none text-gray-600 ml-2">Many Desktop publishing packages and web page editors</p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <button className="py-3 px-3 text-sm focus:outline-none leading-none">Jan 16</button>
                                            </td>
                                        </tr>
                                        <tr className="h-16  border border-gray-100 rounded">
                                        <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon  text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                               
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className>
                                                <div className="flex items-center pl-5">
                                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">Mailchip</p>

                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">

                                                    <p className="text-sm leading-none text-gray-600 ml-2">There are many variations of passages of lorem ipsum </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <button className="py-3 px-3 text-sm focus:outline-none leading-none">Mar 22</button>
                                            </td>
                                        </tr>
                                        <tr className="h-16  border border-gray-100 rounded">
                                        <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon  text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                               
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className>
                                                <div className="flex items-center pl-5">
                                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">Alex T.</p>
                                                    <span className='p-1 bg-red-500 text-white'>Documents</span>

                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">

                                                    <p className="text-sm leading-none text-gray-600 ml-2">Lorum ipsum dolor noretek imtet set</p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <button className="py-3 px-3 text-sm focus:outline-none leading-none">December 22</button>
                                            </td>
                                        </tr>
                                        <tr className="h-16  border border-gray-100 rounded">
                                        <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon  text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                               
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className>
                                                <div className="flex items-center pl-5">
                                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">Monica Ryther</p>

                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">

                                                    <p className="text-sm leading-none text-gray-600 ml-2">The standard chunk of lorum ipsum used </p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <button className="py-3 px-3 text-sm focus:outline-none leading-none">Jun 12</button>
                                            </td>
                                        </tr>
                                        <tr className="h-16  border border-gray-100 rounded">
                                        <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon  text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                               
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className>
                                                <div className="flex items-center pl-5">
                                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">Sandra Darick</p>

                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">

                                                    <p className="text-sm leading-none text-gray-600 ml-2">Contrary to popular belief</p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <button className="py-3 px-3 text-sm focus:outline-none leading-none">May 22 </button>
                                            </td>
                                        </tr>
                                        <tr className="h-16  border border-gray-100 rounded">
                                        <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon  text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                               
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className>
                                                <div className="flex items-center pl-5">
                                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">Patrick Partners</p>
                                                    <span className='bg-blue-300 p-1'>Adv</span>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">

                                                    <p className="text-sm leading-none text-gray-600 ml-2">If you are going to use a passage of lorum</p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <button className="py-3 px-3 text-sm focus:outline-none leading-none">May 28</button>
                                            </td>
                                        </tr>
                                        <tr className="h-16  border border-gray-100 rounded">
                                        <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon  text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                               
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className>
                                                <div className="flex items-center pl-5">
                                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">Anna Smith</p>

                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">

                                                    <p className="text-sm leading-none text-gray-600 ml-2">Lorum ipsum dolor noretek imtet set</p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <button className="py-3 px-3 text-sm focus:outline-none leading-none">6:10am</button>
                                            </td>
                                        </tr>
                                        <tr className="h-16  border border-gray-100 rounded">
                                            <td>
                                                <div className="ml-5">
                                                    <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                        <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                                        <div className="check-icon  bg-teal-700 text-white rounded-sm">
                                                            <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <path d="M5 12l5 5l10 -10" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className>
                                                <div className="flex items-center pl-5">
                                                    <p className="text-base font-medium leading-none text-gray-700 mr-2">Anna Smith</p>

                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <div className="flex items-center">

                                                    <p className="text-sm leading-none text-gray-600 ml-2">Lorum ipsum dolor noretek imtet set</p>
                                                </div>
                                            </td>
                                            <td className="pl-5">
                                                <button className="py-3 px-3 text-sm focus:outline-none leading-none">6:10am</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>


                    </div>













                </section>
            </div>




        </div>
    );
};

export default Sidebar;