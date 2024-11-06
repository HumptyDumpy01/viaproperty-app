import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/utils/schemas/newsletterSchema';
import { StatusCodesJSEND } from '@/utils/enums/statusCodesJSEND';

export async function POST(request: NextRequest) {
  try {

    const { email } = await request.json();

    const validation = newsletterSchema.safeParse({ email });

    if (!validation.success) {
      return NextResponse.json({
        status: StatusCodesJSEND.FAIL,
        message: `Failed to add an email to a newsletter collection! ${validation.error.errors.map((error) => error.message).join(`, `)}`
      });
    } else {
      return NextResponse.json({ status: StatusCodesJSEND.SUCCESS, message: `Email added to newsletter collection!` });
    }

  } catch (e) {
    return NextResponse.json({
      status: StatusCodesJSEND.ERROR,
      message: `Failed to add an email to a newsletter collection! ${e}`
    });
  }
}
