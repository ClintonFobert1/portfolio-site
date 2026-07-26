import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Sunburst from './Sunburst'

/**
 * A product rendered as an engraving plate — framed emblem, plate numeral,
 * halftone shading. Ink flood on hover.
 */
export default function PlateCard({ product, dark = false }) {
  const frame = dark ? 'border-paper/25' : 'border-void/25'

  return (
    <Link
      to={`/products/${product.slug}`}
      className={`group relative block overflow-hidden border ${frame} transition-colors duration-500 hover:border-ink`}
    >
      {/* ink flood */}
      <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />

      <div className="relative transition-colors duration-500 group-hover:text-paper">
        {/* emblem area */}
        <div className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b ${frame} transition-colors duration-500 group-hover:border-paper/30`}>
          <div className="tx-dots-lg mask-fade-radial absolute inset-0 opacity-20" />
          <div className="absolute h-[130%] w-[130%] text-current opacity-30 transition-transform duration-700 group-hover:rotate-45">
            <Sunburst rays={48} className="h-full w-full" />
          </div>
          <span className="display-caps relative text-7xl font-black text-ink transition-colors duration-500 group-hover:text-paper">
            {product.plate}
          </span>
          <span className="mono-label absolute left-4 top-4 opacity-60">Plate {product.plate}</span>
          <span className="mono-label absolute right-4 top-4 opacity-60">{product.year}</span>
        </div>

        {/* caption */}
        <div className="p-5 md:p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="mono-label text-ink-bright transition-colors duration-500 group-hover:text-paper/80">
              {product.category}
            </p>
            <ArrowUpRight className="h-4 w-4 opacity-40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </div>
          <h3 className="display-caps mt-3 text-2xl font-bold">{product.title}</h3>
          <p className="mt-3 text-sm leading-relaxed opacity-70">{product.summary}</p>
        </div>
      </div>
    </Link>
  )
}
