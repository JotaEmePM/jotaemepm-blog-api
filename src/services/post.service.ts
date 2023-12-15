import { post as PostModel } from '../models/post.model'
import { Post } from '../interfaces/post.interface'
import { handleSlugifyString } from '../utils/slugify.handle'
import { NewPostDTO } from '../dto/request/newpost.dto'
import { title } from 'process'

export const newPost = async (post: NewPostDTO, userId: string) => {
  const tags = post.tags.split(',').map(tag => {
    return handleSlugifyString(tag)
  })

  const dataModel: Post = {
    slug: await sluggyPost(post.title),
    title: post.title,
    user_id: userId,
    subtitle: '',
    img: '',
    content: post.content,
    tags: [...tags],
    visible: post.visible && true,
    creationDate: new Date()
  }

  const response = await PostModel.create(dataModel)
  return response
}

export const getPosts = async (page: number = 1, search: string) => {
  // const response =
  //   await PostModel.find({
  //     visible: true
  //   })
  //   .sort({ 'creationDate': -1 })
  //   .limit(10)

  //select: "title date author",
  
  const options = {
    query: {
      visible: true
    },
    sort: { creationDate: -1 },
    limit: 10,
    page: page
  }

  console.log(options)

  const response = await PostModel.paginate(options)
  return response
}

export const getPost = async (slug: string) => {
  const response = await PostModel.find({ slug })
  return response
}

const sluggyPost = async (text: string) => {
  let iteration: number = 0
  let slugExist = true
  let slug = ''
  do {
    if (iteration == 0) slug = `${handleSlugifyString(text)}`
    else slug = `${handleSlugifyString(text)}-${iteration}`

    const existSlug = await PostModel.findOne({ slug })

    if (!existSlug) slugExist = false
    else iteration += 1
  } while (slugExist)

  return slug
}
