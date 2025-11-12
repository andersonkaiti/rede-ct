import { api } from '@http/api-client'
import { parseFormData } from '@utils/parse-form-data'

export interface ICreateMeetingMinuteRequest {
	title: string
	publishedAt: Date
	meetingId: string
	document: File
}

export async function createMeetingMinute({
	meetingId,
	...data
}: ICreateMeetingMinuteRequest) {
	const formData = parseFormData(data)

	await api.post(`meeting/${meetingId}/minute`, {
		body: formData,
	})
}
