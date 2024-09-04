import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'


const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = () => diaries

export const getEntriesWithOutSenstiveInfo = (): NonSensitiveInfoDiaryEntry[] => diaries

export const addEntry = () => null

const diariesWithoutSensitiveInfo= getEntriesWithOutSenstiveInfo()
diariesWithoutSensitiveInfo[0]