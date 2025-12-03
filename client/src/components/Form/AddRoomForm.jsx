


import { DateRange } from "react-date-range";
import { categories } from "../Categories/CategoriesData";
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from "../../api/utils";
import { useState } from "react";

// ✅ Amenities list
const AMENITIES = [
  { id: "wifi", label: "Free WiFi", icon: "📶" },
  { id: "ac", label: "Air Conditioning", icon: "❄️" },
  { id: "tv", label: "Television", icon: "📺" },
  { id: "closet", label: "Closet", icon: "🚪" },
  { id: "heating", label: "Heating", icon: "🔥" },
  { id: "kitchen", label: "Kitchen", icon: "🍳" },
  { id: "parking", label: "Free Parking", icon: "🅿️" },
  { id: "pool", label: "Swimming Pool", icon: "🏊" },
  { id: "gym", label: "Gym", icon: "💪" },
  { id: "pet", label: "Pet Friendly", icon: "🐕" },
];

const AddRoomForm = ({ dates, handleDateRange, handleAddRoomForm, loading }) => {
  const [imagePreview, setImagePreview] = useState([]);
  const [imageText, setImageText] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  // Handle multiple image upload
  const handleImage = async (files) => {
    const selectedFiles = Array.from(files).slice(0, 5);
    setImageText(`${selectedFiles.length} images selected`);

    const urls = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const url = await imageUpload(selectedFiles[i]);
      urls.push(url);
    }

    setUploadedImages(urls);
    setImagePreview(urls);
  };

  // ✅ Handle amenity checkbox change
  const handleAmenityChange = (amenityId) => {
    setSelectedAmenities((prev) => {
      if (prev.includes(amenityId)) {
        return prev.filter((id) => id !== amenityId);
      } else {
        return [...prev, amenityId];
      }
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const roomData = {
      location: form.location.value,
      category: form.category.value,
      bed_type: form.bed_type.value,
      title: form.title.value,
      price: parseFloat(form.price.value),
      total_guest: parseInt(form.total_guest.value),
      bedrooms: parseInt(form.bedrooms.value),
      bathrooms: parseInt(form.bathrooms.value),
      description: form.description.value,
      images: uploadedImages,
      amenities: selectedAmenities, // ✅ Add amenities
    };

    handleAddRoomForm(roomData);
  };

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50 mt-5 pb-2">
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left column */}
          <div className="space-y-6">
            {/* Location */}
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                name="category"
              >
                {categories.map((category) => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Bed Type */}
            <div className="space-y-1 text-sm">
              <label htmlFor="bed_type" className="block text-gray-600">
                Bed Type
              </label>
              <select
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                name="bed_type"
                id="bed_type"
              >
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
              </select>
            </div>

            {/* ✅ Amenities */}
            <div className="space-y-2">
              <label className="block text-gray-600 font-medium">Amenities</label>
              <div className="grid grid-cols-2 gap-3 p-4 bg-white rounded-lg border border-gray-200">
                {AMENITIES.map((amenity) => (
                  <label
                    key={amenity.id}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(amenity.id)}
                      onChange={() => handleAmenityChange(amenity.id)}
                      className="w-4 h-4 text-rose-500 border-gray-300 rounded focus:ring-rose-500"
                    />
                    <span className="text-lg">{amenity.icon}</span>
                    <span className="text-sm text-gray-700">{amenity.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-1">
              <label htmlFor="location" className="block text-gray-600">
                Select Availability Range
              </label>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => handleDateRange(item)}
                moveRangeOnFirstSelection={false}
                ranges={[dates]}
                rangeColors={["#f6536d"]}
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                required
              />
            </div>

            {/* Image upload */}
            <div className="p-4 bg-white w-full m-auto rounded-lg">
              <label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  hidden
                  onChange={(e) => handleImage(e.target.files)}
                />
                <div className="bg-rose-500 text-white rounded font-semibold cursor-pointer p-2 px-4 hover:bg-rose-600 text-center">
                  {imageText || "Upload up to 5 Images"}
                </div>
              </label>

              {/* Preview */}
              <div className="grid grid-cols-5 gap-2 mt-3">
                {imagePreview.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`preview-${idx}`}
                    className="w-16 h-16 object-cover rounded"
                  />
                ))}
              </div>
            </div>

            {/* Price + Guests */}
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                  name="price"
                  id="price"
                  type="number"
                  placeholder="Price"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="guest" className="block text-gray-600">
                  Total guest
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                  name="total_guest"
                  id="guest"
                  type="number"
                  placeholder="Total guest"
                  required
                />
              </div>
            </div>

            {/* Bedrooms + Bathrooms */}
            <div className="flex justify-between gap-2">
              <div className="space-y-1 text-sm">
                <label htmlFor="bedrooms" className="block text-gray-600">
                  Bedrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                  name="bedrooms"
                  id="bedrooms"
                  type="number"
                  placeholder="Bedrooms"
                  required
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="bathrooms" className="block text-gray-600">
                  Bathrooms
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                  name="bathrooms"
                  id="bathrooms"
                  type="number"
                  placeholder="Bathrooms"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>
              <textarea
                id="description"
                className="block rounded-md w-full h-32 px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500"
                name="description"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          disabled={loading}
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
          {loading ? (
            <TbFidgetSpinner className="animate-spin m-auto" />
          ) : (
            "Save & Continue"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddRoomForm;