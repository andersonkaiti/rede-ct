export interface IContribution {
  id: string
  title: string
  description: string | null
  status: 'PAID' | 'PENDING'
  dueDate: string | null
  documentUrl: string
  createdAt: string
  updatedAt: string
  userId: string
}
