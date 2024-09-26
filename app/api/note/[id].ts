import type { NextApiRequest, NextApiResponse } from "next";
import { Note } from "@/Interfaces";
import prisma from "@/lib/prisma";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<Note | { error: string }>
) {
  const { query, method } = req;
  const id = query.id as string;

  switch (method) {
    case "GET":
      try {
        // Fetch the note from the database using Prisma
        const noteFromDb = await prisma.note.findFirstOrThrow({
          where: { id: id },
        });

        // Map the result to your custom Note interface
        const note: Note = {
          id: noteFromDb.id,
          title: noteFromDb.title,
          content: noteFromDb.text,
        };

        // Return the note in the response
        res.status(200).json(note);
      } catch (error) {
        res.status(404).json({ error: "Note not found" });
      }
      break;
    case "PUT":
      res.status(200);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
