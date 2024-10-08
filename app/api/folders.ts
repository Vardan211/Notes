import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const result = await prisma.folder.create({
    data: {
      ...body,
    },
  });

  if (!result)
    return Response.json({
      message: "error",
      status: 500,
    });

  return Response.json({ message: "ok", status: 200, data: result });
}

// Get all the users using GET method
export async function GET() {
  const result = await prisma.folder.findMany();
  return Response.json({ message: "ok", status: 200, data: result });
}
