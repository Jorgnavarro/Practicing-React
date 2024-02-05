import noteReducer  from './noteReducer'
import deepFreeze from 'deep-freeze'
import { describe, test, expect} from 'vitest'
describe('noteReducer', () => {

    test('returns new state with action NEW_NOTE', () => {
       const state = []
    //------------Código con el react-redux y redux
      //  const action = {
      //    type: 'NEW_NOTE',
      //    data: {
      //       content: 'the app state is in redux store',
      //       important: true,
      //       id: 1
      //    }
      //  }

      //--------------------------

      //-----------Código con ReduxToolkit

      const action = {
        type: 'notes/createNote',
        payload: 'the app state is in redux store'
      }
       
       deepFreeze(state)
       const newState = noteReducer(state, action)
       
       expect(newState).toHaveLength(1)
       expect(newState.map(note => note.content)).toContainEqual(action.payload)
    })

    test('return new state with action TOGGLE_IMPORTANCE', () => {
        
        const state = [
            {
              content: 'the app state is in redux store',
              important: true,
              id: 1
            },
            {
              content: 'state changes are made with actions',
              important: false,
              id: 2
            }]

          //------------ Código con react-redux, redux  
        
          // const action = {
          //   type: 'TOGGLE_IMPORTANCE',
          //   data: {
          //     id: 2
          //   }
          // }

          //-----------Código con reduxToolkit

          const action = {
            type: 'notes/toggleImportanceOf',
            payload: 2
          }

          deepFreeze(state)
          const newState = noteReducer(state, action)

          expect(newState).toHaveLength(2)

          expect(newState).toContainEqual(state[0])

          expect(newState).toContainEqual({
            content: 'state changes are made with actions',
            important: true,
            id: 2
          })
    })
    
});
