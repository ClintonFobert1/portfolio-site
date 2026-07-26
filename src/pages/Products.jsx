import { products } from '../data/products'
import PageHeader from '../components/PageHeader'
import PlateCard from '../components/PlateCard'
import { Reveal } from '../components/Reveal'

export default function Products() {
  return (
    <main className="bg-paper text-void">
      <PageHeader
        kicker={`Catalogue of Works — ${products.length} Plates`}
        title={['The Product', 'Catalogue']}
        intro="Every tool here exists because a real person had a real bottleneck. Built with AI where machines are strong, by hand where they are not."
        invert
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.1}>
              <PlateCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
