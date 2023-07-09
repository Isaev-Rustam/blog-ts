import { memo } from 'react';

import img from '@/assets/profile/загруженное.jpg';
import { Heart } from '@/components/icons';

const ArticleCard = memo(() => {
  // eslint-disable-next-line no-console
  console.log('ArticleCard');

  return (
    <article className="py-4 pl-4 pr-40 bg-white relative rounded shadow-md">
      <div>
        <div className="flex items-center gap-3">
          <p className="text-sky-500 text-xl">Some article title</p>
          <div className="flex items-center gap-1">
            <button type="button" className="w-4">
              <Heart w={4} h={4} />
            </button>
            <span className="text-xs">12</span>
          </div>
        </div>

        <div className="mb-2">
          <button type="button">Tag1</button>
          <button type="button">Tag1</button>
        </div>
      </div>

      <p className="line-clamp-3 text-xs max-w-[345px] sm:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="absolute top-4 right-4 flex gap-2">
        <div className="flex flex-col">
          <span className="text-base">John Doe</span>
          <span className="text-gray-50">March 5, 2020</span>
        </div>
        <div className="overflow-hidden h-12 w-12 rounded-full">
          <img src={img} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </article>
  );
});

const Articles = () => (
  <section className="flex flex-col gap-5 mx-auto max-w-4xl">
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
  </section>
);

export default Articles;
