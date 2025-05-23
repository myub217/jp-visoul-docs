type ContactProps = {
    data: {
        title: string;
        description: string;
        line: string;
        email: string;
        phone: string;
        formAction: string;
    };
};

export default function Contact({ data }: ContactProps) {
    return (
        <section className="p-8">
            <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
            <p className="mb-4">{data.description}</p>
            <form action={data.formAction} method="POST" className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="ชื่อของคุณ"
                    className="w-full p-2 border"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="อีเมล"
                    className="w-full p-2 border"
                />
                <textarea
                    name="message"
                    placeholder="ข้อความ"
                    className="w-full p-2 border"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    ส่งข้อความ
                </button>
            </form>
            <div className="mt-4 text-sm">
                <p>Line: {data.line}</p>
                <p>Email: {data.email}</p>
                <p>Phone: {data.phone}</p>
            </div>
        </section>
    );
}
