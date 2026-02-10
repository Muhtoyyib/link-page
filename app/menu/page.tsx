import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const menuSections = [
	{
		title: 'Rice Meals',
		items: [
			{ name: 'Party Jollof Rice', price: 'NGN 4,000' },
			{ name: 'Nigerian Fried Rice', price: 'NGN 5,000' },
			{ name: 'Village Rice', price: 'NGN 8,000' },
			{ name: 'Coconut Rice', price: 'NGN 6,000' },
			{ name: 'Steamed Basmati Rice', price: 'NGN 3,000' },
			{ name: 'Basmati Fried Rice', price: 'NGN 6,000' },
			{ name: 'Asun Jollof Rice', price: 'NGN 6,000' },
			{ name: 'Chinese Fried Rice', price: 'NGN 8,000' },
			{ name: 'Steamed Nigerian Rice', price: 'NGN 2,000' },
		],
	},
	{
		title: 'Soups',
		items: [
			{ name: 'Fisherman Soup', price: 'NGN 15,000' },
			{ name: 'Seafood Okro', price: 'NGN 15,000' },
			{ name: 'Egusi', price: 'NGN 2,500' },
			{ name: 'Ogbono', price: 'NGN 2,500' },
			{ name: 'Fresh Okro', price: 'NGN 3,000' },
			{ name: 'Efo Riro', price: 'NGN 3,000' },
			{ name: 'Vegetable', price: 'NGN 3,000' },
			{ name: 'Bitterleaf Soup', price: 'NGN 3,000' },
			{ name: 'Oha Soup', price: 'NGN 3,000' },
			{ name: 'White Soup', price: 'NGN 6,000' },
		],
	},
	{
		title: 'Swallow (per portion)',
		items: [
			{ name: 'Eba', price: 'NGN 1,500' },
			{ name: 'Semo', price: 'NGN 2,000' },
			{ name: 'Poundo', price: 'NGN 2,000' },
			{ name: 'Wheat', price: 'NGN 2,000' },
			{ name: 'Oatmeal', price: 'NGN 2,000' },
			{ name: 'Amala', price: 'NGN 1,500' },
		],
	},
	{
		title: 'Protein (per portion)',
		items: [
			{ name: 'Chicken', price: 'NGN 3,000' },
			{ name: 'Beef', price: 'NGN 2,000' },
			{ name: 'Goatmeat', price: 'NGN 3,000' },
			{ name: 'Titus Fish', price: 'NGN 2,000' },
			{ name: 'Turkey', price: 'NGN 6,000' },
			{ name: 'Croaker', price: 'NGN 4,000' },
			{ name: 'Kpomo', price: 'NGN 1,500' },
		],
	},
	{
		title: 'Pasta',
		items: [
			{ name: 'Stir Fry Pasta', price: 'NGN 5,000' },
			{ name: 'Jollof Pasta', price: 'NGN 4,000' },
			{ name: 'Penne in Cream', price: 'NGN 7,000' },
			{ name: 'Penne Stir Fry', price: 'NGN 7,000' },
			{ name: 'Singapore Noodles', price: 'NGN 8,000' },
			{ name: 'Village Pasta', price: 'NGN 8,000' },
			{ name: 'Noodles & Egg', price: 'NGN 3,500' },
			{ name: 'Vegetable Pasta', price: 'NGN 5,000' },
		],
	},
	{
		title: 'Pepper Soups',
		items: [
			{ name: 'Cowleg', price: 'NGN 7,000' },
			{ name: 'Chicken', price: 'NGN 5,000' },
			{ name: 'Goatmeat', price: 'NGN 5,000' },
			{ name: 'Catfish', price: 'NGN 6,000' },
			{ name: 'Assorted', price: 'NGN 5,000' },
			{ name: 'Turkey', price: 'NGN 8,000' },
		],
	},
	{
		title: 'Chips & Sides',
		items: [
			{ name: 'Potato Chips & Omelette', price: 'NGN 4,000' },
			{ name: 'Fried Yam & Egg Sauce', price: 'NGN 4,000' },
			{ name: 'Boiled Yam & Egg Sauce', price: 'NGN 5,000' },
			{ name: 'Boiled Plantain & Egg Sauce', price: 'NGN 5,500' },
			{ name: 'Fried Plantain & Egg Sauce', price: 'NGN 5,000' },
			{ name: 'Chicken & Chips', price: 'NGN 7,000' },
		],
	},
	{
		title: 'Local Dishes',
		items: [
			{ name: 'Abacha & Ugba', price: 'NGN 5,000' },
			{ name: 'Isi-Ewu', price: 'NGN 8,500' },
			{ name: 'Nkwobi', price: 'NGN 5,000' },
			{ name: 'Boiled Yam & Ugba Sauce', price: 'NGN 6,000' },
		],
	},
	{
		title: 'Sauces',
		items: [
			{ name: 'Shredded Chicken Sauce', price: 'NGN 6,000' },
			{ name: 'Shredded Beef Sauce', price: 'NGN 6,000' },
			{ name: 'Red Stew', price: 'NGN 1,500' },
			{ name: 'Mackerel Fish Sauce', price: 'NGN 7,000' },
			{ name: 'Chicken Curry', price: 'NGN 8,000' },
		],
	},
	{
		title: 'Peppered Protein',
		items: [
			{ name: 'Peppered Goatmeat', price: 'NGN 3,000' },
			{ name: 'Peppered Chicken', price: 'NGN 4,000' },
			{ name: 'Peppered Turkey', price: 'NGN 8,000' },
			{ name: 'Peppered Kpomo', price: 'NGN 2,000' },
			{ name: 'Peppered Beef', price: 'NGN 3,000' },
		],
	},
	{
		title: 'Salads (available on pre-order)',
		items: [
			{ name: 'Chicken Caesar Salad', price: 'NGN 10,000' },
			{ name: 'Chevan Salad', price: 'NGN 9,000' },
			{ name: 'Coleslaw', price: 'NGN 2,000' },
			{ name: 'Fruit Salad', price: 'NGN 4,000' },
		],
	},
	{
		title: 'Beans',
		items: [
			{ name: 'Beans Porridge', price: 'NGN 3,000' },
			{ name: 'Fully Loaded Beans Porridge', price: 'NGN 6,000' },
			{ name: 'Yam Porridge', price: 'NGN 3,000' },
			{ name: 'Fully Loaded Yam Porridge', price: 'NGN 6,000' },
			{ name: 'Plantain Porridge', price: 'NGN 3,000' },
			{ name: 'Fully Loaded Plantain Porridge', price: 'NGN 6,000' },
		],
	},
	{
		title: 'Sandwiches',
		items: [
			{ name: 'Club Sandwich', price: 'NGN 6,000' },
			{ name: 'Philly Cheese Sandwich', price: 'NGN 6,500' },
			{ name: 'Chicken Shawarma', price: 'NGN 6,000' },
			{ name: 'Beef Shawarma', price: 'NGN 6,000' },
			{ name: 'Meat Pie', price: 'NGN 1,500' },
			{ name: 'Chicken Pie', price: 'NGN 1,500' },
		],
	},
	{
		title: 'Fresh Juice',
		items: [
			{ name: 'Orange Juice', price: 'NGN 1,500' },
			{ name: 'Watermelon Juice', price: 'NGN 1,500' },
			{ name: 'Pineapple Juice', price: 'NGN 1,500' },
			{ name: 'Tigernut', price: 'NGN 2,000' },
		],
	},
	{
		title: 'Grilled Fish',
		items: [
			{ name: 'Small Size', price: 'NGN 10,000' },
			{ name: 'Big Size', price: 'NGN 15,000' },
		],
	},
]

