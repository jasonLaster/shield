export default function Gallery({ product }) {
  if (!product) return null;
    return (
    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img
            src={product.images[1].src}
            alt={product.images[1].alt}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img
            src={product.images[2].src}
            alt={product.images[2].alt}
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
      <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
        <img
          src={product.images[3].src}
          alt={product.images[3].alt}
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
}
