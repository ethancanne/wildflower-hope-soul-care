'use client';
import Text from '@/components/text.component';
import emailjs from '@emailjs/browser';

const ContactFormView = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    emailjs.init({
      publicKey: process.env.EMAILJS_PUBLIC_KEY || '',
      blockHeadless: true,
      limitRate: {
        id: 'app',
        throttle: 10000,
      },
    });

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID || '',
        process.env.EMAILJS_TEMPLATE_ID || '',
        data
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          form.reset();
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div>
      <Text type="large" className="font-display mb-5">
        Contact Johanna
      </Text>
      <Text type="small" className="mb-20 text-foreground/70">
        Whether you have a question, need clarity, or are wondering if this
        journey is right for you, you’re welcome to share what’s on your heart.
      </Text>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green/50"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green/50"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green/50"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-green text-white rounded-md hover:bg-green/90 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactFormView;
