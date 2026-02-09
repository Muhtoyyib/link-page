import {
  MapPin,
  Phone,
  MessageCircle,
  Globe,
  UtensilsCrossed,
  Calendar,
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react'

export default function RestaurantLinks() {

  const links = [
    {
      category: 'Online',
      items: [
        {
          icon: Globe,
          label: 'Visit Our Website',
          href: 'https://www.bellatavola.com',
        },
        {
          icon: UtensilsCrossed,
          label: 'View Our Menu',
          href: 'https://www.bellatavola.com/menu',
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
          href: 'https://instagram.com/bellatavola',
        },
        {
          icon: Facebook,
          label: 'Like on Facebook',
          href: 'https://facebook.com/bellatavola',
        },
        {
          icon: Youtube,
          label: 'Subscribe on YouTube',
          href: 'https://youtube.com/@bellatavola',
        },
      ],
    },
    {
      category: 'Contact',
      items: [
        {
          icon: Phone,
          label: '+1 (555) 123-4567',
          href: 'tel:+15551234567',
        },
        {
          icon: MessageCircle,
          label: 'WhatsApp Us',
          href: 'https://wa.me/15551234567',
        },
        {
          icon: MapPin,
          label: 'Find Us on Google Maps',
          href: 'https://maps.google.com/maps/place/Bella+Tavola',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
              <UtensilsCrossed className="w-12 h-12 text-accent-foreground" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-primary mb-2">
                Bella Tavola
              </h1>
              <p className="text-lg text-muted-foreground font-light">
                Authentic Italian Dining Experience
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
                  return (
                    <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer">
                      <button className="w-full flex items-center justify-between px-5 py-4 bg-white border border-border rounded-lg hover:border-accent hover:shadow-md transition-all duration-200 group">
                        <div className="flex items-center gap-4">
                          <IconComponent className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
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
            123 Italian Street, Culinary City, CC 12345
          </p>
        </div>
      </main>
    </div>
  )
}
