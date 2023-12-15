import slugify from 'slugify'

export const handleSlugifyString = (text: string) => {
    return slugify(text, {
        replacement: '-',
        lower: true,
        strict: true,
        trim: true
    })
}