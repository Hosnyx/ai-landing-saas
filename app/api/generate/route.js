import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, desc } = await req.json();

  const html = `
  <html>
    <body style="font-family:Arial;text-align:center;padding:40px;background:#0f0f0f;color:white">
      <h1 style="color:#c9a646">امتلك ${name}</h1>
      <p>${desc}</p>
      <button style="padding:12px 20px;background:#c9a646;border:none">اطلب الآن</button>
    </body>
  </html>
  `;

  return NextResponse.json({ html });
}
