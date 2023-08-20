export type todo = {
    id: number
    text: string
    done: boolean
}

export type stateOptionType =
      'Props'
    | 'Dispatch'
    | 'Store'
    | 'Context'
    | 'Module Context'