type HeroProps = {
  data: {
    title: string;
    subtitle: string;
    description: string;
  };
};

export default function Hero({ data }: HeroProps) {
  return (
    <section className="text-center p-8">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <h2 className="text-2xl text-gray-500 mt-2">{data.subtitle}</h2>
      <p className="mt-4">{data.description}</p>
    </section>
  );
}