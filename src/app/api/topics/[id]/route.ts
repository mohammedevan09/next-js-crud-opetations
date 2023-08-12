import { NextRequest, NextResponse } from 'next/server'
import ConnectMongoDB from '../../../../../lib/mongodb'
import Topic from '../../../../../models/topic'

export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params
  const { newTitle: title, newDescription: description } = await request.json()
  await ConnectMongoDB()
  const topic = await Topic.findByIdAndUpdate(id, { title, description })
  return NextResponse.json({ message: 'Topic updated' }, { status: 200 })
}

export async function GET(request: NextRequest, { params }: any) {
  const { id } = params
  await ConnectMongoDB()
  const topic = await Topic.findOne({ _id: id })
  return NextResponse.json({ topic }, { status: 200 })
}
