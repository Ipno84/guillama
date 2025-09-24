export interface CheckOllama {
  installed: boolean
  version?: string
  error?: string
}

export type ItemResponseLikeDetails = {
  parent_model?: string
  format?: string
  family?: string
  families?: string[]
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
}
