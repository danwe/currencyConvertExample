import { Friend } from "./Friend"

export interface Root {
  id: number
  name: string
  city: string
  age: number
  friends: Friend[]
}
