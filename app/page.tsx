import {
  MapPin,
  Phone,
  MessageCircle,
  Globe,
  Calendar,
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react'
import Image from 'next/image'

export default function RestaurantLinks() {

  const links = [
    {
      category: 'Online',
      items: [
        {
          icon: Globe,
          label: 'Visit Our Website',
          href: 'https://house6experience.com/',
        },
        {
          imageSrc: '/Chevan-removebg.png',
          imageAlt: 'Chevan logo',
          label: 'View Our Menu',
          href: '/menu',
        },
        {
          icon: Calendar,
          label: 'Make a Reservation',
          href: 'https://www.bellatavola.com/reservations',
        },
      ],
    },
    {
      category: 'Social Media',
      items: [
        {
          icon: Instagram,
          label: 'Follow on Instagram',
          href: 'https://www.instagram.com/foodbychevan?',
        },
        // {
        //   icon: Facebook,
        //   label: 'Like on Facebook',
        //   href: 'https://facebook.com/bellatavola',
        // },
        // {
        //   icon: Youtube,
        //   label: 'Subscribe on YouTube',
        //   href: 'https://youtube.com/@bellatavola',
        // },
      ],
    },
    {
      category: 'Contact',
      items: [
        {
          icon: Phone,
          label: '+234 803 306 4073',
          href: 'tel:+2348033064073',
        },
        {
          icon: MessageCircle,
          label: 'WhatsApp Us',
          href: 'https://wa.me/2348033064073',
        },
        {
          icon: MapPin,
          label: '6aa Cario Street, Biltmore Estate, Abuja',
          href: 'https://www.google.com/maps/place/Biltmore+Homes+Estate/@8.9833081,7.4141041,15z/data=!4m10!1m2!2m1!1s+6A+Cairo+Street,+Biltmore+Homes+Estate+Galadimawa+Abuja!3m6!1s0x104e737b52e7698b:0x811240e0cd488142!8m2!3d8.979293!4d7.430979!15sCjc2QSBDYWlybyBTdHJlZXQsIEJpbHRtb3JlIEhvbWVzIEVzdGF0ZSBHYWxhZGltYXdhIEFidWphWjgiNjZhIGNhaXJvIHN0cmVldCBiaWx0bW9yZSBob21lcyBlc3RhdGUgZ2FsYWRpbWF3YSBhYnVqYZIBD2hvdXNpbmdfc29jaWV0eZoBJENoZERTVWhOTUc5blMwVkpRMEZuVFVSQk5HUmlXalZCUlJBQuABAPoBBAgAEEs!16s%2Fg%2F11f61f2n5g?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden border">
              <Image
                src="/Chevan-removebg.png"
                alt="Chevan logo"
                width={96}
                height={96}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-primary mb-2">
                Chevan
              </h1>
              <p className="text-lg text-muted-foreground font-light">
                Your premium destination for unforgettable food and drink experiences in Lagos.
                Whether you’re looking for a laid-back hangout or a lively night out, Chevan Hospitality (Bar & Restaurant) delivers the perfect blend of ambiance, flavor, and fun.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        {/* Links Section */}
        <div className="space-y-8 mb-12">
          {links.map((section) => (
            <div key={section.category}>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.items.map((item, idx) => {
                  const IconComponent = item.icon
                  const isExternal = !item.href.startsWith('/')
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                    >
                      <button className="w-full flex items-center justify-between px-5 py-4 bg-white border border-border rounded-lg hover:border-accent hover:shadow-md transition-all duration-200 group">
                        <div className="flex items-center gap-4">
                          {item.imageSrc ? (
                            <Image
                              src={item.imageSrc}
                              alt={item.imageAlt}
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                          ) : (
                            IconComponent && (
                              <IconComponent className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                            )
                          )}
                          <span className="text-primary font-medium">{item.label}</span>
                        </div>
                        <svg
                          className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </a>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-2">Bella Tavola Restaurant</p>
          <p className="text-xs text-muted-foreground">
            6aa Cario Street, Biltmore Estate
          </p>
        </div>
      </main>
    </div>
  )
}
