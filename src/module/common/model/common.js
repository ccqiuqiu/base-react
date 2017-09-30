import Immutable from 'immutable'
import {createdReducer} from '../../../store/createdReducer'

const state = Immutable.fromJS({
  footerBar: {
    selectedTab: '/',
    hidden: false
  },
  header: {
    leftBtns: {},
    title: '',
    rightBtns: {}
  }
})

export const actions = {
  changeFooterBar: footer => ({type: 'changeFooterBar', footer}),
  changeHeader: header => ({type: 'changeHeader', header})
}

export const reducer = createdReducer(state, {
  changeFooterBar (state, action) {
    return state.update('footerBar', v => Immutable.Map(action.footer))
  },
  changeHeader (state, action) {
    return state.update('header', v => Immutable.Map(action.header))
  }
})
