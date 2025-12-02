import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface IUpdateScientificJournalRequest {
  id: string
  name?: string
  issn?: string
  description?: string
  journalUrl?: string
  directors?: string
  editorialBoard?: string
  logo?: File
}

export async function updateScientificJournal({
  id,
  ...data
}: IUpdateScientificJournalRequest) {
  const formData = parseFormData(data)

  await api.put(`scientific-journals/${id}`, {
    body: formData,
  })
}
