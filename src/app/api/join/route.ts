import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.zip) {
      return NextResponse.json(
        { error: 'Name, email, and zip code are required' },
        { status: 400 }
      );
    }

    // Log the submission (backend integration will come later)
    console.log('New YCOD member signup:', {
      name: data.name,
      email: data.email,
      zip: data.zip,
      address: data.address || '',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: 'Welcome to YCOD!' });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
