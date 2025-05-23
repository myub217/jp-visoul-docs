type FooterProps = {
  text: string
  socials: { name: string; link: string }[]
}

export default function Footer({ data }: { data: FooterProps }) {
  return (
    <footer className="p-6 bg-zinc-100 dark:bg-zinc-800 text-center">
      <p className="text-sm mb-2">{data.text}</p>
      <div className="flex justify-center gap-4">
        {data.socials.map((s, index) => (
          <a key={index} href={s.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {s.name}
          </a>
        ))}
      </div>
    </footer>
  )
}