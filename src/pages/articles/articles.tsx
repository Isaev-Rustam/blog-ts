import { useCallback, useState } from 'react';

// import { useGetArticlesQuery } from '@/store/articles/articles.slice.ts';
// import { ArticleCard } from '@/components/articles-card';
import { ModalLoadContainer } from '@/containers/modal';

const Articles = () => {
  // const { isLoading, data, error } = useGetArticlesQuery();
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isLoading, data, error);
  console.log('Articles');
  const handlerCloseModal = useCallback(() => setIsOpen(false), []);
  return (
    <section className="flex flex-col gap-5 mx-auto max-w-4xl">
      <button type="button" onClick={() => setIsOpen(true)}>
        btn
      </button>
      <ModalLoadContainer opened={isOpen} onClose={handlerCloseModal} />

      {/* {!isLoading && */}
      {/*   data?.articles.map((article) => ( */}
      {/*     <ArticleCard */}
      {/*       key={article.slug} */}
      {/*       slug={article.slug} */}
      {/*       body={article.body} */}
      {/*       title={article.title} */}
      {/*       favoritesCount={article.favoritesCount} */}
      {/*     /> */}
      {/*   ))} */}
    </section>
  );
};

export default Articles;
