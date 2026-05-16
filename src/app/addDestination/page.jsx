"use client";

import { useState } from "react";
import {
  Button,
  Input,
  TextField,
  TextArea,
  Select,
  ListBox,
} from "@heroui/react";

// ── Section wrapper ──────────────────────────────────
function Section({ number, title, description, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 py-10 border-b border-black/[0.06]">
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#aaa] mb-1">
          Step {number}
        </span>
        <h3 className="text-[15px] font-medium tracking-[-0.02em] text-black">
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

// ── Field wrapper ────────────────────────────────────
function Field({ label, hint, children, required }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-[13px] font-medium text-black tracking-[-0.01em]">
        {label}
        {required && <span className="text-[#aaa] ml-1">*</span>}
      </label>
      {children}
      {hint && (
        <span className="text-[12px] text-[#aaa] tracking-[-0.01em]">
          {hint}
        </span>
      )}
    </div>
  );
}

// ── Sharp input style ────────────────────────────────
const inputClass =
  "w-full h-11 px-3.5 text-[13.5px] text-black tracking-[-0.01em] bg-white border border-black/[0.15] rounded-none outline-none focus:border-black transition-colors placeholder:text-[#bbb]";

const selectTriggerClass =
  "w-full h-11 px-3.5 text-[13.5px] text-black tracking-[-0.01em] bg-white border border-black/[0.15] rounded-none outline-none focus:border-black transition-colors";

const textareaClass =
  "w-full px-3.5 py-3 text-[13.5px] text-black tracking-[-0.01em] bg-white border border-black/[0.15] rounded-none outline-none focus:border-black transition-colors placeholder:text-[#bbb] resize-none leading-relaxed";

export default function AddDestinationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to Express API
    // const data = Object.fromEntries(new FormData(e.target))
    // await fetch("http://localhost:5000/api/destinations", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data)
    // })
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-white pt-[52px]">
      <div className="max-w-4xl mx-auto px-5">
        {/* ── Page Header ── */}
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

        {/* ── Success message ── */}
        {submitted && (
          <div className="flex items-center gap-3 border border-black/[0.12] px-4 py-3 mt-8 text-[13px] text-black tracking-[-0.01em]">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="black" strokeWidth="1.5" />
              <path
                d="M5 8l2 2 4-4"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Destination published successfully.
          </div>
        )}

        {/* ── Form ── */}
        <form onSubmit={handleSubmit}>
          {/* ── Section 1: Basic Info ── */}
          <Section
            number="01"
            title="Basic information"
            description="Core details shown on destination cards throughout the site."
          >
            <Field
              label="Destination name"
              required
              hint="e.g. Bali Paradise, Tokyo Explorer, Iceland Aurora"
            >
              <input
                name="name"
                required
                placeholder="Enter destination name"
                className={inputClass}
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Country" required hint="Full country name">
                <input
                  name="country"
                  required
                  placeholder="e.g. Indonesia"
                  className={inputClass}
                />
              </Field>
              <Field
                label="Average temperature"
                hint="Typical temp for this destination"
              >
                <input
                  name="temp"
                  placeholder="e.g. 28°C"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field
              label="Tagline"
              required
              hint="One short line that sells this destination — shown on cards"
            >
              <input
                name="tagline"
                required
                placeholder="e.g. Where gods meet the ocean"
                className={inputClass}
              />
            </Field>
          </Section>

          {/* ── Section 2: Classification ── */}
          <Section
            number="02"
            title="Classification"
            description="Helps travellers filter and discover this destination by type and style."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Category"
                required
                hint="Primary type of destination"
              >
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
              </Field>

              <Field
                label="Travel style"
                required
                hint="Best suited for which traveller type"
              >
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
              </Field>
            </div>
          </Section>

          {/* ── Section 3: Pricing & Duration ── */}
          <Section
            number="03"
            title="Pricing & duration"
            description="Displayed on destination cards and the booking detail page."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Price per person (USD)"
                required
                hint="Enter a number only, e.g. 2700"
              >
                <input
                  name="price"
                  type="number"
                  required
                  min="0"
                  placeholder="2700"
                  className={inputClass}
                />
              </Field>
              <Field label="Duration" required hint="e.g. 7 Days / 6 Nights">
                <input
                  name="duration"
                  required
                  placeholder="7 Days / 6 Nights"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Price range"
                hint="Used for filter — select the bracket this falls in"
              >
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
              </Field>
              <Field label="Trip rating" hint="Out of 5, e.g. 4.9">
                <input
                  name="rating"
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  placeholder="4.9"
                  className={inputClass}
                />
              </Field>
            </div>
          </Section>

          {/* ── Section 4: Media & Description ── */}
          <Section
            number="04"
            title="Media & description"
            description="The image and full description shown on the destination detail page."
          >
            <Field
              label="Image URL"
              required
              hint="Paste a direct image link — Unsplash, Cloudinary, or any public URL"
            >
              <input
                name="image"
                type="url"
                required
                placeholder="https://images.unsplash.com/..."
                className={inputClass}
              />
            </Field>

            <Field
              label="Short description"
              required
              hint="2–3 sentences shown on the destination card — keep it punchy"
            >
              <textarea
                name="shortDescription"
                required
                rows={3}
                placeholder="A short, compelling summary that makes travellers want to click..."
                className={textareaClass}
              />
            </Field>

            <Field
              label="Full description"
              hint="Full detailed description shown on the destination detail page — cover highlights, best time to visit, what to expect"
            >
              <textarea
                name="description"
                rows={6}
                placeholder="Write a detailed description covering the key highlights, local culture, best time to visit, must-see attractions, and anything else that makes this destination special..."
                className={textareaClass}
              />
            </Field>
          </Section>

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
                type="button"
                className="text-[13px] text-[#555] tracking-[-0.01em] border border-black/[0.15] px-6 py-2.5 hover:border-black/30 transition-colors"
              >
                Save draft
              </button>
              <button
                type="submit"
                className="text-[13px] font-medium text-white bg-black tracking-[-0.01em] px-8 py-2.5 hover:bg-black/80 transition-colors"
              >
                Publish destination
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
