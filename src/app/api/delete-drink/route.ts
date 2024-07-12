import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return new NextResponse('ID is required', { status: 400 });
    }

    await prisma.drink.delete({
      where: { id },
    });
    return new NextResponse('Drink deleted successfully', { status: 200 });
  } catch (error) {
    console.error('Error deleting drink:', error);
    return new NextResponse('Error deleting drink', { status: 500 });
  }
}
