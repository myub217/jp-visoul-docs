export default function Hero({ data }: { data: { headline: string; subheadline: string; ctaText: string } }) {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold">{data.headline}</h1>
      <p className="text-lg mt-2">{data.subheadline}</p>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full">
        {data.ctaText}
      </button>
    </section>
  )
}