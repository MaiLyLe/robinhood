import * as React from 'react'
import create, { EqualityChecker, StateSelector, UseStore } from 'zustand'

//TODO: properly configure zustand state store
export type StoreType = InitialState & {
    setIsAdmin: (value: string) => void
}

type InitialState = {
    isAdmin: boolean
}

const initialState: InitialState = {
    isAdmin: false,
}

const initStore = (preloadedState = initialState) => {
    return create<StoreType>((set, get) => ({
        ...initialState,
        ...preloadedState,
        setIsAdmin: (value) => {
            //do somth
        },
    }))
}
let store: UseStore<StoreType> | undefined | null

export const initializeStore = (preloadedState?: StoreType) => {
    let _store = store ?? initStore(preloadedState)

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        store = undefined
    }

    if (typeof window === 'undefined') return _store
    if (!store) store = _store

    return _store
}

export const useHydrate = (initialState: unknown) => {
    const state =
        initialState === 'string' ? JSON.parse(initialState) : initialState
    const store = React.useMemo(() => initializeStore(state), [state])
    return store
}

export const StateStoreContext = React.createContext(null)

type StoreProviderProps = {
    children: React.ReactNode
    store: any
}
export const StoreProvider = ({ children, store }: StoreProviderProps) => {
    return (
        <StateStoreContext.Provider value={store}>
            {children}
        </StateStoreContext.Provider>
    )
}

export const useStore = (
    selector: StateSelector<StoreType, Partial<StoreType>>,
    equalityFn?: EqualityChecker<InitialState>,
) => {
    // @ts-ignore
    const store: UseStore<StoreType> = React.useContext(StateStoreContext)
    // @ts-ignore
    const values = store(selector, equalityFn)

    return values
}
