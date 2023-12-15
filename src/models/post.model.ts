import mongoose, { Schema, model } from 'mongoose'
import { Post } from '../interfaces/post.interface'
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts'

type PostDocument = mongoose.Document & {
  title: string
  slug: string
  user_id: string
  creationDate: Date
  subtitle: string
  img: string
  content: string
  tags: string[]
  visible: boolean
}

const PostSchema = new Schema<PostDocument>(
  {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    user_id: {
      type: String,
      required: true
    },
    creationDate: {
      type: Date
    },
    subtitle: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    content: {
      type: String
    },
    tags: {
      type: [String]
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

PostSchema.plugin(mongoosePagination)

export const post: Pagination<PostDocument> = mongoose.model<PostDocument, Pagination<PostDocument>>('post', PostSchema)
//export const PostModel = model('post', PostSchema, 'blog')
