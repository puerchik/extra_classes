import { AppRootState } from './store'

export const selectStatus = (state: AppRootState) => state.app.status
