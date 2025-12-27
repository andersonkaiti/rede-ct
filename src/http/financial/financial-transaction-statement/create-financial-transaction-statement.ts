import { api } from '@http/api-client'

interface ICreateFinancialTransactionStatementRequest {
  document: File
}

export async function createFinancialTransactionStatement({
  document,
}: ICreateFinancialTransactionStatementRequest) {
  const formData = new FormData()
  formData.append('document', document)

  await api.post('financial-transaction-statement', {
    body: formData,
  })
}
