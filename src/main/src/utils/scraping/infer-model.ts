import { ItemResponseLike, ScrapedModel } from '@common/entities/ollama'
import { detectModalitiesFromBadges } from './dete-modalities-from-badges'
import { humanSizeToBytes } from './human-size-to-bytes'
import { inferFamiliesFromText } from './infer-families-from-text'
import { inferParamSizeFromSlugOrText } from './infer-param-side-from-slug-or-text'

export const inferModel = (
  slug: string,
  data: ScrapedModel,
  win: Electron.CrossProcessExports.BrowserWindow
): ItemResponseLike => {
  const { family, families } = inferFamiliesFromText(`${slug} ${data.title ?? ''} ${data.pageText}`)
  const parameter_size = inferParamSizeFromSlugOrText(
    slug,
    `${data.badges.join(' ')} ${data.pageText}`
  )
  const modalities = detectModalitiesFromBadges(data.badges)

  const remoteTags = data.tagRows.map((r) => ({
    tag: r.tag,
    sizeLabel: r.sizeLabel,
    size: r.sizeLabel ? humanSizeToBytes(r.sizeLabel) : undefined
  }))

  const model = {
    name: slug,
    model: slug,
    details: {
      family,
      families,
      parameter_size,
      modalities
    },
    remote: {
      url: win.webContents.getURL(),
      title: data.title,
      summary: data.summary,
      pullsText: data.pullsText,
      tagsText: data.tagsText,
      tags: remoteTags
    }
  }

  return model
}
