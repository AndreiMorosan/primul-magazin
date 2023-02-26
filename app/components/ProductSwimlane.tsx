import type {SerializeFrom} from '@shopify/remix-oxygen';
import type {Product} from '@shopify/hydrogen/storefront-api-types';
import {ProductCard, Section} from '~/components';

const mockProducts = new Array(12).fill('');

export function ProductSwimlane({
  title = 'Produse',
  products = mockProducts,
  count = 12,
  ...props
}: {
  title?: string;
  products?: SerializeFrom<Product[]>;
  count?: number;
}) {
  return (
    <Section heading={title} padding="y" {...props}>
      <div className="swimlane scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 md:hidescroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className="snap w-80"
          />
        ))}
      </div>
    </Section>
  );
}
