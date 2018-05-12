export const createActionSet = actionName => ({
    REQUEST: `${actionName}_REQUEST`,
    SUCCESS: `${actionName}_SUCCESS`,
    ERROR: `${actionName}_ERROR`
})
export const INCREMENT = createActionSet('INCREMENT')
export const DECREMENT = createActionSet('DECREMENT')
export const RESET = createActionSet('RESET')