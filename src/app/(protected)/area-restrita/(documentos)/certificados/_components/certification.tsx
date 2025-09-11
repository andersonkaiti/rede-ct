import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { useAuth } from '@hooks/use-auth.hook'
import { Award } from 'lucide-react'
import type { ICertification } from 'types/certification'
import { CertificationActions } from './certification-actions'
import { CertificationButton } from './certification-button'

export function Certification({
  id,
  certificationUrl,
  description,
  title,
  user,
}: ICertification) {
  const { isAdmin } = useAuth()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between gap-3 font-semibold">
          <span className="flex gap-4">
            <Award size={20} />

            <div className="flex flex-col">
              <span>{title}</span>
              {user && (
                <span className="line-clamp-1 text-muted-foreground text-sm">
                  {user.emailAddress}
                </span>
              )}
            </div>
          </span>

          {isAdmin() && <CertificationActions id={id} />}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex h-full flex-col gap-4">
        <CardDescription className="line-clamp-2 text-justify">
          {description}
        </CardDescription>
      </CardContent>

      <CardFooter>
        <CertificationButton url={certificationUrl} />
      </CardFooter>
    </Card>
  )
}
