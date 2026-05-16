"use client";

import { useState } from "react";
import {
  Button,
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

export default function AddDestinationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const addDestinationData = Object.fromEntries(form.entries());
    console.log("this is form data:", { addDestinationData });

    // this submitted will show info about is successful or not about publishing
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
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 py-10 border-b border-black/[0.06]">
            <div>
              <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#aaa] block mb-1">
                Step 01
              </span>
              <h3 className="text-[15px] font-medium tracking-[-0.02em] text-black mb-1">
                Basic information
              </h3>
              <p className="text-[13px] text-[#888] tracking-[-0.01em] leading-relaxed">
                Core details shown on destination cards throughout the site.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Destination name */}
              <TextField name="name" isRequired className="w-full">
                <Label className={labelClass}>Destination name *</Label>
                <Input
                  placeholder="e.g. Bali Paradise, Tokyo Explorer"
                  className={inputClass}
                />
                <Description className={descClass}>
                  This is the main title shown on all destination cards
                </Description>
                <FieldError className={errorClass} />
              </TextField>

              {/* Country + Temp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <TextField name="country" isRequired className="w-full">
                  <Label className={labelClass}>Country *</Label>
                  <Input placeholder="e.g. Indonesia" className={inputClass} />
                  <FieldError className={errorClass} />
                </TextField>

                <TextField name="temp" className="w-full">
                  <Label className={labelClass}>Average temperature</Label>
                  <Input placeholder="e.g. 28°C" className={inputClass} />
                  <Description className={descClass}>
                    Typical temperature for this destination
                  </Description>
                </TextField>
              </div>

              {/* Tagline */}
              <TextField name="tagline" isRequired className="w-full">
                <Label className={labelClass}>Tagline *</Label>
                <Input
                  placeholder="e.g. Where gods meet the ocean"
                  className={inputClass}
                />
                <Description className={descClass}>
                  One short sentence shown on destination cards — make it
                  compelling
                </Description>
                <FieldError className={errorClass} />
              </TextField>
            </div>
          </div>

          {/* ── Section 02: Classification ── */}
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 py-10 border-b border-black/[0.06]">
            <div>
              <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#aaa] block mb-1">
                Step 02
              </span>
              <h3 className="text-[15px] font-medium tracking-[-0.02em] text-black mb-1">
                Classification
              </h3>
              <p className="text-[13px] text-[#888] tracking-[-0.01em] leading-relaxed">
                Helps travellers filter and discover this destination by type
                and travel style.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Category */}
                <div className="flex flex-col gap-1">
                  <Label className={labelClass}>Category *</Label>
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

                {/* Travel style */}
                <div className="flex flex-col gap-1">
                  <Label className={labelClass}>Travel style *</Label>
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
            </div>
          </div>

          {/* ── Section 03: Pricing & Duration ── */}
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 py-10 border-b border-black/[0.06]">
            <div>
              <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#aaa] block mb-1">
                Step 03
              </span>
              <h3 className="text-[15px] font-medium tracking-[-0.02em] text-black mb-1">
                Pricing & duration
              </h3>
              <p className="text-[13px] text-[#888] tracking-[-0.01em] leading-relaxed">
                Displayed on destination cards and the booking detail page.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Price */}
                <TextField name="price" isRequired className="w-full">
                  <Label className={labelClass}>Price per person (USD) *</Label>
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

                {/* Duration */}
                <TextField name="duration" isRequired className="w-full">
                  <Label className={labelClass}>Duration *</Label>
                  <Input
                    placeholder="7 Days / 6 Nights"
                    className={inputClass}
                  />
                  <Description className={descClass}>
                    Format: X Days / X Nights
                  </Description>
                  <FieldError className={errorClass} />
                </TextField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Price range */}
                <div className="flex flex-col gap-1">
                  <Label className={labelClass}>Price range</Label>
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

                {/* Rating */}
                <TextField name="rating" className="w-full">
                  <Label className={labelClass}>Trip rating</Label>
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
            </div>
          </div>

          {/* ── Section 04: Media & Description ── */}
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 py-10 border-b border-black/[0.06]">
            <div>
              <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#aaa] block mb-1">
                Step 04
              </span>
              <h3 className="text-[15px] font-medium tracking-[-0.02em] text-black mb-1">
                Media & description
              </h3>
              <p className="text-[13px] text-[#888] tracking-[-0.01em] leading-relaxed">
                Image and descriptions shown across cards and the destination
                detail page.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Image URL */}
              <TextField name="image" isRequired className="w-full">
                <Label className={labelClass}>Image URL *</Label>
                <Input
                  type="url"
                  placeholder="https://images.unsplash.com/..."
                  className={inputClass}
                />
                <Description className={descClass}>
                  Paste a direct image link — Unsplash, Cloudinary, or any
                  public URL
                </Description>
                <FieldError className={errorClass} />
              </TextField>

              {/* Short description */}
              <TextField name="shortDescription" isRequired className="w-full">
                <Label className={labelClass}>Short description *</Label>
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

              {/* Full description */}
              <TextField name="description" className="w-full">
                <Label className={labelClass}>Full description</Label>
                <TextArea
                  placeholder="Write a detailed description covering highlights, local culture, best time to visit, must-see attractions, food, transport, and anything else that makes this destination special..."
                  className={`${textareaClass} min-h-[160px]`}
                />
                <Description className={descClass}>
                  Shown on the destination detail page — be as detailed as
                  possible
                </Description>
              </TextField>
            </div>
          </div>
          <div>
            {/* Success message */}
            {submitted && (
              <div className="flex items-center gap-3 border border-green-200 bg-green-50 px-4 py-3 mt-8 text-[13px] text-green-700 tracking-[-0.01em] rounded-md mb-10">
                <svg
                  className="w-4 h-4 shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                >
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
          </div>

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
        </Form>
      </div>
    </main>
  );
}
