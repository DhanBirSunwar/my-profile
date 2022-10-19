import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUikit } from '@fortawesome/free-brands-svg-icons'

function Header() {
    return (
        <header>
            <div className="bg-primary h-screen mx-4 pt-16">
                <div className="flex items-center flex-col">
                    <Image className="rounded-full object-cover"
                           src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                           height="140"
                           width="140"
                    />
                    <div className="flex items-center flex-col mb-16 mt-10">
                        <p className="text-[26px] font-bold">Dhan Bir Sunwar</p>
                        <p className="text-[12px] italic pt-4">UI developer</p>
                    </div>
                    <ul className="w-full text-center divide-y-2 divide-white font-bold">
                        <li className="py-6 hover:bg-white hover:text-primary border-t-2 border-white"><a
                            href="#section1">About Me</a></li>
                        <li className="py-6 hover:bg-white hover:text-primary"><a href="#section2">What I’m good at</a>
                        </li>
                        <li className="py-6 hover:bg-white hover:text-primary"><a href="#section3">My Work</a></li>
                        <li className="py-6 hover:bg-white hover:text-primary border-b-2 border-white"><a
                            href="#section4">Contact Me</a></li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://fb.com/templatemo">
                                <FontAwesomeIcon icon={ faUikit }/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
