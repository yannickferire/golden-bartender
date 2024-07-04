import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  console.log('API request received');

  const { userId } = auth();
  console.log('userId:', userId);

  if (!userId) {
    return new NextResponse('User is not signed in.', { status: 401 });
  }

  try {
    // Rechercher l'utilisateur par ID
    let user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    // Si l'utilisateur n'existe pas, créez un nouvel utilisateur
    if (!user) {
      user = await prisma.user.create({
        data: {
          id: userId,
          email: "",
          name: "",
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