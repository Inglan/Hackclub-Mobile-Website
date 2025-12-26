import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import type { FeedbackData, ActionResponse } from '@/components/feedback';

export async function POST(req: NextRequest) {
  try {
    const { url, feedback } = await req.json() as { url: string; feedback: FeedbackData };
    const webhookUrl = process.env.SLACK_FEEDBACK_WEBHOOK_URL;
    if (!webhookUrl) throw new Error('Missing SLACK_FEEDBACK_WEBHOOK_URL');

    const blocks: any[] = [
      { type: 'header', text: { type: 'plain_text', text: feedback.opinion === 'good' ? '👍 Docs Feedback (Good)' : '👎 Docs Feedback (Bad)' } },
      { type: 'divider' },
      { type: 'section', text: { type: 'mrkdwn', text: feedback.message } },
      { type: 'divider' },
      {
        type: 'context',
        elements: [
          { type: 'mrkdwn', text: `*Page:* ${url}` },
          { type: 'mrkdwn', text: `*Rating:* ${feedback.opinion}` },
          feedback.slackId ? { type: 'mrkdwn', text: `*User:* <@${feedback.slackId}>` } : null
        ].filter(Boolean)
      }
    ];

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blocks }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Slack webhook error: ${text}`);
    }

    const result: ActionResponse = { slackTs: new Date().toISOString() };
    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
