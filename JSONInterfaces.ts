export interface Root {
  time: string[]
  analogChannels: AnalogChannel[]
  statusChannels: StatusChannel[]
}

export interface AnalogChannel {
  name: string
  values: number[]
  id: number
  multiplier: number
  offset: number
}

export interface StatusChannel {
  values: number[]
  id: number
  name: string
}
