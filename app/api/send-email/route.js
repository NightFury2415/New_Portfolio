import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, subject, message, to } = await req.json();

    if (!name || !email || !subject || !message || !to) {
        return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // <------ ADD THIS LINE
            },
        });

        await transporter.sendMail({
            from: `${name} <${email}>`,
            to: to,
            subject: subject,
            text: message,
            html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
    }
}
