const Home = () => {
    return (
        <div className="home-page">
            <style>{`
                .home-page {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 48px 24px;
                    box-sizing: border-box;
                    background: linear-gradient(135deg, #eef4ff 0%, #f8fbff 48%, #e5f8f4 100%);
                    font-family: Arial, sans-serif;
                    color: #172554;
                }

                .home-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;
                    gap: 56px;
                    width: min(1100px, 100%);
                    padding: 56px;
                    background: rgba(255, 255, 255, 0.88);
                    border-radius: 28px;
                    box-shadow: 0 20px 55px rgba(30, 64, 175, 0.14);
                }

                .home-label {
                    margin: 0 0 14px;
                    color: #2563eb;
                    font-size: 0.85rem;
                    font-weight: bold;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }

                .home-content h1 {
                    margin: 0 0 18px;
                    font-size: clamp(2.5rem, 5vw, 4.5rem);
                    line-height: 1.05;
                }

                .home-content p {
                    max-width: 480px;
                    margin: 0 0 28px;
                    color: #526079;
                    font-size: 1.08rem;
                    line-height: 1.7;
                }

                .home-button {
                    border: 0;
                    border-radius: 999px;
                    padding: 14px 25px;
                    background: #2563eb;
                    color: white;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: bold;
                    box-shadow: 0 8px 18px rgba(37, 99, 235, 0.25);
                }

                .home-image {
                    width: 100%;
                    border-radius: 22px;
                    display: block;
                    box-shadow: 0 16px 30px rgba(15, 23, 42, 0.18);
                }

                @media (max-width: 700px) {
                    .home-content {
                        grid-template-columns: 1fr;
                        gap: 32px;
                        padding: 32px 24px;
                    }
                }
            `}</style>
            <div className="home-content">
                <section>
                    <p className="home-label">Welcome to our space</p>
                    <h1>Build something amazing.</h1>
                    <p>Welcome to the Home Page of our demo application. Explore a simple, modern experience designed to help you get started.</p>
                    <button className="home-button" type="button">Get Started</button>
                </section>
                <img
                    className="home-image"
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
                    alt="Bright modern workspace"
                />
            </div>
        </div>
    );
};

export default Home;