import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">ติดต่อเรา</h2>
      <p className="mb-4 text-gray-700">แอดไลน์ @jpvisualdocs หรือโทร 099-999-9999</p>
      <a
        href="https://line.me/ti/p/~jpvisualdocs"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600"
      >
        เพิ่มเพื่อนใน LINE
      </a>
    </section>
  );
};

export default Contact;