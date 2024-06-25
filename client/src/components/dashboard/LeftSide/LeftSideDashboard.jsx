import React from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench, Code, Bug, Presentation, Atom, PieChart, Plus } from 'lucide-react'

export default function SidebarOne() {
    return (
        <aside className="flex h-screen w-64 flex-col  border-r bg-white px-5 py-8">
            <a href="#">
                <svg
                    width="40"
                    height="46"
                    viewBox="0 0 50 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                        fill="black"
                    />
                </svg>
            </a>
            <div className="mt-6 flex flex-1 flex-col justify-between">
                <nav className="-mx-3 space-y-6 ">
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                            Folder Structure
                        </label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <label
                                onClick={() => document.getElementById('my_modal_5').showModal()}
                                className=" btn rounded-md border bg-slate-50 border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 flex hover:bg-green-600 hover:text-white"
                            >
                                <Plus className="h-5 w-5" aria-hidden="true" />

                                New Folder

                            </label>            </a>

                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">New Folder</h3>
                                <p className="py-4">Do you want to create new folder?</p>
                                <div className="modal-action flex flex-col w-full">
                                    <form method="dialog w-[100%] grid h-20 card rounded-box place-items-center">
                                        <label className="form-control w-[100%]  ">
                                            <div className="label flex justify-start">
                                                <span className="label-text text-start mr-auto">Folder Name ?</span>
                                            </div>
                                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                                           
                                        </label>
                                        <label className="form-control w-full  my-4">
                                            <div className="label flex justify-start">
                                                <span className="label-text text-start mr-auto">Purpose of Folder ?</span>
                                            </div>
                                            <input type="text" placeholder="Type here" className="input input-bordered w-[100%]" />
                                           
                                        </label>



                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>
                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                            Your Folders
                        </label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >

                            <Atom className="h-5 w-5" aria-hidden="true" />

                            <span className="mx-2 text-sm font-medium">Salesforce docs</span>
                            <div className="dots dropdown dropdown-right  ml-auto bg-white">
                                <div tabIndex={0} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4m0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402" /></svg>
                                </div >
                                {/* <ul tabIndex={0} className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul> */}
                            </div>
                        </a>

                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >


                            <Code className="h-5 w-5" aria-hidden="true" />

                            <span className="mx-2 text-sm font-medium">Backend Folder</span>
                            <div className="dots dropdown dropdown-right z-30 ml-auto">
                                <div tabIndex={0} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4m0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402" /></svg>
                                </div >
                                {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul> */}
                            </div>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >

                            <Bug className="h-5 w-5" aria-hidden="true" />

                            <span className="mx-2 text-sm font-medium">Tester Folder</span>
                            <div className="dots dropdown dropdown-right z-30 ml-auto">
                                <div tabIndex={0} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4m0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402" /></svg>
                                </div >
                                {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul> */}
                            </div>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >

                            <Presentation className="h-5 w-5" aria-hidden="true" />

                            <span className="mx-2 text-sm font-medium">Marketing Folder</span>
                            <div className="dots dropdown dropdown-right z-30 ml-auto">
                                <div tabIndex={0} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4m0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402" /></svg>
                                </div >
                                {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul> */}
                            </div>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >

                            <PieChart className="h-5 w-5" aria-hidden="true" />

                            <span className="mx-2 text-sm font-medium">Data analysis Folder</span>
                            <div className="dots dropdown dropdown-right z-30 ml-auto">
                                <div tabIndex={0} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4m0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402" /></svg>
                                </div >
                                {/* <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul> */}
                            </div>
                        </a>
                    </div>

                    <div className="space-y-3 ">
                        <label className="px-3 text-xs font-semibold uppercase text-gray-900">
                            Customization
                        </label>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <Brush className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Themes</span>
                        </a>
                        <a
                            className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                            href="#"
                        >
                            <Wrench className="h-5 w-5" aria-hidden="true" />
                            <span className="mx-2 text-sm font-medium">Setting</span>
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
    )
}
