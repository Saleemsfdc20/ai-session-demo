import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    // Detect urgency
    const isUrgent = message.toLowerCase().includes('urgent');

    // Construct form data using URLSearchParams for application/x-www-form-urlencoded
    const formData = new URLSearchParams();
    formData.append('oid', '00DgK00000KnrZ7');
    formData.append('retURL', 'https://ai-session-demo.vercel.app/thank-you');
    formData.append('first_name', 'Agent');
    formData.append('last_name', 'User');
    formData.append('company', 'AI Lead');
    
    // Custom Field Mappings (based on original WebToLead form structure)
    
    // Project Type (00NgK00003n25PJ)
    formData.append('00NgK00003n25PJ', 'DevOps / Copado');
    
    // Requirement Details (00NgK00003n65or)
    formData.append('00NgK00003n65or', message);
    
    // Urgent Request (00NgK00003n48m2) - Checkbox field sends '1' when checked
    if (isUrgent) {
      formData.append('00NgK00003n48m2', '1');
    } else {
      formData.append('00NgK00003n48m2', '0');
    }

    // Send to Salesforce Web-To-Lead endpoint
    const response = await fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!response.ok) {
      throw new Error(`Salesforce API error: ${response.status}`);
    }

    return NextResponse.json({ success: true, message: "Lead captured successfully.", isUrgent: isUrgent });
  } catch (error) {
    console.error('Error creating lead:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
