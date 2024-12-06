import { VerifyPricingIfExists } from "@/data/pricing-data";
import OrderSummary from "../_components/OrderSummary";
import CourseDetails from "../_components/CourseDetails";
import { notFound } from "next/navigation";
import StripeCheckout from "../_components/StripeCheckout";

export default async function CheckoutPage({
	params,
}: {
	params: Promise<{ [slug: string]: string }>;
}) {
	const { slug } = await params;
	const pricing = await VerifyPricingIfExists(slug);
	if(!pricing) return notFound()

	return (
		<div className="min-h-screen bg-[#f8efe8] p-4 md:p-8">
			<div className="max-w-4xl mx-auto space-y-8">
				<div className="text-center space-y-2">
					<h1 className="text-4xl font-bold">
						Complete Your Checkout
					</h1>
					<p className="text-muted-foreground">
						Get Our Ultimate Digital Course
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2">
					<StripeCheckout amount={pricing.price} />

					<div className="space-y-8">
						<OrderSummary pricing={pricing} />
						<CourseDetails pricing={pricing} />
					</div>
				</div>
			</div>
		</div>
	);
}
