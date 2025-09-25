import { ItemResponseLike, ScrapedModel } from '@common/entities/ollama'
import { detectModalitiesFromBadges } from './dete-modalities-from-badges'
import { humanSizeToBytes } from './human-size-to-bytes'
import { inferParamSizeFromSlugOrText } from './infer-param-side-from-slug-or-text'

export const inferModel = (url: string, data: ScrapedModel): ItemResponseLike => {
  const parameter_size = inferParamSizeFromSlugOrText(
    url,
    `${data.badges.join(' ')} ${data.pageText}`
  )
  const modalities = detectModalitiesFromBadges(data.badges)

  const remoteTags = data.tagRows.map((r) => ({
    tag: r.tag,
    sizeLabel: r.sizeLabel,
    size: r.sizeLabel ? humanSizeToBytes(r.sizeLabel) : undefined
  }))

  const model = {
    name: url,
    model: url,
    details: {
      parameter_size,
      modalities
    },
    remote: {
      url: data.url,
      title: data.title,
      summary: data.summary,
      pullsText: data.pullsText,
      tagsText: data.tagsText,
      tags: remoteTags
    }
  }

  return model
}
