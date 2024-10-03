import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '@/utils/axios';
import Spinner from '@/components/ui/Spinner';
import AddressLink from '@/components/ui/AddressLink';
import BookingWidget from '@/components/ui/BookingWidget';
import PerksWidget from '@/components/ui/PerksWidget';
import { X } from 'lucide-react';

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-2 rounded-2xl overflow-hidden">
      <div className="aspect-square">
        <img src={images[0]} alt="" className="object-cover w-full h-full" />
      </div>
      <div className="grid">
        <img src={images[1]} alt="" className="aspect-square object-cover" />
        <img src={images[2]} alt="" className="aspect-square object-cover" />
      </div>
      <div className="grid">
        <img src={images[3]} alt="" className="aspect-square object-cover" />
        <img src={images[4]} alt="" className="aspect-square object-cover" />
      </div>
    </div>
  );
};

const PhotoModal = ({ images, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        <X size={24} />
      </button>
      <div className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {images.map((image, index) => (
          <div key={index} className="mb-4">
            <img src={image} alt={`Photo ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    setLoading(true);
    const getPlace = async () => {
      const { data } = await axiosInstance.get(`/places/${id}`);
      setPlace(data.place);
      setLoading(false);
    };
    getPlace();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!place) {
    return null;
  }

  return (
    <div className="mt-4 overflow-x-hidden px-8 pt-20">
      <h1 className="text-3xl">{place.title}</h1>
      <AddressLink placeAddress={place.address} />
      <ImageGallery images={place.photos?.slice(0, 5)} />
      <button 
        onClick={() => setShowAllPhotos(true)} 
        className="mt-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
      >
        Show all photos
      </button>
      {showAllPhotos && (
        <PhotoModal 
          images={place.photos} 
          onClose={() => setShowAllPhotos(false)} 
        />
      )}
      <div className="mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
        <div className="">
          <div className="my-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            {place.description}
          </div>
          Max number of guests: {place.maxGuests}
          <PerksWidget perks={place?.perks} />
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="-mx-8 border-t bg-white px-8 py-8">
        <div>
          <h2 className="mt-4 text-2xl font-semibold">Extra Info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm leading-5 text-gray-700">
          {place.extraInfo}
        </div>
      </div>
    </div>
  );
};

export default PlacePage; 