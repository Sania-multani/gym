import React from 'react'

const Privacypolicy = () => {

    const today = new Date().toLocaleDateString();


  return (
  <>
  <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Effective date: {today}</p>

      <section>
        <h2>1. What Information We Collect</h2>
        <p>We collect personal information when you:</p>
        <ul>
          <li>Register for memberships or classes</li>
          <li>Submit contact forms</li>
          <li>Use our website or mobile app</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To manage user accounts and process payments</li>
          <li>To personalize training plans and communication</li>
          <li>To improve our services and user experience</li>
        </ul>
      </section>

      <section>
        <h2>3. Data Sharing</h2>
        <p>We may share data with third-party service providers (e.g. payment processors, analytics, email) who comply with our privacy standards.</p>
      </section>

      <section>
        <h2>4. Security & Retention</h2>
        <p>We implement encryption, access control, and secure storage mechanisms. Personal data is retained only as long as needed.</p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You may have the right to:</p>
        <ul>
          <li>Access, correct, or delete your personal data</li>
          <li>Opt-out of communications</li>
          <li>Withdraw consent at any time</li>
        </ul>
      </section>

      <section>
        <h2>6. Children’s Privacy</h2>
        <p>We do not knowingly collect data from children under 13. Parents or guardians can contact us to request deletion.</p>
      </section>

      <section>
        <h2>7. Changes to This Policy</h2>
        <p>We may update this policy occasionally. Any changes will be posted here with a revised effective date.</p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>If you have questions about privacy or our policies, please contact us at: privacy@yourdomain.com</p>
      </section>
    </div>
  
  </>
  )
}

export default Privacypolicy