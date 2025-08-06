import React, { useState } from 'react'




const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards, PayPal, and cash on delivery.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship worldwide with standard delivery times.',
  },
  {
    question: 'Can I return a product?',
    answer: 'Yes, returns within 14 days are accepted as per our policy.',
  },
];

const Faq = () => {

      const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <>
     <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <button
              onClick={() => toggle(idx)}
              className="faq-question"
              aria-expanded={openIndex === idx}
            >
              {faq.question}
              <span className="icon">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
   </>
  )
}

export default Faq