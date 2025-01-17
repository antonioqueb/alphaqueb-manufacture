import LastNews from '../../components/LastNews/LastNews';

export const metadata = {
  title: {
    absolute: 'Blog',
  },
  description: 'Personalizamos tu implementación odoo para cumplir tus metas',
};

export default function BlogPage() {
  return (
    <main className="max-w-7xl mx-auto py-8 px-4">
      <LastNews />
    </main>
  );
}