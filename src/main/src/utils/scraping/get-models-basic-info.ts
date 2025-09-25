import { ModelBasicInfo } from '@common/entities/ollama'
import { createHiddenWindow } from './create-hidden-window'
import { evalJS } from './eval-js'

export const getModelsBasicInfo = async (): Promise<ModelBasicInfo[]> => {
  const win = await createHiddenWindow()
  await win.loadURL('https://ollama.com/library/')

  const info = evalJS(win, () => {
    const modelCards = Array.from(document.querySelectorAll<HTMLLIElement>('[x-test-model]'))

    const modelInfos = modelCards.map((modelCard) => {
      const anchor = modelCard.querySelector('a')
      const href = anchor?.getAttribute('href')
      let url = ''
      if (href) url = href.startsWith('http') ? href : `${window.location.origin}${href}`

      const tagsUrl = url ? `${url}/tags` : ''

      const name = modelCard.querySelector('a div:nth-of-type(1) h2 span')?.textContent ?? ''

      const description = modelCard.querySelector('h2 + p')?.textContent ?? ''

      const capabilities = Array.from<HTMLSpanElement>(
        modelCard.querySelectorAll('[x-test-capability]')
      ).map((spanElement) => spanElement.textContent)

      const sizes = Array.from<HTMLSpanElement>(modelCard.querySelectorAll('[x-test-size]')).map(
        (spanElement) => spanElement.textContent
      )

      const badges = Array.from(
        modelCard?.querySelectorAll<HTMLSpanElement>(
          'a > div:nth-of-type(2) > div > span:not([x-test-size]):not([x-test-capability])'
        ) ?? []
      ).map((spanElement) => spanElement.textContent)

      const pullCount = modelCard?.querySelector('[x-test-pull-count]')?.textContent ?? ''

      const tagsCount = modelCard?.querySelector('[x-test-tag-count]')?.textContent ?? ''

      const lastUpdateDatestring = modelCard
        ?.querySelector('a > div:nth-of-type(2) p > span:nth-of-type(3)')
        ?.getAttribute('title')
      const lastUpdate = lastUpdateDatestring ? new Date(lastUpdateDatestring) : undefined

      return {
        url,
        tagsUrl,
        name,
        description,
        capabilities,
        sizes,
        badges,
        pullCount,
        tagsCount,
        lastUpdate
      }
    })

    return modelInfos
  })

  console.log(await info)

  win.destroy()

  return info
}
