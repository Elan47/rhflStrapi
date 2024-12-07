// ./src/middlewares/upload-restrictions.ts

import { Context, Next } from 'koa';
import { File as FormidableFile } from 'formidable';
import { escape } from 'lodash'; // You can use any library for escaping HTML, here we use lodash

// Extend the FormidableFile type to include the 'originalFilename' property
interface ExtendedFile extends FormidableFile {
    originalFilename: string;
}

export default (config: any, { strapi }: { strapi: any }) => {
    return async (ctx: Context, next: Next) => {
        if (ctx.request.url === '/upload' && ctx.request.method === 'POST') {
            const allowedExtensions = [
                '.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp', '.tiff', '.svg', // Image formats
                '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt', '.rtf', // Document formats
                '.mp3', '.wav', '.ogg', '.flac', // Audio formats
                '.mp4', '.mov', '.avi', '.mkv', '.webm', // Video formats
                '.zip', '.rar', '.7z', '.tar', '.gz', // Archive formats
                '.csv', '.xml', '.json' // Other safe formats
            ];

            const files = ctx.request.files as { [fieldname: string]: ExtendedFile | ExtendedFile[] };

            if (files) {
                for (const file of Object.values(files)) {
                    if (Array.isArray(file)) {
                        for (const f of file) {
                            // Sanitize the file name to prevent XSS
                            const sanitizedFileName = escape(f.originalFilename);
                            const fileExtension = `.${sanitizedFileName.split('.').pop().toLowerCase()}`;
                            if (!allowedExtensions.includes(fileExtension)) {
                                return ctx.throw(400, `File type ${fileExtension} is not allowed.`);
                            }
                        }
                    } else {
                        // Sanitize the file name to prevent XSS
                        const sanitizedFileName = escape(file.originalFilename);
                        const fileExtension = `.${sanitizedFileName.split('.').pop().toLowerCase()}`;
                        if (!allowedExtensions.includes(fileExtension)) {
                            return ctx.throw(400, `File type ${fileExtension} is not allowed.`);
                        }
                    }
                }
            }
        }

        await next();
    };
};