import fs from "fs";

export const deletefile = async (filename: string) => {
    try {
        await fs.promises.stat(filename);
    } catch (error) {
        return;
    }
    await fs.promises.unlink(filename);
}