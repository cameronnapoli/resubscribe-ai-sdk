import axios from 'axios';

export interface ResubEvent {
  /**
   * The event id from your system.
   */
  id: string;
  type: ResubEventType;
  revenueCat?: Record<string, any>;
}

export interface ResubUser {
  /**
   * The user id in your system.
   */
  userId: string;
  email?: string;
};

export type ResubEventType = (
  'cancellation-unsubscribe-trial' |
  'cancellation-unsubscribe-paid' |
  'cancellation-billing-error' |
  'cancellation-price-increase' |
  'cancellation-customer-support' |
  'cancellation-unknown' |
  'test'
)

export interface ResubInitOptions {
  apiKey: string;
}

let apiKey: string | undefined;
const init = ({
  apiKey: key,
}: ResubInitOptions) => {
  if (!key) {
    console.error('Resubscribe: API key is empty.');
  }
  apiKey = key;
};

const apiBase = 'https://api.resubscribe.ai/v1';

/**
 * Get a user interview link from Resubscribe.
 */
const getLink = async (
  event: ResubEvent,
  user: ResubUser,
) => {
  if (!apiKey) {
    console.error('Resubscribe: API key is not initialized.');
    return;
  }
  if (!user || !user.userId) {
    console.error('Resubscribe: User ID is required.');
    return;
  }

  const url = `${apiBase}/link/getLinkByUser`;
  const body = {
    event,
    user,
  };
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  try {
    const response = await axios.post(
      url, 
      body,
      {
        headers,
      },
    );
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Status: ${response.status}`);
    } else {
      return response.data; 
    }
  } catch (error) {
    console.error(`Resubscribe: Failed to get link. Error: ${error}`);
  }
};

/**
 * Register an event with Resubscribe.
 */
const registerEvent = async (
  event: ResubEvent,
  user: ResubUser,
) => {
  if (!apiKey) {
    console.error('Resubscribe: API key is not initialized.');
    return;
  }
  if (!user || !user.email) {
    console.error('Resubscribe: User email is required.');
    return;
  }
  // validate user email
  const email_re = /^[^@\ ]+@[^@\ ]+\.[^@\ ]+$/;
  if (!email_re.test(user.email)) {
    console.error(`Resubscribe: Invalid user email "${user.email}"`);
    return;
  }

  const url = `${apiBase}/events/register`;
  const body = {
    event,
    user,
  };
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  try {
    const response = await axios.post(
      url, 
      body,
      {
        headers,
      },
    );
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Resubscribe: Failed to register event. Error: ${error}`);
  }
};

export default {
  init,
  registerEvent,
  getLink,
};
