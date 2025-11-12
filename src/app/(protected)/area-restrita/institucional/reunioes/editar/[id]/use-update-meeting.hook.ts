import { zodResolver } from '@hookform/resolvers/zod'
import { getMeetingById } from '@http/institutional/meetings/get-meeting-by-id'
import { updateMeeting } from '@http/institutional/meetings/update-meeting'
import { useSuspenseQuery } from '@tanstack/react-query'
import { HTTPError } from 'ky'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

export const updateMeetingSchema = z.object({
	title: z.string().min(1, 'Título é obrigatório'),
	scheduledAt: z.date('Data é obrigatória.'),
	format: z.enum(['ONLINE', 'IN_PERSON']).optional(),
	agenda: z.string().optional(),
	meetingLink: z.string().nullable().optional(),
	location: z.string().min(1, 'Local é obrigatório'),
	status: z.enum(['PENDING', 'CANCELLED', 'FINISHED']).optional(),
	file: z.any().optional(),
})

export type UpdateMeetingInput = z.infer<typeof updateMeetingSchema>

export function useUpdateMeeting() {
	const [serverError, setServerError] = useState<string | null>(null)

	const { id } = useParams<{ id: string }>()
	const router = useRouter()

	const { data: meeting, ...rest } = useSuspenseQuery({
		queryKey: ['meeting', id],
		queryFn: () => getMeetingById(id),
	})

	const form = useForm<UpdateMeetingInput>({
		resolver: zodResolver(updateMeetingSchema),
		values: {
			title: meeting?.title ?? '',
			scheduledAt: meeting ? new Date(meeting.scheduledAt) : new Date(),
			location: meeting?.location ?? '',
			format: meeting?.format,
			agenda: meeting?.agenda ?? '',
			meetingLink: meeting?.meetingLink ?? '',
			status: meeting?.status,
			file: undefined,
		},
	})

	const { isSubmitting } = useFormState({
		control: form.control,
	})

	const submit = form.handleSubmit(async (values) => {
		try {
			await updateMeeting({
				...values,
				id,
			})

			toast.success('Reunião atualizada com sucesso.')

			router.replace('/area-restrita/institucional/reunioes')
		} catch (err) {
			if (err instanceof HTTPError) {
				const errorBody = await err.response.json()
				setServerError(errorBody?.message)
			}
		}
	})

	return {
		form,
		serverError,
		submit,
		isSubmitting,
		...rest,
	}
}
