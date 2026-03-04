'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Activity } from '@/types';

interface ActivityCardProps {
  activity: Activity;
  currency?: 'USD' | 'UGX';
}

export default function ActivityCard({ activity, currency = 'USD' }: ActivityCardProps) {
  const price = currency === 'USD' 
    ? activity.base_price_international 
    : activity.base_price_international * 3700;

  const priceDisplay = currency === 'USD' 
    ? `$${price}` 
    : `UGX ${price.toLocaleString()}`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-64">
        <Image
          src={activity.image_url || '/images/placeholder.jpg'}
          alt={activity.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{activity.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{activity.short_description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-2xl font-bold text-primary">{priceDisplay}</p>
          </div>
          <Link
            href={`/booking?activity=${activity.id}`}
            className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
