import React from 'react';

function FlowPrivacyPolicy() {
  return (
    <main className="body px-4 pb-28">
      <article className="bg-base-300 w-full max-w-4xl rounded-lg shadow-lg p-6 md:p-10 mt-16 text-left">
        <h1 className="text-primary text-3xl md:text-4xl font-bold mb-2">Privacy Policy for Flow – Habit Tracker</h1>
        <p className="mb-8"><strong>Last updated: 9 September 2026</strong></p>
        <p className="mb-6">Flow – Habit Tracker (“Flow”) respects your privacy.</p>

        <section className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Information We Collect</h2>
          <p>Flow does not collect, transmit, sell, or share personal information with the developer or third parties.</p>
          <p className="mt-3">Habit information, streaks, settings, and other app data are stored locally on your device unless you choose to use an operating-system feature or another service that transfers or backs up that data.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Data Storage</h2>
          <p>Flow stores app data locally on your device so that the app can provide habit tracking, streaks, statistics, preferences, and related functionality.</p>
          <p className="mt-3">The developer does not have access to this locally stored information.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Data Sharing</h2>
          <p>Flow does not sell or share your personal information with third parties.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Permissions</h2>
          <p>Flow may request Android permissions when required to provide specific app functionality, such as notifications or reminders. These permissions are used only for the functionality described by the app.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Data Retention and Deletion</h2>
          <p>Because Flow&apos;s habit data is stored locally on your device, you can remove this data using the app&apos;s available deletion or reset features, by clearing the app&apos;s storage in Android settings, or by uninstalling the app.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Children&apos;s Privacy</h2>
          <p>Flow does not knowingly collect personal information from children.</p>
        </section>
        <section className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Changes to This Privacy Policy</h2>
          <p>This privacy policy may be updated if Flow&apos;s features or data-handling practices change. Any updated version will be published at this privacy-policy address.</p>
        </section>
        <section>
          <h2 className="text-primary text-2xl font-bold mb-3">Contact</h2>
          <p>If you have questions about this privacy policy, contact:</p>
          <p className="mt-3"><strong>Developer:</strong> reviloDev<br /><strong>Email:</strong> <a className="link link-primary" href="mailto:revilo2.dev@gmail.com">revilo2.dev@gmail.com</a></p>
        </section>
      </article>
    </main>
  );
}

export default FlowPrivacyPolicy;
