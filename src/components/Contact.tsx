// src/components/Contact.tsx
import React from "react";
import siteData from "../../public/SetiData.json"; // ตรวจเส้นทางไฟล์ให้ตรง

const Contact = () => {
  const { contact } = siteData;

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">ติดต่อเรา</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          สอบถามข้อมูล บริการ หรือขอใบเสนอราคา
        </p>
        <div className="space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Line: <span className="font-semibold">{contact.line}</span>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Email: <a href={`mailto:${contact.email}`} className="text-accent underline">{contact.email}</a>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            โทร: <a href={`tel:${contact.phone}`} className="text-accent underline">{contact.phone}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;