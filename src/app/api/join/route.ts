import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const MEMBERS_FILE = path.join(DATA_DIR, 'members.json');

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readMembers(): Promise<Record<string, unknown>[]> {
  try {
    const raw = await fs.readFile(MEMBERS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

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

    // Basic email validation
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
      zip: data.zip,
      address: data.address || '',
      timestamp: new Date().toISOString(),
      source: 'join-form',
    };

    // Log the signup regardless of file write success
    console.log('New YCOD member signup:', entry);

    let memberCount = 1;

    // Attempt to persist to file
    try {
      await ensureDataDir();
      const members = await readMembers();
      members.push(entry);
      await fs.writeFile(MEMBERS_FILE, JSON.stringify(members, null, 2));
      memberCount = members.length;
    } catch (writeErr) {
      console.warn('Could not persist member to file:', writeErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Welcome to YCOD!',
      memberCount,
    });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const members = await readMembers();
    return NextResponse.json({ count: members.length });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
