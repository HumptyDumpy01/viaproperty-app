import { NextRequest, NextResponse } from 'next/server';
import { newsletterSchema } from '@/utils/schemas/newsletterSchema';
import { StatusCodesJSEND } from '@/utils/enums/statusCodesJSEND';
import { isDevMode } from '@/utils/generics/generics';

export async function POST(request: NextRequest) {
  try {

    const { email } = await request.json();

    const validation = newsletterSchema.safeParse({ email });

    const errorMessage = isDevMode ? `Failed to add an email to a newsletter collection!
     ${validation?.error?.errors.map((error) => error.message).join(`, `)}` : `Something went wrong!`;

    if (!validation.success) {
      return NextResponse.json({
        status: StatusCodesJSEND.FAIL,
        message: errorMessage
      });
    } else {
      return NextResponse.json({ status: StatusCodesJSEND.SUCCESS, message: `Email added to newsletter collection!` });
    }

  } catch (e) {
    return NextResponse.json({
      status: StatusCodesJSEND.ERROR,
      message: isDevMode ? `Failed to 
      add an email to a newsletter collection! ${e}
      ` : `Something went wrong!`
    });
  }
}
