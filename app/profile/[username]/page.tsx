import React from 'react'
import Profile from './profile'
import prisma from '@/lib/prisma'
import { notFound, redirect } from 'next/navigation'
import { useSession } from '@/lib/SessionContext'
import { getSession } from '@/lib/actions'

type Props = {
    params : Promise<{username: string}>
}


export default async function page({params}: Props) {
    const {username} = await params
    const session = await getSession()
    if (session?.Username == username) {
        redirect("/profile")
    }
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