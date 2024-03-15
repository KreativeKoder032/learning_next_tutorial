import Table from '@/app/ui/customers/table';
import { CustomerSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const Customers = await fetchFilteredCustomers(query);
  return (
    <div className="w-full">
      <Suspense key={query} fallback={<CustomerSkeleton />}>
        <Table customers={Customers} />
      </Suspense>
    </div>
  );
}
