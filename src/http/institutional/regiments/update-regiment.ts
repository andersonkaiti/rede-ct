import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface IUpdateRegimentRequest {
	id: string
	title?: string
	version?: string
	publishedAt?: Date
	document?: File | null
	status?: 'DRAFT' | 'IN_FORCE' | 'REVOKED'
}

export async function updateRegiment({ id, ...data }: IUpdateRegimentRequest) {
	const formData = parseFormData(data)

	await api.put(`regiment/${id}`, {
		body: formData,
	})
}
