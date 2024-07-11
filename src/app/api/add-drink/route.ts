import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const POST = async (req: Request) => {
  const { name, description, userId } = await req.json();

  try {
    const newDrink = await prisma.drink.create({
      data: {
        name,
        description,
        userId,
      },
    });
    return NextResponse.json(newDrink, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la boisson', error);
    return NextResponse.json({ error: 'Erreur lors de l\'ajout de la boisson' }, { status: 500 });
  }
};