import { buildSortingExpression } from '@/functions/build-sorting-expression'
import type { FoodEntry } from '../types/food-entry'
import { Storage, type StorageListParams } from './storage'
import initSql from 'sql.js'

export class SqlJsStorage extends Storage<unknown> {
  private initPromise: Promise<initSql.Database>
  constructor(config: unknown) {
    super(config)
    const initSqlPromise = initSql({
      locateFile: (file) => `https://sql.js.org/dist/${file}`,
    })
    const loadFilePromise = fetch(`${import.meta.env.BASE_URL}db.sql`).then((res) => res.bytes())

    this.initPromise = Promise.all([initSqlPromise, loadFilePromise]).then(([sqlite, dbFile]) => {
      return new sqlite.Database(dbFile)
    })
  }

  async list(params: StorageListParams): Promise<FoodEntry[]> {
    const db = await this.initPromise
    const statement = db.prepare(
      `SELECT * FROM foods ${params.ids ? `WHERE id in (${params.ids.join(',')}) ` : ''}${buildSortingExpression(params.sort)} limit :limit`,
    )
    statement.bind({ ':limit': params.limit })

    const result = []
    while (statement.step()) {
      result.push(statement.getAsObject() as unknown as FoodEntry)
    }
    return result
  }
}
