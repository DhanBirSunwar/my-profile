import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <div>
            <Head>
                <title>My profile</title>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"
                />
            </Head>
           <div className="page-scroll scroll-smooth bg-black bg-no-repeat tracking-wider">
           <div className="container mx-auto flex">
               <div className="w-[30%]">
                   <Header/>
               </div>
               <div className="w-[70%] h-screen overflow-y-scroll">
                   <About/>
                   <Experience/>
                   <Contact/>
               </div>
           </div>
           </div>
        </div>
    )
}
