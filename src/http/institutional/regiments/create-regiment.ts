import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface ICreateRegimentRequest {
	title: string
	version: string
	publishedAt: Date
	document: File
	status?: 'DRAFT' | 'IN_FORCE' | 'REVOKED'
}

export async function createRegiment(data: ICreateRegimentRequest) {
	const formData = parseFormData(data)

	await api.post('regiment', {
		body: formData,
	})
}
