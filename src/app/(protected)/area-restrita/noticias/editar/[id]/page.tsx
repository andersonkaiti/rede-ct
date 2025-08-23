import { getNewsById } from '@http/news/get-news-by-id'

import { UpdateForm } from './_components/update-form'

export default async function EditarNoticia({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const news = await getNewsById(id)

  return <UpdateForm news={news} />
}
