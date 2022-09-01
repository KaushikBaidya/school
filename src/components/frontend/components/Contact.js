import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [done, setDone] = useState(false);
  const send = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t259ekq",
        "template_uyc8bjs",
        form.current,
        "fdsflkjn_publicKey"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setDone(true);
        },
        (error) => {
          // console.log(error.text);
        }
      );
  };
  return (
    <>
      <section
        id="seeContact"
        className="border-b py-20 bg-cntBanner bg-cover h-full"
      >
        <div className="h-full grid grid-cols-1 content-center ">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-base font-bold text-[#20702e] sm:mt-4 text-center px-5 uppercase tracking-wider border-b-2 border-[#20702e]">
              contact us
            </h2>
          </div>
          <div className="max-w-2xl mx-auto py-1">
            <h2 className="text-[24px] text-slate-600 font-bold sm:mt-4 lg:text-[36px] text-center px-5 uppercase tracking-wider">
              Send Us Your Query
            </h2>
          </div>
        </div>
        <div className="container max-w-4xl mx-auto overflow-hidden flex flex-col px-5">
          <form className="mt-10" ref={form} onSubmit={send}>
            <input
              required
              className="input"
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <input
              required
              className="input"
              type="text"
              name="user_email"
              placeholder="Email"
            />
            <input
              required
              className="input"
              type="text"
              name="user_subject"
              placeholder="Subject"
            />
            {/* <select required className="input" name="user_course" id="course">
              <option defaultValue>Choose A Course</option>
              {dataCourse.length > 0 &&
                dataCourse.map((item) => (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                ))}
            </select> */}
            {/* <select
              required
              className="input"
              name="user_university"
              id="university"
            >
              <option defaultValue>Choose An University</option>
              {dataUniversity.length > 0 &&
                dataUniversity.map((item) => (
                  <option key={item.id} value={item.vName}>
                    {item.vName}
                  </option>
                ))}
            </select> */}
            <textarea
              required
              className="textarea"
              rows="5"
              name="message"
              placeholder="Your Message"
            />
            <button className="button hover:bg-[#1ea236]" type="">
              Send Us
            </button>
            <br />
            {done && (
              <div className="bg-green-400 flex my-2 text-white  justify-center items-center">
                <br />
                <h1 className="my-2 py-2 text-lg ">
                  Thank you for contacting us, we will get back to you as soon
                  as possible.
                </h1>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
