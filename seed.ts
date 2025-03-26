import rawData from './foundationDownload.json' with { type: 'json' }
import { FoundationFoodItem } from './src/gen/types/FoundationFoodItem'
import { resolve } from 'path'
import sqlite3 from 'sqlite3'

interface FileFormat {
  FoundationFoods: FoundationFoodItem[]
}

const db = new sqlite3.Database(resolve(import.meta.dirname, 'public', 'db.sql'))
db.serialize(() => {
  const data = rawData as FileFormat

  data.FoundationFoods.forEach((item) => {
    let proteins = 0
    let calories = 0
    let fats = 0
    let carbs = 0
    const name = item.description
    item.foodNutrients?.forEach((nutrient) => {
      if (nutrient.nutrient?.name === 'Protein') {
        proteins = nutrient.amount || 0
      }

      if (
        nutrient.nutrient?.name === 'Energy' ||
        nutrient.nutrient?.name === 'Energy (Atwater General Factors)' ||
        nutrient.nutrient?.name === 'Energy (Atwater Specific Factors)'
      ) {
        if (nutrient.nutrient.unitName === 'kJ') {
          calories = nutrient.amount ? nutrient.amount / 4.184 : 0
        } else {
          calories = nutrient.amount || 0
        }
      }

      if (nutrient.nutrient?.name === 'Total lipid (fat)') {
        fats = nutrient.amount || 0
      }

      if (
        nutrient.nutrient?.name === 'Carbohydrate, by difference' ||
        nutrient.nutrient?.name === 'Carbohydrate, by summation'
      ) {
        carbs = nutrient.amount || 0
      }
    })

    try {
      db.run(
        `INSERT INTO FOODS (name, carbs, fats, protein, calories) VALUES ('${name}', ${carbs.toFixed(2)}, ${fats.toFixed(2)}, ${proteins.toFixed(2)}, ${Math.round(calories)})`,
        () => {},
      )
    } catch (e) {
      console.error('err')
      console.log(
        name,
        proteins.toFixed(2),
        Math.round(calories),
        fats.toFixed(2),
        carbs.toFixed(2),
      )
    }
  })
})

db.close()
