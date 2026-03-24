import { describe, it, expect } from 'vitest'
import { DrinkAPIResponse } from '../utils/recipes-schema'

describe('Drink Validation', () => {
  it('should validate a correct drink object', () => {
    // Usamos los campos reales que espera TheCocktailDB (idDrink, strDrink, etc.)
    const validDrink = { 
        idDrink: '11007', 
        strDrink: 'Margarita', 
        strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg' 
    }
    const result = DrinkAPIResponse.safeParse(validDrink)
    expect(result.success).toBe(true)
  })

  it('should fail if strDrink is missing', () => {
    const invalidDrink = { idDrink: '11007' } 
    const result = DrinkAPIResponse.safeParse(invalidDrink)
    expect(result.success).toBe(false)
  })
})