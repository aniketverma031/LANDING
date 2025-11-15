export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email || !body.phone || !body.state || !body.course || !body.intake) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Validate phone number (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(body.phone.replace(/\D/g, ''))) {
      return Response.json({ error: "Invalid phone number" }, { status: 400 });
    }

    // In production, this would submit to Pipedream webhook
    // const pipedreamUrl = process.env.PIPEDREAM_WEBHOOK_URL;
    // await fetch(pipedreamUrl, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body)
    // });

    console.log("Lead submitted:", body);
    return Response.json({ success: true, message: "Thank you for your interest!" });
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
