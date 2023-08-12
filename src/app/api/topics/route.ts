import { NextRequest, NextResponse } from 'next/server'
import ConnectMongoDB from '../../../../lib/mongodb'
import Topic from '../../../../models/topic'
import { ObjectId } from 'mongoose'

export async function POST(request: NextRequest) {
  const { title, description } = await request.json()
  await ConnectMongoDB()
  await Topic.create({ title, description })
  return NextResponse.json({ message: 'Topic Created' }, { status: 201 })
}

export async function GET(request: NextRequest) {
  await ConnectMongoDB()
  const topic = await Topic.find()
  return NextResponse.json({ topic }, { status: 200 })
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')
  await ConnectMongoDB()
  const topic = await Topic.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Topic deleted' }, { status: 200 })
}
