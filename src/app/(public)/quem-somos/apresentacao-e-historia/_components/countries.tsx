import { AngolaIcon } from '@components/icons/countries/angola'
import { ArgentinaIcon } from '@components/icons/countries/argentina'
import { BoliviaIcon } from '@components/icons/countries/bolivia'
import { CaboVerdeIcon } from '@components/icons/countries/cabo-verde'
import { ColombiaIcon } from '@components/icons/countries/colombia'
import { ItaliaIcon } from '@components/icons/countries/italia'
import { MexicoIcon } from '@components/icons/countries/mexico'
import { MocambiqueIcon } from '@components/icons/countries/moçambique'
import { PortugalIcon } from '@components/icons/countries/portugal'
import { VenezuelaIcon } from '@components/icons/countries/venezuela'

const countryIcons = [
  { name: 'Argentina', icon: ArgentinaIcon },
  { name: 'Bolívia', icon: BoliviaIcon },
  { name: 'Colômbia', icon: ColombiaIcon },
  { name: 'Venezuela', icon: VenezuelaIcon },
  { name: 'Moçambique', icon: MocambiqueIcon },
  { name: 'Angola', icon: AngolaIcon },
  { name: 'Cabo Verde', icon: CaboVerdeIcon },
  { name: 'Portugal', icon: PortugalIcon },
  { name: 'Itália', icon: ItaliaIcon },
  { name: 'México', icon: MexicoIcon },
]

export function Countries() {
  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-8 text-sm md:grid-cols-4 lg:grid-cols-5">
      {countryIcons.map(({ name, icon: Icon }) => (
        <div className="flex flex-col items-center gap-1" key={name}>
          <Icon />
          <span>{name}</span>
        </div>
      ))}
    </div>
  )
}
