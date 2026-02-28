import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const MESSAGES_FILE = path.join(DATA_DIR, 'messages.json');

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readMessages(): Promise<Record<string, unknown>[]> {
  try {
    const raw = await fs.readFile(MESSAGES_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const entry = {
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString(),
    };

    // Log the message regardless of file write success
    console.log('New contact message:', entry);

    // Attempt to persist to file
    try {
      await ensureDataDir();
      const messages = await readMessages();
      messages.push(entry);
      await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2));
    } catch (writeErr) {
      // File write failed (e.g. read-only filesystem in production)
      // Message is still logged above, so don't fail the request
      console.warn('Could not persist message to file:', writeErr);
    }

    return NextResponse.json({
      success: true,
      message: "Message received! We'll get back to you soon.",
    });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
