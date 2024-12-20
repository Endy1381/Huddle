import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    
      <div>
         <Head>
        <title>Huddle</title>
        <meta name="description" content="This is my awesome website." />
      </Head>
        {/* ANCHOR the main container for the website */}
        <div id="main" className="">
          {/* the header */}
          <header className="lg:px-12 pb-10 bg-sky-50" style={{ backgroundImage: 'url(/images/bg-hero-desktop.svg)' }}>
            {/* ANCHOR Navbar */}
            <nav className="flex justify-between items-center p-5 py-10">
              <div>
                <Image src="/images/logo.svg" alt="Logo" width={100} height={40} />
              </div>
              <div>
                <button className="p-3 bg-white hover:text-gray-600 rounded-full px-7 shadow-md font-bold">Try It Free</button>
              </div>
            </nav>
            {/* ANCHOR Hero section */}
            <div className="flex lg:flex-row flex-col text-center lg:text-start justify-around items-center p-5">
              {/* ANCHOR hero text */}
              <div className="flex-1 mb-20">
                <h1 className="text-4xl tracking-wide font-bold my-3 text-slate-800">Build The Community <br /> Your Fans Will Love</h1>
                <p className="my-3 mb-12 tracking-wide mt-6"> Huddle re-imagines the way we build communities. You have <br /> a voice, but so does your audience.
                  Create connections with <br /> your users as you engage in genuine discussion.</p>
                {/* Button */}
                <a href="/" className="bg-pink-500 hover:bg-pink-400 text-white p-4 my-10 px-16 rounded-full"> Get Started For Free</a>
              </div>
              {/* ANCHOR hero image */}
              <Image className="flex-1 w-96" src="/images/illustration-mockups.svg" alt="Hero Illustration" width={400} height={400} />
            </div>
          </header>

          {/* ANCHOR descriptions! */}
          <section>
            {/* *First div */}
            <div className="flex lg:flex-row flex-col-reverse justify-between items-center m-10 lg:m-32 my-10 px-10 mt-10 border lg:p-10 p-">
              {/* text */}
              <div className="flex-1 text-center lg:text-start">
                <h1 className="text-3xl font-bold mb-5 text-slate-800">Grow Together</h1>
                <p className="mt-5 text-slate-700">Generate meaningful discussions with your audience and <br /> build a strong, loyal community.
                  Think of the insightful <br /> conversations you miss out on with a feedback form. </p>
              </div>
              {/* image */}
              <Image className="flex-1 m-20 my-5 lg:mr-0 w-96" src="/images/illustration-grow-together.svg" alt="Grow Together Illustration" width={400} height={400} />
            </div>

            {/* *Second div */}
            <div className="flex lg:flex-row flex-col justify-between items-center lg:m-32 m-10 px-10 mt-10 my-10 border lg:p-10 p-3">
              {/* image */}
              <Image className="flex-1 m-20 my-5 lg:ml-0 w-96" src="/images/illustration-flowing-conversation.svg" alt="Flowing Conversations Illustration" width={400} height={400} />
              {/* text */}
              <div className="flex-1 lg:ml-10 lg:text-start text-center lg:text-end">
                <h1 className="text-3xl font-bold mb-5 text-slate-800">Flowing Conversations</h1>
                <p className="mt-5 text-slate-700"> You wouldn't paginate a conversation in real life, so why do <br /> it online? Our threads
                  have just-in-time loading for a more <br /> natural flow. </p>
              </div>
            </div>

            {/* *Third div */}
            <div className="flex justify-between lg:flex-row flex-col-reverse items-center lg:m-32 m-10 my-10 px-10 mt-10 border p-10">
              {/* text */}
              <div className="flex- text-center lg:text-start">
                <h1 className="text-3xl font-bold mb-5 text-slate-800">Your Users</h1>
                <p className="mt-5 text-slate-700">It takes no time at all to integrate Huddle with your app's <br /> authentication solution.
                  This means, once signed in to <br />your app, your users can start chatting immediately.</p>
              </div>
              {/* image */}
              <Image className="flex-1 m-20 my-5 lg:mr-0 w-96" src="/images/illustration-your-users.svg" alt="Your Users Illustration" width={400} height={400} />
            </div>
          </section>

          {/* ANCHOR floating call to action */}
          <section className="flex flex-col justify-center items-center p-5">
            <div className="text-center border rounded-md py-10 inline-block p-50 lg:mx-96 ">
              <div className="">
                <h1 className="mb-10 text-3xl tracking-wide font-bold text-slate-800 p-2 ">Ready To Build Your Community?</h1>
                <a href="/" className="bg-pink-500 hover:bg-pink-400 text-white p-4 px-2 lg:px-16 mb-50 rounded-full"> Get Started For Free</a>
              </div>
            </div>
          </section>

          {/* ANCHOR footer */}
          <footer className="bg-teal-950 flex lg:flex-row flex-col justify-between lg:items-center p-16 pt-24">
            {/* div1 */}
            <div className="lg:mb-auto mb-10">
              <Image src="/images/logo-c.svg" alt="Logo" width={100} height={40} />
              <ul className="text-white bruh">
                <div className="flex items-center"> <Image src="/images/icon-location.svg" alt="Location Icon" width={20} height={20} className="mb-10 mr-5" /> <li className="my-5">Lorem ipsum dolor sit amet, consectetur <br />  adipisicing elit. Commodi blanditiis dolorem veniam <br /> explicabo placeat obcaecati exercitationem.</li></div>
                <div className="flex items-center" ><Image src="/images/icon-phone.svg" alt="Phone Icon" width={20} height={20} className="mr-5" /> <li className="my-5">+123 456 7890</li></div>
                <div className="flex items-center"><Image src="/images/icon-email.svg" alt="Email Icon" width={20} height={20} className="mt-5 mr-5" /> <li className="my-5 mb-0">example@huddle.com</li></div>
              </ul>
            </div>

            {/* div2 */}
            <div className="flex lg:flex-row flex-col text-2xl lg:text-auto lg:mb-0 mb-10 text-white">
              <div className="lg:mr-20">
                <p>About us</p>
                <p>What we do</p>
                <p>FAQ</p>
              </div>
              <div>
                <p>Career</p>
                <p>Blog</p>
                <p>Contact us</p>
              </div>
            </div>
            {/* div3 */}
            <div className="flex text-white justify-center lg:justify-start">
              {/* Social Media Icons */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>

            </div>
          </footer>
          <p className="bg-teal-950 flex justify-center lg:justify-end">made by natnael yohannes(Endy)</p>
        </div>
      </div>
  );
}
