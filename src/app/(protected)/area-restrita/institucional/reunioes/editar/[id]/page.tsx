'use client'

import { Alert, AlertDescription } from '@components/ui/alert'
import { Button } from '@components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@components/ui/card'
import { DatePicker } from '@components/ui/date-picker'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from '@components/ui/input-group'
import {
	PageContainer,
	PageDescription,
	PageHeaderContent,
	PageTitle,
} from '@components/ui/page-container'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from '@components/ui/select'
import { Separator } from '@components/ui/separator'
import { Textarea } from '@components/ui/textarea'
import { AlertCircle, Link, Loader2, MapPin, Video } from 'lucide-react'
import { FORMAT_OPTIONS } from '../../_constants/format'
import { STATUS_OPTIONS } from '../../_constants/status'
import { useUpdateMeeting } from './use-update-meeting.hook'

export default function EditMeeting() {
	const { form, serverError, submit, isSubmitting } = useUpdateMeeting()

	return (
		<PageContainer>
			<PageHeaderContent>
				<PageTitle>Editar Reunião</PageTitle>
				<PageDescription>
					Altere as informações necessárias para atualizar uma reunião
					institucional existente.
				</PageDescription>
			</PageHeaderContent>

			<Form {...form}>
				<form className="space-y-8" onSubmit={submit}>
					{serverError && (
						<Alert className="border-primary" variant="destructive">
							<AlertCircle className="size-4" />
							<AlertDescription>{serverError}</AlertDescription>
						</Alert>
					)}

					<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
						<Card className="lg:col-span-2">
							<CardHeader>
								<CardTitle>Informações Básicas</CardTitle>
								<CardDescription>
									Edite os dados principais da reunião
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
									<FormField
										control={form.control}
										name="title"
										render={({ field }) => (
											<FormItem className="sm:col-span-2">
												<FormLabel>
													Título <span className="text-primary">*</span>
												</FormLabel>
												<FormControl>
													<Input
														placeholder="Digite o título da reunião"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:col-span-2">
										<FormField
											control={form.control}
											name="scheduledAt"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														Data e Horário{' '}
														<span className="text-primary">*</span>
													</FormLabel>
													<FormControl>
														<DatePicker {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<FormField
											control={form.control}
											name="format"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														Formato <span className="text-primary">*</span>
													</FormLabel>
													<FormControl>
														<Select
															value={field.value}
															onValueChange={field.onChange}
														>
															<SelectTrigger className="w-full">
																{FORMAT_OPTIONS.find(
																	(f) => f.value === field.value,
																)?.label || 'Selecione o formato'}
															</SelectTrigger>
															<SelectContent>
																{FORMAT_OPTIONS.map((format) => (
																	<SelectItem
																		key={format.value}
																		value={format.value}
																	>
																		{format.label}
																	</SelectItem>
																))}
															</SelectContent>
														</Select>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>

										<FormField
											control={form.control}
											name="status"
											render={({ field }) => (
												<FormItem>
													<FormLabel>
														Status <span className="text-primary">*</span>
													</FormLabel>
													<FormControl>
														<Select
															value={field.value}
															onValueChange={field.onChange}
														>
															<SelectTrigger className="w-full">
																{STATUS_OPTIONS.find(
																	(option) => option.value === field.value,
																)?.label || 'Selecione o status'}
															</SelectTrigger>
															<SelectContent>
																{STATUS_OPTIONS.map((option) => (
																	<SelectItem
																		key={option.value}
																		value={option.value}
																	>
																		{option.label}
																	</SelectItem>
																))}
															</SelectContent>
														</Select>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>

								<FormField
									control={form.control}
									name="agenda"
									render={({ field }) => (
										<FormItem>
											<FormLabel>
												Pauta <span className="text-primary">*</span>
											</FormLabel>
											<FormControl>
												<Textarea
													placeholder="Digite a pauta da reunião"
													{...field}
													rows={6}
													className="resize-none"
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<div className="flex items-center gap-2">
									<Video className="size-5 text-primary" />
									<CardTitle>Reunião Online</CardTitle>
								</div>
								<CardDescription>
									Informe o link caso a reunião seja online
								</CardDescription>
							</CardHeader>
							<CardContent>
								<FormField
									control={form.control}
									name="meetingLink"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Link da Reunião</FormLabel>
											<FormControl>
												<InputGroup>
													<InputGroupAddon>
														<Link className="size-4" />
													</InputGroupAddon>
													<InputGroupInput
														placeholder="https://meet.exemplo.com/reuniao"
														{...field}
														value={field.value ?? ''}
													/>
												</InputGroup>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<div className="flex items-center gap-2">
									<MapPin className="size-5 text-primary" />
									<CardTitle>Reunião Presencial</CardTitle>
								</div>
								<CardDescription>
									Informe o local caso a reunião seja presencial
								</CardDescription>
							</CardHeader>
							<CardContent>
								<FormField
									control={form.control}
									name="location"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Local da Reunião</FormLabel>
											<FormControl>
												<InputGroup>
													<InputGroupAddon>
														<MapPin className="size-4" />
													</InputGroupAddon>
													<InputGroupInput
														placeholder="Digite o local da reunião"
														{...field}
														value={field.value ?? ''}
													/>
												</InputGroup>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</CardContent>
						</Card>
					</div>

					<Separator />

					<Button
						className="w-full cursor-pointer"
						variant="outline"
						disabled={isSubmitting}
						type="submit"
					>
						{isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
						Atualizar Reunião
					</Button>
				</form>
			</Form>
		</PageContainer>
	)
}
