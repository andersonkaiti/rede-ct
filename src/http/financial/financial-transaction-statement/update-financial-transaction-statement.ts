import { api } from '@http/api-client'

interface IUpdateFinancialTransactionStatementRequest {
  id: string
  document?: File
}

export async function updateFinancialTransactionStatement({
  id,
  document,
}: IUpdateFinancialTransactionStatementRequest) {
  const formData = new FormData()

  if (document) {
    formData.append('document', document)
  }

  await api.put(`financial-transaction-statement/${id}`, {
    body: formData,
  })
}
