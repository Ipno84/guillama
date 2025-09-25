export interface CheckOllama {
  installed: boolean
  version?: string
  error?: string
}

export type ItemResponseLikeDetails = {
  parent_model?: string
  format?: string
  parameter_size?: string
  quantization_level?: string
  modalities?: string[]
}

export type ItemResponseLikeRemoteTag = {
  tag: string
  size?: number
  sizeLabel?: string
}

export type ItemResponseLikeRemote = {
  url: string
  title?: string
  summary?: string
  pullsText?: string
  tagsText?: string
  tags: ItemResponseLikeRemoteTag[]
}

export type ItemResponseLike = {
  name: string
  model: string
  modified_at?: string
  size?: number
  digest?: string
  details?: ItemResponseLikeDetails
  remote?: ItemResponseLikeRemote
}

export type TagRow = {
  tag: string
  sizeLabel?: string
}

export type ScrapedModel = {
  title?: string
  summary?: string
  badges: string[]
  pullsText?: string
  tagsText?: string
  tagRows: TagRow[]
  pageText: string
  url: string
}

export type ModelBasicInfo = {
  url?: string
  tagsUrl?: string
  name?: string
  description?: string
  capabilities?: string[]
  sizes?: string[]
  badges?: string[]
  pullCount?: string
  tagsCount?: string
  lastUpdate?: Date
}
