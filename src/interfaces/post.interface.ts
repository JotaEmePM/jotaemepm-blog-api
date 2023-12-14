export interface Post {
    slug: string
    title: string
    user_id: string,
    creationDate: Date
    subtitle: string
    img: string
    content: string,
    tags: string[],
    visible: boolean
}