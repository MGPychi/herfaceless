import { db } from "@/db";
import { auth } from "@/lib/auth";

export const GET = async () => {
	const session = auth();
	if (!session)
		return Response.json("unauthorized", {
			status: 401,
		});
	const emails = await db.query.newsletter.findMany({
		columns: { email: true },
	});
	if (!emails || emails.length === 0) {
		return new Response("No emails found", {
			status: 404,
		});
	}
	const csvData = "email\n" + emails.map((e) => e.email).join("\n");

	// Create a response with CSV data as a downloadable file
	return new Response(csvData, {
		headers: {
			"Content-Type": "text/csv",
			"Content-Disposition":
				'attachment; filename="newsletter_emails.csv"',
		},
	});
};
