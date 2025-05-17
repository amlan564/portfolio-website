// File: app/api/contact/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log('Received contact form data:', { name, email, message });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Error in API route:", err);
    return NextResponse.json(
      { success: false, error: "Email sending failed" },
      { status: 500 }
    );
  }
}
