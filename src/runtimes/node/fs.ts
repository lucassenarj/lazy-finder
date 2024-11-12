import type FileSystemInterface from "../../interfaces/file-system.ts";
import fs from "node:fs";

class FileSystem implements FileSystemInterface {
  openFolder(path: string): string {
    const options = {
      withFileTypes: true,
    };

    const dir = fs.readdirSync(path, options);

    return dir;
  }

  readFile(file: File) {
    
  }

  getFileType(file: File) {

  }
}

export default FileSystem;
