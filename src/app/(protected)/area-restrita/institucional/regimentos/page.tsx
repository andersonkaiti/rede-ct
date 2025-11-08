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
					<CreateButton href="/area-restrita/institucional/regimentos/cadastrar">
						Cadastrar Regimento
					</CreateButton>
				</PageHeader>

				<PageMain>Regimentos</PageMain>
			</PageContainer>
		</AdminWrapper>
	)
}
