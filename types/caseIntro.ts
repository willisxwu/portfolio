export interface ICaseInfo {
  handle: string
  image: string
  title: string
  description: string
  effect: string
}

export interface ICaseList {
  title: string
  list: string[]
}

export interface ICaseCriteria {
  image: string
  title: string
  description: string
}

export interface ICaseChallenge {
  title: string
  description: string
}
export interface ICaseOutcome {
  title: string
  image: string
}