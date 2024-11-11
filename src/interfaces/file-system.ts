interface FileSystemInterface {
  openFolder(name: string): string;

  readFile(file: File);

  getFileType(file: File);
}

export default FileSystemInterface;
