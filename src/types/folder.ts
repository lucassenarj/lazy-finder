export type TFolder = {
  path: string;
  name: string;
}

export type TFolderContainer = {
  next: TFolderContainer | null;
  value: TFolder;
}
