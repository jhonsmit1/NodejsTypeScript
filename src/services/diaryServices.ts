import { DiaryEntry, NonSensitiveInfoDiaryEntry, newDiaryEntry } from '../types'
import diaryData from './diaries.json'


const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = () => diaries
//contrlar los undefined
export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id = id)
    if (entry != null) {
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    }
    return entry
}

export const getEntriesWithOutSenstiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiary = (newDiaryEntry:newDiaryEntry): DiaryEntry => {
    const newDiary ={
        id:diaries.length + 1,
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
}

// const diariesWithoutSensitiveInfo= getEntriesWithOutSenstiveInfo()
// diariesWithoutSensitiveInfo[0]