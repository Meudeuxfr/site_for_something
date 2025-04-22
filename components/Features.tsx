const features = [
    { icon: '🍷', title: 'Fine Dining', desc: 'Curated dishes by top chefs.' },
    { icon: '📅', title: 'Quick Booking', desc: 'Reserve your table in seconds.' },
    { icon: '🎉', title: 'Private Events', desc: 'We host your special day.' },
  ];
  
  const Features = () => (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {features.map(({ icon, title, desc }) => (
          <div key={title} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Features;
  