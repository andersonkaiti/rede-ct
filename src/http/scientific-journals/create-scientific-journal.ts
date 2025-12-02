import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

interface ICreateScientificJournalRequest {
  name: string
  issn: string
  description: string
  journalUrl: string
  directors?: string
  editorialBoard?: string
  logo: File
}

export async function createScientificJournal(
  data: ICreateScientificJournalRequest,
) {
  const formData = parseFormData(data)

  await api.post('scientific-journals', {
    body: formData,
  })
}
