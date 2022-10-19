import Image from 'next/image'

function About() {
    return (
        <div className="flex justify-center">
            <div className="ml-20 my-20">
                <p className="text-[32px] font-bold text-center"> About Me</p>
                <p className="h-[3px] w-[60px] bg-primary my-4 mx-auto"></p>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda aut
                    consequatur deserunt
                    eaque, esse eum fugiat fugit iure minus neque nostrum, perferendis perspiciatis porro ratione
                    suscipit unde! Ab, laborum?</p>
                <div className="flex space-x-8 mt-20">
                    <div className="w-1/2">
                        <div className="relative">
                            <Image
                                className="object-cover rounded"
                                width="433" height="299"
                                src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh0bWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <p className="text-[26px] font-bold py-8">Reflux HTML CSS Template</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ex ipsa itaque nobis
                            possimus ut! Impedit nulla perferendis repudiandae. Alias, exercitationem modi omnis optio
                            pariatur quibusdam sed suscipit tenetur veritatis?</p>
                    </div>
                </div>
                <p className="border-b-2 border-gray-100 my-16 "></p>
                <div className="flex space-x-8 mt-20">
                    <div className="w-1/2">
                        <p className="text-[26px] font-bold py-8">Reflux HTML CSS Template</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ex ipsa itaque nobis
                            possimus ut! Impedit nulla perferendis repudiandae. Alias, exercitationem modi omnis optio
                            pariatur quibusdam sed suscipit tenetur veritatis?</p>
                    </div>
                    <div className="w-1/2">
                        <div className="relative">
                            <Image
                                className="object-cover rounded"
                                width="433" height="299"
                                src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh0bWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
