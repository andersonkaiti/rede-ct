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
import { CreateButton } from '../../_components/create-button'
import { FilterInput } from '../../_components/filter-input'

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
					<PageActionsContainer>
						<FilterInput />
					</PageActionsContainer>
					<CreateButton href="/area-restrita/institucional/reunioes/cadastrar">
						Cadastrar Reunião
					</CreateButton>
				</PageHeader>

				<PageMain>Reuniões</PageMain>
			</PageContainer>
		</AdminWrapper>
	)
}
