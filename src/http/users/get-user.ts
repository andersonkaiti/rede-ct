import { api } from '@http/api-client'
import z from 'zod'

export const getUserSchema = z.object({
	name: z.string(),
	id: z.string(),
	avatarUrl: z.string().nullable(),
	createdAt: z.string(),
	updatedAt: z.string(),
	emailAddress: z.string(),
	orcid: z.string().nullable(),
	phone: z.string().nullable(),
	lattesUrl: z.string().nullable(),
	role: z.enum(['ADMIN', 'USER']),
})

export async function getUser(id: string) {
	const data = await api.get(`user/${id}`).json()

	return getUserSchema.parse(data)
}
