"use client";

import { useState } from "react";
import {
  Input,
  Label,
  TextField,
  TextArea,
  Description,
  FieldError,
  Select,
  ListBox,
  Form,
} from "@heroui/react";

// ── Styles ───────────────────────────────────────────
const inputClass =
  "w-full h-11 px-3.5 text-[13.5px] text-black tracking-[-0.01em] bg-white border border-black/[0.15] rounded-none outline-none focus:border-black transition-colors placeholder:text-[#bbb]";

const textareaClass =
  "w-full px-3.5 py-3 text-[13.5px] text-black tracking-[-0.01em] bg-white border border-black/[0.15] rounded-none outline-none focus:border-black transition-colors placeholder:text-[#bbb] resize-none leading-relaxed";

const labelClass =
  "text-[13px] font-medium text-black tracking-[-0.01em] mb-1 block";

const descClass = "text-[12px] text-[#aaa] tracking-[-0.01em] mt-1 block";

const errorClass = "text-[12px] text-red-500 tracking-[-0.01em] mt-1 block";

const selectTriggerClass =
  "w-full h-11 px-3.5 text-[13.5px] text-black tracking-[-0.01em] bg-white border border-black/[0.15] rounded-none outline-none focus:border-black transition-colors";

// ── Hint tag component ───────────────────────────────
function Hint({ text }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block ml-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-4 h-4 rounded-full border border-black/[0.2] text-[10px] font-medium text-[#888] hover:border-black/40 hover:text-black transition-colors flex items-center justify-center leading-none"
      >
        ?
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-6 z-20 w-56 bg-black text-white text-[12px] tracking-[-0.01em] leading-relaxed px-3.5 py-2.5 shadow-lg">
            {text}
            <div className="absolute -top-1.5 left-2 w-3 h-3 bg-black rotate-45" />
          </div>
        </>
      )}
    </div>
  );
}

// ── Label row with hint ──────────────────────────────
function LabelWithHint({ label, hint, required }) {
  return (
    <div className="flex items-center mb-1">
      <span className="text-[13px] font-medium text-black tracking-[-0.01em]">
        {label}
        {required && <span className="text-[#aaa] ml-0.5">*</span>}
      </span>
      {hint && <Hint text={hint} />}
    </div>
  );
}

// ── Dynamic list input ───────────────────────────────
function DynamicList({ label, hint, placeholder, items, onChange }) {
  const addItem = () => onChange([...items, ""]);

  const removeItem = (i) => onChange(items.filter((_, idx) => idx !== i));

  const updateItem = (i, val) =>
    onChange(items.map((item, idx) => (idx === i ? val : item)));

  return (
    <div className="flex flex-col gap-2">
      <LabelWithHint label={label} hint={hint} />
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => updateItem(i, e.target.value)}
              placeholder={placeholder}
              className={`${inputClass} flex-1`}
            />
            <button
              type="button"
              onClick={() => removeItem(i)}
              className="w-9 h-11 flex items-center justify-center border border-black/[0.12] text-[#aaa] hover:text-black hover:border-black/30 transition-colors shrink-0"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={addItem}
        className="flex items-center gap-2 text-[12.5px] text-[#555] tracking-[-0.01em] hover:text-black transition-colors mt-1 w-fit"
      >
        <span className="w-5 h-5 border border-black/[0.15] flex items-center justify-center hover:border-black/30 transition-colors">
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 2v8M2 6h8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        Add item
      </button>
    </div>
  );
}

