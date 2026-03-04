'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { GalleryImage } from '@/types';
import Image from 'next/image';

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [newImage, setNewImage] = useState({ image_url: '', category: '', caption: '' });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const { data } = await supabase.from('gallery_images').select('*').order('created_at', { ascending: false });
    setImages(data || []);
  };

  const addImage = async () => {
    if (!newImage.image_url) {
      alert('Please provide an image URL');
      return;
    }

    await supabase.from('gallery_images').insert([newImage]);
    setNewImage({ image_url: '', category: '', caption: '' });
    fetchImages();
  };

  const deleteImage = async (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      await supabase.from('gallery_images').delete().eq('id', id);
      fetchImages();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Gallery Manager</h1>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Add New Image</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Image URL (upload to Supabase Storage first)"
              value={newImage.image_url}
              onChange={(e) => setNewImage({ ...newImage, image_url: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
            />
            <input
              type="text"
              placeholder="Category (e.g., Adventure, Nature, Hotels)"
              value={newImage.category}
              onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
            />
            <input
              type="text"
              placeholder="Caption (optional)"
              value={newImage.caption}
              onChange={(e) => setNewImage({ ...newImage, caption: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700"
            />
            <button
              onClick={addImage}
              className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-lg transition"
            >
              Add Image
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={image.image_url}
                  alt={image.caption || 'Gallery image'}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                {image.category && (
                  <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded mb-2">
                    {image.category}
                  </span>
                )}
                {image.caption && <p className="text-sm mb-2">{image.caption}</p>}
                <button
                  onClick={() => deleteImage(image.id)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
