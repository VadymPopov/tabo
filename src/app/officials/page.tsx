'use client';

import { useState } from 'react';

import { Calendar, Mail, Send } from 'lucide-react';
import Link from 'next/link';

export default function BookingOfficialsMockup() {
  const [formData, setFormData] = useState({
    organizationName: '',
    primaryContact: '',
    primaryContactEmail: '',
    primaryContactPhone: '',
    gameDateTimeLocation: '',
    numberOfGames: '',
    paymentMethod: '',
    gameLength: '',
    gender: '',
    gameLevel: '',
    ageGroup: '',
  });

  const assignors = [
    {
      name: 'Garnet Gibson',
      level: 'Elementary',
      date: 'Nov. 1, 2025 - May 31, 2026',
      email: 'garnetgibson@gmail.com',
    },
    {
      name: 'Michael Broughton',
      level: 'High School',
      date: 'Nov. 1, 2025 - May 31, 2026',
      email: 'tabonightref@gmail.com',
    },
    {
      name: 'Vince Pileggi',
      level: 'Recreational/Night Ball',
      date: 'Jan. 1, 2025 - May 31, 2026',
      email: 'vpileggi15@gmail.com',
    },
    {
      name: 'Allan Castellvi',
      level: 'Rep/Club Ball',
      date: 'Jan. 1, 2025 - May 31, 2026',
      email: 'acastellvi@hotmail.com',
    },
    {
      name: 'Marios Tenentes',
      level: 'D & G League',
      date: 'Sept. 1, 2025 - May 31, 2026',
      email: 'taborecbballassignor@gmail.com',
    },
    {
      name: 'Lloyd Eidelman',
      leagues: [
        {
          level: 'Recreational/Night Ball',
          date: 'Nov 1, 2025 - Dec. 31, 2025',
        },
        { level: 'Summer Ball', date: 'Jun. 1, 2026 - Aug. 31, 2026' },
      ],
      email: 'tabosummerassignor@gmail.com',
    },
  ];

  const handleSubmit = () => {
    alert(
      'Booking request submitted! You will receive confirmation within 24 hours.',
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg/7.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl text-start space-y-6">
          <h2 className="text-5xl font-extrabold">Book Officials</h2>

          <p className="text-gray-200 text-lg leading-relaxed text-justify">
            Fully trained and Certified basketball officials for your games,
            tournaments, and events across the City of Toronto. To ensure
            availability and proper coverage, requests are required at least 2
            weeks in advance of your event date. Please confirm with the
            specific Assignor that your request was fulfilled at least 5 days
            prior to your event. Contact information for each Assignor are noted
            below.
          </p>

          <div className="flex gap-4 justify-start">
            <Link
              href="#booking-form"
              className="px-6 py-3 bg-[#d57a1f] text-black font-semibold rounded-xl hover:opacity-80 transition hover:cursor-pointer"
            >
              Book now
            </Link>
          </div>
        </div>
      </section>

      {/* Assignors*/}
      <section className="bg-gradient-to-b from-black to-gray-900">
        <section className="px-6 py-24 max-w-6xl mx-auto border-b border-white">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Assignors Team
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            The individuals responsible for assigning games across all leagues.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignors.map((assignor, idx) => (
              <a
                key={idx}
                href={`mailto:${assignor.email}`}
                className="group bg-transparent rounded-2xl p-6 border border-white hover:border-[rgb(255,108,0)] transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-[rgb(255,108,0)] transition-colors">
                  {assignor.name}
                </h3>

                {assignor.leagues ? (
                  <div className="mb-3 space-y-3">
                    {assignor.leagues.map((league, leagueIdx) => (
                      <div key={leagueIdx}>
                        <p className="text-white text-sm font-semibold mb-1">
                          {league.level}
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="break-words">{league.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="text-white text-sm font-semibold mb-3">
                      {assignor.level}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm group-hover:text-gray-300 transition-colors mb-2">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="break-words">{assignor.date}</span>
                    </div>
                  </>
                )}

                <div className="flex items-center gap-2 text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">{assignor.email}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </section>

      {/* Booking Form */}
      <section
        className="bg-gradient-to-b from-gray-900 to-black"
        id="booking-form"
      >
        <div className="max-w-2xl mx-auto  px-6 py-20">
          <div className="bg-[rgb(19,19,21)] rounded-2xl p-8 border border-gray-700 h-fit">
            <h2 className="text-3xl font-bold mb-6">Book Officials</h2>
            <p className="text-gray-400 mb-8">
              To ensure availability and proper coverage, requests are required
              at least 2 weeks in advance of your event date. Please confirm
              with the specific Assignor that your request was fulfilled at
              least 5 days prior to your event.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Organization/Team Name *
                </label>
                <input
                  type="text"
                  value={formData.organizationName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      organizationName: e.target.value,
                    })
                  }
                  className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                  placeholder="Enter organization or team name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Primary Contact (Responsible Individual) *
                </label>
                <input
                  type="text"
                  value={formData.primaryContact}
                  onChange={(e) =>
                    setFormData({ ...formData, primaryContact: e.target.value })
                  }
                  className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                  placeholder="Full name of responsible individual"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Primary Contact Email (Responsible Individual) *
                </label>
                <input
                  type="email"
                  value={formData.primaryContactEmail}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      primaryContactEmail: e.target.value,
                    })
                  }
                  className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Primary Contact Phone Number (Responsible Individual) *
                </label>
                <input
                  type="tel"
                  value={formData.primaryContactPhone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      primaryContactPhone: e.target.value,
                    })
                  }
                  className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                  placeholder="(416) 555-0100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Game Date(s), Time(s) and Location(s) *
                </label>
                <textarea
                  value={formData.gameDateTimeLocation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      gameDateTimeLocation: e.target.value,
                    })
                  }
                  rows={4}
                  className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition resize-none"
                  placeholder="e.g., Jan 15, 2026 at 7:00 PM - Toronto Community Centre, 123 Main St"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Number of Game(s) *
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.numberOfGames}
                  onChange={(e) =>
                    setFormData({ ...formData, numberOfGames: e.target.value })
                  }
                  className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                  placeholder="1"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Pay-at-Site or Centrally Billed *
                </label>
                <select
                  value={formData.paymentMethod}
                  onChange={(e) =>
                    setFormData({ ...formData, paymentMethod: e.target.value })
                  }
                  className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                >
                  <option value="">Select payment method</option>
                  <option value="pay-at-site">Pay-at-Site</option>
                  <option value="centrally-billed">
                    Centrally Billed (only if $1,600 or more in total)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Game Length (in Minutes and Stop or Running Time) *
                </label>
                <input
                  type="text"
                  value={formData.gameLength}
                  onChange={(e) =>
                    setFormData({ ...formData, gameLength: e.target.value })
                  }
                  className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                  placeholder="e.g., 40 minutes running time or 48 minutes stop time"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Gender(s) *
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="co-ed">Co-Ed</option>
                  <option value="LGBTQ2S+">LGBTQ2S+</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Game Level(s) *
                </label>
                <select
                  value={formData.gameLevel}
                  onChange={(e) =>
                    setFormData({ ...formData, gameLevel: e.target.value })
                  }
                  className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                >
                  <option value="">Select game level</option>
                  <option value="rep-club">Club/Rep</option>
                  <option value="select/house">Select/House League</option>
                  <option value="elementary">Elementary/Middle School</option>
                  <option value="high-school">High School</option>
                  <option value="recreational">Adult Recreational</option>
                  <option value="high-school">Community College/OSBA</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Age Group(s)
                </label>
                <input
                  type="text"
                  value={formData.ageGroup}
                  onChange={(e) =>
                    setFormData({ ...formData, ageGroup: e.target.value })
                  }
                  className="w-full bg-[rgb(29,29,32)] border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[rgb(255,108,0)] transition"
                  placeholder="e.g., U14, U16, Senior, etc."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[rgb(255,108,0)] to-[#d57a1f] hover:from-[#d57a1f] hover:to-[rgb(255,108,0)] text-white py-4 px-8 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Booking Request
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
