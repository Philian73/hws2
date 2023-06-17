type ActionsType = ReturnType<typeof changeThemeId>

type InitialStateType = typeof initState

const initState = {
   themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case 'SET_THEME_ID':
         return { ...state, themeId: action.id }

      default:
         return state
   }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const)
