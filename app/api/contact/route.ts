import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

const isEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value);

export async function POST(request: NextRequest) {
  try {
    let body: Record<string, unknown> = {};
    const contentType = request.headers.get('content-type') ?? '';

    if (contentType.includes('application/json')) {
      body = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    } else {
      body = await request.json().catch(() => ({}));
    }

    const name = (body.name ?? '').toString().trim();
    const email = (body.email ?? '').toString().trim();
    const message = (body.message ?? '').toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const savedLead = await prisma.contactLead.create({
      data: {
        name,
        email,
        message,
      },
    });

    const sendgridKey = process.env.SENDGRID_API_KEY;
    if (sendgridKey) {
      await sendgrid.send({
        to: process.env.CONTACT_RECEIVER_EMAIL ?? 'contact@verqora.com',
        from: process.env.SENDGRID_FROM_EMAIL ?? 'no-reply@verqora.com',
        subject: `New contact lead from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      });
    } else {
      console.warn('SendGrid API key not configured; email not sent.');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will contact you soon.',
        leadId: savedLead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Could not process contact request.' }, { status: 500 });
  }
}
