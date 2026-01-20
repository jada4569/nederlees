"use client";

export default function Contact() {
  return (
    <div>
      {/* Main Body of Page */}
      <main className="raleway-font">
        <h2 className="dark-green-text bold-font align-center pt-3 pt-md-5">
          We'd Love To Hear From You!
        </h2>
        <div className="contact-span my-5" id="contact">

          <form
            action="https://formsubmit.co/info@nederlees.nl"
            method="POST"
            target="_blank"
          >
            <input type="hidden" name="_captcha" value="false" />

            <div className="form-group mb-4">
              <label className="dark-gray-text pb-2" htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" name="name" />
            </div>

            <div className="form-group mb-4">
              <label className="dark-gray-text pb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="form-group mb-4">
              <label className="dark-gray-text pb-2" htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows={6}
                name="message"
              />
            </div>

            <button type="submit" className="form-control orange-button contact-button">
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
