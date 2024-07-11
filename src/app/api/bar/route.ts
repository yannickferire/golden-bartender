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
          email: newUser?.emailAddress || "",
          firstname: newUser?.firstName || "",
          lastname: newUser?.lastName || "",
          username: newUser?.username || "",
        },
      });
      console.log('New user created:', user);
    } else {
      console.log('Existing user found:', user);
    }

    // fetch drinks associated with the user
    const drinks = await prisma.drink.findMany({
      where: {
        userId: userId,
      },
    });

    return NextResponse.json({
      userData: user,
      drinks: drinks,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse('An error occurred while fetching data.', { status: 500 });
  }
}
