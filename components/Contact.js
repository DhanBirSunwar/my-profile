function Contact() {
    return (
        <div className="flex justify-center border-t-2 border-gray-100 pt-16 mb-16">
            <div className="ml-20">
                <p className="text-[32px] font-bold text-center"> Contact Me</p>
                <p className="h-[3px] w-[60px] bg-primary my-4 mx-auto"></p>
                <p className="text-center">Curabitur leo felis, rutrum vitae varius eu, malesuada a tortor. Vestibulum
                    congue leo et tellus aliquam, eu viverra nulla semper. Nullam eu faucibus diam. Donec eget massa
                    ante.
                </p>
                <div className="flex flex-col mt-16">
                    <div className="flex space-x-8">
                        <input type="text" placeholder="YourName" className="w-1/2 p-2 border border-white bg-transparent focus:outline-none"/>
                        <input type="email" placeholder="Email" className="w-1/2 p-2 border border-white bg-transparent focus:outline-none"/>
                    </div>
                    <input type="text" placeholder="Subject" className="w-ful my-8 p-2 border border-white bg-transparent focus:outline-none"/>
                    <textarea name="yourmessage" placeholder="Your message" id="" cols="30" rows="10" className="w-ful p-2 border border-white bg-transparent focus:outline-none"></textarea>
               <button className="w-fit py-2 px-4 mx-auto uppercase text-black bg-white mt-8 hover:bg-primary hover:text-white">send message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
