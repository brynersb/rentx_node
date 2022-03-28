
import fs from 'fs'

class File {

    async delete(fileName: string) {

        try {
            await fs.promises.stat(fileName);
        } catch {
            return;
        }

        await fs.promises.unlink(fileName);
    }

}

export { File }