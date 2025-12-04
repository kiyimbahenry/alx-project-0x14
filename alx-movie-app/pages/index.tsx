import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h1 className="text-4xl font-bold mb-8">Welcome to MovieApp</h1>
                <p className="text-xl mb-8 text-center max-w-2xl">
                    Discover your next favorite movie or TV show with our comprehensive database.
                </p>
                <Link 
                    href="/movies" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
                >
                    Browse Movies
                </Link>
            </div>
        </Layout>
    );
}
