import { Badge } from '@renderer/components/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@renderer/components/card'
import { H3 } from '@renderer/components/typography'
import { Link } from 'react-router'
import { ModelCardProps } from '../typings'

export const ModelCard = ({
  name,
  description,
  capabilities,
  badges,
  sizes
}: ModelCardProps): React.JSX.Element => {
  return (
    <Card asChild>
      <Link to={`/model/${name}`} className="hover:border-accent-foreground">
        <CardHeader>
          <CardTitle>
            <H3>{name}</H3>
          </CardTitle>
          <div className="inline">
            {capabilities?.map((capability) => (
              <Badge variant="outline" key={capability} className="mr-2 last:mr-0 mt-2">
                {capability}
              </Badge>
            ))}
            {badges?.map((badge) => (
              <Badge variant="secondary" key={badge} className="mr-2 last:mr-0 mt-2">
                {badge}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardContent className="flex-1 flex justify-end items-end text-right">
          <div>
            {sizes?.map((size) => (
              <Badge key={size} className="ml-2 first:ml-0 mt-2">
                {size}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
