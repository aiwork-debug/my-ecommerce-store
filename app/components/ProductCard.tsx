import Image from 'next/image';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image_url: string;
  category?: string;
}

export default function ProductCard({ product }: { product: ProductProps }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="relative w-full h-48 bg-slate-100 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
          {product.image_url ? (
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className="object-contain p-2"
            />
          ) : (
            <span className="text-5xl">📱</span>
          )}
        </div>
        {product.category && (
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
            {product.category}
          </span>
        )}
        <h3 className="font-bold text-slate-900 text-base mt-2 line-clamp-1">
          {product.name}
        </h3>
      </div>
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
        <span className="text-lg font-extrabold text-slate-900">
          ${product.price}
        </span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}