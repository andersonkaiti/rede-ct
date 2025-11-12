import { api } from '@http/api-client'

export interface ICreateMeetingRequest {
	title: string
	scheduledAt: Date
	format: 'ONLINE' | 'IN_PERSON'
	agenda: string
	meetingLink?: string
	location?: string
	status?: 'PENDING' | 'CANCELLED' | 'FINISHED'
}

export async function createMeeting(data: ICreateMeetingRequest) {
	await api.post('meeting', {
		json: data,
	})
}
