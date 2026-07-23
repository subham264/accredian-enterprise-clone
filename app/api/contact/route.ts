import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { fullName, company, email, phone, requirement, message } =
      await req.json();

    // Validation
    if (!fullName || !company || !email || !requirement || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Enterprise Website <onboarding@resend.dev>",

      // Change this to your email
      to: "subhamverma5478@gmail.com",

      subject: `New Enterprise Inquiry from ${fullName}`,

      html: `
        <div style="font-family:Arial,sans-serif;padding:30px;">
          <h2>New Enterprise Inquiry</h2>

          <hr/>

          <p><strong>Name:</strong> ${fullName}</p>

          <p><strong>Company:</strong> ${company}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>

          <p><strong>Requirement:</strong> ${requirement}</p>

          <p><strong>Message:</strong></p>

          <div style="background:#f5f5f5;padding:15px;border-radius:8px;">
            ${message}
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
