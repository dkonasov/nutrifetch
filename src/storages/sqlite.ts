import { FoodEntry } from '../types/food-entry'
import { Storage } from './storage'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

export class SqliteStorage extends Storage<FoodEntry, unknown> {
  private dataSource: DataSource
  constructor(config: unknown) {
    super(config)

    this.dataSource = new DataSource({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [FoodEntry],
      synchronize: true,
    })
  }

  list(): Promise<FoodEntry[]> {
    throw new Error('Method not implemented.')
  }

  async add(item: FoodEntry): Promise<void> {
    await this.dataSource.getRepository(FoodEntry).save(item)
  }
}
