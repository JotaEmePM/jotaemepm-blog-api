import { post as PostModel } from '../models/post.model'

import { handleSlugifyString } from '../utils/slugify.handle'
import { newPostDTO,validateNewPost } from '../dto/request/newpost.dto'
import { Post } from '../interfaces/post.interface'

export const newPost = async (post: newPostDTO, userId: string) => {
  try {
    const resultValidation = await validateNewPost(post)
    
    if(!resultValidation.success)
      throw new Error('Error newPost Validation ' +  JSON.stringify(resultValidation.error.errors))
    
    const tags = post.tags.map(tag => {
      return handleSlugifyString(tag)
    })
  
    const dataModel: Post = {
      slug: await sluggyPost(post.title),
      title: post.title,
      user_id: userId,
      subtitle: post.subtitle,
      img: post.img,
      content: post.content,
      tags: [...tags],
      visible: post.visible && true,
      creationDate: new Date()
    }
    
    const response = await PostModel.create(dataModel)
    return response
  } catch(err) {
    throw new Error('Error newPost Service ' + err)
  }
}

export const getPosts = async (page: number = 1, search: string= '') => {
  // const response =
  //   await PostModel.find({
  //     visible: true
  //   })
  //   .sort({ 'creationDate': -1 })
  //   .limit(10)

  //select: "title date author",
  
  const options = {
    query: {
      visible: true,
      // $or: [
      // {title: { $regex: '.*' + search + '.*' },
      // content: { $regex: '.*' + search + '.*' }
      // }]
      $or: [
        {
          title: { $regex: '.*' + search + '.*', $options:'i' }
        },
        {
          content: { $regex: '.*' + search + '.*',$options:'i' }
        },
        {
          tags: { $regex: '.*' + search + '.*',$options:'i' }
        }        
      ]
    },
    sort: { creationDate: -1 },
    limit: 10,
    page: page
  }


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
