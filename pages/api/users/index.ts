import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import { User } from '../../../database/entities/User'

const handler = nextConnect()

const createUser = async (req: NextApiRequest, res: NextApiResponse<User>) => {
  try {
    const userInfo = req.body

    const newUser = await User.save(userInfo)

    return res.status(201).json(newUser)
  } catch (error) {
    console.log(error)
  }
}

const findUsers = async (req: NextApiRequest, res: NextApiResponse<User[]>) => {
  try {
    const users = await User.find({})
    res.status(200).json(users)
  } catch (error) {
    console.log(error)
  }
}

handler.post(async (req: NextApiRequest, res: NextApiResponse<User>) => {
  const user = await createUser(req, res)
  return user
})

handler.get(async (req: NextApiRequest, res: NextApiResponse<User[]>) => {
  const users = await findUsers(req, res)
  return users
})

export default handler
