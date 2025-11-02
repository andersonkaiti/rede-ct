import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { useAuth } from '@hooks/use-auth.hook'
import { format } from 'date-fns'
import { CertificationActions } from './certification-actions'
import { CertificationButton } from './certification-button'

interface ICertificationProps {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  description: string
  certificationUrl: string
  userId: string
}

export function Certification(certification: ICertificationProps) {
  const { isAdmin } = useAuth()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between gap-3 font-semibold">
          <span className="text-2xl">{certification.title}</span>

          {isAdmin() && <CertificationActions id={certification.id} />}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="line-clamp-2 text-justify">
          {certification.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="mt-auto justify-between border-accent border-t">
        <span>{format(certification.createdAt, 'dd/MM/yyyy')}</span>

        <CertificationButton url={certification.certificationUrl} />
      </CardFooter>
    </Card>
  )
}
