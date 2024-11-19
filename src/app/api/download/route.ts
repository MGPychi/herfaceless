import path from 'path';
import fs from 'fs/promises';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'The-UltimateDigitalCourse.pdf');

        // Check if the file exists
        await fs.access(filePath);

        // Read the file content
        const fileBuffer = await fs.readFile(filePath);

        // Return the file as a downloadable response
        return new Response(fileBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=\"The-UltimateDigitalCourse.pdf\"",
                "Content-Length": fileBuffer.length.toString(),
            },
        });
    } catch (error) {
        console.error('Error serving the PDF file:', error);

        // Return an error response
        return new Response(JSON.stringify({ message: 'Failed to download the file.' }), {
            headers: { "Content-Type": "application/json" },
            status: 500,
        });
    }
}