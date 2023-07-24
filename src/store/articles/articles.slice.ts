import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IArticle, IArticles } from '@/types/articles.d.ts';
import { Routs } from '@/types/routes.d.ts';
import { baseUrl } from '@/utils/base-url.ts';

export const articlesApi = createApi({
  reducerPath: Routs.ARTICLES,
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Article'],
  endpoints: (builder) => ({
    getArticles: builder.query<IArticles, void>({
      query: () => `${Routs.ARTICLES}`,
      providesTags: ['Article'],
    }),

    getArticle: builder.query<{ article: IArticle }, string>({
      query: (payload) => `${Routs.ARTICLES}/${payload}`,
      providesTags: ['Article'],
    }),

    editArticle: builder.mutation({
      query: (body) => ({
        url: `${Routs.ARTICLES}/${body.slug}`,
        method: 'PUT',
        body: body.article,
        headers: {
          authorization:
            'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzhjNzQ4NjBjNjc1MWIwMGI3N2Y4OSIsInVzZXJuYW1lIjoiaW9pb2lvaW9pb3AiLCJleHAiOjE2OTQ5MDQzNjcsImlhdCI6MTY4OTcyMDM2N30.eOGY75cMSQFVKCISAjIA688WwFd_J-ScINnaeLK9FUE',
        },
      }),
      invalidatesTags: ['Article'],
    }),
  }),
});

export const { useGetArticlesQuery, useGetArticleQuery, useEditArticleMutation } = articlesApi;
