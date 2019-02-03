import {moviesReducer} from './moviesReducer'
import * as actions from '../actions'

describe('moviesReducer', () => {

  it('should return initial state', () => {
    //setup 
    const expected = []
    //execution
    const result = moviesReducer(undefined, {})
    //expectation
    expect(result).toEqual(expected)
  })

  it('should get the movies', () => {
    //setup
    const initialState = []
    const expected = [{title: 'Aquaman'}]
  //execution
    const result = moviesReducer(initialState, actions.storeMovies(expected))
    //expectation
    expect(result).toEqual(expected)
  })

})