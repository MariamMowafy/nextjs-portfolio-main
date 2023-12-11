import { NextResponse } from "next/server";


const formspreeEndpoint = "https://formspree.io/f/mzblnyeb"; // Replace with your Formspree endpoint

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    const formResponse = await fetch(formspreeEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const data = await formResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
