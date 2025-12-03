

import PropTypes from 'prop-types';
import { DateRange } from "react-date-range";
import { categories } from '../Categories/CategoriesData';
import { useState, useEffect } from 'react';

// ✅ Amenities list (same as AddRoomForm)
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

const UpdateRoomForm = ({
  handleSubmit, 
  roomData, 
  refetch, 
  handleImage, 
  setRoomData, 
  handleDateRange, 
  dates
}) => {
  const [imagePreview, setImagePreview] = useState([]);
  const [imageText, setImageText] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  // Load existing images and amenities on component mount
  useEffect(() => {
    if (roomData?.images && Array.isArray(roomData.images)) {
      setImagePreview(roomData.images);
      setImageText(`${roomData.images.length} existing image(s)`);
    } else if (roomData?.image) {
      setImagePreview([roomData.image]);
      setImageText("1 existing image");
    }

    // ✅ Load existing amenities
    if (roomData?.amenities && Array.isArray(roomData.amenities)) {
      setSelectedAmenities(roomData.amenities);
    }
  }, [roomData?.images, roomData?.image, roomData?.amenities]);

  // Handle multiple image selection
  const handleImageSelect = (files) => {
    const selectedFiles = Array.from(files).slice(0, 5);
    setImageText(`${selectedFiles.length} image(s) selected`);
    
    const previewUrls = selectedFiles.map(file => URL.createObjectURL(file));
    setImagePreview(previewUrls);
    
    handleImage(selectedFiles);
  };

  // Remove a specific image
  const removeImage = (index) => {
    const newImages = imagePreview.filter((_, idx) => idx !== index);
    setImagePreview(newImages);
    
    if (roomData?.images) {
      const updatedImages = roomData.images.filter((_, idx) => idx !== index);
      setRoomData({...roomData, images: updatedImages});
    }
    
    setImageText(newImages.length > 0 ? `${newImages.length} image(s)` : "");
  };

  // ✅ Handle amenity checkbox change
  const handleAmenityChange = (amenityId) => {
    setSelectedAmenities((prev) => {
      const newAmenities = prev.includes(amenityId)
        ? prev.filter((id) => id !== amenityId)
        : [...prev, amenityId];
      
      // Update roomData
      setRoomData({...roomData, amenities: newAmenities});
      return newAmenities;
    });
  };

  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-10'>
          <div className='space-y-1 text-sm'>
            <label htmlFor='location' className='block text-gray-600'>
              Location
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
              name='location'
              id='location'
              type='text'
              placeholder='Location'
              required
              value={roomData?.location || ''}
              onChange={(e) => setRoomData({...roomData, location: e.target.value})}
            />
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='title' className='block text-gray-600'>
              Title
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
              name='title'
              id='title'
              type='text'
              placeholder='Title'
              required
              value={roomData?.title || ''}
              onChange={(e) => setRoomData({...roomData, title: e.target.value})}
            />
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='category' className='block text-gray-600'>
              Category
            </label>
            <select
              required
              value={roomData?.category || ''}
              onChange={(e) => setRoomData({...roomData, category: e.target.value})}
              className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
              name='category'
            >
              {categories.map(category => (
                <option value={category.label} key={category.label}>
                  {category.label}
                </option>
              ))}
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

          <div className='space-y-1'>
            <label htmlFor='location' className='block text-gray-600'>
              Select Availability Range
            </label>
            <div className='flex justify-center pt-2'>
              <DateRange
                editableDateInputs={true}
                onChange={(item) => handleDateRange(item)}
                moveRangeOnFirstSelection={false}
                ranges={[dates]}
                rangeColors={["#f6536d"]}
              />
            </div>
          </div>

          {/* Multiple Image Upload */}
          <div className='p-4 bg-white w-full m-auto rounded-lg'>
            <label>
              <input
                type='file'
                accept='image/*'
                multiple
                hidden
                onChange={(e) => handleImageSelect(e.target.files)}
              />
              <div className='bg-rose-500 text-white rounded font-semibold cursor-pointer p-2 px-4 hover:bg-rose-600 text-center'>
                {imageText || "Upload up to 5 Images"}
              </div>
            </label>

            {imagePreview.length > 0 && (
              <div className='grid grid-cols-5 gap-2 mt-3'>
                {imagePreview.map((img, idx) => (
                  <div key={idx} className='relative group'>
                    <img
                      src={img}
                      alt={`preview-${idx}`}
                      className='w-16 h-16 object-cover rounded border-2 border-gray-200'
                    />
                    <button
                      type='button'
                      onClick={() => removeImage(idx)}
                      className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold hover:bg-red-600 shadow-md'
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className='flex justify-between gap-2'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='price' className='block text-gray-600'>
                Price
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                name='price'
                id='price'
                type='number'
                placeholder='Price'
                required
                value={roomData?.price || ''}
                onChange={(e) => setRoomData({...roomData, price: e.target.value})}
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='guest' className='block text-gray-600'>
                Total guest
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                name='total_guest'
                id='guest'
                type='number'
                placeholder='Total guest'
                required
                value={roomData?.guests || ''}
                onChange={(e) => setRoomData({...roomData, guests: e.target.value})}
              />
            </div>
          </div>

          <div className='flex justify-between gap-2'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='bedrooms' className='block text-gray-600'>
                Bedrooms
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                name='bedrooms'
                id='bedrooms'
                type='number'
                placeholder='Bedrooms'
                required
                value={roomData?.bedrooms || ''}
                onChange={(e) => setRoomData({...roomData, bedrooms: e.target.value})}
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='bathrooms' className='block text-gray-600'>
                Bathrooms
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                name='bathrooms'
                id='bathrooms'
                type='number'
                placeholder='Bathrooms'
                required
                value={roomData?.bathrooms || ''}
                onChange={(e) => setRoomData({...roomData, bathrooms: e.target.value})}
              />
            </div>
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='description' className='block text-gray-600'>
              Description
            </label>
            <textarea
              id='description'
              className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500'
              name='description'
              value={roomData?.description || ''}
              onChange={(e) => setRoomData({...roomData, description: e.target.value})}
            ></textarea>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Update
        </button>
      </form>
    </div>
  )
}

UpdateRoomForm.propTypes = {
  roomData: PropTypes.object,
  refetch: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleImage: PropTypes.func,
  setRoomData: PropTypes.func,
  handleDateRange: PropTypes.func,
  dates: PropTypes.object,
};

export default UpdateRoomForm;