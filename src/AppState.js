import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  transformers: [],
  transformer: {
    specs: {
      strength: 0,
      intelligence: 0,
      speed: 0,
      endurance: 0,
      rank: 0,
      courage: 0,
      firepower: 0,
      skill: 0
    }
  }
})