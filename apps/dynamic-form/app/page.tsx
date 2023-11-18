import Link from 'next/link';

export default async function Index() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <section className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Dynamic Form</h1>
          <p className="py-6">
            To create a form page based on drag and drop components.
          </p>
          <Link href="/create-form" className="btn btn-primary">
            Create Form
          </Link>
        </div>
      </section>
    </div>
  );
}
