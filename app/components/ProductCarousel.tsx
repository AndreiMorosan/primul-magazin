/* eslint-disable prettier/prettier */
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../node_modules/pure-react-carousel/dist/react-carousel.es.css';
import {ProductCard, ProductSwimlane, Section} from '~/components';

export function ProductCarousel({products}: any) {
  const slidesToShow = Math.min(4, products.length);

  return (
    <div>
      <div className="lg:block hidden container mx-auto">
        <Section heading={'Produse'} padding="y" count={4}>
          <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
            {/* Carousel for desktop and large size devices */}
            <CarouselProvider
              className="lg:block hidden"
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              isIntrinsicHeight={true}
              totalSlides={products.length}
              visibleSlides={slidesToShow}
              step={1}
              infinite={true}
            >
              <div className="w-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                  id="prev"
                >
                  <svg
                    className="w-16 h-16 stroke-current text-primary-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                    >
                      {products.map((product: any, index: number) => (
                        <Slide key={product.id} index={index}>
                          <ProductCard product={product} />
                        </Slide>
                      ))}
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  id="next"
                >
                  <svg
                    className="w-16 h-16 stroke-current text-primary-700"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </Section>
      </div>
      <Section
        className="lg:hidden block"
        heading={'Produse'}
        padding="y"
        count={4}
      >
        <div className="swimlane scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 md:hidescroll md:pb-8 md:scroll-px-8 lg:scroll-px-12 md:px-8 lg:px-12">
          {products.map((product: any) => (
            <ProductCard
              product={product}
              key={product.id}
              className="snap w-80"
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
