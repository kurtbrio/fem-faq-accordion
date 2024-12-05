import React from "react";
import { useState } from "react";

const Accordion = () => {
  const faqs = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const toggle = (index) => {
    setSelectedItem((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex justify-center items-center font-primary w-screen min-h-screen py-36 lg:py-40 xl:py-56 px-10 max-w-full bg-[url(/background-pattern-mobile.svg)] md:bg-[url(/background-pattern-desktop.svg)] bg-no-repeat bg-lightpink bg-top bg-[100%_auto]">
      <div className="bg-white text-darkpurple min-w-80 max-w-xl p-6 rounded-md text-base shadow-lg ">
        <h1 className="star-icon text-3xl lg:text-5xl font-bold">FAQs</h1>
        <div className="flex flex-col gap-6 mt-6">
          {faqs.map((faq, index) => (
            <>
              <div className="flex flex-col gap-6">
                <div
                  className="flex items-center justify-between cursor-pointer hover:text-hover transition-colors delay-75 ease-in "
                  onClick={() => toggle(index)}
                >
                  <h2 className="text-md font-bold w-4/5">{faq.question}</h2>
                  <button
                    className={
                      selectedItem === index ? "minus-icon" : "plus-icon"
                    }
                  ></button>
                </div>
                <p className={selectedItem === index ? "block" : "hidden"}>
                  {faq.answer}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
