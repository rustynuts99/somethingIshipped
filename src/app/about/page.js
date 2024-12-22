export default function About() {
    return (
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">About Something I Shipped</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">What is Something I Shipped?</h2>
            <p className="text-gray-600">
              Something I Shipped is a platform for developers and makers to showcase their completed projects. 
              Unlike other platforms that focus on works in progress, we celebrate the accomplishment of shipping.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-3">Why We Built This</h2>
            <p className="text-gray-600">
              Too often, developers get caught in endless cycles of refinement and perfectionism. 
              We wanted to create a space that celebrates the courage to ship and share your work with the world.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
            <div className="space-y-2 text-gray-600">
              <p>1. Sign in with your GitHub account</p>
              <p>2. Share your completed project</p>
              <p>3. Connect with other makers</p>
              <p>4. Celebrate shipping!</p>
            </div>
          </section>
        </div>
      </main>
    )
  }