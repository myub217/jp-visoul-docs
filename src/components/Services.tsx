type Service = {
  id: number
  title: string
  description: string
  price: string
  tags: string[]
}

export default function Services({ data }: { data: Service[] }) {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">บริการของเรา</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {data.map(service => (
          <div key={service.id} className="p-4 border rounded-lg shadow bg-white dark:bg-zinc-800">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">{service.description}</p>
            <p className="mt-2 text-sm font-medium text-blue-600">{service.price}</p>
            <div className="flex flex-wrap mt-2 gap-1">
              {service.tags.map(tag => (
                <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}