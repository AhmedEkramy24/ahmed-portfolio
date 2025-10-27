import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const basePath = path.join(process.cwd(), "public/projects");
  const folders = fs.readdirSync(basePath);

  const data = folders.map((folder) => {
    const folderPath = path.join(basePath, folder);
    const files = fs.readdirSync(folderPath);

    const linkFile = files.find((f) => f.startsWith("link"));
    const titleFile = files.find((f) => f.startsWith("title"));
    const imgFile = files.find((f) => /\.(png|jpg|jpeg|webp|gif)$/i.test(f));

    const link = linkFile
      ? fs.readFileSync(path.join(folderPath, linkFile), "utf-8").trim()
      : "";
    const title = titleFile
      ? fs.readFileSync(path.join(folderPath, titleFile), "utf-8").trim()
      : "";

    const image = imgFile ? `/projects/${folder}/${imgFile}` : null;

    return {
      id: folder,
      title,
      link,
      image,
    };
  });

  return NextResponse.json(data);
}
