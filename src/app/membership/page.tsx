'use client';

import { useState } from 'react';

import { ArrowRight, Award, CheckCircle, Users } from 'lucide-react';

export default function TABOMembership() {
  const [selectedPath, setSelectedPath] = useState<'new' | 'existing' | null>(
    null,
  );
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Large Background */}
      <section
        className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg/3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl text-start">
          <h2 className="text-5xl font-extrabold mb-6">
            Become a Basketball Official
          </h2>
          <p className="text-[#d57a1f] font-bold mb-6">
            Train · Certify · Officiate.
          </p>

          <p className="text-gray-200 text-lg leading-relaxed mb-10 text-justify">
            Join TABO and officiate games across the city of Toronto. We are
            welcoming NEW officials and EXISTING certified officials
            transferring from other boards.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          {/* New Officials Card */}
          <div
            onClick={() => setSelectedPath('new')}
            className={`flex flex-col justify-between group relative bg-[rgb(19,19,21)] rounded-2xl p-12 cursor-pointer transition-all hover:scale-105 border-2 ${
              selectedPath === 'new' ? 'border-orange-500' : 'border-gray-700'
            }`}
          >
            <div className="absolute top-8 right-8 w-12 h-12 bg-orange-600 bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition">
              <Users className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-6 text-start">
              New Officials
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed text-justify">
              Never officiated before? Start your journey with our comprehensive
              training camp. We&apos;ll teach you everything from basic rules to
              advanced game management.
            </p>

            <button className="w-full bg-orange-600 hover:cursor-pointer text-white py-4 px-6 rounded-xl font-semibold text-md transition flex items-center justify-center gap-2 group">
              Apply as New Official
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>

          {/* Existing Officials Card */}
          <div
            onClick={() => setSelectedPath('existing')}
            className={`flex flex-col justify-between group relative bg-[rgb(19,19,21)] rounded-2xl p-12 cursor-pointer transition-all hover:scale-105 border-2 ${
              selectedPath === 'existing'
                ? 'border-blue-500'
                : 'border-gray-700'
            }`}
          >
            <div className="absolute top-8 right-8 w-12 h-12 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition">
              <Award className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-2xl font-bold mb-6 text-start">
              Existing Officials
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed text-justify">
              Already certified with another board or province? Transfer your
              membership to TABO and start officiating in Toronto&apos;s vibrant
              basketball community.
            </p>

            <button className="w-full bg-blue-600 hover:cursor-pointer text-white py-4 px-6 rounded-xl font-semibold text-md transition flex items-center justify-center gap-2 group">
              Join as Existing Official
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </section>

      <div className="py-24 bg-gradient-to-b from-black to-gray-900 ">
        {/* Content based on selection */}
        {selectedPath === 'new' && (
          <div className="max-w-7xl mx-auto px-4">
            {/* Journey Timeline */}

            <div className="bg-transparent rounded-2xl p-10 mb-12 border border-gray-700">
              <p className="text-white text-2xl mb-8 leading-relaxed text-justify">
                Annually, TABO conducts a camp for individuals interested in
                becoming an official. This camp is designed to provide them with
                the knowledge of the rules and mechanics skills in being a
                basketball official. This camp is typically held in the latter
                summer months, just prior to the start of the basketball season.
                Once the dates have been set for the next camp sessions
                individuals who are selected to attend will be notified of the
                location(s) and time(s).
              </p>
            </div>

            {/* Requirements */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-transparent rounded-2xl p-10 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">Requirements</h3>
                <div className="space-y-4">
                  {[
                    'Minimum age: 18 years.',
                    'Availability: 2 days/week required (Oct–Apr peak season).',
                    'Available for Weekday games (throughout the day, including mid-afternoon around 3 PM).',
                    'Available for Weekend games (full-day availability).',
                    'Commitment to accept and execute assignments from the Assignor(s).',
                    'Must possess good physical condition and effective communication skills.',
                    'Requires own transportation.',
                    'Must attend all training sessions.',
                    'Personal attributes: Energetic, diplomatic, organized, and self-motivated.',
                    'Calm disposition: Ability to manage pressure from coaches, players, and spectators.',
                    'Prepared to invest in the required referee uniform and associated equipment.',
                  ].map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 bg-orange-900 bg-opacity-20 rounded-xl border border-orange-800"
                    >
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-white">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-orange-900 to-red-900 rounded-2xl p-10 border border-orange-700">
                  <h3 className="text-2xl font-bold mb-4">Investment</h3>
                  <div className="text-6xl font-bold mb-4">$200</div>
                  <p className="text-orange-100 mb-6">
                    One-time camp fee includes comprehensive training, rules
                    study, and practical mechanics training.
                  </p>
                  <p className="text-sm text-orange-200 mb-4">
                    Note: Uniform purchased separately. Camp attendance does not
                    guarantee membership.
                  </p>
                </div>

                <div className="bg-transparent rounded-2xl p-10 border border-orange-700">
                  <h3 className="text-2xl font-bold mb-4">Development</h3>
                  <div className="space-y-4">
                    {[
                      'Development includes a comprehensive schedule of rules study and practical ‘on the floor’ mechanics training.',
                      'All education sessions are based on the current FIBA rules.',
                      'Active membership requires passing a written FIBA exam with a minimum required mark.',
                      'New members are evaluated during TABO tournaments and routinely during elementary and/or high school games.',
                      'Failure to maintain basic officiating skills or manage game elements (physical/emotional) may result in membership release.',
                      'New officials are subject to a two-year probationary period and may be released at any time based on on- and off-court performance.',
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2.5 bg-orange-900 bg-opacity-20 rounded-xl border border-orange-800"
                      >
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="https://www.proprofs.com/quiz-school/ugc/story.php?title=registration-for-september-2024-tabo-prospects-officials-campwj"
                target="_blank"
                rel="noreferrer"
                className="w-60 bg-orange-600 hover:bg-orange-700 hover:cursor-pointer text-white py-4 px-8 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2 group"
              >
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>
        )}

        {selectedPath === 'existing' && (
          <div className="">
            <div className="max-w-7xl mx-auto px-4">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 mb-12 border border-gray-700">
                <p className="text-white text-2xl mb-8 leading-relaxed text-justify">
                  Officials currently certified by another board (within
                  Ontario, Canada, or internationally) seeking TABO membership
                  (home or dual) must review and meet the requirements below. If
                  you meet these standards, please use the link below to submit
                  your application for consideration. Required documentation
                  will be requested if you are selected.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 border border-gray-700 mb-12">
                <h2 className="text-3xl font-bold mb-8">
                  Requirements for Existing Officials
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Member in good standing (Reference Letter required)',
                    'Actively officiating 2+ years (Proof needed)',
                    'NOCP Level 1 minimum or equivalent (Proof needed)',
                    'Current FIBA exam passed or equivalent (Proof needed)',
                    'Minimum 50 TABO-assigned games annually',
                    'Available 1 weekend day (Sat/Sun 8AM-6PM) & 1 weekday (Mon-Fri 8AM-5PM) during peak season (Oct-Apr)',
                    'Reference Letter must detail standing, # of games, level, and certification',
                    'Preference: Toronto resident AND TABO Home Board',
                    'Dual membership may be denied if TABO is not Home Board',
                  ].map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2.5 bg-blue-900 bg-opacity-20 rounded-xl border border-blue-800"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.proprofs.com/quiz-school/ugc/story.php?title=dual-membership-application"
                  target="_blank"
                  rel="noreferrer"
                  className="w-60 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white py-4 px-8 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2 group"
                >
                  Register Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-b from-gray-900 to-black py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'What is the time commitment?',
                a: 'New officials should expect weekday evenings and weekend commitments from October through April. Training camp requires both weekday and weekend attendance.',
              },
              {
                q: 'Do I need prior basketball experience?',
                a: "While basketball knowledge is helpful, it's not required. Our comprehensive training program covers rules, mechanics, and game management.",
              },
              {
                q: 'What happens after the camp?',
                a: 'Successful candidates enter a 2-year probationary period, officiating games while continuing development.',
              },
              {
                q: 'Can I officiate part-time?',
                a: 'Yes, but you must meet minimum availability: 2 days per week during peak season and at least 50 games annually.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full text-left p-6 font-semibold flex justify-between items-center hover:bg-gray-800 transition"
                >
                  {faq.q}
                  <span className="text-3xl text-orange-500">
                    {expandedFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 text-gray-400">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
