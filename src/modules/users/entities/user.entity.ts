import { randomUUID } from 'crypto'

export class User {
  id: string
  key: string
  first_name: string
  last_name: string
  email: string
  phone: string
  login: string
  password: string
  avatar_url: string
  description: string
  is_active: boolean
  created_at: Date
  updated_at: Date

  constructor() {
    this.id = randomUUID()
    this.key = randomUUID()
  }
}
