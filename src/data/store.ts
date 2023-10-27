import { Rotation } from "@prisma/client";
import db from "./db";

async function createRotation(rotation: Omit<Rotation, "id">) {
  await db.rotation.create({
    data: rotation,
  });
}

export { createRotation };
