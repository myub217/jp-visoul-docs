type FooterProps = {
    data: {
        text: string;
        social: {
            facebook: string;
            line: string;
            email: string;
        };
    };
};

export default function Footer({ data }: FooterProps) {
    return (
        <footer className="bg-gray-900 text-white text-center p-4 mt-12">
            <p>{data.text}</p>
            <div className="flex justify-center gap-4 mt-2">
                <a href={data.social.facebook} target="_blank" rel="noreferrer">
                    Facebook
                </a>
                <a href={data.social.line} target="_blank" rel="noreferrer">
                    LINE
                </a>
                <a href={data.social.email}>Email</a>
            </div>
        </footer>
    );
}
