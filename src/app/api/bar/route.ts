import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {

  const { userId } = auth();

  if (!userId) {
    return new NextResponse('User is not signed in.', { status: 401 });
  }

  try {
    // find user by ID
    let user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    // if user not found, create new user
    if (!user) {
      const newUser: any = await currentUser();
      user = await prisma.user.create({
        data: {
          id: userId,
          email: newUser?.emailAddress || "", /* not working */
          firstname: newUser?.firstName || "",
          lastname: newUser?.lastname || "", /* not working */
          username: newUser?.username || "",
        },
      });
      console.log('New user created:', user);
    } else {
      console.log('Existing user found:', user);
    }

    const data = {
      userData: user,
    };

    return NextResponse.json({ data });
  } catch (error) {
    console.error(error);
    return new NextResponse('An error occurred while fetching data.', { status: 500 });
  }
}