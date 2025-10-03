import React from 'react'
import Profile from './profile'
import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'

type Props = {
    params : Promise<{username: string}>
}


export default async function page({params}: Props) {
    const {username} = await params
    const user = await prisma.accounts.findUnique({
        where: {
            Username: username
        }
    })
    if (!user) {
        notFound()
    }

    const {Password, ...passwordless } = user

  return (
    <>
        <Profile {...passwordless}/>
    </>
  )
}