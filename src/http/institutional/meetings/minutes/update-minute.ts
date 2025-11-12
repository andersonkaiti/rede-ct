import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface IUpdateMeetingMinuteRequest {
	meetingId: string
	title?: string
	publishedAt?: Date
	document?: File
}

export async function updateMeetingMinute({
	meetingId,
	...data
}: IUpdateMeetingMinuteRequest) {
	const formData = parseFormData(data)

	await api.put(`meeting/${meetingId}/minute`, {
		body: formData,
	})
}
