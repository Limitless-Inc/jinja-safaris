'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaCalendar, FaDollarSign, FaUsers, FaClock } from 'react-icons/fa';

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({
    totalBookings: 0,
    pendingBookings: 0,
    monthlyRevenue: 0,
    upcomingTours: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    fetchStats();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin');
    }
  };

  const fetchStats = async () => {
    const [bookingsRes, pendingRes, revenueRes, upcomingRes] = await Promise.all([
      supabase.from('bookings').select('*', { count: 'exact', head: true }),
      supabase.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
      supabase.from('bookings').select('total_price').gte('created_at', new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString()),
      supabase.from('bookings').select('*', { count: 'exact', head: true }).gte('booking_date', new Date().toISOString().split('T')[0]),
    ]);

    const revenue = revenueRes.data?.reduce((sum, b) => sum + (b.total_price || 0), 0) || 0;

    setStats({
      totalBookings: bookingsRes.count || 0,
      pendingBookings: pendingRes.count || 0,
      monthlyRevenue: revenue,
      upcomingTours: upcomingRes.count || 0,
    });
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin');
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Bookings</p>
                <p className="text-3xl font-bold">{stats.totalBookings}</p>
              </div>
              <FaCalendar className="text-primary text-4xl" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending Bookings</p>
                <p className="text-3xl font-bold">{stats.pendingBookings}</p>
              </div>
              <FaClock className="text-accent text-4xl" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Monthly Revenue</p>
                <p className="text-3xl font-bold">${stats.monthlyRevenue.toFixed(0)}</p>
              </div>
              <FaDollarSign className="text-green-500 text-4xl" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Upcoming Tours</p>
                <p className="text-3xl font-bold">{stats.upcomingTours}</p>
              </div>
              <FaUsers className="text-secondary text-4xl" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/bookings" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Manage Bookings</h3>
            <p className="text-gray-600 dark:text-gray-400">View and manage customer bookings</p>
          </Link>

          <Link href="/admin/activities" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Manage Activities</h3>
            <p className="text-gray-600 dark:text-gray-400">Edit activities and pricing</p>
          </Link>

          <Link href="/admin/slideshow" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Slideshow Manager</h3>
            <p className="text-gray-600 dark:text-gray-400">Manage hero slideshow images</p>
          </Link>

          <Link href="/admin/gallery" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Gallery Manager</h3>
            <p className="text-gray-600 dark:text-gray-400">Upload and manage gallery images</p>
          </Link>

          <Link href="/admin/hotels" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Hotel Manager</h3>
            <p className="text-gray-600 dark:text-gray-400">Manage partner hotels</p>
          </Link>

          <Link href="/admin/testimonials" className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Testimonials</h3>
            <p className="text-gray-600 dark:text-gray-400">Approve and manage testimonials</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
