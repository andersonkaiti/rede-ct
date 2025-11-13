import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@components/ui/dialog'
import { Info } from 'lucide-react'

interface IDeleteMinuteButtonProps {
	handleRemove: () => void
}

export function DeleteMinuteButton({ handleRemove }: IDeleteMinuteButtonProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					className="w-full cursor-pointer"
					variant="outline"
					type="button"
				>
					Remover ata
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<div className="flex items-center gap-2">
						<Badge className="rounded-full bg-primary/10 p-1.5 text-primary">
							<Info className="!size-5" />
						</Badge>
						<DialogTitle>Tem certeza de que deseja excluir?</DialogTitle>
					</div>
					<DialogDescription>
						Esta ação não pode ser desfeita.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="ghost">Cancelar</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button onClick={() => handleRemove()} variant="outline">
							Excluir
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
