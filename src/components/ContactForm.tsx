const ContactForm = () => {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20" id="contact">
      <h2 className="text-center font-header text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase text-primary">
        Here's a contact form
      </h2>
      <h4 className="pt-6 text-center font-header text-xl sm:text-2xl lg:text-3xl font-medium text-black">
        Have Any Questions?
      </h4>
      <div className="mx-auto w-full pt-5 text-center sm:w-2/3">
        <p className="font-body text-gray-500">
        As an Information Systems student at the University of Indonesia, I’m on a quest to unravel the mysteries of code and design. My passion for programming ignites my creativity, and I’m determined to craft elegant solutions to complex problems. Seeking a software engineering position, I’m ready to dive into the world of algorithms, databases, and user interfaces – all while sipping on a cup of virtual coffee. You can contact me here...
        </p>
      </div>
      <form className="mx-auto w-full pt-10 sm:w-3/4">
        <div className="flex flex-col md:flex-row">
          <input className="mr-3 w-full md:w-1/2 lg:mr-5 rounded border-gray-300 px-4 py-3 font-body text-black" placeholder="Name" type="text" id="name"/>
          <input className="mt-6 md:mt-0 md:ml-3 w-full md:w-1/2 lg:ml-5 rounded border-gray-300 px-4 py-3 font-body text-black" placeholder="Email" type="text" id="email"/>
        </div>
        <textarea className="mt-6 w-full rounded border-gray-300 px-4 py-3 font-body text-black md:mt-8" placeholder="Message" id="message"></textarea>
        <button className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-gray-200">
          Send
          <i className="bx bx-chevron-right relative right-2 text-3xl"></i>
        </button>
      </form>
      <div className="flex flex-col pt-16 lg:flex-row">
        <div className="w-full lg:w-1/2 border border-gray-300 px-6 py-6 sm:py-8">
          <div className="flex items-center">
            <i className="bx bx-phone text-2xl text-gray-400"></i>
            <p className="pl-2 font-body font-bold uppercase text-gray-400 lg:text-lg">
              My Phone
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            (+62) 812-9076-5711
          </p>
        </div>
        <div className="w-full lg:w-1/2 border border-gray-300 px-6 py-6 sm:py-8 mt-6 lg:mt-0 lg:border-l-0 lg:border-t lg:border-r">
          <div className="flex items-center">
            <i className="bx bx-envelope text-2xl text-gray-400"></i>
            <p className="pl-2 font-body font-bold uppercase text-gray-400 lg:text-lg">
              My Email
            </p>
          </div>
          <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
            thirzahmad@gmail.com
          </p>
        </div>
      </div>
    </div>
    
    )
}

export default ContactForm;