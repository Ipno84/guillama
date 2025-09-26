import { Badge } from '@renderer/components/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@renderer/components/card'
import { H3 } from '@renderer/components/typography'
import { Link } from 'react-router'
import TimeAgo from 'timeago-react'
import { ModelCardProps } from '../typings'
import { Clock3, CloudDownload, Tags } from 'lucide-react'
import { Actions } from './actions'

export const ModelCard = ({
  name,
  description,
  capabilities,
  badges,
  sizes,
  pullCount,
  tagsCount,
  lastUpdate,
  actionGroups
}: ModelCardProps): React.JSX.Element => {
  return (
    <Card asChild>
      <Link to={`/model/${name}`} className="hover:border-accent-foreground">
        <CardHeader>
          <CardTitle className="flex justify-between">
            <H3>{name}</H3>
            <Actions actionGroups={actionGroups} />
          </CardTitle>
          <div className="inline">
            {capabilities?.map((capability) => (
              <Badge variant="secondary" key={capability} className="mr-2 last:mr-0 mt-2">
                {capability}
              </Badge>
            ))}
            {badges?.map((badge) => (
              <Badge variant="outline" key={badge} className="mr-2 last:mr-0 mt-2">
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
        <CardFooter>
          {pullCount && (
            <div className="flex justify-start gap-2 pr-9">
              <CloudDownload size={20} />
              {pullCount}
            </div>
          )}
          {tagsCount && (
            <div className="flex justify-center gap-2 pr-9">
              <Tags size={20} />
              {tagsCount}
            </div>
          )}
          {lastUpdate && (
            <div className="flex justify-end gap-2">
              <Clock3 size={20} />
              <TimeAgo datetime={lastUpdate} locale="en-US" opts={{ minInterval: 60 }} />
            </div>
          )}
        </CardFooter>
      </Link>
    </Card>
  )
}
