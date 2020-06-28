import * as types from '../action-type'
const initState = {
  taglist: []
  // tagKey: [] // 标识
}
export default function app(state = initState, action) {
  switch (action.type) {
    case types.TAGSVIEW_ADD_TAG:
      const tag = action.tag
      if (state.taglist.includes(tag)) {
        return state
      } else {
        return {
          ...state,
          taglist: [...state.taglist, tag]
        }
      }
    /** const tag = action.tag
      // 循环标签key
      for (const tag of state.taglist) {
        // 没有时添加
        if (state.tagKey.indexOf(tag.path) === -1) {
          state.tagKey = state.tagKey.concat(tag.path)
        } else {
          return state.tagKey
        }
      }
      if (state.tagKey.indexOf(tag.path) === -1) {
        return {
          ...state,
          taglist: [...state.taglist, tag]
        }
      } else {
        return state
      }   */
    case types.TAGSVIEW_DELETE_TAG:
      return {
        ...state,
        taglist: [...state.taglist.filter((item) => item !== action.tag)]
      }
    case types.TAGSVIEW_EMPTY_TAGLIST:
      return {
        ...state,
        taglist: [...state.taglist.filter((item) => item.path === '/dashboard')]
      }
    case types.TAGSVIEW_CLOSE_OTHER_TAGS:
      return {
        ...state,
        taglist: [...state.taglist.filter((item) => item.path === '/dashboard' || item === action.tag)]
      }
    default:
      return state
  }
}
