import {
	PageContainer,
	PageDescription,
	PageHeader,
	PageHeaderContent,
	PageMain,
	PageTitle,
} from '@components/ui/page-container'

import { AdminWrapper } from '../../../_components/hoc/admin'
import { CreateMeetingButton } from './_components/create-meeting-button'

export default function Meetings() {
	return (
		<AdminWrapper>
			<PageContainer>
				<PageHeader>
					<PageHeaderContent>
						<PageTitle>Reuniões</PageTitle>
						<PageDescription>Gerencie as reuniões</PageDescription>
					</PageHeaderContent>
				</PageHeader>

				<PageHeader>
					<CreateMeetingButton />
				</PageHeader>

				<PageMain>Reuniões</PageMain>
			</PageContainer>
		</AdminWrapper>
	)
}
