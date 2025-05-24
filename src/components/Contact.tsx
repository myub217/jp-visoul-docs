import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="px-6 py-16 bg-neutral dark:bg-dark text-dark dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-8">ติดต่อเรา</h2>
      <form className="max-w-2xl mx-auto grid gap-6">
        <div className="grid gap-2">
          <label htmlFor="name">ชื่อ</label>
          <input
            type="text"
            id="name"
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email">อีเมล</label>
          <input
            type="email"
            id="email"
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message">ข้อความ</label>
          <textarea
            id="message"
            rows={4}
            className="p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-secondary text-white py-3 px-6 rounded-xl transition"
        >
          ส่งข้อความ
        </button>
      </form>
    </section>
  );
};

export default Contact;
