import * as type from './home.action-type'
export const homeActionCreator = type => err => {
    return {
        type,
        payload: err
    }
}
export const increMentReq = () => {
    return {
        type: type.INCREMENT.REQUEST,
    }
}
export const increMentSuccess = () => {
    return {
        type: type.INCREMENT.SUCCESS,
    }
}
export const increMentError = homeActionCreator(type.INCREMENT.ERROR)
export const decreMentReq = () => {
    return {
        type: type.DECREMENT.REQUEST,
    }
}
export const decreMentSuccess = () => {
    return {
        type: type.DECREMENT.SUCCESS,
    }
}
export const decreMentError = homeActionCreator(type.DECREMENT.ERROR)
export const reseReq = () => {
    return {
        type: type.RESET.REQUEST,
    }
}
export const resetSuccess = () => {
    return {
        type: type.RESET.SUCCESS,
    }
}
export const resetError = homeActionCreator(type.RESET.ERROR)


