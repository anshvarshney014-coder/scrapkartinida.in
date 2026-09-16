import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Blog from "../models/Blog.js";

const posts = [
  {
    title: "How to Scrap an Old Car in India Without Legal Headaches",
    excerpt:
      "A step-by-step look at the paperwork, timelines, and pitfalls to avoid when retiring an end-of-life vehicle the legal way.",
    category: "Guides",
    coverColor: "#14532D",
    readTimeMinutes: 5,
    content: `Retiring a vehicle in India involves more than handing over the keys. Before you scrap a car or bike, it's worth understanding why the process matters and how to avoid the common traps that leave owners exposed.

The biggest risk with informal scrap dealers is that the vehicle stays registered in your name even after it's gone. Any challan, accident, or misuse involving that vehicle can still trace back to you unless the deregistration is done properly through an authorised facility.

What to keep ready: your Registration Certificate (RC), a valid ID proof, and your bank details for payment. A registered vehicle scrapping facility will use these to process a proper Certificate of Deposit and, eventually, a Certificate of Vehicle Scrapping.

Once the paperwork is verified, the vehicle is picked up, valued, and dismantled at a facility that follows environmental and safety standards - keeping usable metal out of landfills and out of informal, unsafe dismantling yards.

The short version: always confirm you're dealing with an authorised scrapping facility, keep copies of every document you hand over, and don't release your vehicle until you have a receipt or acknowledgment in hand.`,
  },
  {
    title: "RVSF Explained: What an Authorised Scrapping Facility Actually Does",
    excerpt:
      "Registered Vehicle Scrapping Facilities exist for a reason. Here's what separates them from the scrap yard around the corner.",
    category: "Industry",
    coverColor: "#B5651D",
    readTimeMinutes: 4,
    content: `A Registered Vehicle Scrapping Facility (RVSF) is authorised under government guidelines to permanently and safely dismantle end-of-life vehicles. That authorisation is what makes the whole process legally binding for the owner.

Unlike an unregistered scrap dealer, an RVSF issues formal documentation at each stage: an acknowledgment of deposit, and eventually a certificate confirming the vehicle has been scrapped. That certificate is what actually closes the loop on your ownership record.

RVSFs also follow environmental handling standards for fluids, batteries, and other materials that shouldn't end up dumped informally. Metal is recovered and recycled, reducing the need for fresh raw material extraction.

When you're comparing where to send an old vehicle, ask directly whether the facility is RVSF-associated and ask to see the documentation you'll receive. A legitimate operator will answer both questions without hesitation.`,
  },
  {
    title: "What Determines Your Vehicle's Scrap Value?",
    excerpt:
      "Weight, materials, and current market rates all play a role. Here's what actually moves the number you're quoted.",
    category: "Pricing",
    coverColor: "#1C1F1D",
    readTimeMinutes: 4,
    content: `Scrap valuations aren't arbitrary. A few factors consistently move the number: the vehicle's kerb weight, the proportion of recoverable metal versus non-metal components, and the prevailing market rate for ferrous and non-ferrous scrap on the day of pickup.

Heavier vehicles with more recoverable steel and aluminium typically fetch more. Batteries, tyres, and certain fluids are handled separately and don't factor into the core metal valuation, though a transparent operator will explain how each is accounted for.

Market rates for scrap metal shift with commodity prices, so a quote given today may differ from one given a month from now - which is why most operators quote at the time of pickup rather than locking in a price weeks in advance.

The best way to protect yourself is simple: get the valuation in writing, understand what it includes, and confirm there are no deductions applied after the vehicle has already been collected.`,
  },
];

const run = async () => {
  await connectDB();

  for (const post of posts) {
    await Blog.findOneAndUpdate(
      { title: post.title },
      post,
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
  }

  console.log(`Seeded ${posts.length} blog posts.`);
  await mongoose.disconnect();
  process.exit(0);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
