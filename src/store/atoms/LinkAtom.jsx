import { atom, selector } from "recoil";

export const NotificationAtom = atom({
    key:"NotificationAtom",
    default:104
})

export const NetworkAtom = atom({
    key:"NetworkAtom",
    default:12
})

export const JobAtom = atom({
    key:"JobAtom",
    default:2
})

export const MessageAtom = atom({
    key:"MessageAtom",
    default:0
})

export const totalCountSelector = selector({
    key:"totalCountSelector",
    get:({get})=>{
        const NotificationAtomCount=get(NotificationAtom)
        const MessageAtomCount=get(MessageAtom)
        const JobAtomCount=get(JobAtom)
        const NetworkAtomCount=get(NetworkAtom)
        return NetworkAtomCount+MessageAtomCount+JobAtomCount+NotificationAtomCount
    }
})