export default function MenuPage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<div className="relative overflow-hidden border-b bg-white">
				<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
				<div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
				<div className="max-w-5xl mx-auto px-4 py-12 sm:py-16 relative">
					<div className="flex flex-col gap-4">
						<Link
							href="/"
							className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
						>
							<ArrowLeft className="h-4 w-4" />
							Back to links
						</Link>
						<div>
							<p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
								Chevan Menu
							</p>
							<h1 className="text-4xl sm:text-5xl font-light tracking-tight text-primary mt-2">
								Explore the full menu
							</h1>
							<p className="text-base sm:text-lg text-muted-foreground mt-3 max-w-2xl">
								Everything on the menu, beautifully organized. Tap any section to scan the
								items.
							</p>
						</div>
					</div>
				</div>
			</div>

			<main className="max-w-5xl mx-auto px-4 py-12">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
					<div className="flex flex-wrap gap-3">
						{/* Removed PDF download and open links */}
					</div>
					<div className="rounded-full border border-border bg-white px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
						Updated menu
					</div>
				</div>

				<div className="grid gap-6 sm:grid-cols-2">
					{menuSections.map((section) => (
						<section
							key={section.title}
							className="rounded-3xl border border-border bg-white/80 p-6 shadow-sm"
						>
							<div className="flex items-center justify-between gap-4">
								<h2 className="text-xl font-semibold text-primary">{section.title}</h2>
								<span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
									{section.items.length} items
								</span>
							</div>
							<div className="mt-5 space-y-3">
								{section.items.map((item) => (
									<div
										key={`${section.title}-${item.name}`}
										className="flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-white px-4 py-3"
									>
										<span className="text-sm font-medium text-primary">{item.name}</span>
										<span className="text-sm font-semibold text-primary">
											{item.price}
										</span>
									</div>
								))}
							</div>
						</section>
					))}
				</div>

				<div className="mt-10 rounded-3xl border border-border bg-white/80 p-6 text-sm text-muted-foreground shadow-sm">
					Prices are listed per portion. For group orders or custom requests,
					<a
						href="tel:+2348033064073"
						className="font-medium text-primary hover:text-accent transition-colors"
					>
						call us
					</a>{' '}
					or
					<a
						href="https://wa.me/2348033064073"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-primary hover:text-accent transition-colors"
					>
						WhatsApp us
					</a>.
				</div>
			</main>
		</div>
	)
}
