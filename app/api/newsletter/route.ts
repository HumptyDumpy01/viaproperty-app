import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {

    const { email } = await request.json();
    console.log(`Executing email: `, email);

    return NextResponse.json({ status: `success`, message: `Email added to newsletter collection!` });
  } catch (e) {
    return NextResponse.json({
      error: true,
      message: `Failed to add an email to a newsletter collection! ${e}`
    });
  }
}
