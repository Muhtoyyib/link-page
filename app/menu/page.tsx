import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const menuSections = [
	{
		title: 'Rice Meals',
		items: [
			{ name: 'Fried Rice', price: 'NGN 5,000' },
			{ name: 'Party Jollof Rice', price: 'NGN 4,000' },
			{ name: 'Asun Rice', price: 'NGN 6,000' },
			{ name: 'Basmati Fried Rice', price: 'NGN 6,000' },
			{ name: 'Coconut Rice', price: 'NGN 6,000' },
			{ name: 'Native Rice', price: 'NGN 8,000' },
			{ name: 'White Basmati Rice', price: 'NGN 5,500' },
			{ name: 'White Rice', price: 'NGN 4,500' },
		],
	},
	{
		title: 'Protein Options',
		items: [
			{ name: 'Chicken', price: 'NGN 3,500' },
			{ name: 'Beef', price: 'NGN 2,000' },
			{ name: 'Goatmeat', price: 'NGN 3,000' },
			{ name: 'Titus Fish', price: 'NGN 2,000' },
			{ name: 'Kpomo (Pomo)', price: 'NGN 1,500' },
		],
	},
	{
		title: 'Swallow',
		items: [
			{ name: 'Eba', price: 'NGN 2,000' },
			{ name: 'Semo', price: 'NGN 2,000' },
			{ name: 'Pounded Yam', price: 'NGN 2,500' },
			{ name: 'Amala', price: 'NGN 2,500' },
		],
	},
	{
		title: 'Pepper Soups',
		items: [
			{ name: 'Chicken Pepper Soup', price: 'NGN 5,500' },
			{ name: 'Goatmeat Pepper Soup', price: 'NGN 5,500' },
			{ name: 'Catfish Pepper Soup', price: 'NGN 6,000' },
			{ name: 'Assorted Pepper Soup', price: 'NGN 5,000' },
		],
	},
	{
		title: 'Soups',
		items: [
			{ name: 'Eforiro Soup', price: 'NGN 3,000' },
			{ name: 'Okra Soup', price: 'NGN 2,500' },
			{ name: 'Vegetable Soup', price: 'NGN 3,000' },
			{ name: 'Oha Soup', price: 'NGN 3,000' },
			{ name: 'Ogbono Soup', price: 'NGN 2,500' },
		],
	},
	{
		title: 'Pasta',
		items: [
			{ name: 'Jollof Pasta', price: 'NGN 6,000' },
			{ name: 'Nigerian Pasta', price: 'NGN 8,000' },
			{ name: 'Vegetable Pasta', price: 'NGN 8,000' },
			{ name: 'Stir-fry Pasta', price: 'NGN 6,500' },
			{ name: 'Noodles – Fry or Boil Egg', price: 'NGN 4,000' },
			{ name: 'Chicken & Vegetable Pasta', price: 'NGN 9,000' },
		],
	},
	{
		title: 'Porridge',
		items: [
			{ name: 'Beans Porridge', price: 'NGN 3,500' },
			{ name: 'Fried Loaded Beans Porridge', price: 'NGN 6,000' },
			{ name: 'Yam Porridge', price: 'NGN 4,000' },
			{ name: 'Fried Loaded Yam Porridge', price: 'NGN 7,000' },
			{ name: 'Plantain Porridge', price: 'NGN 6,000' },
			{ name: 'Fried Loaded Plantain Porridge', price: 'NGN 10,000' },
		],
	},
	{
		title: 'Local Dish',
		items: [
			{ name: 'Abacha', price: 'NGN 3,000' },
			{ name: 'Proteinous Abacha', price: 'NGN 5,000' },
			{ name: 'Isi Ewu (Full)', price: 'NGN 15,000' },
			{ name: 'Isi Ewu (Half)', price: 'NGN 5,000' },
		],
	},
	{
		title: 'Platters',
		items: [
			{
				name: 'Combo Platter — Half Chicken, Grilled Fish, Beef, Goatmeat, Gizzard, Choice of Fries & Rice (Jollof or Fried)',
				price: 'NGN 70,000',
			},
		],
	},
	{
		title: 'Peppered Meat',
		items: [
			{ name: 'Peppered Goatmeat', price: 'NGN 6,000' },
			{ name: 'Peppered Chicken', price: 'NGN 5,000' },
			{ name: 'Peppered Beef', price: 'NGN 6,000' },
			{ name: 'Peppered Asun', price: 'NGN 2,500' },
			{ name: 'Peppered Kpomo', price: 'NGN 1,500' },
		],
	},
	{
		title: 'Chips & Sides',
		items: [
			{ name: 'Potato Chips & Omelette', price: 'NGN 4,000' },
			{ name: 'Potato Chips & Boiled Egg', price: 'NGN 4,000' },
			{ name: 'Potato Chips & Egg Sauce', price: 'NGN 5,000' },
			{ name: 'Fried Yam & Egg Sauce', price: 'NGN 5,000' },
			{ name: 'Fried Plantain & Egg Sauce', price: 'NGN 5,000' },
			{ name: 'Boiled Plantain & Egg Sauce', price: 'NGN 5,500' },
			{ name: 'Chicken & Chips', price: 'NGN 6,000' },
		],
	},
	{
		title: 'Wraps & Shawarma',
		items: [
			{ name: 'Beef Shawarma', price: 'NGN 6,000' },
			{ name: 'Chicken Shawarma', price: 'NGN 6,000' },
			{ name: 'Meat Pie', price: 'NGN 1,500' },
			{ name: 'Chicken Pie', price: 'NGN 1,500' },
			{ name: 'Double Sausage Shawarma', price: 'NGN 8,000' },
		],
	},
	{
		title: 'Grilled Fish',
		items: [
			{ name: 'Big Fish', price: 'NGN 10,000' },
			{ name: 'Large Fish', price: 'NGN 15,000' },
		],
	},
	{
		title: 'Fresh Healthy Drinks',
		items: [
			{ name: 'Orange Juice', price: 'NGN 2,000' },
			{ name: 'Watermelon Juice', price: 'NGN 2,000' },
			{ name: 'Pineapple Juice', price: 'NGN 2,000' },
			{ name: 'Zobo', price: 'NGN 1,000' },
			{ name: 'Tiger Nut Drink', price: 'NGN 3,000' },
		],
	},
	{
		title: 'Sides',
		items: [
			{ name: 'Plantain', price: 'NGN 1,500' },
			{ name: 'Moi Moi', price: 'NGN 1,500' },
			{ name: 'Coleslaw', price: 'NGN 2,000' },
			{ name: 'Bread', price: 'NGN 1,000' },
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
