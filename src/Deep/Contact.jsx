const Contact = () => {
  return (
    <section id="contact" className="py-12 px-4 md:px-8 bg-gray-800">
      <div className="max-w-3xl mx-auto text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-800 bg-clip-text text-transparent">
        Contact
      </h2>

        <p className="text-gray-300 mb-10 text-lg sm:text-xl">
          I'm currently available for freelance work — whether it's a project, idea, or collaboration. Let’s build something impactful together.
        </p>

        <div className="bg-gray-900 rounded-xl shadow-lg  p-6 sm:p-8 space-y-6 text-left">
          <div className="flex items-center gap-4">
            <span className="text-purple-400 text-lg font-medium w-20">Phone:</span>
            <a
              href="tel:+919876543210"
              className="text-gray-200 hover:text-purple-400 transition text-base sm:text-lg"
            >
              +91 7016519328
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-purple-400 text-lg font-medium w-20">Email:</span>
            <a
              href="mailto:youremail@example.com"
              className="text-gray-200 hover:text-purple-400 transition text-base sm:text-lg break-all"
            >
              work.dhruvilrana@gamil.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
