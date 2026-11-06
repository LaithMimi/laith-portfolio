// Content per locale. English is the source; Arabic files are reviewed translations.
import * as en from './en/all'
import * as ar from './ar/all'

export type Locale = 'en' | 'ar'
export const locales: Locale[] = ['en', 'ar']
export type Content = typeof en

export const getContent = (locale: Locale): Content => (locale === 'ar' ? ar : en)