// ── Section wrapper ──────────────────────────────────
function Section({ step, title, description, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 py-10 border-b border-black/[0.06]">
      <div>
        <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#aaa] block mb-1">
          Step {step}
        </span>
        <h3 className="text-[15px] font-medium tracking-[-0.02em] text-black mb-1">
          {title}
        </h3>
        <p className="text-[13px] text-[#888] tracking-[-0.01em] leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
}

// ── Main component ───────────────────────────────────
export default function AddDestinationPage() {
  const [submitted, setSubmitted] = useState(false);

  // dynamic array states
  const [highlights, setHighlights] = useState([""]);
  const [included, setIncluded] = useState([""]);
  const [notIncluded, setNotIncluded] = useState([""]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const addDestinationData = Object.fromEntries(form.entries());

    // attach array fields — filter out empty strings
    addDestinationData.highlights = highlights.filter((h) => h.trim() !== "");
    addDestinationData.included = included.filter((h) => h.trim() !== "");
    addDestinationData.notIncluded = notIncluded.filter((h) => h.trim() !== "");

    // convert price and rating to numbers
    addDestinationData.price = Number(addDestinationData.price);
    addDestinationData.rating = Number(addDestinationData.rating);
    addDestinationData.trips = Number(addDestinationData.trips);

    const res = await fetch("http://localhost:4000/destination", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addDestinationData),
    });

    const data = await res.json();
    console.log("this is data that has been sent to mongodb : ", { data });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen bg-white pt-[52px]">
      <div className="max-w-4xl mx-auto px-5">
        {/* Page Header */}
        <div className="py-12 border-b border-black/[0.06]">
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
            Admin · Destinations
          </span>
          <h1 className="text-[36px] md:text-[48px] font-medium tracking-[-0.04em] text-black leading-[1.05] mb-3">
            Add destination
          </h1>
          <p className="text-[15px] text-[#888] tracking-[-0.01em] max-w-lg">
            Fill in all sections below to publish a new destination on Zondrift.
            Fields marked with * are required.
          </p>
        </div>

        <Form onSubmit={handleSubmit} validationBehavior="native">
          {/* ── Section 01: Basic Information ── */}
          <Section
            step="01"
            title="Basic information"
            description="Core details shown on destination cards throughout the site."
          >
            <TextField name="name" isRequired className="w-full">
              <div className="flex items-center mb-1">
                <Label className="text-[13px] font-medium text-black tracking-[-0.01em]">
                  Destination name *
                </Label>
                <Hint text="The main title of this destination shown on all cards and pages. Keep it short and clear — e.g. Bali Paradise, Tokyo Explorer." />
              </div>
              <Input
                placeholder="e.g. Bali Paradise, Tokyo Explorer"
                className={inputClass}
              />
              <Description className={descClass}>
                This is the main title shown on all destination cards
              </Description>
              <FieldError className={errorClass} />
            </TextField>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <TextField name="country" isRequired className="w-full">
                <div className="flex items-center mb-1">
                  <Label className="text-[13px] font-medium text-black tracking-[-0.01em]">
                    Country *
                  </Label>
                  <Hint text="The full country name where this destination is located — e.g. Indonesia, Japan, Greece." />
                </div>
                <Input placeholder="e.g. Indonesia" className={inputClass} />
                <FieldError className={errorClass} />
              </TextField>

              <TextField name="temp" className="w-full">
                <div className="flex items-center mb-1">
                  <Label className="text-[13px] font-medium text-black tracking-[-0.01em]">
                    Average temperature
                  </Label>
                  <Hint text="The typical temperature travellers can expect. Include the degree symbol — e.g. 28°C or 82°F." />
                </div>
                <Input placeholder="e.g. 28°C" className={inputClass} />
                <Description className={descClass}>
                  Typical temperature for this destination
                </Description>
              </TextField>
            </div>

            <TextField name="tagline" isRequired className="w-full">
              <div className="flex items-center mb-1">
                <Label className="text-[13px] font-medium text-black tracking-[-0.01em]">
                  Tagline *
                </Label>
                <Hint text="One short punchy sentence that sells this destination. This appears on the destination card so it needs to grab attention — e.g. Where gods meet the ocean." />
              </div>
              <Input
                placeholder="e.g. Discover Places You'll Never Forget"
                className={inputClass}
              />
              <Description className={descClass}>
                One short sentence shown on destination cards — make it
                compelling
              </Description>
              <FieldError className={errorClass} />
            </TextField>
          </Section>

          {/* ── Section 02: Classification ── */}
          <Section
            step="02"
            title="Classification"
            description="Helps travellers filter and discover this destination by type and travel style."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <div className="flex items-center mb-1">
                  <Label className={labelClass}>Category *</Label>
                  <Hint text="The primary type of this destination — used for the category filter on the destinations page. Pick the one that best describes it." />
                </div>
                <Select name="category" className="w-full">
                  <Select.Trigger className={selectTriggerClass}>
                    <Select.Value placeholder="Select a category" />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="beach" textValue="Beach">
                        Beach
                      </ListBox.Item>
                      <ListBox.Item id="city" textValue="City">
                        City
                      </ListBox.Item>
                      <ListBox.Item id="nature" textValue="Nature">
                        Nature
                      </ListBox.Item>
                      <ListBox.Item id="island" textValue="Island">
                        Island
                      </ListBox.Item>
                      <ListBox.Item id="adventure" textValue="Adventure">
                        Adventure
                      </ListBox.Item>
                      <ListBox.Item id="culture" textValue="Culture">
                        Culture
                      </ListBox.Item>
                      <ListBox.Item id="mountain" textValue="Mountain">
                        Mountain
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
                <span className={descClass}>
                  Primary type of this destination
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center mb-1">
                  <Label className={labelClass}>Travel style *</Label>
                  <Hint text="The type of traveller this destination is best suited for — used for the travel style filter. A beach resort is Couple or Luxury. A hiking trail is Adventure or Solo." />
                </div>
                <Select name="style" className="w-full">
                  <Select.Trigger className={selectTriggerClass}>
                    <Select.Value placeholder="Select a style" />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="solo" textValue="Solo">
                        Solo
                      </ListBox.Item>
                      <ListBox.Item id="couple" textValue="Couple">
                        Couple
                      </ListBox.Item>
                      <ListBox.Item id="family" textValue="Family">
                        Family
                      </ListBox.Item>
                      <ListBox.Item id="adventure" textValue="Adventure">
                        Adventure
                      </ListBox.Item>
                      <ListBox.Item id="luxury" textValue="Luxury">
                        Luxury
                      </ListBox.Item>
                      <ListBox.Item id="backpacker" textValue="Backpacker">
                        Backpacker
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
                <span className={descClass}>
                  Best suited for which traveller type
                </span>
              </div>
            </div>
          </Section>

          {/* ── Section 03: Pricing & Duration ── */}
          <Section
            step="03"
            title="Pricing & duration"
            description="Displayed on destination cards and the booking detail page."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <TextField name="price" isRequired className="w-full">
                <div className="flex items-center mb-1">
                  <Label className="text-[13px] font-medium text-black tracking-[-0.01em]">
                    Price per person (USD) *
                  </Label>
                  <Hint text="The starting price per person in US dollars. Enter numbers only — no $ sign or commas. e.g. 2700 not $2,700." />
                </div>
                <Input
                  type="number"
                  min="0"
                  placeholder="2700"
                  className={inputClass}
                />
                <Description className={descClass}>
                  Numbers only — e.g. 2700
                </Description>
                <FieldError className={errorClass} />
              </TextField>

              <TextField name="duration" isRequired className="w-full">
                <div className="flex items-center mb-1">
                  <Label className="text-[13px] font-medium text-black tracking-[-0.01em]">
                    Duration *
                  </Label>
                  <Hint text="The total length of the trip including travel days. Use the format: X Days / X Nights — e.g. 7 Days / 6 Nights." />
                </div>
                <Input placeholder="7 Days / 6 Nights" className={inputClass} />
                <Description className={descClass}>
                  Format: X Days / X Nights
                </Description>
                <FieldError className={errorClass} />
              </TextField>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <div className="flex items-center mb-1">
                  <Label className={labelClass}>Price range</Label>
                  <Hint text="The price bracket this destination falls into — used for the price range filter on the destinations page. Budget = under $2,000. Mid = $2,000-$4,000. Luxury = $4,000+." />
                </div>
                <Select name="priceRange" className="w-full">
                  <Select.Trigger className={selectTriggerClass}>
                    <Select.Value placeholder="Select price range" />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="budget" textValue="Budget">
                        Budget — Under $2,000
                      </ListBox.Item>
                      <ListBox.Item id="mid" textValue="Mid">
                        Mid — $2,000 to $4,000
                      </ListBox.Item>
                      <ListBox.Item id="luxury" textValue="Luxury">
                        Luxury — $4,000+
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
                <span className={descClass}>
                  Used for the price filter on the destinations page
                </span>
              </div>

              <TextField name="rating" className="w-full">
                <div className="flex items-center mb-1">
                  <Label className="text-[13px] font-medium text-black tracking-[-0.01em]">
                    Trip rating
                  </Label>
                  <Hint text="The overall rating for this destination out of 5. Use one decimal place — e.g. 4.9. This is shown as a star rating on destination cards." />
                </div>
                <Input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  placeholder="4.9"
                  className={inputClass}
                />
                <Description className={descClass}>
                  Out of 5 — e.g. 4.9
                </Description>
              </TextField>
            </div>

            <TextField name="trips" className="w-full">
              <div className="flex items-center mb-1">
                <Label className="text-[13px] font-medium text-black tracking-[-0.01em]">
                  Trips planned
                </Label>
                <Hint text="The number of trips planned to this destination on Zondrift. This social proof number is shown on cards and the detail page — e.g. 2400." />
              </div>
              <Input
                type="number"
                min="0"
                placeholder="e.g. 2400"
                className={inputClass}
              />
              <Description className={descClass}>
                Number of trips planned — shown as social proof on cards
              </Description>
            </TextField>
          </Section>

          {/* ── Section 04: Highlights, Included, Not Included ── */}
          <Section
            step="04"
            title="Trip details"
            description="What travellers will do, what is included, and what is not. Shown on the destination detail page."
          >
            <DynamicList
              label="Highlights"
              hint="Key experiences and activities travellers can do at this destination. Each item appears as a bullet point on the detail page — e.g. Visit the iconic Tanah Lot temple at sunset."
              placeholder="e.g. Visit the iconic Tanah Lot temple at sunset"
              items={highlights}
              onChange={setHighlights}
            />

            <div className="h-px bg-black/[0.05]" />

            <DynamicList
              label="What's included"
              hint="Everything that is included in the trip price — flights, accommodation, meals, transfers, tours etc. Each item appears with a checkmark on the detail page."
              placeholder="e.g. Return flights from London"
              items={included}
              onChange={setIncluded}
            />

            <div className="h-px bg-black/[0.05]" />

            <DynamicList
              label="What's not included"
              hint="Anything the traveller needs to pay for separately — insurance, personal spending, optional tours, visa fees etc. Each item appears with a cross on the detail page."
              placeholder="e.g. Travel insurance"
              items={notIncluded}
              onChange={setNotIncluded}
            />
          </Section>

          {/* ── Section 05: Media & Description ── */}
          <Section
            step="05"
            title="Media & description"
            description="Image and descriptions shown across cards and the destination detail page."
          >
            <TextField name="image" isRequired className="w-full">
              <div className="flex items-center mb-1">
                <Label className="text-[13px] font-medium text-black tracking-[-0.01em]">
                  Image URL *
                </Label>
                <Hint text="Paste a direct public image URL. Unsplash works great — right click an image and copy the image address. Make sure the URL ends in .jpg or .png or includes image format params." />
              </div>
              <Input
                type="url"
                placeholder="https://images.unsplash.com/..."
                className={inputClass}
              />
              <Description className={descClass}>
                Paste a direct image link — Unsplash, Cloudinary, or any public
                URL
              </Description>
              <FieldError className={errorClass} />
            </TextField>

            <TextField name="shortDescription" isRequired className="w-full">
              <div className="flex items-center mb-1">
                <Label className="text-[13px] font-medium text-black tracking-[-0.01em]">
                  Short description *
                </Label>
                <Hint text="A short punchy summary shown on destination cards — 2 to 3 sentences max. Focus on the emotion and experience, not facts. e.g. Tropical temples, lush rice fields and ocean sunsets. Bali is pure magic." />
              </div>
              <TextArea
                placeholder="A short compelling summary shown on destination cards — 2 to 3 sentences..."
                className={`${textareaClass} min-h-[80px]`}
              />
              <Description className={descClass}>
                Shown on destination cards — keep it punchy and under 3
                sentences
              </Description>
              <FieldError className={errorClass} />
            </TextField>

            <TextField name="description" className="w-full">
              <div className="flex items-center mb-1">
                <Label className="text-[13px] font-medium text-black tracking-[-0.01em]">
                  Full description
                </Label>
                <Hint text="The full detailed description shown on the destination detail page. Cover everything — highlights, local culture, food, best time to visit, what to expect. The more detail the better." />
              </div>
              <TextArea
                placeholder="Write a detailed description covering highlights, local culture, best time to visit, must-see attractions, food, transport, and anything else that makes this destination special..."
                className={`${textareaClass} min-h-[160px]`}
              />
              <Description className={descClass}>
                Shown on the destination detail page — be as detailed as
                possible
              </Description>
            </TextField>
          </Section>

          {/* Success message */}
          {submitted && (
            <div className="flex items-center gap-3 border border-green-200 bg-green-50 px-4 py-3 mt-8 text-[13px] text-green-700 tracking-[-0.01em] rounded-md mb-10">
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M5 8l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Destination published successfully.
            </div>
          )}

          {/* ── Actions ── */}
          <div className="flex items-center justify-between gap-4 py-10">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="text-[13px] text-[#888] tracking-[-0.01em] hover:text-black transition-colors"
            >
              ← Cancel
            </button>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="text-[13px] font-medium text-white bg-black tracking-[-0.01em] px-8 py-2.5 hover:bg-black/80 transition-colors"
              >
                Publish destination
              </button>
            </div>
          </div>
        </Form>
      </div>
    </main>
  );
}
