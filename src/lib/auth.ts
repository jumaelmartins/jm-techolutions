import { SignJWT, jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'jmtech-super-secret-key-2026'
);
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin@jmtech2026';

export async function signToken(): Promise<string> {
  return new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(SECRET);
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, SECRET);
    return true;
  } catch {
    return false;
  }
}

export function checkPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}
