import Writer from "./Writer";
import fs from "fs";
import path from "path";
import createDirectoryRecursively from "@helpers/createDirectoryRecursively";

abstract class FileWriter extends Writer {
  protected filePath: string;

  constructor(filePath: string) {
    super();
    this.filePath = filePath;

    this.createTarget();
  }

  private createTarget() {
    createDirectoryRecursively(path.dirname(this.filePath));
  }

  public reset() {
    if (fs.existsSync(this.filePath)) {
      fs.unlinkSync(this.filePath);
    }
  }
}

export default FileWriter;
