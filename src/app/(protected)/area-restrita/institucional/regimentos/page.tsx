import {
	PageActionsContainer,
	PageContainer,
	PageDescription,
	PageHeader,
	PageHeaderContent,
	PageMain,
	PageTitle,
} from '@components/ui/page-container'

import { AdminWrapper } from '../../../_components/hoc/admin'
import { FilterInput } from '../../_components/filter-input'
import { CreateRegimentButton } from './_components/create-regiment-button'

export default function Regiments() {
	return (
		<AdminWrapper>
			<PageContainer>
				<PageHeader>
					<PageHeaderContent>
						<PageTitle>Regimentos</PageTitle>
						<PageDescription>Gerencie os regimentos</PageDescription>
					</PageHeaderContent>
				</PageHeader>

				<PageHeader>
					<PageActionsContainer>
						<FilterInput />
					</PageActionsContainer>

					<CreateRegimentButton />
				</PageHeader>

				<PageMain>Regimentos</PageMain>
			</PageContainer>
		</AdminWrapper>
	)
}
